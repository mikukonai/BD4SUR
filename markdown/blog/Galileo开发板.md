
#!title:    Galileo开发板
#!date:     2017-10-18
#!authors:  BD4SUR
#!cover:    
#!type:     
#!tags:     


#!content

# 0.引言

去年（2016年）暑假，偶然发现Intel在2013年推出的Galileo开发板（一代）。因为颜值很高，所以就入手了两块，一块用来把玩，另一块用来收藏。

Intel与Arduino合作推出Galileo的初衷是推销自家的Quark SoC，希望在物联网市场上有所作为。为了帮助开发者快速将原型转化为产品，Intel开源了电路图、BOM、PCB设计、Datasheet等文档。操作系统使用Yocto Linux。Intel用Curie（居里）、Edison（爱迪生）、Joule（焦耳）、以及Galileo（伽利略）等物理学家的名字命名自家开发板，产品包装上的口号——“What will you make?”——让开发者非常excited。然而，据今年（2017年）6月的消息[[1]](#参考资料与文献)，Galileo、Edison和Joule三款开发板将在年内停产，Curie SoC也将停产，简直是创业未半而中道崩殂。

Quark X1000 SoC是Intel研制的一款低功耗x86架构的SoC，Galileo也成为市面上为数不多的一款基于x86的开发板。实际上，包括Galileo在内的一众Intel开发板一直备受吐槽，吐槽的点不外乎价格贵、性能弱、功耗高、资料少等方面，每一个方面对于开发板而言貌似都是比较致命的劣势。与市场上久经考验的基于ARM的各种派相比，Intel开发板的生态很差，定位不明且两极分化；再者，尽管x86非常好用，但吓人的功耗天然地绝缘了x86与IoT领域。根据Intel官网提供的数据，Galileo的功率为2.2~2.5W，并不是很令人满意，后续推出的Edison在性能和功耗方面则找到了很好的平衡。并且，X1000作为第一版Quark，存在一个比较严重的Bug：含有LOCK前缀的原子指令不可用。这个Bug严重影响原生多线程的实现，因此诸如Debian的一般的Linux发行版无法正常在Galileo上运行。为规避此问题，Intel在工具链中增加了一个代码生成选项，该选项可以生成不含LOCK指令的代码，官方提供的Yocto就是使用这个工具链编译生成的，因此可以在Galileo上正常运行。当然，涉及到多线程的场景，性能都很差。例如，SSH连接速度极慢，lighttpd的Python CGI响应极慢而异步单线程的Nodejs非常快，等等。

Galileo（一代）是Intel进军IoT开发板市场的首款产品，所以设计上有诸多硬伤，并且定位相当不清晰，属于试验性产品。后续推出的二代板大幅提升了I/O性能，但基本上是换汤不换药的水平[[2]](#参考资料与文献)。在市场上有众多物美价廉的开发板可供选择的当下，Galileo已经可以列入“不推荐”名单了，进一步说，Galileo是一款过时的产品。

之所以购买Galileo，主要是因为**板子漂亮、做工精致**，摆在书架上，就像一件精致的手办。其次是Arduino兼容，有许多现成的Arduino库和示例程序，上手成本比较低。买来的虽然是二手货，但实际上是没开封的全新品。开箱过程就不细说了，可参考[[3]](#参考资料与文献)等评测文章。

![图1 Galileo Gen1 正面SoC特写](./image/G8/galileo-soc.jpg)

# 1.上手准备

Galileo板子非常漂亮，尺寸比Arduino和树莓派略大，但也只是手掌大小，比想象中小很多。GPIO布局和Arduino基本一致，这意味着很多Arduino Shield都可以用到Galileo上。中间那个BGA封装的芯片，就是Quark SoC，运行时表面温度比较高，以至于盒子里的安全说明特地提示用户不要用手触摸SoC。

## 1.1 资源与接口

拿到一块开发板，或者说任何一个系统，首先要了解的就是它提供怎样的接口。图2是Galileo开发板提供的接口和主要板载设施。

![图2 Galileo Gen1接口示意[[5]](#参考资料与文献)](./image/G8/galileo-components.jpg)

作为一款比较高端的开发板，Galileo支持以太网、RS232（虽然并没有什么卵用）、USB2.0、PCIe等多种高级接口，尤其是PCIe接口，大大增强了Galileo的可拓展性。关于接口的细节问题，例如GPIO的驱动能力、跳线设置等，在英特尔提供的Datasheet[[4]](#参考资料与文献)和使用说明书[[5]](#参考资料与文献)中都有比较详细的说明。这里需要说明的是，Quark SoC只提供了两个支持外部中断的GPIO（位于Arduino IO 2、3），其余所有GPIO和PWM都是由CY8C9540A扩展芯片从I2C总线（100kHz）上扩展出来的。因此，这种设计尽管很好地保护了SoC，也提供了多电平兼容的能力，但是带来的性能损失是非常严重的，甚至无法软件实现1-wire总线这样的逻辑（见参考资料[[6]](#参考资料与文献)[[7]](#参考资料与文献)），因此英特尔在Galileo Gen2中对IO扩展电路作了重大修改，极大地提高了IO性能。资料[[2]](#参考资料与文献)中详细评估了Gen2的性能提升水平。

为了理解Galileo的奇葩设计，必须有系统框图（图3）才能理解这里面的细节。

![图3 Galileo Gen1系统框图[[4]](#参考资料与文献)](./image/G8/galileo-diagram.jpg)

另一点比较奇葩的是，比较重要的串口竟然使用3.5毫米音频接口，RS232电平，这可以说是非常反人类了。尽管这种设计并非不常见，但对于一款2013年出品的开发板来说，对开发者是非常不友好的。Gen2则知趣地取消了这个设计，改为开发者喜闻乐见的TTL串口插针。Edison的底板则更为人性化，自带串口转USB的FT232模块，非常方便。

板子右上角是一块SPI接口的Flash，存有一个小型的Yocto Linux作为无卡情况下引导的系统。Intel官网上提供了固件和更新工具，可以用来更新这块Flash里面的固件，当然，也可以使用旁边的SPI插针。在不插卡的情况下，也可以将Galileo作为一块Arduino使用，但是下载的Sketch并不会写入Flash中的文件系统，重启后就消失了；如果使用SD卡中的Linux系统则可以永久保存。

整体的介绍就到这里，下面是使用前的准备步骤。

## 1.2 使用前准备

### (0) 软硬件准备

开始操作前，首先准备好下列软件：

- [SDFormatter](https://www.sdcard.org/downloads/formatter_4/)，用于格式化SD卡
- [Win32 Disk Imager](http://sourceforge.net/projects/win32diskimager)，用于制作系统SD卡
- PuTTY等远程终端
- FileZilla等FTP工具
- Arduino IDE 1.6.8，并下载Galileo开发板所需文件
- Intel XDK（非必需）

线材暂时需要这些：

- microUSB数据线
- microUSB转USB Type-A转接线
- USB Hub，最好是有源的
- 以太网线

最好再准备一条3.5mm转RS232的串口线，方便使用串口终端。如果使用笔记本电脑，那么还需要一个RS232转USB的转接器。

需要特别注意的是：[[#ff0000:**必须在接通5V电源之后，再插入USB线。因为Galileo开发板启动瞬间电流较大，若接通电源前就接通USB，有烧毁开发板或者电脑的危险。下述诸步骤必须遵守此原则。**#]]这也是官方文档中反复强调的一点。

### (1) 板载固件更新

开始使用前，最好是更新一下板载Flash里面的固件。在[这里](https://downloadcenter.intel.com/download/26417/Intel-Galileo-Firmware-Updater-and-Drivers)下载固件和烧写工具，按提示更新板载固件。官方文档的说明非常清楚，操作比较简单，这里就不复述了。

### (2) 系统盘制作

首先在[iotdk.intel.com](https://iotdk.intel.com/)下载IoT DevKit系统镜像压缩包，解压后会得到一个后缀为.direct的文件。使用Win32 Disk Imager将其写入SD卡，即完成系统盘制作。将SD卡插入Galileo的SD卡槽，插入串口线和以太网线，上电开机，Galileo便会从SD卡引导系统。

### (3) 登录系统

如果有插入串口线，可以通过串口进入GRUB菜单，看到Linux启动时输出的日志。系统默认启用SSH服务，也可以使用SSH连接登录系统。以root**（没有密码）**登录Linux系统，即可进入字符终端。

### (4) 连接网络

连接有线网络，只需要插入以太网线就可以。无线网络就比较麻烦，首先需要有一张PCIe的网卡。这里使用的网卡型号是Intel Centrino Advanced-N 6205 AGN，淘宝价格20元左右。网卡是半高的，购买时应当同时购买半高卡支架，否则很麻烦。断电状态下，将网卡插入开发板背面的mini-PCIe接口，开机后即可检测到网卡，并加载驱动。按照[入门指南](https://software.intel.com/en-us/get-started-galileo-windows-step4)的说明，执行如下操作：

- 执行`connmanctl`，然后`enable wifi`，然后`scan wifi`
- 键入`services`回车，找到要连接的那个SSID，把后面的一串复制下来
- 执行`agent on`，然后`connect <刚才复制的一串>`
- 按照提示输入密码，即可连接

需要说明的是，connmanctl这个东西有一套自己的术语，比如“service”就是指一种网络连接的配置。Service配置文件在`/var/lib/connman`目录下，一般来说，只要网络环境好，每次开机都可以自动连接无线网络。如果没有连接，可以手动执行`connmanctl connect wifi_xxx_xxx_managed_psk`进行连接。

**注意：如果开机前没有插入网线，则自动连接无线网络；连接无线网络后插入网线，仍然可以连接有线网络。若开机前已经插入网线，则不会连接无线网络。**

### (5) 系统时间设定

与树莓派不同，Galileo带有RTC电池插针。Galileo的RTC电池使用普通的3V电池，例如常见的CR2032。首次启动，先执行以下命令设置时间。注意引号内的时间字符串是UTC时间，也就是北京时间向前调8个小时。

```
date -s "yyyy-mm-dd hh:MM:ss"
```

然后执行以下命令，将UTC时间写入硬件RTC。

```
hwclock -w
```

最后设置系统时间为中国标准时间CST，即完成时间设置。

```
cp /usr/share/zoneinfo/PRC /etc/localtime
```

### (6) 安装必需软件

Yocto使用opkg进行软件包管理。顺序执行以下命令，安装一些常用的软件：

```
opkg update
opkg install lighttpd-module-cgi
opkg install lighttpd-module-scgi
opkg install lighttpd-module-fastcgi
opkg install nodejs-npm
opkg install sqlite3
opkg install python-opencv
```

[[#ff0000:**注意：不要使用iotdk软件源更新任何软件！经测试，nodejs升级之后无法正常工作。**#]]

### (7) 配置关机按键（2017-10-22）

前段时间，由于频繁的强行断电关机，造成Galileo的文件系统损坏，具体表现是部分shell命令会报IO错误，sqlite数据库损坏，等等。但是，如果每次都通过SSH执行`poweroff`命令来关机，又非常麻烦。因此，这里将板子上的reset按钮改造成一个关机按钮：短按仍然是重启sketch，而长按则执行`poweroff`关机。下文描述的Galileo一代的解决方案。二代原理类似。

首先要知道，Reset键对应的Linux GPIO编号是53（可查看Arduino交叉编译工具链目录`./variants/galileo_fab_d/variant.cpp`得知），可通过以下方式读取其值：

```
# 用户态映射
echo 53 > /sys/class/gpio/export
# 设置端口方向
echo in > /sys/class/gpio/gpio53/direction
# 读取端口状态
cat /sys/class/gpio/gpio53/value
```

Reset键带有上拉电阻，按下则拉低，因此读到“1”为释放状态，读到“0”为按下状态。因此，可编写脚本轮询gpio53，若连续多次读取gpio53都是“0”，意味着Reset键被按下并保持了一段时间，时间到即可执行`poweroff`命令以关机。脚本`galileo_shutdown_daemon.sh`内容如下：

```
#!/bin/sh
keepgoing=true
counter=0
while $keepgoing
do
    value=`cat /sys/class/gpio/gpio53/value`
    if [ "$value" == "0" ]; then
        echo "$counter"
        let "counter=counter+1"
        flag=`expr $counter % 2`
        if [ "$flag" == "0" ]; then
            echo 1 > /sys/class/gpio/gpio3/value
        else
            echo 0 > /sys/class/gpio/gpio3/value
        fi
        if [ "$counter" == "20" ]; then
            echo `uname`
        fi
    else
        counter=0
    fi
    usleep 50000
done
```

为了使这个脚本常驻后台，需要设定为启动服务。Intel官方提供的IoT Devkit版本的操作系统采用systemd管理开机启动的诸多服务。按照以下步骤，添加`galileo-shutdown-daemon.service`服务并启动。

① 将刚刚编写的脚本`galileo_shutdown_daemon.sh`移动到`/opt/cln/galileo`。当然移动到其他地方也没问题，只要和后面一致就可以。随后，在`/lib/systemd/system`中添加文件`galileo-shutdown-daemon.service`，内容如下：

```
[Unit]
Description=Galileo Poweroff Daemon

[Service]
Type=simple
ExecStart=/bin/sh  /opt/cln/galileo/galileo_shutdown_daemon.sh

[Install]
WantedBy=multi-user.target
```

② 执行以下脚本启用该服务。

```
systemctl enable galileo-shutdown-daemon.service
```

③ reboot，如果一切正常的话，即实现长按Reset关机的功能。

此时，开发板的使用前准备已经基本完成。配置完成后，系统可以干净、稳定地运行。此时，可将SD卡的内容备份为镜像文件。

# 2.开始开发

## 2.1 Arduino Sketch

由于nodejs和MRAA库的存在，Galileo上的Arduino开发不见得是最好的选择。但是，Arduino上积累了不少现成的项目，有些是可以拿来即用的。尽管如此，由于Galileo本身的特性，尤其是弱气的GPIO，导致很多器件不能（简单地）在Galileo上使用。最重要的一点是，必须弄清楚Galileo在系统中的地位：Galileo不是用来做前端的控制和采集，更多地是用来做存储和计算。例如，《[基于GP2Y10的简易灰尘检测仪](./20180124.html)》介绍了一个实用的空气质量检测仪。文中使用Arduino作为器件的控制板，而将数据库、服务器等高级功能布置在Galileo上。

## 2.2 生Linux应用程序开发

### 原理剖析

Galileo本质上是一款可以运行Linux的单板计算机，因此可以进行生·Linux用户态应用的开发。

英特尔提供的产品简介文档[[10]](#参考资料与文献)中说明了Galileo的软件架构。可见，Galileo的软件系统分为Bootloader、Linux操作系统和应用程序三个层次，Arduino Sketch实际上是运行在Linux操作系统上面的应用程序，位于`/sketch/sketch.elf`。在`/opt/cln/galileo`目录中，可以找到clloader。根据[[11]](#参考资料与文献)，clloader原本是给串口modem下载程序用的，后来被Intel改写，用于PC端Arduino IDE与Galileo的串口通信。Yocto Linux将与PC机通信的串口（包括3.5mm和USB client）抽象为`/dev/ttyGS0`设备文件，clloader即负责通过ttyGS0从PC机上接收交叉编译好的Sketch，并启动新下载的Sketch，同时备份旧Sketch。在PC端，经过开发板配置的Arduino IDE包含了Galileo交叉编译的全套工具链，以及封装好的[常用函数库](https://github.com/01org/corelibs-galileo)。若脱离Arduino IDE，使用[官网提供的工具链](https://downloadmirror.intel.com/24619/eng/galileo-toolchain-20150120-windows.zip)一样可以完成交叉编译。

可见，Arduino Sketch的开发过程是典型的Linux嵌入式开发。

### GPIO和低级总线操作

操作系统将可用GPIO（包括控制复用器的内部端口）抽象为目录和文件，位于`/sys/class/gpio`目录下，直接读写这些文件即可操作GPIO。例如，执行

```
echo 3 > /sys/class/gpio/unexport
echo 3 > /sys/class/gpio/export
echo out > /sys/class/gpio/gpio3/direction
echo 1 > /sys/class/gpio/gpio3/value
```

将点亮板子上的LED。Arduino库的digitalWrite等函数的内部本质上就是这样的文件操作。但由于Quark内部的GPIO有两种，板子上的选通关系也比较复杂，所以接口内部的实现也有一些比较复杂的细节。参考资料[[2，3]](#参考资料与文献)详细分析了Linux系统中GPIO操作的原理，值得一读。

![图4 GPIO编号的对应关系](./image/G8/galileo-io.png)

I<sup>2</sup>C和SPI按照通常方法即可操作，唯一需要注意的是板子上有个跳线用来控制I/O扩展器的I<sup>2</sup>C地址。GitHub上已经积累了若干器件的API，直接拿来用就可以了。

### 高级应用

很多PC能做的事情，例如连接摄像头等外设进行图像处理、搭建HTTP服务器这些事情都可以做。以OpenCV图像处理为例：由于官方Yocto系统中已经集成了OpenCV，所以可以实现很多机器视觉的功能。但由于处理器速度是硬伤，所以不能跑太复杂的图像应用。

测试：运行下列Python代码，即可从USB摄像头捕捉图像，并且在上面添加文字并保存。

```
import cv2
import numpy as np

cap = cv2.VideoCapture(0)
ret,frame = cap.read()
cv2.putText(frame, 'BD4SUR\'s Galileo - OpenCV Python Test', (100,100),  cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255,255,255),2)
cv2.imwrite("/home/root/haruhi2.png", frame, [int(cv2.IMWRITE_PNG_COMPRESSION), 0])
```

关于Python+OpenCV的更多内容可参考：

- [OpenCV-Python Tutorial](http://opencv-python-tutroals.readthedocs.io/en/latest/)
- [Python opencv 使用摄像头捕获视频并显示](http://blog.csdn.net/huanglu_thu13/article/details/52337013)

至于C语言的OpenCV使用，可以参考《Intel Edison智能硬件开发指南》书中的讲解，示例代码在 https://github.com/cheaven/edison_native 。

![图5 对摄像头捕捉的图像作Canny卷积，实时输出在SSD1306屏幕上](./image/G8/galileo-opencv-canny.jpg)

## 2.3 使用Node.js开发物联网应用

Intel提供了自家开发板的JavaScript集成开发环境——XDK。XDK包含丰富的示例程序，以及众多的基于MRAA库的元件库，可以供初学者快速上手。

MRAA库的[在线文档](http://iotdk.intel.com/docs/master/mraa/index.html)。


# 参考资料

+ [重磅！英特尔将要停产3款开发板，物联网之梦终于要醒了.](http://www.eeboard.com/news/wulianwang-4/)
+ [Intel Galileo Gen 2开发板的性能评估、使用技巧和实现分析.](http://www.csksoft.net/blog/post/306.html)
+ [Intel Galileo 开发板的体验、分析和应用.](http://www.csksoft.net/blog/post/304.html)
+ [Intel Galileo Datasheet.](https://www.intel.com/content/dam/www/public/us/en/documents/datasheets/galileo-g1-datasheet.pdf)
+ [Intel Galileo Board User Guide.](https://www.intel.com/content/dam/support/us/en/documents/processors/embedded-processors/galileo_boarduserguide_330237_002.pdf)
+ [Galileo+OneWire](https://communities.intel.com/message/245840)
+ [Using 1-Wire device with Intel Galileo](http://www.cnblogs.com/jikexianfeng/p/6279260.html)
+ [Getting Started with the Intel Galileo Board on Windows](https://software.intel.com/en-us/get-started-galileo-windows)
+ [Connecting to a Wi-Fi Network](https://software.intel.com/en-us/node/519955)
+ [Product Brief](https://www.intel.com/content/dam/support/us/en/documents/galileo/sb/galileoprodbrief_329680_003.pdf)
+ [clloader](https://github.com/01org/clloader/tree/galileo/bootloaders/izmir)

> ### 重要资源导航

> - [Galileo产品首页](https://software.intel.com/en-us/iot/hardware/discontinued)（Intel弃坑Maker产品合集）
-[Galileo官方社区](https://communities.intel.com/community/tech/galileo)
-[Intel支持页](https://www.intel.com/content/www/us/en/support/products/78919/boards-and-kits/intel-galileo-boards/intel-galileo-board.html)
-[Arduino首页](https://www.arduino.cc/en/ArduinoCertified/IntelGalileo)
-[Galileo入门指南](https://software.intel.com/en-us/get-started-galileo-windows)
-[软件资源下载](https://downloadcenter.intel.com/search?keyword=Galileo)
-[文档资源](https://software.intel.com/en-us/iot/hardware/galileo/documentation)（不完全，更多文档需要在支持页查找）
-[IoT DevKit](http://iotdk.intel.com)（包含系统镜像、源码、软件仓库，以及MRAA和UPM的文档）
-[Galileo常见问题解答](https://www.intel.com/content/www/us/en/support/articles/000006413/boards-and-kits/intel-galileo-boards.html)
-[非官方软件源](http://alextgalileo.altervista.org/package-repo-configuration-instructions.html)（只可用于默认uClibc-based操作系统）
-[Arduino Galileo核心库](https://github.com/01org/corelibs-galileo)

> ### 官方文档目录

> 下列文档是Intel官方编写的支持文档，目录可能会有遗漏之处。后文中凡是引用官方文档的部分，都可以在这里找到，一般不显式注明。链接可能会失效，如果失效，可以从上面列出的地址搜索对应的文档。此外，笔者将抽时间将所有官方文档备份到网盘，并提供链接。

> - [Datasheet](https://www.intel.com/content/dam/support/us/en/documents/galileo/sb/galileo_datasheet_329681_003.pdf)
- [Product Brief](https://www.intel.com/content/dam/support/us/en/documents/galileo/sb/galileoprodbrief_329680_003.pdf)
- [User Guide](https://www.intel.com/content/dam/support/us/en/documents/processors/embedded-processors/galileo_boarduserguide_330237_002.pdf)
- [Board Schematic](https://www.intel.com/content/dam/support/us/en/documents/galileo/sb/galileo_schematic.pdf)
- [IO Mappings](https://www.intel.com/content/dam/support/us/en/documents/galileo/sb/galileoiomappingrev2.pdf)
- [Quark X1000 Datasheet](https://www.intel.cn/content/www/cn/zh/embedded/products/quark/quark-x1000-datasheet.html)（失效）
- [Quark X1000 BSP Build Guide](https://www.intel.com/content/dam/support/us/en/documents/processors/quark/sb/quark_bspbuildguide_329687_001.pdf)
- [User Guide for Firmware Updater Tools](https://www.intel.com/content/dam/support/us/en/documents/galileo/intelgalileofirmwareupdateruserguide-1.0.4.pdf)
- [Quark BSP Download](https://downloadcenter.intel.com/download/23197/Intel-Quark-SoC-X1000-Board-Support-Package-BSP)

> ### 其余参考资料

> -[Nav Linux](http://blog.dimitridiakopoulos.com/2014/03/18/navigating-linux-on-intel-galileo/)
-[Galileo Curriculum](https://www.intel.com/content/www/us/en/support/articles/000022551/programs.html)
-[Yocto Build x264 Error](https://www.intel.com/content/www/us/en/support/articles/000006363/boards-and-kits/intel-galileo-boards.html)
-[Power Consumption](https://www.intel.com/content/www/us/en/support/articles/000006250/boards-and-kits/intel-galileo-boards.html)
- [SystemD](http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html)
