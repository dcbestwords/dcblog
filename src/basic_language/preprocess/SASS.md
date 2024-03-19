---
title: sass 应用
icon: scss
---

## 一、Sass简介

Sass 又名 SCSS 是 CSS 预处理器之一，诞生于2007年,采用 Ruby 语言编写的一款 CSS 预处理语言。最初它是为了配合 HAML（一种缩进式 HTML 预编译器）而设计的，因此有着和 HTML 一样的缩进式风格。

 Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：

1. 文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名
2. 语法书写方式不同，Sass 是以严格的 **缩进式** 语法规则来书写，不带大括号 {} 和分号 ; ，而 SCSS 的语法书写和 CSS 语法书写方式类似。

---

## 二、Sass与CSS写法的差异

由于 Sass 是基于 Ruby 写出来的所以沿用了 Ruby 的书写规范，不带有大括号 " {} "和分号" ; "

CSS的写法：

```css
body{
  color: #fff;
  background: #f36;
}
```

Sass的写法：

```sass
body
  color: #fff
  background: #f36
```


SCSS的写法：

```scss
body{
  color: $white;
  background: $f36;
}
```

---

### 1. Sass语法格式

这里说的 Sass 语法是 Sass 的最初语法格式，通过 tab 键控制缩进的一种语法规则，而且这种缩进要求非常严格。另外其不带有任何的分号和大括号。常常把这种格式称为 Sass 老版本，其文件名以“.sass”为扩展名。<br/>
假设我们有一段这样的 CSS 代码：

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

Sass写法

```sass
$font-stack: Helvetica, sans-serif
$primary-color: #333
body
  font: 100% $font-stack
  color: $primary-color
```

<p style="color:red;">这种语法格式对于前端人员都不太容易接受，而且容易出错。</p>

### 2. SCSS语法格式

SCSS 是 Sass 的新语法格式，从外形上来判断他和 CSS 长得几乎是一模一样，其文件名格式常常以“.scss”为扩展名。<br/>
上面那段代码用SCSS写法：

```scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
body {
  font: 100% $font-stack;
  color: $primary-color;
}
```


使用 Sass 新的语法规则，而文件扩展名依旧使用的是“.sass”造成编译不出来。在此特别提醒：<span style="color:red;">“.sass”的格式只能使用 Sass 老语法规则（缩进规则），“.scss”使用的是 Sass 的新语法规则，也就是 SCSS 语法规则（类似 CSS 语法格式）。</span>

---

## 三、变量

```scss
$变量名称: 变量值；
```

### 1. 普通变量与默认变量

普通变量定义后可以在全局范围内使用:

```scss
$fontSize: 12px;
body{
    font-size: $fontSize;
}
```


默认变量仅需在值后面加上 !default:

```scss
$baseLineHeight:1.5 !default;
body{
    line-height: $baseLineHeight; 
}
```

sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式只需要在默认变量之前重新声明下变量即可。

### 2. 变量的调用

[变量的调用](http://www.imooc.com/code/6957)

**全局变量和局部变量**

```scss
$color: yellow !default; //定义全局变量
.div1{
	color:$color;	//调用全局变量
}
.div2{
	$color: red;	//定义局部变量
	p{
		color: $color;
	}
}
```

**什么时候声明变量？**

建议创建变量只适用于感觉确有必要的情况下，不要为了某些骇客行为而声明新变量，基本上没有理由声明一个永远不需要更新或只在单一地方使用变量。只有满足下述标准时方可创建新变量：

1. 该值至少重复出现了2次；
2. 该值至少可能被更新一次；
3. 该值所有的表现都与变量有关。

---

## 四、嵌套

###  属性嵌套

```css 
.box{
	border-top: 1px solid red;
	border-right: 2px solid yellow;
}
```

在SASS中的写法：
```scss
.box{
	border:{
		top: 1px solid red;
		right: 2px solid yellow;
	}
}
```

另外还有伪类嵌套和选择器嵌套，因容易出错，所以不做讲解。

##  五、混合宏 mixin

在单独的属性需要统一处理时，变量是个不错的选择。但当你的样式变得越来越复杂，需要重复使用大段样式时混合宏就会变得很有意义。

### 1. 声明混合宏

不带参数的混合宏：

```scss
@mixin border-radius{
	border-radius: 50%;
}
@mixin 是用来声明混合宏的关键词，border-radius 是混合宏的名称，花括号里的是复用的样式代码。
```

### 2. 调用混合宏

使用@mixin声明了一个混合宏后，我们使用 @include 来调用声明好的混合宏：

```scss
@mixin border-radius{	//声明混合宏
	border-radius: 50%;
}
button{
	@include border-radius;	//调用混合宏
}
```

### 3. 混合宏的参数－传一个不带值的参数

```scss
@mixin border-radius($radius){
	border-radius: $radius;		//在混合宏"border-radius"中定义了一个不带任何数值的参数"$radius"
}
.box{
	@include border-radius(10px);	//在调用时候给这个混合宏传一个参数值
}
```

### 4. 混合宏的参数－传一个带值的参数

```scss
@mixin border-radius($radius:10px){	//给混合宏的参数传一个默认值；
  border-radius: $radius;
}
//在调用时只需要调用默认的混合宏"border-radius;"
button{
	@include border-radius;
}
//但有时某些元素的值又不一样，那么可以这样写：
button{
	@include border-radius(50px);
}
```

### 5. 混合宏的参数－传多个参数

```scss
@mixin center($width,$height){
	width:$width;
	height:$height;
	position: absolute;top: 50%;left: 50%;
	margin-top: -($height)/2;
	margin-left:-($width)/2;
}
.centerBox{
	@include center(500px,250px);
}
```

---

## 六、扩展／继承

SASS中，通过关键词"<mark>@extend</mark>"来继承已存在的类样式块。
```scss
.button{
	border: 1px solid #ccc;
	padding: 5px 10px;
	font-size: 20px;
}
.buttonPrimary{
	background: #f36;
	color: white;
	@extend .button;
}
.buttonSecond{
	background: #ddd;
	color: #000;
	@extend .button;
}
```

编译以后：
```scss
.button,.buttonPrimary,.buttonSecond{	//在SASS中的继承可以继承类样式块中所有样式代码，并且编译出来会将选择器合并
	border: 1px solid #ccc;
	padding: 5px 10px;
	font-size: 20px;
}
.buttonPrimary{
	background: #f36;
	color: white;
}
.buttonSecond{
	background: #ddd;
	color: #000;
}
```

---

## 七、占位符

<mark>%</mark>placeholder 声明的代码如果不被@extend调用的话，不会产生任何代码。取代从前CSS中的代码冗余的情形。

```scss
%marginTop5{
	margin-top: 5px;
}
%paddingTop5{
	padding-top: 5px;
}
```

这段代码没有被 @extend 调用，他并没有产生任何代码块，只是静静的躺在你的某个 SCSS 文件中。只有通过 @extend 调用才会产生代码：
```scss
%marginTop5 {
  margin-top: 5px;
}
%paddingTop5{
  padding-top: 5px;
}
button {
  @extend %marginTop5;
  @extend %paddingTop5;
}
.content {
  @extend %marginTop5;
  span {
    @extend %paddingTop5;
  }
}
```

编译出来的CSS：

```css
button, .content {
  margin-top: 5px;
}
button, .content span {
  padding-top: 5px;
}
```

由以上代码可以看出，通过@entend调用的占位符编译出来的代码会将代码合并在一起，让代码变的更为干净易读。同时，也更突出了@extend的强大。

---

## 八、分析

什么时候该用混合宏 @mixin、什么时候该用继承 @extend、什么时候该用占位符%呢？

<span style="color:red;">混合宏的使用</span>：它不会自动合并相同的样式代码，如果在样式文件中调用同一个混合宏，会产生多个对应的样式代码，造成代码的冗余。不过他并不是一无事处，他可以<span style="color:red;">传参数</span>。如果你的代码块中涉及到变量，建议使用混合宏来创建相同的代码块。

<span style="color:red;">继承</span>：使用继承后，编译出来的 CSS 会将使用继承的代码块合并到一起，通过组合选择器的方式展现，这样编译出来的代码相对于混合宏来说要干净易读。但是它<span style="color:red;">不能传变量参数</span>。如果你的代码块不需要传任何变量参数，而且有一个基类已在文件中存在，那么建议使用继承。

<span style="color:red;">占位符</span>：使用占位符编译出来的 CSS 代码和使用继承基本上是相同的，只是不会在代码中生成占位符 marginTop 的选择器。那么占位符和继承的主要区别的，“<span style="color:red;">占位符是独立定义，不调用的时候是不会在 CSS 中产生任何代码；继承是首先有一个基类存在，不管调用与不调用，基类的样式都将会出现在编译出来的 CSS 代码中。</span>”

|          | 混合宏                                                       | 继承                                                         | 占位符                                                       |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 声明方式 | @mixin                                                       | .class                                                       | %placeholder                                                 |
| 调用方式 | @include                                                     | @extend                                                      | @extend                                                      |
| 使用环境 | 相同代码块需要在不同环境传递不同值时，可通过混合宏定义重复使用的代码块。不足之处在于编译出来的CSS代码文件臃肿、代码冗余。 | 相同代码块不需要传递不同的值，并且此代码块已在Sass文件中定义，可通过Sass的继承来调用已存在的基类，会将调用相同基类的代码合并在一起。不足之处在于如果基类并不存在于HTML结构时，不管调用与否，在编译出的CSS中都将产生基类对应的样式代码。 | 与继承基本类似。不同之处在于相同代码块并没有在基类中存在，而是额外声明。如果不调用已声明的占位符，将不会产生任何样式代码，如果在不同选择器调用占位符，那么编译出的CSS代码将会把相同的代码合并在一起。 |



---

## 九、注释

1. `/**/`;
2. `//`

两者的区别在于`/**/`的写法会在编译出来的CSS中显示，而`//`则不会。

---

## 十、Sass对CSS扩展的功能

### 1. SassScript语法

在Sass中包含以下几种数据类型： 

1. 数字：1、2、10px； 
2. 字符串：bar、"for"; 
3. 颜⾊：blue、#ccc、rgba(); 
4. 布尔型：true、false; 
5. 空:null;
6.  值列表：⽤空格或逗号分开：1.5em 1em、Helvetica,Arial,sans-serif；

SassScript也支持其他CSS属性值，比如unicode范围，或!important声明。然⽽Sass⼀律将它们视为无引号字符串。

字符串 

- 有引号字符串
- 无引号字符串 

在编译CSS文件时不会改变其类型，除了使⽤ ==#{}== 插值语句时，==有引号字符串将被编译为无引号字符串==,这样方便了在混合指令中选用选择器名。

```scss
@mixin firefox-message($selector) {
 body.firefox #{$selector}:before {
 	content: "Hi, Firefox users!";
 }
}
@include firefox-message(".header");
```

被编译为：

```css
body.firefox .header:before {
 content: "Hi, Firefox users!"; 
}
```

---

## 十一、Sass中指令的运用

**加法**

在变量或属性中，都可以做加法运算：
```scss
.box{
	width:20px+8in;	//加号间不能有空格，绝对单位都能运算，em、rem等相对当前字体都不能运算。能换算的都会换算成px，不能换算的都会报错，有个例外就是不带单位就相当于0.
}
```

**减法**

```scss
$full-width: 960px;
$side-width: 200px;
.content{
	width: $full-width - side-width;	//减号间要有空格，以免被认作连字符
}
```


**乘法**

乘法运算与加减法略有不同，当一个单位同时声明两个值时会有问题：
```scss
.box{
	width:10px*2px;	//报错
}
```

两个值单位相同只需为一个数值提供单位：

```scss
.box{
	width:10px*2;	
}
```


Sass乘法运算与加减法一样，在运算中有不同类型的单位时也会报错。

**除法**

众所周知 " / " 符号在CSS中已经作为一种符号使用，因此在Sass中做除法时直接使用 " / "将不会生效，需要给运算的外面添加一个小括号：

```scss
.box{
	width: (100px/2);
}
```

另外，在Sass除法运算中当用变量进行除法运算时 " / "会被识别成除法：

```scss
$width: 100px;
$nums: 10;
.item{
	width: $width/10;
}
.list{
	width: $width/$nums;
}
```

综上所述，" / "被当作除法运算符时，有以下几种情况：

* 如果数值或它的任意部分是存储在一个变量中或是函数的返回值。
* 如果数值被圆括号包围。
* 如果数值是另一个数学表达式的一部分。

如下：

```scss
p {
  font: 10px/8px;             // 纯 CSS，不是除法运算
  $width: 1000px;
  width: $width/2;            // 使用了变量，是除法运算
  width: round(1.5)/2;        // 使用了函数，是除法运算
  height: (500px/2);          // 使用了圆括号，是除法运算
  margin-left: 5px + 8px/2px; // 使用了加（+）号，是除法运算
}
```


Sass的除法运算还有一个情况。在乘法运算中，如果两个值带有相同单位，出来的结果并不是我们需要的结果。但在除法运算中，如果两个值带有相同的单位值时，会得到一个不带单位的数值：

```scss
.box{
	width: (100px/100px);	//得到width:10;
}
```

**变量计算**

```scss
$content-width: 720px;
$sidebar-width: 220px;
$gutter: 20px;

.container {
  width: $content-width + $sidebar-width + $gutter;
  margin: 0 auto;
}
```

**数字运算**

利用括号可以进行数学中的运算法则：

```scss
.box{
	width: ((220px + 720px) - 11 * 20 ) / 12 ;
}
```


**颜色运算**

所有算数运算都支持颜色值，并且是分段运算的，红、绿、蓝各颜色分段单独进行运算：

```scss
p {
  color: #010203 + #040506;
}
```

计算公式为 01 + 04 = 05、02 + 05 = 07 和 03 + 06 = 09， 并且被合成为：color: #050709;

算数也能将数字和颜色值一起运算：

```scss
p {
  color: #010203 * 2;
}
```

计算公式为 01 * 2 = 02、02 * 2 = 04 和 03 * 2 = 06， 并且被合成为：color: #020406;

**字符运算**

```scss
$content: "Hello" + "" + "Sass!";
.box:before {
  content: " #{$content}";
}
```

如果有引号的字符串被添加了一个没有引号的字符串 （也就是，带引号的字符串在 + 符号左侧）， 结果会是一个有引号的字符串。 同样的，如果一个没有引号的字符串被添加了一个有引号的字符串 （没有引号的字符串在 + 符号左侧）， 结果将是一个没有引号的字符串。 例如：

```scss
p:before {
  content: "Foo " + Bar;
  font-family: sans- + "serif";
}
```

编译出CSS：

```css
p:before {
  content: "Foo Bar";
  font-family: sans-serif; 
}
```

