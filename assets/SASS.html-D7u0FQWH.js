import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o,c as l,a as s,b as n,d as p,e as a}from"./app-qRgzBIvm.js";const i="/dcblog/assets/使用分析-rNI2xJZd.png",u={},d=a(`<h2 id="一、sass简介" tabindex="-1"><a class="header-anchor" href="#一、sass简介"><span>一、Sass简介</span></a></h2><p>Sass 又名 SCSS 是 CSS 预处理器之一，诞生于2007年,采用 Ruby 语言编写的一款 CSS 预处理语言。最初它是为了配合 HAML（一种缩进式 HTML 预编译器）而设计的，因此有着和 HTML 一样的缩进式风格。</p><p>Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：</p><ol><li>文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名</li><li>语法书写方式不同，Sass 是以严格的 <mark>缩进式</mark> 语法规则来书写，不带大括号 {} 和分号 ; ，而 SCSS 的语法书写和 CSS 语法书写方式类似。</li></ol><hr><h2 id="二、sass与css写法的差异" tabindex="-1"><a class="header-anchor" href="#二、sass与css写法的差异"><span>二、Sass与CSS写法的差异</span></a></h2><p>由于 Sass 是基于 Ruby 写出来的所以沿用了 Ruby 的书写规范，不带有大括号 &quot; {} &quot;和分号&quot; ; &quot;</p><p>CSS的写法：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #f36<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass的写法：</p><div class="language-sass line-numbers-mode" data-ext="sass" data-title="sass"><pre class="language-sass"><code><span class="token selector">body</span>
<span class="token property-line">  <span class="token property">color</span><span class="token punctuation">:</span> #fff</span>
<span class="token property-line">  <span class="token property">background</span><span class="token punctuation">:</span> #f36</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SCSS的写法：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token selector">body</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$white</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$f36</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="_1-sass语法格式" tabindex="-1"><a class="header-anchor" href="#_1-sass语法格式"><span>1. Sass语法格式</span></a></h3><p>这里说的 Sass 语法是 Sass 的最初语法格式，通过 tab 键控制缩进的一种语法规则，而且这种缩进要求非常严格。另外其不带有任何的分号和大括号。常常把这种格式称为 Sass 老版本，其文件名以“.sass”为扩展名。<br> 假设我们有一段这样的 CSS 代码：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass写法</p><div class="language-sass line-numbers-mode" data-ext="sass" data-title="sass"><pre class="language-sass"><code><span class="token variable-line"><span class="token variable">$font-stack</span><span class="token punctuation">:</span> Helvetica, sans-serif</span>
<span class="token variable-line"><span class="token variable">$primary-color</span><span class="token punctuation">:</span> #333</span>
<span class="token selector">body</span>
<span class="token property-line">  <span class="token property">font</span><span class="token punctuation">:</span> 100<span class="token operator">%</span> <span class="token variable">$font-stack</span></span>
<span class="token property-line">  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>这种语法格式对于前端人员都不太容易接受，而且容易出错。</mark></p><h3 id="_2-scss语法格式" tabindex="-1"><a class="header-anchor" href="#_2-scss语法格式"><span>2. SCSS语法格式</span></a></h3><p>SCSS 是 Sass 的新语法格式，从外形上来判断他和 CSS 长得几乎是一模一样，其文件名格式常常以“.scss”为扩展名。</p><p>上面那段代码用SCSS写法：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-stack</span></span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 100% <span class="token variable">$font-stack</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Sass 新的语法规则，而文件扩展名依旧使用的是“.sass”造成编译不出来。在此特别提醒： <mark>“.sass”的格式只能使用 Sass 老语法规则（缩进规则），“.scss”使用的是 Sass 的新语法规则，也就是 SCSS 语法规则（类似 CSS 语法格式）。</mark></p><hr><h2 id="三、前置知识" tabindex="-1"><a class="header-anchor" href="#三、前置知识"><span>三、前置知识</span></a></h2><p>Sass 提供了一些调试语句，有：</p><ul><li><code>@error</code></li><li><code>@warn</code></li><li><code>@debug</code></li></ul><h3 id="_1-error" tabindex="-1"><a class="header-anchor" href="#_1-error"><span>1. <code>@error</code></span></a></h3><p>当编写带有参数的 mixin 或函数时，通常希望接收到正确的参数，如果调用时没有传递正确的参数，应该通知用户并且停止运行。</p><p>Sass 通过 <code>@error &lt;expression&gt;</code> 。它会在控制台输出表达式返回的值（通常是一个字符串），一旦打印出错误，Sass 就停止编译，并抛出错误信息。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> text-align <span class="token punctuation">(</span><span class="token variable">$align</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token punctuation">(</span><span class="token variable">$align</span> <span class="token operator">!=</span> left <span class="token operator">or</span> <span class="token variable">$align</span> <span class="token operator">!=</span> center<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@error</span> <span class="token string">&quot;调用 text-align 只能传递 left 或 center 值&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token property">text-align</span><span class="token punctuation">:</span> <span class="token variable">$align</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

.div</span> <span class="token punctuation">{</span>
  <span class="token comment">// 传递一个不被允许的参数，会在控制台抛出错误信息</span>
  <span class="token keyword">@include</span> <span class="token function">text-align</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-warn" tabindex="-1"><a class="header-anchor" href="#_2-warn"><span>2. <code>@warn</code></span></a></h3><p>用法与 <code>@error</code> 相同，但与 <code>@error</code> 不同的是，它不会导致 Sass 停止编译，只是在控制台抛出警告信息。</p><h3 id="_3-debug" tabindex="-1"><a class="header-anchor" href="#_3-debug"><span>3. <code>@debug</code></span></a></h3><p>通过 <code>@debug &lt;expression&gt;</code> 可以很方便地在控制台打印出表达式返回的值。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@debug</span> <span class="token string">&quot;1 + 1 = #{1 + 1}&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 1 + 1 = 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-注释" tabindex="-1"><a class="header-anchor" href="#_4-注释"><span>4. 注释</span></a></h3><p>sass中的注释主要有以下两种：</p><ol><li><code>/**/</code>;</li><li><code>//</code></li></ol><p>两者的区别在于<code>/**/</code>的写法会在编译出来的CSS中显示，而<code>//</code>则不会。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// 这个注释不会在css的编译结果中出现.</span>

<span class="token comment">/* 这个注释会在除压缩模式外的css的编译结果中出现. */</span>

<span class="token comment">/* 还可以包含一些插值:
 * 1 + 1 = #{1 + 1} */</span>

<span class="token comment">/*! 这个注释任何情况下都会出现在css的编译结果中 */</span>

p <span class="token comment">/* 多行注释可以写在任何允许
   * 空白输入的地方 */</span> <span class="token selector">.sans </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> <span class="token comment">// So can single-line commments.</span>
        sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-嵌套" tabindex="-1"><a class="header-anchor" href="#_5-嵌套"><span>5. 嵌套</span></a></h3><h4 id="属性嵌套" tabindex="-1"><a class="header-anchor" href="#属性嵌套"><span>属性嵌套</span></a></h4><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
	<span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在SASS中的写法：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token selector">border:</span><span class="token punctuation">{</span>
		<span class="token property">top</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
		<span class="token property">right</span><span class="token punctuation">:</span> 2px solid yellow<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外还有伪类嵌套和选择器嵌套，因容易出错，所以不做讲解。</p><h2 id="四、变量" tabindex="-1"><a class="header-anchor" href="#四、变量"><span>四、变量</span></a></h2><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code>$变量名称<span class="token punctuation">:</span> 变量值；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-使用场合" tabindex="-1"><a class="header-anchor" href="#_1-使用场合"><span>1. 使用场合</span></a></h3><p>变量的用于一般包括以下几种：</p><ul><li><p>设置样式值</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$primary-color</span></span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$primary-color</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$font-size</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>计算其他变量的值</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$base-spacing</span></span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$large-spacing</span></span><span class="token punctuation">:</span> <span class="token variable">$base-spacing</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span>

<span class="token selector">button </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token variable">$large-spacing</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>作为参数传递给函数和 mixins</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$base-padding</span></span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">padding</span><span class="token punctuation">(</span><span class="token variable">$direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">padding-<span class="token variable">#{$direction}</span></span><span class="token punctuation">:</span> <span class="token variable">$base-padding</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">padding</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>条件和循环语句中的使用</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme</span></span><span class="token punctuation">:</span> light<span class="token punctuation">;</span>

<span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$theme</span> == light </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$background-color</span></span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$background-color</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$background-color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>利用插值语法作为属性名或属性值的一部分</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$name</span></span><span class="token punctuation">:</span> <span class="token string">&quot;btn&quot;</span><span class="token punctuation">;</span>
<span class="token selector"><span class="token variable">$top-or-bottom</span>: top
<span class="token variable">$left-or-right</span>: left

.icon-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/icons/#{$name}.svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">#{$top-or-bottom}</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">#{$left-or-right}</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>Sass 变量是命令式的，这意味着如果使用一个变量然后更改其值，之前的使用将保持不变。CSS变量是声明式的，这意味着如果更改其值，它将影响之前的使用和之后的使用。</p></blockquote><h3 id="_2-默认变量" tabindex="-1"><a class="header-anchor" href="#_2-默认变量"><span>2. 默认变量</span></a></h3><p>普通变量定义后可以在全局范围内使用:</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$fontSize</span></span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$fontSize</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认变量仅需在值后面加上 !default:</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$baseLineHeight</span></span><span class="token punctuation">:</span>1.5 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token selector">body</span><span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token variable">$baseLineHeight</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式只需要在默认变量之前重新声明下变量即可。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// _library.scss</span>
<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #000 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.25rem <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$box-shadow</span></span><span class="token punctuation">:</span> 0 0.5rem 1rem <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$black</span><span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">code </span><span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$border-radius</span><span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$box-shadow</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// style.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;library&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #222<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.1rem
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">code</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.1rem<span class="token punctuation">;</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0.5rem 1rem <span class="token function">rgba</span><span class="token punctuation">(</span>34<span class="token punctuation">,</span> 34<span class="token punctuation">,</span> 34<span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-全局变量和局部变量" tabindex="-1"><a class="header-anchor" href="#_3-全局变量和局部变量"><span>3. 全局变量和局部变量</span></a></h3>`,65),r={href:"http://www.imooc.com/code/6957",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> yellow <span class="token statement keyword">!default</span><span class="token punctuation">;</span> <span class="token comment">//定义全局变量</span>
<span class="token selector">.div1</span><span class="token punctuation">{</span>
	<span class="token property">color</span><span class="token punctuation">:</span><span class="token variable">$color</span><span class="token punctuation">;</span>	<span class="token comment">//调用全局变量</span>
<span class="token punctuation">}</span>
<span class="token selector">.div2</span><span class="token punctuation">{</span>
	<span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>	<span class="token comment">//定义局部变量</span>
	<span class="token selector">p</span><span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>  <span class="token comment">// //调用局部变量</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据声明变量的位置，可以将变量分为全局变量和局部变量。如果需要在局部范围内（例如在 mixin 中）设置全局变量的值，则可以使用标志<code>!global</code>。标记为<code>!global</code>的变量声明将始终分配给全局范围。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> first global value<span class="token punctuation">;</span>

<span class="token selector">.content </span><span class="token punctuation">{</span>
  <span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> second global value !global<span class="token punctuation">;</span> <span class="token comment">// 此时设置的是全局变量的值</span>
  <span class="token property">value</span><span class="token punctuation">:</span> <span class="token variable">$variable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar </span><span class="token punctuation">{</span>
  <span class="token property">value</span><span class="token punctuation">:</span> <span class="token variable">$variable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">value</span><span class="token punctuation">:</span> second global value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token property">value</span><span class="token punctuation">:</span> second global value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>此<code>!global</code>标志只能用于设置已在文件顶层声明的变量。不能用于声明新变量。</p></blockquote><p><strong>什么时候声明变量？</strong></p><p>建议创建变量只适用于感觉确有必要的情况下，不要为了某些骇客行为而声明新变量，基本上没有理由声明一个永远不需要更新或只在单一地方使用的变量。只有满足下述标准时方可创建新变量：</p><ol><li>该值至少重复出现了2次；</li><li>该值至少可能被更新一次；</li><li>该值所有的表现都与变量有关。</li></ol><h3 id="_4-插值" tabindex="-1"><a class="header-anchor" href="#_4-插值"><span>4. 插值</span></a></h3><p>插值几乎可以在 Sass 样式表的任何地方使用，以将SassScript 表达式的结果嵌入到 CSS 块中。只需<code>#{}</code>在以下任意位置包装表达式即可：</p><ul><li>样式规则中的选择器</li><li>声明中的属性名称</li><li>自定义属性值</li><li>CSS 规则</li><li>@extends</li><li>@import</li><li>带引号或不带引号的字符串</li><li>普通的CSS函数名称</li><li>注释<code>/* */</code></li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">corner-icon</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$top-or-bottom</span><span class="token punctuation">,</span> <span class="token variable">$left-or-right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token selector">.icon-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;/icons/#{$name}.svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">#{$top-or-bottom}</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">#{$left-or-right}</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@include</span> <span class="token function">corner-icon</span><span class="token punctuation">(</span><span class="token string">&quot;mail&quot;</span><span class="token punctuation">,</span> top<span class="token punctuation">,</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.icon-mail</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;/icons/mail.svg&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插值返回不带引号的字符串</p><hr><h2 id="五、数据类型" tabindex="-1"><a class="header-anchor" href="#五、数据类型"><span>五、数据类型</span></a></h2><p>Sass 支持多种值类型，其中大多数直接来自 CSS。每个表达式都会产生一个值，变量保存值。</p>`,19),v={id:"_1-number",tabindex:"-1"},m={class:"header-anchor",href:"#_1-number"},b={href:"https://sass.bootcss.com/documentation/values/numbers.html",target:"_blank",rel:"noopener noreferrer"},g=a(`<p>Sass 中的数字有两个组成部分：数字本身和它的单位。例如，在 <code>16px</code> 中，数字是 <code>16</code>，单位是 <code>px</code> 。数字可以没有单位，也可以有复杂的单位。如<code>12</code> 或<code>100px</code>。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$num1</span></span><span class="token punctuation">:</span> 100<span class="token punctuation">;</span> <span class="token comment">// 100</span>
<span class="token property"><span class="token variable">$num2</span></span><span class="token punctuation">:</span> 0.8<span class="token punctuation">;</span> <span class="token comment">// 0.8</span>
<span class="token property"><span class="token variable">$num3</span></span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span> <span class="token comment">// 16px</span>
<span class="token property"><span class="token variable">$num4</span></span><span class="token punctuation">:</span> 5px <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// 10px</span>
<span class="token property"><span class="token variable">$num1</span></span><span class="token punctuation">:</span> 5.2e3<span class="token punctuation">;</span> <span class="token comment">// 5200</span>
<span class="token property"><span class="token variable">$num2</span></span><span class="token punctuation">:</span> 6e-2<span class="token punctuation">;</span> <span class="token comment">// 0.06</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass 不区分整数和小数，所以例如 <code>5 / 2</code> 返回 <code>2.5</code> 而不是 <code>2</code> 。</p>`,3),h={id:"_2-string",tabindex:"-1"},y={class:"header-anchor",href:"#_2-string"},x={href:"https://sass.bootcss.com/documentation/values/strings.html",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>Sass 支持两种内部结构相同但呈现方式不同的字符串：带引号的字符串，如 <code>&quot;Helvetica Neue&quot;</code>，以及不带引号的字符串(也称为标识符)，如 <code>bold</code> 。</p><p>可以使用 <code>string.unquote()</code> 函数将带引号的字符串转换为不带引号的字符串，也可以使用 <code>string.quote()</code> 函数将不带引号的字符串转换为带引号的字符串。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:string&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> string.<span class="token function">unquote</span><span class="token punctuation">(</span><span class="token string">&quot;.widget:hover&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// .widget:hover</span>
<span class="token keyword">@debug</span> string.<span class="token function">quote</span><span class="token punctuation">(</span>bold<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;bold&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不带引号的字符串就是写 CSS 标识符。它们可能包括任何地方的插值。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@debug</span> bold<span class="token punctuation">;</span> <span class="token comment">// bold</span>
<span class="token keyword">@debug</span> -webkit-flex<span class="token punctuation">;</span> <span class="token comment">// -webkit-flex</span>
<span class="token keyword">@debug</span> --123<span class="token punctuation">;</span> <span class="token comment">// --123</span>

<span class="token property"><span class="token variable">$prefix</span></span><span class="token punctuation">:</span> ms<span class="token punctuation">;</span>

<span class="token keyword">@debug</span> -<span class="token variable">#{$prefix}</span>-flex<span class="token punctuation">;</span> <span class="token comment">// -ms-flex</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，并不是所有的标识符都被解析为不带引号的字符串:</p><ul><li>CSS 颜色名称被解析为 color 类型。</li><li><code>null</code> 被解析为 Sass 的 <code>null</code> 值。</li><li><code>true</code> 和 <code>false</code> 被解析为 boolean 类型。</li><li><code>not</code>, <code>and</code>, <code>or</code> 被解析为 boolean 操作符</li></ul><p>正因为如此，除非您专门编写使用不带引号的字符串的 CSS 属性值，否则编写带引号的字符串通常是一个好主意。</p><p>Sass有许多字符串函数，它们接受或返回数字作为索引，这些数字指的是字符串中的字符。</p><p>Sass 的字符串中第一个字符的索引为 <code>1</code>，不同于大多数语言索引从 <code>0</code> 开始。</p><p><code>-1</code> 表示字符串中的最后一个字符，<code>-2</code> 表示倒数第二个字符，以此类推。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:string&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> string.<span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Helvetica&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token keyword">@debug</span> string.<span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Neue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 11</span>
<span class="token keyword">@debug</span> string.<span class="token function">slice</span><span class="token punctuation">(</span><span class="token string">&quot;Roboto Mono&quot;</span><span class="token punctuation">,</span> -4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Mono&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),w={id:"_3-color",tabindex:"-1"},$={class:"header-anchor",href:"#_3-color"},q={href:"https://sass.bootcss.com/documentation/values/colors.html",target:"_blank",rel:"noopener noreferrer"},S=a(`<p>Sass 颜色可以写成：</p><ul><li>十六进制代码， 比如 <code>#f2ece4</code>，或者包含透明值的 <code>#b37399aa</code></li><li>CSS 颜色名称， 比如 <code>midnightblue</code> , <code>transparent</code></li><li>函数， 比如 <code>rgb()</code> 、 <code>rgba()</code> 、 <code>hsl()</code> 和 <code>hsla()</code> 。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@debug</span> #f2ece4<span class="token punctuation">;</span> <span class="token comment">// #f2ece4</span>
<span class="token keyword">@debug</span> #b37399aa<span class="token punctuation">;</span> <span class="token comment">// rgba(179, 115, 153, 67%)</span>
<span class="token keyword">@debug</span> midnightblue<span class="token punctuation">;</span> <span class="token comment">// #191970</span>
<span class="token keyword">@debug</span> <span class="token function">rgb</span><span class="token punctuation">(</span>204<span class="token punctuation">,</span> 102<span class="token punctuation">,</span> 153<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #c69</span>
<span class="token keyword">@debug</span> <span class="token function">rgba</span><span class="token punctuation">(</span>107<span class="token punctuation">,</span> 113<span class="token punctuation">,</span> 127<span class="token punctuation">,</span> 0.8<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// rgba(107, 113, 127, 0.8)</span>
<span class="token keyword">@debug</span> <span class="token function">hsl</span><span class="token punctuation">(</span>228<span class="token punctuation">,</span> 7%<span class="token punctuation">,</span> 86%<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// #dadbdf</span>
<span class="token keyword">@debug</span> <span class="token function">hsla</span><span class="token punctuation">(</span>20<span class="token punctuation">,</span> 20%<span class="token punctuation">,</span> 85%<span class="token punctuation">,</span> 0.7<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// rgb(225, 215, 210, 0.7)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={id:"_4-list",tabindex:"-1"},z={class:"header-anchor",href:"#_4-list"},C={href:"https://sass.bootcss.com/documentation/values/lists.html",target:"_blank",rel:"noopener noreferrer"},H=a(`<p>列表包含其他值的序列。在 Sass 中，列表中的元素可以用逗号分隔，如 <code>Helvetica, Arial, sans-serif</code> ，或空格分隔，如 <code>10px 15px 0 0</code> ，但不能混合使用空格和逗号。</p><p>与大多数其他语言不同，Sass 中的列表不需要特殊的方括号，任何用空格或逗号分隔的表达式都可以算作一个列表。当然，也允许使用方括号来编写列表，如 <code>[a b]</code> 或 <code>[a, b]</code> 。这对使用 <code>grid-template-columns</code> 来说是非常有用的。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$border1</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px solid #f00<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #f00<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border3</span></span><span class="token punctuation">:</span> [1px solid #f00]<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border4</span></span><span class="token punctuation">:</span> [1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #f00]<span class="token punctuation">;</span>

<span class="token selector">.div1 </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$border1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.div2 </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$border2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.div3 </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$border3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.div4 </span><span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">$border4</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.div1</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.div2</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.div3</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> [1px solid #f00]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.div4</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> [1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #f00]<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>List的索引同样从1开始，-1表示列表中的最后一个元素</p></blockquote><h4 id="访问某个元素" tabindex="-1"><a class="header-anchor" href="#访问某个元素"><span>访问某个元素</span></a></h4><p>使用 <code>list.nth($list, $index)</code> 函数获取一个列表中的值，第一个参数表示列表，第二个参数表示要获取元素的索引。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;sass:list&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> list.<span class="token function">nth</span><span class="token punctuation">(</span>10px 12px 16px<span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 12px</span>
<span class="token keyword">@debug</span> list.<span class="token function">nth</span><span class="token punctuation">(</span>[line1<span class="token punctuation">,</span> line2<span class="token punctuation">,</span> line3]<span class="token punctuation">,</span> -1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// line3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历列表" tabindex="-1"><a class="header-anchor" href="#遍历列表"><span>遍历列表</span></a></h4><p>使用 <code>@each $ele in $list</code> 语句来遍历一个列表， <code>$ele</code> 表示当前循环的列表元素， <code>$list</code> 表示要遍历的列表。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$sizes</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">,</span> 50px<span class="token punctuation">,</span> 80px<span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$size</span> in <span class="token variable">$sizes</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.icon-<span class="token variable">#{$size}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.icon-40px</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-50px</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-80px</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="追加元素" tabindex="-1"><a class="header-anchor" href="#追加元素"><span>追加元素</span></a></h4><p>使用 <code>list.append($list， $val)</code> 函数，第一个参数为目标列表，第二个参数为要追加的元素，并返回一个在末尾追加了新元素的的新的列表。注意，因为 Sass 列表是不可变的，所以它不会修改原始列表。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;sass:list&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> list.<span class="token function">append</span><span class="token punctuation">(</span>10px 12px 16px<span class="token punctuation">,</span> 25px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10px 12px 16px 25px</span>
<span class="token keyword">@debug</span> list.<span class="token function">append</span><span class="token punctuation">(</span>[col1-line1]<span class="token punctuation">,</span> col1-line2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [col1-line1, col1-line2]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找元素的索引" tabindex="-1"><a class="header-anchor" href="#查找元素的索引"><span>查找元素的索引</span></a></h4><p>使用 <code>list.index($list, $value)</code> 函数，第一个参数为目标列表，第二个参数为目标元素，找到元素返回索引值，找不到返回 <code>null</code> 。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;sass:list&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> list.<span class="token function">index</span><span class="token punctuation">(</span>1px solid red<span class="token punctuation">,</span> 1px<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1</span>
<span class="token keyword">@debug</span> list.<span class="token function">index</span><span class="token punctuation">(</span>1px solid red<span class="token punctuation">,</span> solid<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 2</span>
<span class="token keyword">@debug</span> list.<span class="token function">index</span><span class="token punctuation">(</span>1px solid red<span class="token punctuation">,</span> dashed<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表的不可变性" tabindex="-1"><a class="header-anchor" href="#列表的不可变性"><span>列表的不可变性</span></a></h4><p>Sass 中的列表是不可变的，这意味着列表值的内容永远不会改变。Sass 的列表函数只能返回一个新的列表，而不是修改原始列表。</p><p>不可变性有助于在各个地方共用一个列表时，避免因为列表被更改而出现一些 Bug。</p><p>所以，如果一个变量表示的列表需要修改，应该将新的列表赋值给这个变量。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;sass:list&#39;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$list</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>10px 12px 16px<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$list</span></span><span class="token punctuation">:</span> list.<span class="token function">append</span><span class="token punctuation">(</span><span class="token variable">$list</span><span class="token punctuation">,</span> 25px<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> <span class="token variable">$list</span><span class="token punctuation">;</span> <span class="token comment">// 10px 12px 16px 25px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数列表" tabindex="-1"><a class="header-anchor" href="#参数列表"><span>参数列表</span></a></h4><p>当你声明一个接收任意参数的 mixin 或 function 时，任意参数这个变量将会是一个特殊的列表，称为 <mark>参数列表</mark> 。这个变量就像是一个列表，包含传递给 mixin 或 function 的所有参数，</p><p>如果用户传递的关键字参数，可以将参数列表传递给 <code>meta.keywords()</code> 函数，将返回一个 map 类型的值。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:meta&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">syntax-colors</span><span class="token punctuation">(</span><span class="token variable">$args</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// map 类型的值 (string: #080, comment: #800, variable: #60b)</span>
  <span class="token keyword">@debug</span> meta.<span class="token function">keywords</span><span class="token punctuation">(</span><span class="token variable">$args</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">@each</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$color</span> in meta.<span class="token function">keywords</span><span class="token punctuation">(</span><span class="token variable">$args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token selector">pre span.stx-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">@include</span> <span class="token function">syntax-colors</span><span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$string</span></span><span class="token punctuation">:</span> #080<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$comment</span></span><span class="token punctuation">:</span> #800<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$variable</span></span><span class="token punctuation">:</span> #60b<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">pre span.stx-string</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #080<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">pre span.stx-comment</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #800<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">pre span.stx-variable</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #60b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),T={id:"_5-boolean",tabindex:"-1"},L={class:"header-anchor",href:"#_5-boolean"},N={href:"https://sass.bootcss.com/documentation/values/booleans.html",target:"_blank",rel:"noopener noreferrer"},M=a(`<p>布尔值是逻辑值 <code>true</code> 和 <code>false</code> 。除了它们的字面量形式，布尔值还可以由比较运算符和关系操作符以及许多内置函数（如 <code>math.comparable()</code> 和 <code>map. haskey()</code> ）返回。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> 1px <span class="token operator">==</span> 2px<span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">@debug</span> 1px <span class="token operator">==</span> 1px<span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">@debug</span> 10px <span class="token operator">&lt;</span> 3px<span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">@debug</span> math.<span class="token function">comparable</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> 3in<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 boolean 操作符（与或非）</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@debug</span> <span class="token boolean">true</span> <span class="token operator">and</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">@debug</span> <span class="token boolean">true</span> <span class="token operator">and</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">@debug</span> <span class="token boolean">true</span> <span class="token operator">or</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token keyword">@debug</span> <span class="token boolean">false</span> <span class="token operator">or</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">@debug</span> <span class="token operator">not</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token keyword">@debug</span> <span class="token operator">not</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结合 <code>@if</code> 等操作，可以使用布尔值作出很多不同情况下的操作。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">avatar</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$circle</span> </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$size</span> <span class="token operator">/</span> 2<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.square-av </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">avatar</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.circle-av </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">avatar</span><span class="token punctuation">(</span>100px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$circle</span></span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用 <code>@if()</code> 函数，类似于三元运算符：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@debug</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> 10px<span class="token punctuation">,</span> 30px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10px</span>
<span class="token keyword">@debug</span> <span class="token function">if</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> 10px<span class="token punctuation">,</span> 30px<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 30px</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),A={id:"_6-null",tabindex:"-1"},R={class:"header-anchor",href:"#_6-null"},B={href:"https://sass.bootcss.com/documentation/values/null.html",target:"_blank",rel:"noopener noreferrer"},P=a(`<p><code>null</code> 值也是该类型的唯一值。它表示没有值，通常由函数返回，表示没有结果。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:map&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@use</span> <span class="token string">&quot;sass:string&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> string.<span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Roboto&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
<span class="token keyword">@debug</span> map.<span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;large&quot;</span><span class="token punctuation">:</span> 20px<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;small&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
<span class="token keyword">@debug</span> &amp;<span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果列表中包含一个空值，则生成的CSS中将省略这个空值。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$fonts</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;serif&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;monospace&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Consolas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">h3 </span><span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 18px bold map.<span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$fonts</span><span class="token punctuation">,</span> <span class="token string">&quot;sans&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> 18px bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果属性值为空，则完全省略该属性。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$fonts</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;serif&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Helvetica Neue&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;monospace&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Consolas&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">h3 </span><span class="token punctuation">{</span>
  <span class="token selector">font: </span><span class="token punctuation">{</span>
    <span class="token property">size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
    <span class="token property">weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">family</span><span class="token punctuation">:</span> <span class="token function">map-get</span><span class="token punctuation">(</span><span class="token variable">$fonts</span><span class="token punctuation">,</span> <span class="token string">&quot;sans&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),D={id:"_7-map",tabindex:"-1"},E={class:"header-anchor",href:"#_7-map"},I={href:"https://sass.bootcss.com/documentation/values/maps.html",target:"_blank",rel:"noopener noreferrer"},V=a(`<p><code>map</code> 用来表示键值对的映射，格式为 <code>(key1: value, key2: value)</code> ，其中 key 必须唯一。与列表不同， map 必须用圆括号 <code>()</code> 括起来。空的 map 写为 <code>()</code> 。</p><p>map将值与键关联起来的，例如：<code>(&quot;background&quot;: red, &quot;foreground&quot;: pink)</code></p><p>事实上，所有map都算作List！每个map都算作一个List，其中包含每个键/值对的两元素列表。例如，<code>(1: 2, 3: 4)</code>算作 <code>(1 2, 3 4)</code>。</p><h4 id="访问-map-的值" tabindex="-1"><a class="header-anchor" href="#访问-map-的值"><span>访问 map 的值</span></a></h4><p>通过 <code>map.get($map, $key)</code> 函数来访问值，第一个参数表示 map ，第二个参数表示对应的 key ，指定的 key 不存在时返回 <code>null</code> 。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:map&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$font-weights</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token string">&quot;regular&quot;</span><span class="token punctuation">:</span> 400<span class="token punctuation">,</span> <span class="token string">&quot;medium&quot;</span><span class="token punctuation">:</span> 500<span class="token punctuation">,</span> <span class="token string">&quot;bold&quot;</span><span class="token punctuation">:</span> 700<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> map.<span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$font-weights</span><span class="token punctuation">,</span> <span class="token string">&quot;medium&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 500</span>
<span class="token keyword">@debug</span> map.<span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$font-weights</span><span class="token punctuation">,</span> <span class="token string">&quot;extra-bold&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历-map" tabindex="-1"><a class="header-anchor" href="#遍历-map"><span>遍历 map</span></a></h4><p>通过 <code>@each</code> 语句对一个 map 进行遍历。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;red&quot;</span><span class="token punctuation">:</span> #f00<span class="token punctuation">,</span>
  <span class="token string">&quot;green&quot;</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">,</span>
  <span class="token string">&quot;blue&quot;</span><span class="token punctuation">:</span> #00f<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$key</span>, <span class="token variable">$value</span> in <span class="token variable">$colors</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.icon-<span class="token variable">#{$key}</span> </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.icon-red</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-green</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-blue</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-map" tabindex="-1"><a class="header-anchor" href="#修改-map"><span>修改 map</span></a></h4><p>向 map 添加新的键值对或修改已存在的键值对。使用 <code>map.set($map， $key， $value)</code> 函数， 它返回设置完成后的新的 map ，不会修改原 map 。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:map&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;red&quot;</span><span class="token punctuation">:</span> #f00<span class="token punctuation">,</span>
  <span class="token string">&quot;green&quot;</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">,</span>
  <span class="token string">&quot;blue&quot;</span><span class="token punctuation">:</span> #00f<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> map.<span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">$colors</span><span class="token punctuation">,</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span> #a11<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (&quot;red&quot;: #a11, &quot;green&quot;: #0f0, &quot;blue&quot;: #00f)</span>

<span class="token keyword">@debug</span> map.<span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">$colors</span><span class="token punctuation">,</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span> #ff5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (&quot;red&quot;: #f00, &quot;green&quot;: #0f0, &quot;blue&quot;: #00f, &quot;warning&quot;: #ff5)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="合并-map" tabindex="-1"><a class="header-anchor" href="#合并-map"><span>合并 map</span></a></h4><p>可以使用 <code>map.merge($map1, $map2)</code> 函数合并 map 并返回合并后的新 map 。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:map&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;red&quot;</span><span class="token punctuation">:</span> #f00<span class="token punctuation">,</span>
  <span class="token string">&quot;green&quot;</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">,</span>
  <span class="token string">&quot;blue&quot;</span><span class="token punctuation">:</span> #00f<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$colors2</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">:</span> #ff0<span class="token punctuation">,</span>
  <span class="token string">&quot;skyblue&quot;</span><span class="token punctuation">:</span> #0ff
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@debug</span> map.<span class="token function">merge</span><span class="token punctuation">(</span><span class="token variable">$colors</span><span class="token punctuation">,</span> <span class="token variable">$colors2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (&quot;red&quot;: #f00, &quot;green&quot;: #0f0, &quot;blue&quot;: #00f, &quot;yellow&quot;: #ff0, &quot;skyblue&quot;: #0ff)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="不可变性" tabindex="-1"><a class="header-anchor" href="#不可变性"><span>不可变性</span></a></h4><p>和 list 一样，Sass 中的 map 被创建后是不可变的，所以所有的 map 方法都不是直接修改原 map ， 而是操作完成后返回一个新的 map 出来。</p><p>所以通常应该将新创建的 map 赋值给原变量进行覆盖。</p>`,20),Z={id:"_8-function",tabindex:"-1"},j={class:"header-anchor",href:"#_8-function"},F={href:"https://sass.bootcss.com/documentation/values/functions.html",target:"_blank",rel:"noopener noreferrer"},J=a(`<p>Sass 本身已经有很多内置的函数可供使用，比如 <code>rgba()</code> , <code>nth()</code> , <code>if()</code> 等。</p><p><code>@function</code> 的定义方式和 <code>@mixin</code> 非常类似，但是调用的时候不需要 <code>@include</code> 而是直接调用。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> my-color <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.div </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">my-color</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@function</code> 与 <code>@mixin</code> 不同之处在于，函数返回的只能是一个值，而不是一段 css 样式代码，也就是说函数返回的结果只能作为变量值或属性值。</p><h2 id="六、流程控制" tabindex="-1"><a class="header-anchor" href="#六、流程控制"><span>六、流程控制</span></a></h2><p>在 Sass 中，用于控制流程的语句有：</p><ul><li><code>@if</code>, <code>@else</code> 条件判断语句</li><li><code>@each</code> 遍历一个 list ， 或 一个 map 的键值对</li><li><code>@for</code> 循环一定的次数</li><li><code>@while</code> 循环直到遇到 <code>true</code> 值</li></ul><h3 id="_1-if-else" tabindex="-1"><a class="header-anchor" href="#_1-if-else"><span>1. <code>@if...@else</code></span></a></h3><p>和js中的<code>if...else</code>大差不差，但还是有些微小的差别，如下：</p><ul><li>if紧跟的表达式不需要写括号</li><li>js中除了<code>false</code>和<code>null</code>之外，还有更多值为假。Sass 不是这些语言之一！空字符串、空列表和数字<code>0</code>在 Sass 中都是真值。</li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;sass:math&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token function">triangle</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$direction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>

  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> math.<span class="token function">div</span><span class="token punctuation">(</span><span class="token variable">$size</span><span class="token punctuation">,</span> 2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$direction</span> == up </span><span class="token punctuation">{</span>
    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$direction</span> == right </span><span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$direction</span> == down </span><span class="token punctuation">{</span>
    <span class="token property">border-top-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector"><span class="token variable">$direction</span> == left </span><span class="token punctuation">{</span>
    <span class="token property">border-right-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
    <span class="token atrule"><span class="token rule">@error</span> <span class="token string">&quot;Unknown direction #{$direction}.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

.next</span> <span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">triangle</span><span class="token punctuation">(</span>5px<span class="token punctuation">,</span> black<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译结果</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.next</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
  <span class="token property">border-width</span><span class="token punctuation">:</span> 2.5px<span class="token punctuation">;</span>
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-for" tabindex="-1"><a class="header-anchor" href="#_2-for"><span>2. <code>@for</code></span></a></h3><p><code>@for</code> 循环语句，可以写成：</p><ul><li><code>@for &lt;variable&gt; from start to end { ... }</code></li><li><code>@for &lt;variable&gt; from start through end { ... }</code></li></ul><p>也就是有 <code>to</code> 和 <code>through</code> 的区别， <code>to</code> 表示不包含结束的数字， <code>through</code> 表示包含结束的数字。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$var</span> <span class="token keyword">from</span> <span class="token selector">1 to 5 </span><span class="token punctuation">{</span>
  <span class="token keyword">@debug</span> <span class="token variable">$var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1 2 3 4</span>

<span class="token keyword">@for</span> <span class="token variable">$var</span> <span class="token keyword">from</span> 1 <span class="token keyword">through</span> <span class="token selector">5 </span><span class="token punctuation">{</span>
  <span class="token keyword">@debug</span> <span class="token variable">$var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 1 2 3 4 5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-while" tabindex="-1"><a class="header-anchor" href="#_3-while"><span>3. <code>@while</code></span></a></h3><p><code>@while</code> 语句，写为 <code>@while &lt;expression&gt;{ ... }</code> ， 如果它的表达式返回 <code>true</code>，则一直反复运行代码块。一直持续到表达式最终返回 <code>false</code> 为止。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$num</span></span><span class="token punctuation">:</span> 5<span class="token punctuation">;</span>

<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$num</span> &lt;= 10 </span><span class="token punctuation">{</span>
  <span class="token keyword">@debug</span> <span class="token variable">$num</span><span class="token punctuation">;</span>
  <span class="token property"><span class="token variable">$num</span></span><span class="token punctuation">:</span> <span class="token variable">$num</span> <span class="token operator">+</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 5 6 7 8 9 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果能使用 <code>@for</code> 或 <code>@each</code> 语句实现的话，尽量不使用 <code>@while</code> 语句。它们对读者来说更清晰，并且通常编译速度也更快。</p><h3 id="_4-each" tabindex="-1"><a class="header-anchor" href="#_4-each"><span>4. <code>@each</code></span></a></h3><p>遍历一个 list 或一个 map ，语法为 <code>@each $item in $list { ... }</code> 。</p><p>使用 <code>@each</code> 可以方便的生成大量重复却有一点小变化的样式。</p><h4 id="遍历list" tabindex="-1"><a class="header-anchor" href="#遍历list"><span>遍历list</span></a></h4><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$sizes</span></span><span class="token punctuation">:</span> 40px<span class="token punctuation">,</span> 50px<span class="token punctuation">,</span> 80px<span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$size</span> in <span class="token variable">$sizes</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.icon-<span class="token variable">#{$size}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.icon-40px</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-50px</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.icon-80px</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="遍历-map-1" tabindex="-1"><a class="header-anchor" href="#遍历-map-1"><span>遍历 map</span></a></h4><p>语法为 <code>@each $key, $value in $map { ... }</code> 。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font-size</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;big&quot;</span><span class="token punctuation">:</span> 20px<span class="token punctuation">,</span>
  <span class="token string">&quot;middle&quot;</span><span class="token punctuation">:</span> 16px<span class="token punctuation">,</span>
  <span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 14px<span class="token punctuation">,</span>
  <span class="token string">&quot;mini&quot;</span><span class="token punctuation">:</span> 12px<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$key</span>, <span class="token variable">$value</span> in <span class="token variable">$font-size</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.font-<span class="token variable">#{$key}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.font-big</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.font-middle</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.font-small</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.font-mini</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解构-list-中的-list" tabindex="-1"><a class="header-anchor" href="#解构-list-中的-list"><span>解构 list 中的 list</span></a></h4><p>如果一个 list 中的元素也是 list，那么可以使用 <code>@each $a, $b, ..., $n in $list</code> 直接将内层 list 的值依次取出来。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> 
  <span class="token string">&quot;small&quot;</span> 14px 400 #f00<span class="token punctuation">,</span>
  <span class="token string">&quot;middle&quot;</span> 16px 500 #0f0<span class="token punctuation">,</span>
  <span class="token string">&quot;big&quot;</span> 18px 600 #00f<span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$name</span>, <span class="token variable">$size</span>, <span class="token variable">$weight</span>, <span class="token variable">$color</span> in <span class="token variable">$font</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.font-<span class="token variable">#{$name}</span> </span><span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> <span class="token variable">$weight</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.font-small</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.font-middle</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.font-big</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，如果 <code>@each</code> 后的变量数量多于内层数组的元素数量，多出来的变量将会得到 <code>null</code> 值。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> 
  <span class="token string">&quot;small&quot;</span> 14px 400 #f00<span class="token punctuation">,</span>
  <span class="token string">&quot;middle&quot;</span> 16px 500 #0f0<span class="token punctuation">,</span>
  <span class="token string">&quot;big&quot;</span> 18px 600 #00f<span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$name</span>, <span class="token variable">$size</span>, <span class="token variable">$weight</span>, <span class="token variable">$color</span>, <span class="token variable">$other</span> in <span class="token variable">$font</span> </span><span class="token punctuation">{</span>
  <span class="token keyword">@debug</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$size</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$other</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// &quot;small&quot;, 14px, 400, #f00, null</span>
<span class="token comment">// &quot;middle&quot;, 16px, 500, #0f0, null</span>
<span class="token comment">// &quot;big&quot;, 18px, 600, #00f, null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个 map 其实都算是一个包含键值对的列表，如果将上例中的 list 改成 map 类型：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$font</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;small&quot;</span><span class="token punctuation">:</span> 14px 400 #f00<span class="token punctuation">,</span>
  <span class="token string">&quot;middle&quot;</span><span class="token punctuation">:</span> 16px 500 #0f0<span class="token punctuation">,</span>
  <span class="token string">&quot;big&quot;</span><span class="token punctuation">:</span> 18px 600 #00f<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$name</span>, <span class="token variable">$size</span>, <span class="token variable">$weight</span>, <span class="token variable">$color</span>, <span class="token variable">$other</span> in <span class="token variable">$font</span> </span><span class="token punctuation">{</span>
  <span class="token keyword">@debug</span> <span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$size</span><span class="token punctuation">,</span> <span class="token variable">$weight</span><span class="token punctuation">,</span> <span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$other</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// &quot;small&quot;, 14px 400 #f00, null, null, null</span>
<span class="token comment">// &quot;middle&quot;, 16px 500 #0f0, null, null, null</span>
<span class="token comment">// &quot;big&quot;, 18px 600 #00f, null, null, null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，遍历 list 和 map 时，<code>@each</code> 后的变量数量表示的意义有一点区别：</p><ul><li>遍历 list 时，<code>@each</code> 之后的每个变量依次表示内层 list 的元素</li><li>遍历 map 时，<code>@each</code> 之后只有两个变量可以拿到值，第一个变量表示 map 的 key，第二个变量表示 map 的 值，尽管这个值也是一个 list，之后的变量都是 <code>null</code> 值。</li></ul><h2 id="七、混合宏mixin" tabindex="-1"><a class="header-anchor" href="#七、混合宏mixin"><span>七、混合宏mixin</span></a></h2><p>在单独的属性需要统一处理时，变量是个不错的选择。但当你的样式变得越来越复杂，需要重复使用大段样式时混合宏就会变得很有意义。</p><h3 id="_1-声明混合宏" tabindex="-1"><a class="header-anchor" href="#_1-声明混合宏"><span>1. 声明混合宏</span></a></h3><p>不带参数的混合宏：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">border-radius</span><span class="token punctuation">{</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">@mixin</span> 是用来声明混合宏的关键词，border-radius 是混合宏的名称，花括号里的是复用的样式代码。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-调用混合宏" tabindex="-1"><a class="header-anchor" href="#_2-调用混合宏"><span>2. 调用混合宏</span></a></h3><p>使用@mixin声明了一个混合宏后，我们使用 @include 来调用声明好的混合宏：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">border-radius</span><span class="token punctuation">{</span>	<span class="token comment">//声明混合宏</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">button</span><span class="token punctuation">{</span>
	<span class="token keyword">@include</span> border-radius<span class="token punctuation">;</span>	<span class="token comment">//调用混合宏</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-混合宏的参数-传一个不带值的参数" tabindex="-1"><a class="header-anchor" href="#_3-混合宏的参数-传一个不带值的参数"><span>3. 混合宏的参数－传一个不带值的参数</span></a></h3><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token variable">$radius</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>		<span class="token comment">//在混合宏&quot;border-radius&quot;中定义了一个不带任何数值的参数&quot;$radius&quot;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token keyword">@include</span> <span class="token function">border-radius</span><span class="token punctuation">(</span>10px<span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//在调用时候给这个混合宏传一个参数值</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-混合宏的参数-传一个带值的参数" tabindex="-1"><a class="header-anchor" href="#_4-混合宏的参数-传一个带值的参数"><span>4. 混合宏的参数－传一个带值的参数</span></a></h3><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">border-radius</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$radius</span></span><span class="token punctuation">:</span>10px<span class="token punctuation">)</span><span class="token punctuation">{</span>	<span class="token comment">//给混合宏的参数传一个默认值；</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$radius</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//在调用时只需要调用默认的混合宏&quot;border-radius;&quot;</span>
<span class="token selector">button</span><span class="token punctuation">{</span>
	<span class="token keyword">@include</span> border-radius<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//但有时某些元素的值又不一样，那么可以这样写：</span>
<span class="token selector">button</span><span class="token punctuation">{</span>
	<span class="token keyword">@include</span> <span class="token function">border-radius</span><span class="token punctuation">(</span>50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-混合宏的参数-传多个参数" tabindex="-1"><a class="header-anchor" href="#_5-混合宏的参数-传多个参数"><span>5. 混合宏的参数－传多个参数</span></a></h3><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">center</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">,</span><span class="token variable">$height</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span><span class="token variable">$width</span><span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span><span class="token variable">$height</span><span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span><span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
	<span class="token property">margin-top</span><span class="token punctuation">:</span> <span class="token function">-</span><span class="token punctuation">(</span><span class="token variable">$height</span><span class="token punctuation">)</span>/2<span class="token punctuation">;</span>
	<span class="token property">margin-left</span><span class="token punctuation">:</span><span class="token function">-</span><span class="token punctuation">(</span><span class="token variable">$width</span><span class="token punctuation">)</span>/2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.centerBox</span><span class="token punctuation">{</span>
	<span class="token keyword">@include</span> <span class="token function">center</span><span class="token punctuation">(</span>500px<span class="token punctuation">,</span>250px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="八、继承extend" tabindex="-1"><a class="header-anchor" href="#八、继承extend"><span>八、继承extend</span></a></h2><p>SASS中，通过关键词&quot;<mark>@extend</mark>&quot;来继承已存在的类样式块。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token selector">.button</span><span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.buttonPrimary</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f36<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
	<span class="token keyword">@extend</span> .button<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.buttonSecond</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
	<span class="token keyword">@extend</span> .button<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译以后：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token selector">.button,.buttonPrimary,.buttonSecond</span><span class="token punctuation">{</span>	<span class="token comment">//在SASS中的继承可以继承类样式块中所有样式代码，并且编译出来会将选择器合并</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 5px 10px<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.buttonPrimary</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #f36<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.buttonSecond</span><span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="九、占位符" tabindex="-1"><a class="header-anchor" href="#九、占位符"><span>九、占位符</span></a></h2><p><mark>%</mark> placeholder 声明的代码如果不被@extend调用的话，不会产生任何代码。取代从前CSS中的代码冗余的情形。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%marginTop5</span></span><span class="token punctuation">{</span>
	<span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token placeholder">%paddingTop5</span></span><span class="token punctuation">{</span>
	<span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码没有被 @extend 调用，他并没有产生任何代码块，只是静静的躺在你的某个 SCSS 文件中。只有通过 @extend 调用才会产生代码：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token selector"><span class="token placeholder">%marginTop5</span> </span><span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector"><span class="token placeholder">%paddingTop5</span></span><span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">button </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%marginTop5</span><span class="token punctuation">;</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%paddingTop5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> <span class="token placeholder selector">%marginTop5</span><span class="token punctuation">;</span>
  <span class="token selector">span </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%paddingTop5</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译出来的CSS：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">button, .content</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">button, .content span</span> <span class="token punctuation">{</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由以上代码可以看出，通过@entend调用的占位符编译出来的代码会将代码合并在一起，让代码变的更为干净易读。同时，也更突出了@extend的强大。</p><hr><h2 id="十、使用分析" tabindex="-1"><a class="header-anchor" href="#十、使用分析"><span>十、使用分析</span></a></h2><p>什么时候该用混合宏 @mixin、什么时候该用继承 @extend、什么时候该用占位符%呢？</p><p><mark>混合宏的使用</mark> ：它 <mark>不会自动合并</mark> 相同的样式代码，如果在样式文件中调用同一个混合宏，会产生多个对应的样式代码，造成代码的冗余。不过他并不是一无事处，他可以 <mark>传参数</mark> 。如果你的代码块中涉及到变量，建议使用混合宏来创建相同的代码块。</p><p><mark>继承</mark> ：使用继承后，编译出来的 CSS 会将使用继承的代码块 <mark>合并</mark> 到一起，通过组合选择器的方式展现，这样编译出来的代码相对于混合宏来说要干净易读。但是它 <mark>不能传变量参数</mark> 。如果你的代码块不需要传任何变量参数，而且有一个 <mark>基类已在文件中存在</mark> ，那么建议使用继承。</p><p><mark>占位符</mark> ：使用占位符编译出来的 CSS 代码和使用继承基本上是相同的，只是不会在代码中生成占位符 marginTop 的选择器。那么占位符和继承的主要区别的，“ <mark>占位符是独立定义，不调用的时候是不会在 CSS 中产生任何代码；继承是首先有一个基类存在，不管调用与不调用，基类的样式都将会出现在编译出来的 CSS 代码中。</mark> ”</p><table><thead><tr><th></th><th>混合宏</th><th>继承</th><th>占位符</th></tr></thead><tbody><tr><td>声明方式</td><td>@mixin</td><td>.class</td><td>%placeholder</td></tr><tr><td>调用方式</td><td>@include</td><td>@extend</td><td>@extend</td></tr><tr><td>使用环境</td><td>相同代码块需要在不同环境传递不同值时，可通过混合宏定义重复使用的代码块。不足之处在于编译出来的CSS代码文件臃肿、代码冗余。</td><td>相同代码块不需要传递不同的值，并且此代码块已在Sass文件中定义，可通过Sass的继承来调用已存在的基类，会将调用相同基类的代码合并在一起。不足之处在于如果基类并不存在于HTML结构时，不管调用与否，在编译出的CSS中都将产生基类对应的样式代码。</td><td>与继承基本类似。不同之处在于相同代码块并没有在基类中存在，而是额外声明。如果不调用已声明的占位符，将不会产生任何样式代码，如果在不同选择器调用占位符，那么编译出的CSS代码将会把相同的代码合并在一起。</td></tr></tbody></table><figure><img src="`+i+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="十一、sass的模块化" tabindex="-1"><a class="header-anchor" href="#十一、sass的模块化"><span>十一、sass的模块化</span></a></h2><p>与模块化相关的@规则主要有以下三种：</p><ul><li><code>@use</code> 从其他 sass 样式表中加载 mixins, functions, variables, 并将来自多个样式表的 CSS 组合在一起</li><li><code>@forward</code> 当本样式表被其他样式表使用 <code>@use</code> 加载之前，先加载一个 Sass 样式表，并且使其 mixins, functions, variables 可用</li><li><code>@import</code> 扩展自 css 的 <code>@import</code>，用来加载其他样式表的 styles, mixins, functions, variables</li></ul><h3 id="_1-use" tabindex="-1"><a class="header-anchor" href="#_1-use"><span>1. <code>@use</code></span></a></h3><p>由 <code>@use</code> 加载的样式表被称为模块（modules）。Sass 一些内置模块，其中有很多实用的函数。</p><blockquote><p>通过 <code>@use</code> 加载的模块不管被引用了多少次，都只会在编译后输出一次到 css 中。但是使用 <code>@import</code> 多次引入同一模块，会反复输出到 css 中。</p></blockquote><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// module.scss</span>
<span class="token selector">.module </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// a.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;./module.scss&#39;</span>

<span class="token comment">// b.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;./module.scss&#39;</span>
    
<span class="token comment">// index.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;./a.scss&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">@use</span> <span class="token string">&#39;./b.scss&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.module</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>@use</code> 的前面只能出现 <code>@forward</code> 或 变量声明，其他的所有代码只能出现在 <code>@use</code> 之后。</p><h4 id="使用成员" tabindex="-1"><a class="header-anchor" href="#使用成员"><span>使用成员</span></a></h4><p><code>@use</code> 引入一个模块，默认会形成一个以模块文件名命名的命名空间，模块中的所有成员都通过这个命名空间来访问。</p><p>可以使用 <code>&lt;namespace&gt;.&lt;variable&gt;</code>, <code>&lt;namespace&gt;.&lt;function&gt;()</code>, <code>@include &lt;namespace&gt;.&lt;mixin&gt;()</code> 来加载模块中的成员。</p><p>用 <code>@use</code> 加载的模块成员只能在当前文件中访问。如果希望多文件共同访问，可以使用 <code>@forward</code> 规则通过一个共享文件转发所有成员。</p><p>因为 <code>@use</code> 将命名空间添加到成员名中，所以在编写样式表时选择非常简单的名称，如 <code>$radius</code> 或 <code>$width</code> 是安全的。这与旧的 <code>@import</code> 规则不同，旧的 <code>@import</code> 规则鼓励用户编写像 <code>$mat-corner-radius</code>这样的长名称，以避免与其他库发生冲突，<code>@use</code> 有助于保持样式表的清晰和可读性!</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>
<span class="token keyword">@mixin</span> <span class="token selector">flex </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// index.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;./a.scss&#39;</span><span class="token punctuation">;</span>
<span class="token selector">.flex </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> a.flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义命名空间名称" tabindex="-1"><a class="header-anchor" href="#自定义命名空间名称"><span>自定义命名空间名称</span></a></h4><p>使用 <code>@use ... as ...</code> 语法来自定义命名空间名称：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;./a.scss&#39;</span> <span class="token module-modifier keyword">as</span> moduleA<span class="token punctuation">;</span>

<span class="token selector">.flex </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> moduleA.flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="去除命名空间" tabindex="-1"><a class="header-anchor" href="#去除命名空间"><span>去除命名空间</span></a></h4><p>使用 <code>@use ... as *</code> 语法来去除命名空间：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&#39;./a.scss&#39;</span> <span class="token module-modifier keyword">as</span> *<span class="token punctuation">;</span>

<span class="token selector">.flex </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但不建议去除命名空间，因为这样容易导致命名冲突。</p><h4 id="私有成员" tabindex="-1"><a class="header-anchor" href="#私有成员"><span>私有成员</span></a></h4><p>如果不想将模块中的成员暴露给其他文件访问，将模块成员以 <code>-</code> 或 <code>_</code> 开头即可。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token keyword">@mixin</span> <span class="token selector">_flex </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token keyword">@use</span> <span class="token string">&#39;./a&#39;</span><span class="token punctuation">;</span>
<span class="token selector">.flex </span><span class="token punctuation">{</span>
  <span class="token comment">// Error: Private members can&#39;t be accessed from outside their modules.</span>
  <span class="token comment">// 报错：模块的私有成员无法在模块外部使用</span>
  <span class="token keyword">@include</span> a._flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="引入时的配置" tabindex="-1"><a class="header-anchor" href="#引入时的配置"><span>引入时的配置</span></a></h4><p>如果模块中的变量使用了 <code>!default</code> 标志使用了默认值，那么在使用 <code>@use</code> 引入时，可以去配置自己的值来覆盖默认值（通过<code>with</code>）：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f00 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span> 16px <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$bg</span></span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>

<span class="token keyword">@mixin</span> <span class="token selector">base </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token variable">$size</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$bg</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token keyword">@use</span> <span class="token string">&#39;./a.scss&#39;</span> <span class="token module-modifier keyword">with</span><span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #a55<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$size</span></span><span class="token punctuation">:</span> 14px
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> a.base<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a55<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-mixin" tabindex="-1"><a class="header-anchor" href="#使用-mixin"><span>使用 mixin</span></a></h4><p>用 <code>@use ... with ...</code> 配置模块非常方便，特别是在使用最初为使用 <code>@import</code> 规则而编写的库时。但是它不是特别灵活，而且我们不推荐它用于更高级的用例。</p><p>如果你发现自己想一次配置很多变量，传递一个 <code>map</code> 作为配置，或者在模块加载后更新配置，那么考虑写一个 mixin 来设置变量，再写另一个 mixin 来注入你的样式。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// _library.scss</span>

<span class="token property"><span class="token variable">$-black</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$-border-radius</span></span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$-box-shadow</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span><span class="token punctuation">;</span>

<span class="token keyword">@function</span> <span class="token function">-box-shadow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@return</span> <span class="token variable">$-box-shadow</span> <span class="token operator">or</span> <span class="token punctuation">(</span>0 0.5rem 1rem <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token variable">$-black</span><span class="token punctuation">,</span> 0.15<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 配置（根据参数确定变量值）</span>
<span class="token keyword">@mixin</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span> <span class="token property"><span class="token variable">$box-shadow</span></span><span class="token punctuation">:</span> <span class="token null keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$black</span> </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$-black</span></span><span class="token punctuation">:</span> <span class="token variable">$black</span> !global<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$border-radius</span> </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$-border-radius</span></span><span class="token punctuation">:</span> <span class="token variable">$border-radius</span> !global<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$box-shadow</span> </span><span class="token punctuation">{</span>
    <span class="token property"><span class="token variable">$-box-shadow</span></span><span class="token punctuation">:</span> <span class="token variable">$box-shadow</span> !global<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 样式混合</span>
<span class="token keyword">@mixin</span> <span class="token selector">styles </span><span class="token punctuation">{</span>
  <span class="token selector">code </span><span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> <span class="token variable">$-border-radius</span><span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">-box-shadow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token keyword">@use</span> <span class="token string">&#39;library&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">@include</span> library.<span class="token function">configure</span><span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #222<span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$border-radius</span></span><span class="token punctuation">:</span> 0.1rem
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@include</span> library.styles<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查找模块" tabindex="-1"><a class="header-anchor" href="#查找模块"><span>查找模块</span></a></h4><p>通过 <code>@use &quot;module&quot;</code> 使用模块时，不需要写扩展名，程序会自动查找：</p><ul><li><ol><li>查找 <code>./module.scss</code>，没有则进行下一步</li></ol></li><li><ol><li>查找 <code>./module.sass</code>，没有则进行下一步</li></ol></li><li><ol><li>查找 <code>./module.css</code>，没有则进行下一步</li></ol></li><li><ol><li>查找 <code>node_modules/module/sass/module.scss</code></li></ol></li></ul><p>在所有系统上，路径分隔符统一使用 <code>/</code> 而不是反斜线 <code>\\</code>。当前目录模块不需要写 <code>./</code> 。</p><p>如果 Sass文件只打算作为模块加载，而不是自己编译，文件名以 <code>_</code> 开头即可，这些被称为部分（partials），它们告诉 Sass 工具不要尝试自己编译这些文件。但是在导入这些模块时可以不用书写 <code>_</code> 符号。</p><p>使用 <code>@use &quot;directory&quot;</code> 导入一个目录时，编译器会尝试自动查找 <code>_index.scss</code> 或 <code>_index.sass</code> 文件。</p><p>加载一个<strong>纯CSS文件</strong>作为模块时，不允许任何特殊的 Sass 特性（如 variables, functions, mixins），为了避免作者一不小心把 Sass 写进 CSS 中，所有 Sass 的特性如果不是合法的 CSS 代码将会报错。否则，CSS将按原样呈现。它甚至可以被继承（extend）!</p><h3 id="_2-forward" tabindex="-1"><a class="header-anchor" href="#_2-forward"><span>2. <code>@forward</code></span></a></h3><p>当使用 <code>@use</code> 加载一个文件时， 这个文件中可以使用 <code>@forward</code> 来使另一个文件中的 mixin、函数和变量可以暴露出去。通常用于跨多个文件组织 Sass 库。</p><p><code>@forward</code> 和 <code>@use</code> 使用方式相同，但作用却完全不一样。</p><p><code>@forward</code> 的作用是转发模块成员，而不是引入成员到当前文件使用，也就是说，通过 <code>@forward</code> 加载一个模块的成员，这些成员并不能在当前文件内访问，而仅仅是将这些成员当作自己的成员对外暴露出去。</p><p>举个例子，<code>a.scss</code> 中定义了一个变量 <code>$red</code>，在 <code>b.scss</code> 中使用 <code>@forward &quot;a.scss&quot;</code>，但是在 <code>b</code> 中无法访问 <code>a.$red</code>，但是在另一个文件 <code>c.scss</code> 中使用 <code>@use &quot;b.scss&quot;</code> 后，可以通过 <code>b.$red</code> 访问到 <code>a</code> 中定义的变量。</p><p>在上例中，如果想要在 <code>b.scss</code> 中使用变量，那么依然需要使用 <code>@use &quot;a.scss&quot;</code> 来引入变量，然后就可以访问 <code>a.$red</code> 了。</p><p>当需要在上例的 <code>b.scss</code> 文件中同时使用 <code>@forward</code> 和 <code>@use</code> 时，建议先写 <code>@forward</code> 再写 <code>@use</code> ，因为这样，在 <code>c.scss</code> 中使用 <code>@use ... with()</code> 配置的变量值会先生效，这样 <code>b.scss</code> 中引用的变量也是配置后的变量。</p><p><code>@forward</code> 虽然对变量，mixin，函数等只能起转发作用，但对其他样式代码和 <code>@use</code> 一样，也会引入并编译，所以在使用了 <code>@forward &quot;module&quot;</code> 的文件中，就算没有使用 <code>@use</code> ，也可以去继承 <code>module.scss</code> 的样式。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f00 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">.a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// b.scss</span>

<span class="token keyword">@forward</span> <span class="token string">&#39;a.scss&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 转发 a 中的变量，并引入普通样式代码</span>

<span class="token selector">.b </span><span class="token punctuation">{</span>
  <span class="token comment">// 虽然没有使用 @use 不能访问模块 a.scss 的变量，但可以继承它的样式</span>
  <span class="token keyword">@extend</span> .a<span class="token punctuation">;</span>
  <span class="token comment">// 如果写 color: a.$red 会报错，因为没有使用 @use &quot;a.scss&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token keyword">@use</span> <span class="token string">&#39;b.scss&#39;</span> <span class="token punctuation">;</span>

<span class="token selector">.index </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .a<span class="token punctuation">;</span>

  <span class="token property">background-color</span><span class="token punctuation">:</span> b.<span class="token variable">$red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.a,
.b,
.index</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.index</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="转发时添加前缀" tabindex="-1"><a class="header-anchor" href="#转发时添加前缀"><span>转发时添加前缀</span></a></h4><p>如果一个文件转发多个文件中的成员，在使用时可能会存在多个文件中的成员同名，这样会导致编译出现错误，就算没有同名，也有可能在使用时不清楚到底是哪个模块的成员。</p><p>通过 <code>@forward &quot;module&quot; as xxx-*</code> 可以给同一个模块中的成员统一添加前缀。</p><p>假设有 <code>a.scss</code>， <code>b.scss</code>， <code>c.scss</code> 三个模块中都有一个名叫 <code>$red</code> 的变量：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// bus.scss</span>

<span class="token keyword">@forward</span> <span class="token string">&#39;a.scss&#39;</span> <span class="token module-modifier keyword">as</span> a-*<span class="token punctuation">;</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;b.scss&#39;</span> <span class="token module-modifier keyword">as</span> b-*<span class="token punctuation">;</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;c.scss&#39;</span> <span class="token module-modifier keyword">as</span> c-*<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>
<span class="token keyword">@use</span> <span class="token string">&#39;bus.scss&#39;</span><span class="token punctuation">;</span>

<span class="token selector">.index </span><span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> bus.<span class="token variable">$a-red</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> bus.<span class="token variable">$b-red</span><span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid bus.<span class="token variable">$c-red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="控制成员可见性" tabindex="-1"><a class="header-anchor" href="#控制成员可见性"><span>控制成员可见性</span></a></h4><p>默认情况下，<code>@forward</code> 会将一个模块中所有成员都转发，如果只想转发某些成员，或不想转发某些成员，可以这样书写：</p><ul><li><code>@forward &quot;module&quot; hide $var, mixinName, fnName</code> 禁止转发某些成员</li><li><code>@forward &quot;module&quot; show $var, mixinName, fnName</code> 只转发某些成员</li></ul><p>各个成员通过逗号 <code>,</code> 分隔开，如果成员是变量，不能省略 <code>$</code> 符号。</p><h4 id="转发时配置模块的成员" tabindex="-1"><a class="header-anchor" href="#转发时配置模块的成员"><span>转发时配置模块的成员</span></a></h4><p>在转发其他模块的成员时，可以对成员进行配置，修改默认值，或者指定一个确定的值均可。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f00 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #000 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$green</span></span><span class="token punctuation">:</span> #0f0 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// b.scss</span>

<span class="token comment">// 转发成员时进行配置，修改默认值，或修改为固定的值</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;a.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f55 <span class="token statement keyword">!default</span><span class="token punctuation">,</span>
  <span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #333<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token keyword">@use</span> <span class="token string">&#39;b.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f11<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token selector">.div </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> b.<span class="token variable">$red</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> b.<span class="token variable">$black</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> b.<span class="token variable">$green</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.div</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f11<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #0f0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-import" tabindex="-1"><a class="header-anchor" href="#_3-import"><span>3. <code>@import</code></span></a></h3><p>css 中本身就有 <code>@import</code>，sass 在其基础上进行扩展，可以用来导入模块中的变量，mixin，函数等，以及模块的样式。</p><p>和 css 中的 <code>@import</code> 不同之处在于，css 中的 <code>@import</code> 可以是一个线上 url 地址，浏览器会在运行时下载这个文件，而 sass 中的 <code>@import</code> 只能在编译打包阶段运行，所以在 sass 中只能导入一个本地存在的 sass/scss/css 文件。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;a.scss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b.scss&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c.scss&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>@import</code> 在 sass 中的用法和在 css 中一样，只不过在 sass 中允许写一个 <code>@import</code> 导入多个文件，文件以逗号 <code>,</code> 分隔开即可，css 中必须每个文件写一个 <code>@import</code> 。</p><p>Sass 团队不推荐继续使用 <code>@import</code>。Sass 将在未来几年内逐步淘汰它，并最终将其完全从语言中移除。建议使用 <code>@use</code> 来代替。</p><p>使用 <code>@import</code> 存在的问题：</p><ul><li><code>@import</code> 使所有变量、 mixins 和函数都可以全局访问。导致很难判断是在哪里定义的。</li><li>因为所有东西都变成全局的，所以 sass 库必须在所有成员前加上前缀，以避免命名冲突。</li><li><code>@extend</code> 也是全局的，这使得很难预测哪些样式将被继承。</li><li>每个样式表都会被执行编译，每一个 <code>@import</code> 都会生成它的 CSS，这会增加编译时间并产生臃肿的代码输出。</li><li>没有办法定义不想暴露出去的私有成员和占位符选择器。</li></ul><p>使用 <code>@use</code> 则不会有以上的问题。</p><p>当 <code>@import</code> 一个文件时，该文件的编译过程就像它的所有代码直接出现在 <code>@import</code> 的位置一样。导入的文件中的所有 mixin、函数和变量都是可用的，并且在写入 <code>@import</code> 的确切位置包含了导入的文件中的所有样式代码。并且，在 <code>@import</code> 之前定义的 mixin、函数或变量(包括来自其他 <code>@import</code> 的)甚至都可以在被导入的那个文件中去使用。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token keyword">@import</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// b.scss</span>

<span class="token keyword">@import</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.b </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token variable">$black</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// c.scss</span>

<span class="token selector">.c </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token keyword">@import</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>

<span class="token keyword">@import</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 问题：在 b.scss 中能够访问到 a.scss 的变量和之前声明的变量</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.c</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* stylelint-disable-next-line no-duplicate-selectors */</span>
<span class="token selector">.c</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.b</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上例编译结果可以看到，，同一文件多次被 <code>@import</code> 时，会重复编译多次。</p><h4 id="嵌套的-import" tabindex="-1"><a class="header-anchor" href="#嵌套的-import"><span>嵌套的 <code>@import</code></span></a></h4><p><code>@import</code> 通常是写在样式表的顶层，但其实它们也可以嵌套在样式块中或纯 CSS at-rules中。</p><p>导入的 CSS 代码块将嵌套在该上下文中，这使得嵌套的 <code>@import</code> 对于将 CSS 块定位到特定元素或媒体查询非常有用。</p><p>注意，在嵌套 <code>@import</code> 引入的文件中定义的顶级 mixins，函数，变量依然会被导入为全局的变量。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token selector">.a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #a55<span class="token punctuation">;</span>

<span class="token selector">.index </span><span class="token punctuation">{</span>
  <span class="token keyword">@import</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.index .a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a55<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套 <code>@import</code> 对于确定第三方样式表的作用域非常有用，但是如果您是要导入自己写的样式表，那么最好在 <code>@mixin</code> 中编写您的样式，然后使用 <code>@include</code> 来将 <code>@mixin</code> 包含在嵌套的上下文中。<code>@mixin</code> 可以以更灵活的方式使用，当查看导入的样式表时，它的用途会更清晰。</p><h4 id="在-sass-中导入-css-并编译" tabindex="-1"><a class="header-anchor" href="#在-sass-中导入-css-并编译"><span>在 sass 中导入 css 并编译</span></a></h4><p>在 sass 中导入 css 文件时，不要显示地写出扩展名 <code>.css</code> ，只写文件名即可。因为如果显示地写出扩展名 <code>.css</code> ，这用来表示是在导入纯 css 文件，编译器则不会去编译 <code>@import</code> 语句，而是原封不动地输出这条语句。</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token comment">/* a.css */</span>

<span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// index.scss</span>

<span class="token keyword">@import</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.index </span><span class="token punctuation">{</span>
  <span class="token keyword">@extend</span> .a<span class="token punctuation">;</span>

  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.a,
.index</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.index</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将 <code>@import &quot;a&quot;;</code> 改为 <code>@import &quot;a.css&quot;;</code> ：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;a.css&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.index </span><span class="token punctuation">{</span>
  <span class="token comment">// 报错：The target selector was not found.</span>
  <span class="token comment">// 目标选择器未找到</span>
  <span class="token keyword">@extend</span> .a<span class="token punctuation">;</span>

  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码编译时会报错：目标选择器未找到，因为编译器遇到 <code>@import &quot;a.css&quot;;</code> 语句，它就会认为这是一条导入纯 css 文件的语句，不需要在编译阶段处理它，而是用于运行时的导入。所以要去继承这个文件中的选择器是无法找到目标选择器的。</p><h4 id="纯-css-导入语句-不编译" tabindex="-1"><a class="header-anchor" href="#纯-css-导入语句-不编译"><span>纯 css 导入语句（不编译）</span></a></h4><p>如果要让编译器原封不动地输出 <code>@import</code> 语句，而不是去编译后替换掉它，那么这里就有几种形式，满足其中任意一种即可。</p><p>在 <code>@import</code> 语句中：</p><ul><li>以 <code>.css</code> 结尾</li><li>以 <code>http://</code> 或 <code>https://</code> 开头</li><li>路径包含在 <code>url()</code> 之中。</li><li>语句中有媒体查询</li></ul><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;xxx.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;http://xxx.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;landscape&quot;</span> screen <span class="token operator">and</span> <span class="token punctuation">(</span><span class="token property">orientation</span><span class="token punctuation">:</span> landscape<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="import-中使用插值" tabindex="-1"><a class="header-anchor" href="#import-中使用插值"><span><code>@import</code> 中使用插值</span></a></h4><p>sass 中的 <code>@import</code> 语句是不支持使用插值的，因为这可能会让人不知道变量，函数，mixin 是从哪里来的。</p><p>但是，对于纯css <code>@import</code> 语句却是可以的，可以用来动态生成纯 css 的 <code>@import</code> 语句。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token function">get-font</span><span class="token punctuation">(</span><span class="token variable">$family</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">@import</span> <span class="token url">url</span><span class="token punctuation">(</span><span class="token string">&quot;http://xxx.com/#{$family}.css&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@include</span> <span class="token function">get-font</span><span class="token punctuation">(</span><span class="token string">&quot;font-name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&quot;http://xxx.com/font-name.css&quot;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="import-与模块" tabindex="-1"><a class="header-anchor" href="#import-与模块"><span><code>@import</code> 与模块</span></a></h4><p>假设在 <code>index.scss</code> 中 <code>@import &quot;b.scss&quot;</code> ，而 <code>b.scss</code> 中使用了 <code>@use &quot;a.scss&quot;</code>，在 <code>index.scss</code> 中可以访问 <code>b.scss</code> 中的所有成员（包括私有成员），但无法直接访问 <code>a.scss</code> 中的成员，除非 <code>b.scss</code> 中使用了 <code>@forward &quot;a.scss&quot;</code>。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>

<span class="token selector">.a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// b.scss</span>

<span class="token keyword">@use</span> <span class="token string">&quot;a.scss&quot;</span><span class="token punctuation">;</span>

<span class="token property"><span class="token variable">$black</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>

<span class="token selector">.b </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> a.<span class="token variable">$red</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$black</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;b.scss&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.index </span><span class="token punctuation">{</span>
  <span class="token comment">// color: $red; // 无法直接访问没有被转发的成员</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$black</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.b</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.index</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子可以看到，虽然 <code>index.scss</code> 无法访问到 <code>a.scss</code> 中没有被转发的成员，但是 <code>a.scss</code> 中的所有样式代码依然会被全部导入。</p><h4 id="只供-import-使用的文件-import-only-files" tabindex="-1"><a class="header-anchor" href="#只供-import-使用的文件-import-only-files"><span>只供 <code>@import</code> 使用的文件（Import-Only Files）</span></a></h4><p>一个模块暴露的成员有可能对 <code>@use</code> 方式的导入有效，但对 <code>@import</code> 方式的导入无效。</p><p>比如，使用 <code>@use</code> 默认会为所有成员生成一个以文件名命名的命名空间，但 <code>@import</code> 不会，而是直接暴露到全局，这就需要为模块成员取更长的名字以免命名冲突。</p><p>假设我们在维护一个 sass 库，如果我们改成新的模块系统（<code>@use</code>），我们会担心那些之前使用 <code>@import</code> 的用户会无法正常运行。</p><p>为了解决这个问题，sass 支持一种文件叫做 “<code>@import</code> 专用文件” ，也就是这个文件只能通过 <code>@import</code> 导入，而无法通过 <code>@use</code> 来导入。</p><p>给一个文件命名为 <code>&lt;name&gt;.import.scss</code> 即可，这样就能保持对 <code>@import</code> 的兼容，又能使用新的 <code>@use</code> 模块系统。</p><p>创建两个文件模块，<code>a.scss</code> 用于 <code>@use</code> 导入，<code>a.import.scss</code> 用于 <code>@import</code> 导入：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>

<span class="token selector">.a </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.import.scss</span>

<span class="token keyword">@forward</span> <span class="token string">&#39;a&#39;</span> <span class="token module-modifier keyword">as</span> a-*<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户在使用这个模块时，如果写 <code>@use &quot;a&quot;</code> 则会加载 <code>a.scss</code> 文件，如果写 <code>@import &quot;a&quot;</code> 则会加载 <code>a.import.scss</code> 文件。</p><p>使用 <code>@use</code> 导入：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@use</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.user </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> a.<span class="token variable">$red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>@import</code> 导入：</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.user </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$a-red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两种方式编译结果完全一样，编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.user</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-import-导入时配置模块成员" tabindex="-1"><a class="header-anchor" href="#使用-import-导入时配置模块成员"><span>使用 <code>@import</code> 导入时配置模块成员</span></a></h4><p>在模块被第一次 <code>@import</code> 的语句前面，定义一个全局变量即可配置变量值而不使用默认值。</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #f00 <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token selector">.a </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.import.scss</span>

<span class="token keyword">@forward</span> <span class="token string">&#39;a&#39;</span> <span class="token module-modifier keyword">as</span> a-*<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="language-scss"><code><span class="token comment">// a.scss</span>

<span class="token property"><span class="token variable">$a-red</span></span><span class="token punctuation">:</span> #f55<span class="token punctuation">;</span> <span class="token comment">// 在 @import 前定义全局变量，可配置模块成员</span>

<span class="token keyword">@import</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.user </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$a-red</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的 css ：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f55<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.user</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #f55<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>模块只会被加载一次，所以就算在第一次 <code>@import</code> 模块后更改了配置(即使是间接的)，再次 <code>@import</code> 模块也不会使用修改的配置。</p><p>如果通过 <code>@use</code> 或 <code>@forward</code> 去加载一个使用了 <code>@import</code> 的文件，将会加载到这个文件的所有公共成员及样式，以及它 <code>@import</code> 导入的所有成员和代码。相当于就是 <code>@import</code> 导入的文件的内容就像是直接写在 <code>@import</code> 语句的位置一样。</p>`,238);function O(U,G){const e=c("ExternalLinkIcon");return o(),l("div",null,[d,s("p",null,[s("a",r,[n("变量的调用"),p(e)])]),k,s("h3",v,[s("a",m,[s("span",null,[n("1. "),s("a",b,[n("Number"),p(e)])])])]),g,s("h3",h,[s("a",y,[s("span",null,[n("2. "),s("a",x,[n("String"),p(e)])])])]),f,s("h3",w,[s("a",$,[s("span",null,[n("3. "),s("a",q,[n("Color"),p(e)])])])]),S,s("h3",_,[s("a",z,[s("span",null,[n("4. "),s("a",C,[n("List"),p(e)])])])]),H,s("h3",T,[s("a",L,[s("span",null,[n("5. "),s("a",N,[n("Boolean"),p(e)])])])]),M,s("h3",A,[s("a",R,[s("span",null,[n("6. "),s("a",B,[n("null"),p(e)])])])]),P,s("h3",D,[s("a",E,[s("span",null,[n("7. "),s("a",I,[n("Map"),p(e)])])])]),V,s("h3",Z,[s("a",j,[s("span",null,[n("8. "),s("a",F,[n("Function"),p(e)])])])]),J])}const W=t(u,[["render",O],["__file","SASS.html.vue"]]),X=JSON.parse('{"path":"/basic_language/preprocess/SASS.html","title":"sass 应用","lang":"zh-CN","frontmatter":{"title":"sass 应用","icon":"scss","description":"一、Sass简介 Sass 又名 SCSS 是 CSS 预处理器之一，诞生于2007年,采用 Ruby 语言编写的一款 CSS 预处理语言。最初它是为了配合 HAML（一种缩进式 HTML 预编译器）而设计的，因此有着和 HTML 一样的缩进式风格。 Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点： 文...","head":[["meta",{"property":"og:url","content":"https://github.com/dcblog/basic_language/preprocess/SASS.html"}],["meta",{"property":"og:site_name","content":"dcBlog"}],["meta",{"property":"og:title","content":"sass 应用"}],["meta",{"property":"og:description","content":"一、Sass简介 Sass 又名 SCSS 是 CSS 预处理器之一，诞生于2007年,采用 Ruby 语言编写的一款 CSS 预处理语言。最初它是为了配合 HAML（一种缩进式 HTML 预编译器）而设计的，因此有着和 HTML 一样的缩进式风格。 Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点： 文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-17T13:21:15.000Z"}],["meta",{"property":"article:author","content":"Dachao"}],["meta",{"property":"article:modified_time","content":"2024-07-17T13:21:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sass 应用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-17T13:21:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dachao\\",\\"email\\":\\"wyc168hard@163.com\\"}]}"]]},"headers":[{"level":2,"title":"一、Sass简介","slug":"一、sass简介","link":"#一、sass简介","children":[]},{"level":2,"title":"二、Sass与CSS写法的差异","slug":"二、sass与css写法的差异","link":"#二、sass与css写法的差异","children":[{"level":3,"title":"1. Sass语法格式","slug":"_1-sass语法格式","link":"#_1-sass语法格式","children":[]},{"level":3,"title":"2. SCSS语法格式","slug":"_2-scss语法格式","link":"#_2-scss语法格式","children":[]}]},{"level":2,"title":"三、前置知识","slug":"三、前置知识","link":"#三、前置知识","children":[{"level":3,"title":"1. @error","slug":"_1-error","link":"#_1-error","children":[]},{"level":3,"title":"2. @warn","slug":"_2-warn","link":"#_2-warn","children":[]},{"level":3,"title":"3. @debug","slug":"_3-debug","link":"#_3-debug","children":[]},{"level":3,"title":"4. 注释","slug":"_4-注释","link":"#_4-注释","children":[]},{"level":3,"title":"5. 嵌套","slug":"_5-嵌套","link":"#_5-嵌套","children":[]}]},{"level":2,"title":"四、变量","slug":"四、变量","link":"#四、变量","children":[{"level":3,"title":"1. 使用场合","slug":"_1-使用场合","link":"#_1-使用场合","children":[]},{"level":3,"title":"2. 默认变量","slug":"_2-默认变量","link":"#_2-默认变量","children":[]},{"level":3,"title":"3. 全局变量和局部变量","slug":"_3-全局变量和局部变量","link":"#_3-全局变量和局部变量","children":[]},{"level":3,"title":"4. 插值","slug":"_4-插值","link":"#_4-插值","children":[]}]},{"level":2,"title":"五、数据类型","slug":"五、数据类型","link":"#五、数据类型","children":[{"level":3,"title":"1. Number","slug":"_1-number","link":"#_1-number","children":[]},{"level":3,"title":"2. String","slug":"_2-string","link":"#_2-string","children":[]},{"level":3,"title":"3. Color","slug":"_3-color","link":"#_3-color","children":[]},{"level":3,"title":"4. List","slug":"_4-list","link":"#_4-list","children":[]},{"level":3,"title":"5. Boolean","slug":"_5-boolean","link":"#_5-boolean","children":[]},{"level":3,"title":"6. null","slug":"_6-null","link":"#_6-null","children":[]},{"level":3,"title":"7. Map","slug":"_7-map","link":"#_7-map","children":[]},{"level":3,"title":"8. Function","slug":"_8-function","link":"#_8-function","children":[]}]},{"level":2,"title":"六、流程控制","slug":"六、流程控制","link":"#六、流程控制","children":[{"level":3,"title":"1. @if...@else","slug":"_1-if-else","link":"#_1-if-else","children":[]},{"level":3,"title":"2. @for","slug":"_2-for","link":"#_2-for","children":[]},{"level":3,"title":"3. @while","slug":"_3-while","link":"#_3-while","children":[]},{"level":3,"title":"4. @each","slug":"_4-each","link":"#_4-each","children":[]}]},{"level":2,"title":"七、混合宏mixin","slug":"七、混合宏mixin","link":"#七、混合宏mixin","children":[{"level":3,"title":"1. 声明混合宏","slug":"_1-声明混合宏","link":"#_1-声明混合宏","children":[]},{"level":3,"title":"2. 调用混合宏","slug":"_2-调用混合宏","link":"#_2-调用混合宏","children":[]},{"level":3,"title":"3. 混合宏的参数－传一个不带值的参数","slug":"_3-混合宏的参数-传一个不带值的参数","link":"#_3-混合宏的参数-传一个不带值的参数","children":[]},{"level":3,"title":"4. 混合宏的参数－传一个带值的参数","slug":"_4-混合宏的参数-传一个带值的参数","link":"#_4-混合宏的参数-传一个带值的参数","children":[]},{"level":3,"title":"5. 混合宏的参数－传多个参数","slug":"_5-混合宏的参数-传多个参数","link":"#_5-混合宏的参数-传多个参数","children":[]}]},{"level":2,"title":"八、继承extend","slug":"八、继承extend","link":"#八、继承extend","children":[]},{"level":2,"title":"九、占位符","slug":"九、占位符","link":"#九、占位符","children":[]},{"level":2,"title":"十、使用分析","slug":"十、使用分析","link":"#十、使用分析","children":[]},{"level":2,"title":"十一、sass的模块化","slug":"十一、sass的模块化","link":"#十一、sass的模块化","children":[{"level":3,"title":"1. @use","slug":"_1-use","link":"#_1-use","children":[]},{"level":3,"title":"2. @forward","slug":"_2-forward","link":"#_2-forward","children":[]},{"level":3,"title":"3. @import","slug":"_3-import","link":"#_3-import","children":[]}]}],"git":{"createdTime":1710854012000,"updatedTime":1721222475000,"contributors":[{"name":"dachao","email":"1114686398@qq.com","commits":2}]},"readingTime":{"minutes":36.39,"words":10918},"filePathRelative":"basic_language/preprocess/SASS.md","localizedDate":"2024年3月19日","excerpt":"<h2>一、Sass简介</h2>\\n<p>Sass 又名 SCSS 是 CSS 预处理器之一，诞生于2007年,采用 Ruby 语言编写的一款 CSS 预处理语言。最初它是为了配合 HAML（一种缩进式 HTML 预编译器）而设计的，因此有着和 HTML 一样的缩进式风格。</p>\\n<p>Sass 和 SCSS 其实是同一种东西，我们平时都称之为 Sass，两者之间不同之处有以下两点：</p>\\n<ol>\\n<li>文件扩展名不同，Sass 是以“.sass”后缀为扩展名，而 SCSS 是以“.scss”后缀为扩展名</li>\\n<li>语法书写方式不同，Sass 是以严格的 <mark>缩进式</mark> 语法规则来书写，不带大括号 {} 和分号 ; ，而 SCSS 的语法书写和 CSS 语法书写方式类似。</li>\\n</ol>","autoDesc":true}');export{W as comp,X as data};