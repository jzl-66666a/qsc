### 金泽霖的前端入门经历
#### part1:一些感想
从未想到自己能在不到三天的时间内初步学会一门(也许是三门)编程语言。~~也逐渐明白了b站大学的实力~~\
html作为标记语言以及和他配套的css其实比c++好学一些，js以及jQuery作为脚本语言比c++更多的用到了面向对象。和以前打过的算法竞赛区别还是蛮大的\
前端不需要事无巨细的学，只要对总体构成有个了解之后想用什么方法，属性baidu一下就可。
~~前端三巨头的可读性和趣味性比c++算法竞赛高多了~~
#### part2一些困难
主要是不知道如何实现示例给出的样式 ~~(感觉提交的代码也没有完全做到)~~,开始想用ul实现发现每个问题都要一个ul不如直接div,然后为了写出和示例一样的格式不断地调整实现方式(比如Q&A的背景和交互部分干脆分别写一个)后来发现4个问题框不能用同一段js代码后后干脆复制了4遍 ~~(乐)~~ 以及为了实现奇怪的想法写出的意义不明的东西:
```javascript
if (flag1[0] === 0) {
      $("#A1").stop().slideUp("slow");
      $("#b1").stop().slideUp("slow");
      document.getElementById("Q1").style.borderBottomLeftRadius = "10px";
      document.getElementById("Q1").style.borderBottomRightRadius = "10px";
      flag1[0] = 1;
    } else {
      $("#A1").stop().slideDown("slow");
      $("#b1").stop().slideDown("slow");
      document.getElementById("Q1").style.borderBottomLeftRadius = 0;
      document.getElementById("Q1").style.borderBottomRightRadius = 0;
      flag1[0] = 0;
    }
```
#### part3:踩过的坑
html在运行前没有类似c++编译前的语法检查，看不出来自己是否写错了代码，以至于我都是靠vs code中是否变色来初步检查的。\
开始使用.slideToggle的时候不知道为什么点一下会自动先下拉再收回，于是我写了上面那段代码。 \
不知道引用jQuery需要引入jQurey.js文件
### 最后，希望能得到学长学姐的认可，让我加入求是潮一起开发(^_^)
