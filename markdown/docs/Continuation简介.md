
#!title:    Continuation简介
#!date:     2017-11-22
#!authors:  https://www.scheme.com/tspl4/further.html
#!cover:    
#!type:     翻译
#!tags:     函数式编程


#!content

> 原文 [https://www.scheme.com/tspl4/further.html#./further:h3]()

在S-表达式求值过程中，解释器需要持续关注两件事情：

+ 要求值什么
+ 对求得的值做何种处理

我们来思考一下，下列S-表达式中`(null? x)`的求值过程是怎样的：

```:Scheme
(if (null? x) (quote ()) (cdr x))
```

解释器先求值`(null? x)`，然后根据得到的值去求解接下来的`(quote ())`或者是`(cdr x)`。在这个例子中，“要求值的东西”当然是`(null? x)`，对求得的值做的“处理”就是决定求值两个分支中的哪一个，并且求值被选中的分支。我们把“对求得的值所做的后续处理”称为计算过程的“%%continuation%%”。

因此，在任意S-表达式求值过程的任何一个时刻，都有一个待完成的continuation。继续刚才的例子。我们不妨假设`x`的值是`(a b c)`，可以提取出上述表达式的6个continuation，这6个continuation分别需要：

- `(if (null? x) (quote ()) (cdr x))`的值；
- `(null? x)`的值；
- `null?`的值；
- `x`的值；
- `cdr`的值，以及；
- 再次需要`x`的值；

`(cdr x)`的continuation没有写在上面，因为它的continuation就是整个表达式的continuation。

> 因为这整个式子就（可能）是在计算`(cdr x)`

在Scheme中，我们可以使用`call/cc`过程来捕获任一S-表达式的continuation。`call/cc`接受一个单参的函数`p`作为参数，并构造当前continuation作为实际参数传递给`p`的唯一参数。Continuation本身一般以过程`k`表示，每当`k`作用于一个值时，即将该值传递给`call/cc`调用点的continuation，供其调用，并返回此调用的返回值。本质上讲，这个返回值就是`call/cc`调用的返回值。

如果`p`没有调用`k`即返回，那么过程返回的值就是`call/cc`调用返回的值。

考虑下面的几个简单例子：

```:Scheme
(call/cc
  (lambda (k)
    (* 5 4))) → 20 

(call/cc
  (lambda (k)
    (* 5 (k 4)))) → 4 

(+ 2
   (call/cc
     (lambda (k)
       (* 5 (k 4))))) → 6
```

第一个例子中，`call/cc`捕获continuation并将其绑定到`k`，但是`k`没有被调用，所以过程的返回值就是20。第二个例子中，continuation`k`在乘法过程之前被调用，因此整个过程的返回值就是传给`k`的值，也就是4。第三个例子中，continuation包括“+2”的操作，因此整个过程的返回值是`(+ 2 4)`的值，也即6。

下面的例子演示了递归过程的“非本地退出”，没有前面的例子那么简单了。

```:Scheme
(define product
  (lambda (ls)
    (call/cc
      (lambda (break)
        (let f ([ls ls])
          (cond
            [(null? ls) 1]
            [(= (car ls) 0) (break 0)]
            [else (* (car ls) (f (cdr ls)))]))))))

(product '(1 2 3 4 5)) → 120
(product '(7 3 8 0 1 9 5)) → 0
```

所谓的“非本地退出”可以使`product`遇到0时立即返回，不必完成尚未执行的后续步骤。上面的所有continuation调用都返回到各自的continuation位置，而控制流仍然留在被传入`call/cc`的过程`p`中。下面的例子将在过程`p`返回后再使用continuation。

```:Scheme
(let ([x (call/cc (lambda (k) k))])
  (x (lambda (ignore) "hi"))) → "hi"
```

该例中，由`call/cc`捕获的continuation可以这样描述：“将`call/cc`返回值绑定到`x`，然后将`x`的值作用于`(lambda (ignore) "hi")`的值上面”。由于`(lambda (k) k)`原样返回其参数，因此`x`被绑定到continuation上（`x`自己就是continuation）。随后，这段continuation又作用于`(lambda (ignore) "hi")`的值上，结果就是再次对`x`进行绑定，也就是将`(lambda (ignore) "hi")`的值绑定于`x`，并且将其作用于`(lambda (ignore) "hi")`自身。由于`ignore`参数如其名，因此最终返回的就是"hi"。

> 注：这段稍微有点绕，自己再解释一下。对于调用`call/cc`的时刻来说，其后续过程就是函数体中的`(x (lambda (ignore) "hi"))`这段application。然而在let块中，通过`(call/cc (lambda (x) x))`这个原样返回continuation的操作，恰恰将其绑定到continuation里面的`x`上面，这就导致在continuation里面有对自己这个continuation的引用，也即

> ```:Scheme
x := (x (lambda (ignore) "hi"))
```

> 所以执行函数体的时候，求值过程是这样的：

> ```:Scheme
(x (lambda (ignore) "hi"))
;; next
((lambda (□)
   (□ (lambda (ignore) "hi"))) ;这个就是x所代表的那个continuation，这里写成了CPS的形式方便理解。实际上这里是“一等continuation”，并不是单纯的函数。
 (lambda (ignore) "hi"))
;; next
((lambda (ignore) "hi")
 (lambda (ignore) "hi"))
;; next
"hi"
```

下面的这段代码是前一个例子的变形版本，相当难懂。可能很容易就看出来返回的是什么，但要想清楚为什么会返回"HEY!"，就需要好好琢磨琢磨了。

```:Scheme
(((call/cc (lambda (k) k))
  (lambda (x) x))
 "HEY!")
→ "HEY!"
```

在上面的代码中，`call/cc`的返回值是它自己的continuation，此返回值作用在后面的恒等函数上，因而`call/cc`再次返回同样的返回值（也即含有恒等函数的continuation）。随后，恒等函数作用于自身，得到的仍然是恒等函数。最终，恒等函数作用于"HEY!"，得到"HEY!"。

Continuations的使用并不都是这样难以理解。请看下面的`factorial`函数，此函数在返回出口值“1”之前捕获到后续的continuation，并将其赋值到顶层变量`retry`上。代码如下：

```:Scheme
(define retry #f) 

(define factorial
  (lambda (x)
    (if (= x 0)
        (call/cc (lambda (k) (set! retry k) 1))
        (* x (factorial (- x 1))))))
```

根据此定义，`factorial`可以正常计算阶乘，但同时有赋值`retry`的副作用。

```:Scheme
(factorial 4) → 24
(retry 1) → 24
(retry 2) → 48
```

可以这样描述绑定于`retry`的continuation：“将所需的值乘以1，然后继续对结果乘以2、3、4”（也就是`(lambda (res) (* 4 (* 3 (* 2 (* 1 res)))))`）。假如我们为这个continuation提供一个不同于1的值，这样就相当于改变了阶乘的递归出口值并导致不同的计算结果，比如：

```:Scheme
(retry 2) → 48
(retry 5) → 120
```

利用`call/cc`的这种机制，可以基于它实现一个断点工具包。每当遇到断点，都会保存断点处的continuation，这样即可实现从断点处恢复计算的功能。（如果需要的话，可以设置不止一个断点。）

利用continuation，还可以实现各种形式的多任务系统。下面的代码定义了一个简单的“轻量级进程”系统，该系统允许多个进程进入系统运行。由于系统是**非抢占式**的，因此每个进程必须时不时地自觉“暂停”自己，以允许其他进程运行。实现如下：

```:Scheme
(define lwp-list '())
;'
(define lwp
  (lambda (thunk)
    (set! lwp-list (append lwp-list (list thunk))))) 

(define start
  (lambda ()
    (let ([p (car lwp-list)])
      (set! lwp-list (cdr lwp-list))
      (p))))

(define pause
  (lambda ()
    (call/cc
      (lambda (k)
        (lwp (lambda () (k #f)))
        (start)))))
```

下面的几个轻量级进程按顺序执行、无限循环，打印出无限长度的"hey!\n"字符串。

```:Scheme
(lwp (lambda () (let f () (pause) (display "h") (f))))
(lwp (lambda () (let f () (pause) (display "e") (f))))
(lwp (lambda () (let f () (pause) (display "y") (f))))
(lwp (lambda () (let f () (pause) (display "!") (f))))
(lwp (lambda () (let f () (pause) (newline) (f))))
(start) → hey!
          hey!
          hey!
          hey!
          ...
```

> 关于thunk，参见[http://www.ruanyifeng.com/blog/2015/05/thunk.html]()

在[12.11](https://www.scheme.com/tspl4/examples.html#g208)节中，我们使用`call/cc`实现了一个支持抢占式调度的多任务系统“Engine”。

**习题3.3.1** ：请仅使用`call/cc`编写一个无限循环的程序，按顺序打印从0开始的所有自然数。不要使用递归和赋值。

**译者提供的参考实现**

```:Scheme
(define invoke-self
  (lambda (f)
    ((lambda (x)
       ((x f) 0))
     (call/cc (lambda (k) k)))
  ))

(invoke-self (lambda (f)
               (lambda (n)
                 (display n)(newline)
                 ((f f) (+ n 1)))))
```

译者注：这个函数受到前文中输出“hi”的那个函数的启发。另外，作为`invoke-self`函数参数的那个函数，实际上是构造Y组合子的一个“前体”。这里构造无限循环的思路，正是受到Y组合子的启发。

**习题3.3.2**：不使用`call/cc`，重写`product`函数，保留原有函数功能，即若参数表中有0，则不执行乘法。

**译者提供的参考实现**

```:Scheme
(define product
  (lambda (list)
    (display (car list))(newline)
    (if (null? list)
        1
        (if (= 0 (car list))
            0
            (* (car list) (product (cdr list)))))))
```

**习题3.3.3**：假设由`lwp`创建的轻量级进程运行完毕终止，也就是不调用`(pause)`即退出，会发生什么现象？请定义`quit`函数，使得进程在不影响lwp系统的情况下正常终止。注意处理系统中只有一个进程的情况。

**修改后的一个版本（3.3.5也有做）**

```:Scheme
#lang racket
(define lwp-list '())
;'
(define lwp
  (lambda (pid thunk)
    ;(printf "[New Process ~a Interleaved]\n" pid)
    (set! lwp-list (append lwp-list (list thunk)))))

(define start-next
  (lambda ()
    ;(printf "[Start next]\n")
    (let ([p (car lwp-list)])
      (set! lwp-list (cdr lwp-list))
      (p))))

(define wait-this-and-start-next
  (lambda (pid)
    ;(printf "[Process ~a Waiting]\n [Going to interleave Continuation of ~a]\n" pid pid)
    (call/cc
      (lambda (k)
        (lwp pid (lambda () (k #t)))
        (start-next)))))

(define quit
  (lambda (return v)
    (printf "\n[Process ~a Terminated]\n" (car v))
    (if (null? lwp-list)
        (return (car (cdr v)))
        (start-next))))

(printf "\nLWP:Returned to ENV with ~a"
(call/cc (lambda (return) (

(lwp 200
     (lambda ()
       (let this ((x 0) (pid 200))
            (wait-this-and-start-next pid)
            (printf "Process[~a] Running\n" pid)
            (printf "运行计数~a\n" x)
            (if (= x 20)
                (quit return (list pid x))
                #f)
            (this (+ x 1) pid))))

(lwp 300
     (lambda ()
       (let this ((x 0) (pid 300))
            (wait-this-and-start-next pid)
            (printf "Process[~a] Running\n" pid)
            (printf "运行计数~a\n" x)
            (cond ((= x 10) (printf "加入新进程404\n")
                            (lwp 404
                                 (lambda ()
                                   (let f ((y 0) (pid 404))
                                        (wait-this-and-start-next pid)
                                        (printf "Forked Process: ~a\n" y)
                                        (if (= y 2)
                                            (quit return (list 404 888))
                                            #f)
                                        (f (+ 1 y) pid))))
                            (quit return (list pid x)))
                  (else #f))
            (this (+ x 1) pid))))

(start-next)
))))
```

**习题3.3.4**：在lwp系统中，每次调用`lwp`创建新进程，都会复制一遍进程表`lwp-list`，因为在先前的实现中使用了`append`函数将新进程添加到进程表。请用[2.9](https://www.scheme.com/tspl4/start.html#g40)节实现的队列结构，修改原有的lwp代码，以避免这个问题。

**习题3.3.5**：lwp系统支持动态创建新进程。正文中没有给出例子，所以请你设计一个进程动态创建的实际应用，并且使用lwp系统将其实现出来。
