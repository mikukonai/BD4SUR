#!title:    The Little Schemer 阅读笔记
#!date:     2017-09-02
#!authors:  BD4SUR
#!cover:    
#!type:     原创
#!tags:     Scheme,函数式编程,计算机科学

#!content

# 前言

原子是Scheme的基本元素之一。首先定义了过程`atom?`，用来判断一个S-表达式是不是原子：

```:Scheme
(define atom?
  (lambda (x)
    (and (not (pair? x)) (not (null? x)))))
```

这个“pair”实际上就是list，见[http://blog.csdn.net/xiao_wanpeng/article/details/8466745]()。

但是需要注意，pair和list是两码事。pair在表达上是诸如`'(1 . 2)`这样用点分隔开的二元组。

# 第一章

**S-表达式**包括①原子atom；②列表list。

**car**取非空列表的第一个**S-表达式**。

**cdr**取非空列表list的 除`(car list)`的剩余所有元素 组成的 **列表**。

**cons**将某个S-表达式 添加到 某个列表的开头。

**null?** 判断S-表达式是否是空列表。

**eq?** 判断两个S-表达式是否相同。

list的默认解析方式是：以car为函数名，以cdr为参数列表对函数进行调用，整个list的evaluated的结果就是函数的返回值。某些“关键字”作为car时，求值规则会发生变化，这个要具体问题具体分析。这个问题可以参考SICP的练习1.6。（“关键字”很少，并不复杂）

**quote** 或者 **'** 用来抑制对S-表达式的求值。由于S-表达式是递归结构，因此被抑制求值的S-表达式的各个子表达式都不会被求值。被quote的部分是作为“数据”的代码。quoted原子的结果是它本身，类似于C系语言的enum；quoted数字原子的结果仍然是数字；quoted list的结果就是不求值的列表，类似于链表这样的结构。

# 第二章

本章从`lat?`函数的实现出发，探讨递归处理lat的基本思想和方法。

定义过程`lat?`，用来判断表的子表达式是否都是原子，即判断list是不是lat（list of atoms）。第五章之前，涉及到的列表基本上都是lat。

```:Scheme
(define lat?
  (lambda (list)
    (cond ((null? list) #t)
          ((atom? (car list)) (lat? (cdr list)))
          (else #f)))
```
特殊形式`cond`是惰性的，也就是说，如果某个子句的谓词为真，则不再检查下面的子句。

定义过程`member?`，用来判断某个原子是否为某个lat的成员。这个函数很重要，尤其是对于实现集合的第七章。

```:Scheme
(define member?
  (lambda (x lat)
    (cond ((null? lat) #f) ;找遍列表也没找到
          ((eq? x (car lat)) #t)
          (else (member? x (cdr lat))))))
```

> 一般而言，函数应首先检查传入参数。保证递归得以收敛。

# 第三章

本章主要讲述如何使用`cons`特殊函数和一般性递归实现对lat的操作。

首先实现函数`rember`，它接受原子`a`和`lat`，返回删除了第一个`a`的`lat`。

```:Scheme
(define rember
  (lambda (a lat)
    (cond ((null? lat) lat)
          ((eq? a (car lat)) (cdr lat))
          (else (cons (car lat) (rember a (cdr lat)))))))

(define delete
  (lambda (a lat)
    (cond ((null? lat) lat)
          ((member? a lat) (delete a (rember a lat)))
          (else lat))))
```
顺便写了个`delete`，可以迭代地删除表中所有匹配原子。

P.43要求实现`firsts`函数，其功能为输出一个表的各子表的car组成的表。

```:Scheme
(define firsts
  (lambda (list)
    (cond ((null? list) '())
          ((pair? (car list)) (cons (car (car list)) (firsts (cdr list))))
          (else (cons (car list) (firsts (cdr list)))))))
```

P.47要求实现`(insertR new old list)`函数，该函数查找`old`在`list`的第一次出现位置，并在其后插入`new`。函数返回新列表。

```:Scheme
(define insertR
  (lambda (new old list)
    (cond ((null? list) list)
          ((eq? old (car list)) (cons (car list) (cons new (cdr list))))
          (else (cons (car list) (insertR new old (cdr list)))))))
```
也可以仿照上面的`delete`函数写一个在所有`old`后面插入`new`的函数。

类似地可以写出`insertL`，其与`insertR`的区别在于前者是在左侧插入新表达式。

```:Scheme
(define insertL
  (lambda (new old list)
    (cond ((null? list) list)
          ((eq? old (car list)) (cons new list))
          (else (cons (car list) (insertL new old (cdr list)))))))
```

P.51还要求实现`(subst new old list)`函数，该函数用`new`替换`old`在`list`的首个出现。

```:Scheme
(define subst
  (lambda (new old list)
    (cond ((null? list) list)
          ((eq? old (car list)) (cons new (cdr list)))
          (else (cons (car list) (subst new old (cdr list)))))))
```

都是一样的套路，改变的都是递归回溯条件。

基于此，P.52要求实现`(subst2 new o1 o2 list)`函数，该函数用`new`替换`o1`或者`o2`在`list`的首个出现。

```:Scheme
(define subst2
  (lambda (new o1 o2 list)
    (cond ((null? list) list)
          ((or (eq? o1 (car list)) (eq? o2 (car list))) (cons new (cdr list)))
          (else (cons (car list) (subst2 new o1 o2 (cdr list)))))))
```

到这里，套路已经很熟悉了。换个套路：

P.52要求修改`rember`函数为`multirember`，实现对所有匹配子表达式的删除。

```:Scheme
(define multirember
  (lambda (x list)
    (cond ((null? list) list)
          ((eq? x (car list)) (multirember x (cdr list)))
          (else (cons (car list) (multirember x (cdr list)))))))
```

`multirember`跟`delete`的效果是等价的。但`delete`是对`rember`的封装，复用了既有函数，有工程上的优点。复杂度方面，`multirember`更好一点。`multirember`只遍历一次list，而封装后的`delete`每次都要从头开始执行`rember`，并且`member?`也是额外的开销。在复杂度的问题上，鱼与熊掌是不可兼得的，还是要具体问题具体分析。

其余multi函数也是类似的套路，就不写了。

套路总结：

+ 可以看出，list实际上就是二叉树
+ 函数必须有可达的递归出口条件
+ 递归调用时必须向出口条件方向改变参数，保证新参数是原有问题的子问题（例如list的cdr、数值的减一或折半，等等）

Racket好像没有`list-set`，写一个：

```:Scheme
(define list '(1 2 3 4))

(define list-set
  (lambda (list pos new-value iter)
    (define list-set!-iter
      (lambda (list pos new-value iter)
        (cond ((= iter pos) (cons new-value (cdr list)))
              (else (cons (car list) (list-set!-iter (cdr list) pos new-value (+ iter 1)))))))
    (list-set!-iter list pos new-value 0)))

(list-set list 0 10 0)
(list-set list 1 20 0)
(list-set list 2 30 0)
(list-set list 3 40 0)
```

# 日历

日历是我的Hello World。五年前初学C语言的时候，写的第一个“有用”的程序就是日历。读到这里所掌握的技巧，已经可以帮助我实现同样的功能，所以这里使用Scheme重新编写一遍这个简陋的日历。

```:Scheme
(define get-value-iter
  (lambda (list i counter)
    (if (= counter i)
        (car list)
        (get-value-iter (cdr list) i (+ counter 1)))))

(define get-value
  (lambda (list i)
    (get-value-iter list i 0)))

(define is-leap-year?
  (lambda (year)
    (cond ((and (= (remainder year 4) 0)
                (not (= (remainder year 100) 0)))
           #t)
          ((= (remainder year 400) 0)
           #t)
          (else
           #f))))

(define days-of-month
  (lambda (year month)
    (cond ((< month 1) 0)
          ((> month 12) 0)
          (else (cond ((is-leap-year? year)
                       (get-value '(0 31 29 31 30 31 30 31 31 30 31 30 31) month))
                      (else
                       (get-value '(0 31 28 31 30 31 30 31 31 30 31 30 31) month)))))))

(define days-of-year
  (lambda (year)
    (if (is-leap-year? year)
        366 
        365)))

;某月某日是某年的第几天
(define day-count
  (lambda (year month day)
    (cond ((= month 0) day)
          (else (+ (days-of-month year (- month 1)) (day-count year (- month 1) day))))))


;计算两个日期之间的日数差
(define day-diff
  (lambda (y1 m1 d1 y2 m2 d2)
    (cond ((= y1 y2) (- (day-count y2 m2 d2) (day-count y1 m1 d1)))
          (else (+ (days-of-year (- y2 1)) (day-diff y1 m1 d1 (- y2 1) m2 d2))))))

;计算某日的星期数
(define get-week
  (lambda (year month day)
    (remainder (day-diff 2017 1 1 year month day) 7)))

;格式输出
(define print-iter
  (lambda (year month iter blank-flag)
    (cond 
          ((>= iter (+ (get-week year month 1) (days-of-month year month)))
             (newline)) ;月末结束
          ((< iter (get-week year month 1))
             (display "   ")
             (print-iter year month (+ iter 1) blank-flag)) ;月初空格
          (else
             (cond ((and (< (- iter (get-week year month 1)) 9) (= blank-flag 0))
                      (display " ")
                      (print-iter year month iter 1))
                   (else
                      (cond ((= (remainder iter 7) 6) (display (+ 1 (- iter (get-week year month 1)))) (newline) (print-iter year month (+ iter 1) 0)) ;行末换行
                            (else (display (+ 1 (- iter (get-week year month 1)))) (display " ") (print-iter year month (+ iter 1) 0)))))))))

(define print-calendar
  (lambda (year month)
    (print-iter year month 0 0)))

(display "Scheme日历")(newline)
(display "2017.8.26 mikukonai")(newline)
(display "====================")(newline)
(display "Su Mo Tu We Th Fr Sa")(newline)
(display "====================")(newline)
(print-calendar 2017 8)
(display "====================")(newline)
```

由于星期计数是从2017年1月1日（星期日）开始的，所以不能显示2017年以前的日历。不过这不是本质上的错误，稍微改改代码就好了。

# 第四章

本章讲述了基本数值运算和谓词的实现。

这里暂时只考虑自然数，即非负整数。首先定义两个魔法函数：“+1”函数和“-1”函数。

```:Scheme
;加一函数
(define add1
  (lambda (n)
    (+ n 1)))
;减一函数
(define sub1
  (lambda (n)
    (- n 1)))
```

之所以叫魔法函数，是因为从这两个函数出发，可以得到**无穷**。但是减一函数有点特殊，它如果一直重复下去的话，一下子就……会违反我们的基本法——0是不能“-1”的。

所以为了避免我们违反基本法，我们也要有自己的判断：引入`zero?`函数来判断一个数是不是0。`zero?`是R5RS钦定的特殊形式。

现在实现加法运算`(add a b)`如下：

```:Scheme
(define add
  (lambda (a b)
    (if (zero? b)
        a
        (add (add1 a) (sub1 b)))))
```

以上是迭代式实现。那么如何递归地实现它呢？

```:Scheme
(define add-r
  (lambda (a b)
    (if (zero? b)
        a
        (add1 (add a (sub1 b))))))
```

二者是不同的。`add`将自己的参数作为迭代器，回溯的时候没有额外动作。而`add-r`到达递归终止条件时，会执行掉栈中剩余的`add1`函数，加法是在回溯的过程中发生的。这个问题，SICP讲得很清楚，因为读过这一段了，所以在这里多说一句。

`add1`之于数字，正如`cons`之于列表——皮亚诺的+1魔法。

至于减法，也是一样的套路。但这里有一个疑问：The Little Schemer并没有严格在非负整数基本法的框架内搭建这个减法。不管了不管了，因为法律就是用来践踏的嘛。

在这些函数的基础上，编写关于“元组”tuple的运算。所谓的元组，实际上就是逻辑上的数组。

首先实现元组的累积：

```:Scheme
;元组累积
(define addtup
  (lambda (list)
    (cond ((null? list) 0)
          (else (add (car list) (addtup (cdr list)))))))

(addtup '(10 20 30 40 50 60 70 80 90 100))
```

实现一个乘法运算：

```:Scheme
;乘法
(define multiply
  (lambda (a b)
    (cond ((eq? b 0) 0)
          (else (add a (multiply a (sub1 b)))))))

(multiply 15 20)
```

然后实现一个向量加法

```:Scheme
;向量加法
(define tup+
  (lambda (list1 list2)
    (cond ((or (null? list1) (null? list2)) '())
          (else (cons (add (car list1) (car list2)) (tup+ (cdr list1) (cdr list2)))))))

(tup+ '(10 2 9 10 11) '(2))
```

继续实现小于/大于号函数：

```:Scheme
(define lt
  (lambda (a b)
    (cond ((zero? b) #f)
          ((zero? a) #t)
          (else (lt (sub1 a) (sub1 b))))))

(define le
  (lambda (a b)
    (cond ((zero? a) #t)
          ((zero? b) #f)
          (else (le (sub1 a) (sub1 b))))))

(define gt
  (lambda (a b)
    (cond ((zero? a) #f)
          ((zero? b) #t)
          (else (gt (sub1 a) (sub1 b))))))

(define ge
  (lambda (a b)
    (cond ((zero? b) #t)
          ((zero? a) #f)
          (else (ge (sub1 a) (sub1 b))))))
```

有了这些关系运算谓词，就可以写出判断数字相等的`eqn?`谓词：

```:Scheme
(define eqn?
  (lambda (a b)
    (cond ((lt a b) #f)
          ((gt a b) #f)
          (else #t))))
```

编写计算幂的`pow`函数：

```:Scheme
(define pow
  (lambda (a b)
    (cond ((zero? b) 1)
          (else (multiply a (pow a (sub1 b)))))))
```

除法，实际上是整除（类似于C语言的/）：

```:Scheme
(define div
  (lambda (a b)
    (cond ((< a b) 0)
          (else (add1 (div (- a b) b))))))
```

求lat长度：

```:Scheme
(define len
  (lambda (lat)
    (cond ((null? lat) 0)
          (else (add1 (len (cdr lat)))))))
```

编写函数`pick`和`rampick`：

```:Scheme
(define pick
  (lambda (n lat)
    (cond ((eqn? n 1) (car lat))
          (else (pick (sub1 n) (cdr lat))))))

(define rempick
  (lambda (n lat)
    (cond ((eqn? n 1) (cdr lat))
          (else (cons (car lat) (rempick (sub1 n) (cdr lat)))))))
```

特殊形式`number?`，这是内建函数，是原语函数。

移除（保留）lat中所有的number：

```:Scheme
(define no-nums
  (lambda (lat)
    (cond ((null? lat) '())
          ((number? (car lat)) (no-nums (cdr lat)))
          (else (cons (car lat) (no-nums (cdr lat)))))))

(define all-nums
  (lambda (lat)
    (cond ((null? lat) '())
          ((number? (car lat)) (cons (car lat) (all-nums (cdr lat))))
          (else (all-nums (cdr lat))))))
```

下面这个函数`eqan?`用来判断两个原子是否相同。如果两个原子都是数字原子，则用`eqn?`来判断；若都不是，则用`eq?`判断。

```:Scheme
(define eqan?
  (lambda (a b)
    (cond ((and (number? a) (number? b)) (eqn? a b))
          ((or  (number? a) (number? b)) #f) ;走到这一步说明a或b至少有一个不是数字了
          (else (eq? a b)))))
```

本章最后一个函数：统计某原子在lat中出现的次数。

```:Scheme
(define occur
  (lambda (a lat)
    (cond ((null? lat) 0)
          ((eq? a (car lat)) (add1 (occur a (cdr lat))))
          (else (occur a (cdr lat))))))
```

# 第五章

这一章相比前面各四章对于表的处理方式，有了质的变化。本章开始处理带有嵌套子表的真·表，而不是“list of atoms”了。这就意味着，现在需要递归地对`(car list)`即表BT的左支进行处理，不像以前都只处理右支。

重写`rember*`函数如下：

```:Scheme
(define atom?
  (lambda (x)
    (and (not (pair? x)) (not (null? x)))))

(define rember*
  (lambda (a list)
    (cond ((null? list) '())
          ((atom? (car list))
           (cond ((eq? a (car list)) (rember* a (cdr list)))
                 (else (cons (car list) (rember* a (cdr list))))))
          (else (cons (rember* a (car list)) (rember* a (cdr list)))))))

(rember* 1 '(((1 2) 3 1) 1 ((((1) 2 3) (1))) 1 1 (1)))
```

重写`insertR*`函数如下：

```:Scheme
(define insertR*
  (lambda (new old list)
    (cond ((null? list) '())
          ((atom? (car list))
           (cond ((eq? old (car list)) (cons (car list) (cons  new (insertR* new old (cdr list)))))
                 (else (cons (car list) (insertR* new old (cdr list))))))
          (else (cons (insertR* new old (car list)) (insertR* new old (cdr list)))))))

(insertR* 0 1 '(((1 2) 3 1) 1 ((((1) 2 3) (1))) 1 1 (1)))
```

可以看出，以前对lat进行处理的时候，每次递归都需要判断传入的`list`是否为空表。这实际上是对表BT的右支进行检测，如果右支存在，则继续递归。而现在涉及表BT的左支，递归执行树的形状就真的是一棵左右都有分杈的树，因此每一步都需要判断当前表的左支是否是一棵树，如果是树，则递归，如果不是树（即原子），则进行出口处理。

类似地写出对真·表进行某元素计数的`occur*`函数：

```:Scheme
(define occur*
  (lambda (a list)
    (cond ((null? list) 0)
          ((atom? (car list))
           (cond ((eq? a (car list)) (add1 (occur* a (cdr list))))
                 (else (occur* a (cdr list)))))
          (else (add (occur* a (car list)) (occur* a (cdr list)))))))
```

按照同样的套路，也可以重写`insertL*`和`subst*`，但这里不写了。

下面是一个重要的函数：`member*`。

```:Scheme
(define member*
  (lambda (a list)
    (cond ((null? list) #f)
          ((atom? (car list))
           (cond ((eq? a (car list)) #t)
                 (else (member* a (cdr list)))))
          (else (or (member* a (car list)) (member* a (cdr list)))))))
```

下面这个函数只对左支进行递归：

```:Scheme
(define leftmost
  (lambda (list)
    (cond ((null? list) '())
          ((atom? (car list)) (car list))
          (else (leftmost (car list))))))
```

谓词`and`和`or`采用短路策略进行求值，这种特性意味着它可以采用同样具有这种特性的`cond`来实现：

```:Scheme
;(and a b)
(cond (a b)
      (else #f))
;(or a b)
(cond (a #t)
      (else b))
```

这说明，`cond`是比`and`和`or`更“基本”的特殊形式。

下面实现谓词函数`eqlist?`，该函数判断两个list是不是“完全”相同。所谓的完全相同，指的是结构和内容都完全相同。

本文前言中有说过，list实际上是特殊的pair，其car是左元素，cdr是右元素。list的结构有5种形式：

+ (null , null) 空表'()
+ (atom , null) 单原子表'(a)
+ (atom , list) 形如'(1 2 3)
+ (list , null) 形如'((1 2))
+ (list , list) 形如'((1 2) 3)

这里需要注意的是，list的cdr不是atom，如果是的话，那就是pair了。

为了判断两个list是否相同，只需要递归地判断`list1`和`list2`的左支和右支是否分别对应相同即可。

首先考虑递归出口：若两表均为null，则返回#t；若有且只有一个表是null，那肯定是#f。然后考虑左支：若两表左支均为相同atom，则递归判断右支，此种情况下，结果取决于右支是否相同；如果有且只有一个表的左支是atom，则一定是#f。其余情况下，将递归判断左支和右支，只有左右支均对应相同，两表才相同。

```:Scheme
(define eqlist?
  (lambda (list1 list2)
    (cond ((and (null? list1) (null? list2)) #t)
          ((or  (null? list1) (null? list2)) #f)
          ((and (atom? (car list1)) (atom? (car list2)))
             (and (eq? (car list1) (car list2)) (eqlist? (cdr list1) (cdr list2))))
          ((or  (atom? (car list1)) (atom? (car list2))) #f)
          (else (and (eqlist? (car list1) (car list2))
                     (eqlist? (cdr list1) (cdr list2)))))))
```

基于`eqlist?`和以往实现的`eqan?`，可以写出判断两个S-表达式是否相同的`equal?`函数：

```:Scheme
(define equal?
  (lambda (exp1 exp2)
    (cond ((and (atom? exp1) (atom? exp2)) (eqan? exp1 exp2))
          ((or  (atom? exp1) (atom? exp2)) #f)
          (else (eqlist? exp1 exp2)))))
```

# 第六章

这章对我来说非常有趣。本章以Scheme的方式解决了（中缀）表达式的求值问题，并且通过过程抽象，使得同一求值程序可以解决不同类型的表达式。甚至在章末探讨了对数字进行抽象的可能性。

首先描述了伪·中缀表达式的结构，并且构造`numbered?`函数用来判断一个表达式是不是“良构”的。之所以是伪·中缀式，是因为在书中的描述性定义中，并不允许平行的运算符（例如'(1 + 2 + 3)），换句话说就是没有所谓的优先级和结合性。

```:Scheme
(define numbered?
  (lambda (aexp)
    (cond ((atom? aexp) (number? aexp))
          ((atom? (car (cdr aexp))) (and (numbered? (car aexp)) (numbered? (car (cdr (cdr aexp))))))
          (else #f))))
```

书P.101给出的简化版本过分简化了，针对形如`'(1 (1 + 2) 3)`这样的式子会给出假正结果。但是我写的这个也不是很好，遇到形如`'(1)`这样的式子，直接cdr是不可以的。暂时不管了。

现在可以编写对伪·中缀表达式进行求值的`value`函数了。

```:Scheme
(define value
  (lambda (aexp)
    (cond ((atom? aexp) aexp)
          ((eq? (car (cdr aexp)) '+)
           (+ (value (car aexp)) (value (car (cdr (cdr aexp))))))
          ((eq? (car (cdr aexp)) '-)
           (- (value (car aexp)) (value (car (cdr (cdr aexp))))))
          ((eq? (car (cdr aexp)) '*)
           (* (value (car aexp)) (value (car (cdr (cdr aexp))))))
          ((eq? (car (cdr aexp)) '/)
           (/ (value (car aexp)) (value (car (cdr (cdr aexp))))))
          (else (display "Unexpected operator")))))

(value '((1 / 3) - (1 / 4)))
```

DrRacket是一款非常棒的IDE。上面计算$\dfrac{1}{3}-\dfrac{1}{4}$甚至可以直接在输出窗口中给出$\dfrac{1}{12}$的答案，并且是像LaTex渲染出来的这种自然显示的形式。

读到这里，我是非常感动的。当年用C语言写中缀式解析器的时候，耗费了那么多的精力，如今使用LISP只需要短短的几行就可以搞定。当然，这是两种语言的内在属性决定的。过程式的C系语言适合处理线性结构，比如数组这种；而函数式的L系语言由于代码数据合一，所以更适合递归地处理树状结构。数学表达式正是典型的树状结构，让L系语言来处理自然是再适合不过了。

下面介绍了如何使`value`函数处理前缀式、后缀式、甚至其他的什么式的方法。或者应该叫“方法论”了，因为这正是SICP在第一章中就强调的“过程抽象”。在工程上广泛使用的OO方法，实际上就是这种关于“抽象”的方法论。

根据前面的描述性定义，不管是何种顺序的表达式，每一个表达式都只有一个操作符和两个操作数，只是他们的位置不同。因此，可将`value`函数中“取操作符”和“取操作数”的步骤抽象为`operator`、`sub-exp-1`和`sub-exp-2`，以后缀式为例：

```:Scheme
(define operator
  (lambda (aexp)
    (car (cdr (cdr aexp)))))

(define sub-exp-1
  (lambda (aexp)
    (car aexp)))

(define sub-exp-2
  (lambda (aexp)
    (car (cdr aexp))))
```

然后就可以写出“通用”的`value`函数：

```:Scheme
(define value
  (lambda (aexp)
    (cond ((atom? aexp) aexp)
          ((eq? (operator aexp) '+)
           (+ (value (sub-exp-1 aexp)) (value (sub-exp-2 aexp))))
          ((eq? (operator aexp) '-)
           (- (value (sub-exp-1 aexp)) (value (sub-exp-2 aexp))))
          ((eq? (operator aexp) '*)
           (* (value (sub-exp-1 aexp)) (value (sub-exp-2 aexp))))
          ((eq? (operator aexp) '/)
           (/ (value (sub-exp-1 aexp)) (value (sub-exp-2 aexp))))
          (else (display "Unexpected operator")))))

(value '((1 3 /) (1 4 /) -))
```

当然，`value`函数的各部分甚至可以进一步抽象，例如运算符及其行为定义等。第八章将介绍这件事情。

本章的最后，介绍了一种使用Scheme列表对数字进行编码的方法，并且基于此重新定义了常用的运算。其实，丘奇也曾经在lambda演算的框架内做过同样的工作，即著名的[丘奇编码](https://en.wikipedia.org/wiki/Church_encoding)。在我去年读的《[计算的本质](https://book.douban.com/subject/26148763/)》这本书中，更是使用丘奇编码实际构建了一段有意义的程序（过段时间，我将把之前的阅读笔记整理一下，作为本文的补充）。这其中平地起高楼的美妙，还是非常引人入胜的。说到这里，我想起曾经在知乎上看到的一个[有趣的回答](https://www.zhihu.com/question/39422784/answer/129979885)。形式化的魅力就在于，能够从非常简单的事情出发，推演到万事万物。这种“构造”之美，令人陶醉。

外国人很喜欢抖一些莫名其妙的包袱，这本书里就充满了匪夷所思的包袱。P.109所说的“小心阴影”，我的理解是，在构建抽象的过程中，要时刻注意体系的“一致性”。例如书中给的例子：使用list来表示数字的时候，`lat?`函数立刻就不可用了。在《计算的本质》中，更是采取某些措施将proc表达的丘奇编码同原生的Ruby代码联系起来，以维护丘奇编码同Ruby的“一致性”。技术上来说，就涉及到很多设计模式方面的问题。设计模式我不懂，大概就是这个意思。

> 2017.11.15补充：这里的“阴影”，现在看来应当是隐藏在无类型λ演算背后的“类型”问题。这方面的思考，在《我想给你整个世界》一文中有所表述，在此不展开。

# 第七章

本章实现集合——整个现代数学的基石。

集合在本章称为set。之所以不直接称为“集合”，是因为collection这个词也具有类似的意义。一般来说，collection比set具有更广泛的意义，例如Java的collection容器就包含set。set多指真正意义上的元素不可重复的“集合”，因此下文统一使用“集合”一词指代元素不可重复的集合。

为了突出本质问题，避免讨论细枝末节，一般使用lat表示集合，不考虑list的嵌套。首先实现谓词`set?`，用来判断一个列表是不是集合：

```:Scheme
(define set?
  (lambda (set)
    (cond ((null? set) #t) ;空集是集合
          ((member? (car set) (cdr set)) #f) ;定义在第二章
          (else (set? (cdr set))))))
```

随后定义`makeset`函数，用来将一个包含重复元素的lat转换为集合：

```:Scheme
(define makeset
  (lambda (lat)
    (cond ((null? lat) '())
          ((member? (car lat) (cdr lat)) (makeset (cdr lat)))
          (else (cons (car lat) (makeset (cdr lat)))))))
```

当然，也可以用前面实现过的`multirember`函数来构造这个函数。

下面实现集合的三种基本运算——交、并、补，以及一些判断集合之间关系的谓词。首先写判断集合之间包含关系的谓词`subset?`：

```:Scheme
(define subset?
  (lambda (set1 set2)
    (cond ((null? set1) #t) ;空集是任何集合的子集
          ((member? (car set1) set2) (subset? (cdr set1) set2))
          (else #f))))
```

利用`subset?`即可写出判断两个集合是否相同的`eqset?`：

```:Scheme
(define eqset?
  (lambda (set1 set2)
    (and (subset? set1 set2) (subset? set2 set1))))
```

判断两个集合是否有相交的元素：

```:Scheme
(define intersect?
  (lambda (set1 set2)
    (cond ((null? set1) #f)
          ((member? (car set1) set2) #t)
          (else (intersect? (cdr set1) set2)))))
```

交集、并集、相对差集：

```:Scheme
(define intersect
  (lambda (set1 set2)
    (cond ((null? set1) '())
          ((member? (car set1) set2) (cons (car set1) (intersect (cdr set1) set2)))
          (else (intersect (cdr set1) set2)))))

(define union
  (lambda (set1 set2)
    (cond ((null? set1) set2)
          ((not (member? (car set1) set2)) (cons (car set1) (union (cdr set1) set2)))
          (else (union (cdr set1) set2)))))

(define rel-complement
  (lambda (set1 set2)
    (cond ((null? set1) '())
          ((member? (car set1) set2) (rel-complement (cdr set1) set2))
          (else (cons (car set1) (rel-complement (cdr set1) set2))))))
```

下面这个函数有一种“reduce”的感觉。实现函数`intersectall`，该函数接收由集合组成的列表作为参数，返回各集合的交集：

```:Scheme
(define intersectall
  (lambda (lset)
    (cond ((null? (cdr lset)) (car lset)) ;列表只剩一个集合
          (else (intersect (car lset) (intersectall (cdr lset)))))))
```

> 未完待续，今天先写到这里。在这之后，定义了“pair”和“rel”，实际上就是有序对和二元关系，并在此基础上定义了**函数**。引入函数概念之后，最为精彩的第八、九、十章就要开始了。“智商不够用了吧~”

# 第八章

> 2017.11.15补充：现在看来，所谓的continuation，实际上就是常说的“闭包”。“闭包”这个术语在不同的领域有截然不同的含义，着实令人迷惑。

尾递归就是Continuation Passing Style。因为尾递归可以避免回溯，但代价是每次递归调用，都会将运行时信息通过参数进行传递，造成代码可读性降低。为了加深理解，现在从最简单的阶乘出发，看一看一般递归、尾递归和CPS的代码的运行轨迹。

```:Scheme
(define fac-r
  (lambda (n)
    (cond ((zero? n) 1)
          (else (* n (fac-r (- n 1)))))))

(define fac-tr
  (lambda (n product)
    (cond ((zero? n) product)
          (else (fac-tr (- n 1) (* n product))))))

(define fac-cps
  (lambda (n cont)
    (cond ((zero? n) (cont 1))
          (else (fac-cps (- n 1)
                         (lambda (res)
                           (cont (* n res))))))))
```

与`fac-r`相比就会发现，`fac-tr`参数的迭代都遵循一个减少一个累加的规律，不同的是，`fac-tr`通过尾递归返回值的累乘获得结果，而`fac-cps`是通过Continuation的“累积”，获得完整的计算步骤，最终一次性得到计算结果。这种将Continuation作为参数的编程风格，就是CPS。

CPS的好处是通过前述变换可以将一般递归化为（比较容易实现的）尾递归，但并不会减少算法的时空复杂度。CPS只不过是将调用栈上的过程积累转嫁到参数的堆上面了。并且CPS的思路*c*比正常的递归思路*r*要抽象得多，CPS的代码往往难以阅读。但由于形如`fac-tr`的迭代式尾递归有时候难以实现，尤其是Scheme的`call/cc`可以自动执行CPS变换过程，由此带来的便利性以及CPS本身的尾递归性质，给了可读性差的CPS以用武之地。

CPS可以传递不止一条控制流。维基百科中给出一个乘法的例子，利用两个Continuation参数实现了错误处理。CPS与异常处理、异步编程等技术的关系非常密切，callback函数实际上就是一种Continuation。

以下是书中的例子。

```:Scheme
(define multirember&co
  (lambda (a lat col)
    (cond ((null? lat)
            (col '() '()))
          ((eq? (car lat) a)
            (multirember&co a
                            (cdr lat)
                            (lambda (newlat seen)
                              (col newlat
                                   (cons (car lat) seen)))))
          (else
            (multirember&co a
                            (cdr lat)
                            (lambda (newlat seen)
                              (col (cons (car lat) newlat)
                                   seen)))))))

(define a-friend
  (lambda (x y)
    (cons x (cons y '()))))

(define new-friend
  (lambda (newlat seen)
    (col newlat
         (cons (car lat) seen))))

(multirember&co 'a '(a b c d a b) a-friend)

(define collector
  (lambda (L R L&R Ln Rn)
    (cons L (cons R (cons L&R (cons Ln (cons Rn '())))))))

(define multiinsertLR
  (lambda (new oldL oldR lat col)
    (cond ((null? lat) (col '() '() '() 0 0))
          ((eq? (car lat) oldL)
             (multiinsertLR new
                            oldL
                            oldR
                            (cdr lat)
                            (lambda (L R L&R Ln Rn)
                              (col (cons new (cons oldL L))
                                   (cons oldL R)
                                   (cons new (cons oldL L&R))
                                   (+ Ln 1)
                                   Rn))))
          ((eq? (car lat) oldR)
             (multiinsertLR new
                            oldL
                            oldR
                            (cdr lat)
                            (lambda (L R L&R Ln Rn)
                              (col (cons oldR L)
                                   (cons oldR (cons new R))
                                   (cons oldR (cons new L&R))
                                   Ln
                                   (+ Rn 1)))))
          (else
             (multiinsertLR new
                            oldL
                            oldR
                            (cdr lat)
                            (lambda (L R L&R Ln Rn)
                              (col (cons (car lat) L)
                                   (cons (car lat) R)
                                   (cons (car lat) L&R)
                                   Ln
                                   Rn)))))))


(multiinsertLR '0 'l 'r '(l r l r l) collector)

(define reduce
  (lambda (list func)
    (cond ((null? list) (func 0 0))
          (else (func (car list)
                      (reduce (cdr list) func))))))

(reduce '(1 2 3) +)

(define evens-only*&co
  (lambda (list col)
    (cond ((null? list) (col 1 0 '()))
          ((atom? (car list))
            (cond ((even? (car list))
                   (evens-only*&co (cdr list)
                                   (lambda (PE SO EList)
                                     (col (* (car list) PE)
                                          SO
                                          (cons (car list) EList)))))
                  (else
                    (evens-only*&co (cdr list)
                                    (lambda (PE SO Elist)
                                      (col PE
                                           (+ (car list) SO)
                                           EList))))))
          (else (evens-only*&co (car list)
                                (lambda (PE SO EList)
                                   (evens-only*&co (cdr list)
                                                   (lambda (dPE dSO dEList)
                                                     (col (* PE dPE)
                                                          (+ SO dSO)
                                                          (cons EList dEList))))))))))
(define coll
  (lambda (L R L&R)
    (cons L (cons R (cons L&R '())))))

(evens-only*&co '((1 2 3) (4 5 6)) coll)

;一个简单的例子
(define sum
  (lambda (n col)
    (cond ((zero? n) (col 0))
          (else (sum (- n 1)
                     (lambda (s)
                       (col (+ n s))))))))

(sum 100 (lambda (x) x))

(define fib
  (lambda (n cont)
    (cond ((= n 0) (cont 1))
          ((= n 1) (cont 1))
          (else (fib (- n 1)
                     (lambda (res1)
                       (fib (- n 2)
                            (lambda (res2)
                              (cont (+ res1 res2))))))))))

(fib 6 (lambda (x) x))
```

# 第九章

> 想起来，我之前买过一本《可计算性与计算复杂性导引》（张立昂）。作为教材，非常系统地讲述了程序语言背后的逻辑学和数学。我应该读一读这本书，解决暂时搞不懂的问题。

本章一开始给出了一个与以往都不同的函数。这个函数并不会像以往的函数那样，每次都是固定地取输入参数的“一部分”进行递归，最终到达递归终止条件；而是在递归过程中不仅不缩小参数的规模，甚至连执行路径都受到输入参数的控制。这个函数是这样的：

```:Scheme
(define looking
  (lambda (a lat)
    (keep-looking a (pick 1 lat) lat)))

(define keep-looking
  (lambda (a sorn lat)
    (cond ((number? sorn) (keep-looking a (pick sorn lat) lat))
          (else (eq? sorn a)))))
```

我第一次读到这里的时候，并没有什么特别的想法，甚至有点蒙：构造这个函数究竟是想说明什么？读到后面的停机问题才反应过来：这个`keep-looking`不就是一台**图灵机**吗！甚至可以给这个问题改写成（伪）MIPS汇编：

```
.data 0x0000
    lat .lat  (6,2,4,c,5,7,3)
    a   .atom c

.text 0x0000
start:
    xor $t1,$t1,$t1    #偏移量计数清零
    la  $a0,a(0)       #读参数a到参数寄存器
keep_looking:
    la  $t0,lat($t1)   #读第$t1个原子到$t0
    bat $t0,atom_comp  #如果是原子，则跳转到atom_comp标签
    add $t1,$t0,0      #如果是数字，则将$t1修改为刚刚读到的$t0
    j   keep_looking   #重新开始keep_looking
atom_comp:
    bae $a0,$t0,true   #若是与参数a一致的原子，则跳转到true标签
    ret #f             #如果不一致，则“返回”#f
true:
    ret #t             #返回#t
```

当然，这都是瞎编的，只是想说明`keep-looking`表现出的行为明显是一台图灵机的样子。之所以将`keep-looking`这个过程称之为“函数”，是因为可以将它看做是一个系统，这个系统对于特定的输入，可以给出特定的输出。

对于某些输入，比如只要把列表`(2,1,a)`传入`keep-looking`，这个函数就会反复检查第一和第二个元素，根本停不下来，无法输出任何结果。这也就是说，诸如此类的函数会选择性地只对某些输入产生输出，它不能解决所有“合乎语法”的问题（也就是侯世达在GEB中提到的良构串和定理的关系）。如果把所有合乎语法的输入视为集合$X$，那么诸如此类的函数只在$X$的真子集$X'$上能产生有效输出，这样的函数就叫**部分函数**。前面讨论的函数对于任何良构的输入都可以在有限的时间内给出结论，这就叫**全函数**。[维基百科](https://en.wikipedia.org/wiki/Partial_function)中给出了定义在整数上的平方根函数的例子，用来说明平方根函数在整数集上的“部分性”。

> 设$f$是$S$到$T$的二元关系。若对$\forall x\in S$，$f(a)=\emptyset$或者$\{b\}$，则称$f$是$S$到$T$的**部分函数**，或者称$S$上的部分函数。部分函数可简称**函数**。若$\mathrm{dom} f=S$，那么$f$是$S$上的**全函数**。[1]

最极端的部分函数是对于一切输入都不能给出结果的`eternity`函数，是这样定义的：

```:Scheme
(define eternity
  (lambda (x)
    (eternity x)))
```

运行的话会很快爆栈的。

但是，像`eternity`这样的无限循环，其实是很有用的。比如说，操作系统实际上就是一个无限循环。另外，如果一门语言可以实现无限循环，意味着这门语言是图灵完备的。事实上，图灵机可计算的函数就是部分递归函数，而不是全函数。

# 第十章

这一章实现了有限的Scheme解释器。关于解释器的实现细节，书中讲得很清楚，也没有什么难点，所以只记下书中的代码。这章的重点是展示了Scheme作为元语言的潜力——我们可以、并且很容易使用Scheme设计自己的语言。Racket的设计目标之一就是“to serve as a platform for language creation, design, and implementation”。[[*]](http://docs.racket-lang.org/guide/languages.html)

```:Scheme
#lang racket

(define atom?
  (lambda (x)
    (and (not (pair? x)) (not (null? x)))))

(define build
  (lambda (s1 s2)
    (cons s1 (cons s2 '()))))

(define first
  (lambda (list-pair)
    (car list-pair)))

(define second
  (lambda (list-pair)
    (car (cdr list-pair))))

(define third
  (lambda (list-pair)
    (car (cdr (cdr list-pair)))))

(define new-entry build)

(define lookup-in-entry-help
  (lambda (name names values entry-f)
    (cond ((null? names) (entry-f name))
          ((eq? (car names) name) (car values))
          (else (lookup-in-entry-help name (cdr names) (cdr values) entry-f)))))

(define lookup-in-entry
  (lambda (name entry entry-f)
    (lookup-in-entry-help name (first entry) (second entry) entry-f)))

(define extend-table cons)

(define lookup-in-table
  (lambda (name table table-f)
    (cond ((null? table) (table-f name))
          (else (lookup-in-entry name
                                 (car table)
                                 (lambda (n)
                                   (lookup-in-table n
                                                    (cdr table)
                                                    table-f)))))))

(define expression-to-action
  (lambda (e)
    (cond ((atom? e) (atom-to-action e))
          (else (list-to-action e)))))

(define atom-to-action
  (lambda (e)
    (cond ((number? e) *const)
          ((eq? e #t) *const)
          ((eq? e #f) *const)
          ((eq? e 'cons) *const)
          ((eq? e 'car) *const)
          ((eq? e 'cdr) *const)
          ((eq? e 'null?) *const)
          ((eq? e 'eq?) *const)
          ((eq? e 'atom?) *const)
          ((eq? e 'zero?) *const)
          ((eq? e 'add1) *const)
          ((eq? e 'sub1) *const)
          ((eq? e 'number?) *const)
          (else *identifier))))

(define list-to-action
  (lambda (e)
    (cond ((atom? (car e))
           (cond ((eq? (car e) 'quote)  *quote)
                 ((eq? (car e) 'lambda) *lambda)
                 ((eq? (car e) 'cond)   *cond)
                 (else *application)))
          (else *application))))

(define meaning
  (lambda (e table)
    ((expression-to-action e) e table)))

(define value
  (lambda (e)
    (meaning e '())))

(define *const
  (lambda (e table)
    (cond ((number? e) e)
          ((eq? e #t) #t)
          ((eq? e #f) #f)
          (else (build 'primitive e)))))

(define text-of second)

(define *quote
  (lambda (e table)
    (text-of e)))

(define initial-table (lambda (name) (car '())))

(define *identifier
  (lambda (e table)
    (lookup-in-table e table initial-table)))

(define *lambda
  (lambda (e table)
    (build 'non-primitive (cons table (cdr e)))))

(define table-of first)
(define formals-of second)
(define body-of third)

(define else?
  (lambda (x)
    (cond ((atom? x) (eq? x 'else))
          (else #f))))

(define question-of first)
(define answer-of second)

(define evcon
  (lambda (lines table)
    (cond ((else? (question-of (car lines))) (meaning (answer-of (car lines)) table))
          ((meaning (question-of (car lines)) table) (meaning (answer-of (car lines)) table))
          (else (evcon (cdr lines) table)))))

(define cond-lines-of cdr)

(define *cond
  (lambda (e table)
    (evcon (cond-lines-of e) table)))

(define evlis
  (lambda (args table)
    (cond ((null? args) '())
          (else (cons (meaning (car args) table)
                      (evlis (cdr args) table))))))

(define function-of car)
(define arguments-of cdr)

(define *application
  (lambda (e table)
    (apply (meaning (function-of e) table)
           (evlis (arguments-of e) table))))

(define primitive?
  (lambda (l)
    (eq? (first l) 'primitive)))

(define non-primitive?
  (lambda (l)
    (eq? (first l) 'non-primitive)))

(define apply
  (lambda (fun vals)
    (cond ((primitive? fun)
           (apply-primitive (second fun) vals))
          ((non-primitive? fun)
           (apply-closure (second fun) vals))
          (else (display "Error occured in 'apply'!")))))

(define :atom?
  (lambda (x)
    (cond ((atom? x) #t)
          ((null? x) #f)
          ((eq? (car x) 'primitive) #t)
          ((eq? (car x) 'non-primitive) #t)
          (else #f))))

(define apply-primitive
  (lambda (name vals)
    (cond ((eq? name 'cons)  (cons (first vals) (second vals)))
          ((eq? name 'car)   (car (first vals)))
          ((eq? name 'cdr)   (cdr (first vals)))
          ((eq? name 'null?) (null? (first vals)))
          ((eq? name 'eq?)   (eq? (first vals) (second vals)))
          ((eq? name 'atom?) (:atom? (first vals)))
          ((eq? name 'zero?) (zero? (first vals)))
          ((eq? name 'add1)  (+ 1 (first vals)))
          ((eq? name 'sub1)  (- (first vals) 1))
          ((eq? name 'number?) (number? (first vals)))
          (else (display "Unknown primitive function.")))))

(define apply-closure
  (lambda (closure vals)
    (meaning (body-of closure)
             (extend-table (new-entry (formals-of closure) vals)
                           (table-of closure)))))

(value '((lambda (x) (add1 x)) 2))

```

# 总结

其实没什么好说的了。因为在读完TLS之后（其实是还没读完的时候就开始了）阅读了《可计算性与计算复杂性导论》这本教材，对于Scheme背后的理论知识有了一定的理解。因此，值得记录的一些收获和想法都分散在这些读书笔记和专题文章里面了。文章的前面两章实际上已经起到总结的作用了，所以这里多说无益，不如继续填其他文章的坑。喵。

2017年11月15日完成

#!style

#!script
