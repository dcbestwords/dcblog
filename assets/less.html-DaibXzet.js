import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as p,c as i,a as n,b as s,d as e,e as c}from"./app-BBpUlT7-.js";const o={},u=n("h2",{id:"一、简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一、简介"},[n("span",null,"一、简介")])],-1),d=n("p",null,"Less(Leaner Style Sheets 精简样式表) 是一种动态样式语言，属于 css 预处理器的范畴，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展，Less 既可以在 客户端 上运行 ，也可以借助 Node.js 在服务端运行。",-1),r=n("p",null,"Less 编译工具：",-1),v={href:"http://koala-app.com/index.html",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"vscode 的 Easy LESS 插件",-1),m=c(`<h2 id="二、注释" tabindex="-1"><a class="header-anchor" href="#二、注释"><span>二、注释</span></a></h2><ul><li>多行注释会被保留</li><li>单行注释不被保留在编译生成的 CSS 中</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token comment">/* 
 * 一个块注释
 * style comment! 
*/</span>

<span class="token comment">// 这一行被注释掉了！</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、变量" tabindex="-1"><a class="header-anchor" href="#三、变量"><span>三、变量</span></a></h2><h3 id="_1-基本使用" tabindex="-1"><a class="header-anchor" href="#_1-基本使用"><span>1. 基本使用</span></a></h3><ul><li>使用<code>@</code> 声明变量</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token variable">@width<span class="token punctuation">:</span></span> 50px<span class="token punctuation">;</span>
<span class="token variable">@height<span class="token punctuation">:</span></span> 100px<span class="token punctuation">;</span>

<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>作为变量<strong style="color:green;">属性值</strong>直接使用</p></div><h3 id="_2-变量插值" tabindex="-1"><a class="header-anchor" href="#_2-变量插值"><span>2. 变量插值</span></a></h3><ul><li>变量用于<strong>选择器名</strong></li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token variable">@my-selector<span class="token punctuation">:</span></span> banner<span class="token punctuation">;</span>

<span class="token comment">// 需要添加 {}</span>
<span class="token selector">.@{my-selector}</span> <span class="token punctuation">{</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>变量用于<strong>属性名</strong></li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token variable">@property<span class="token punctuation">:</span></span> color<span class="token punctuation">;</span>

<span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">@{property}</span><span class="token punctuation">:</span> #0ee<span class="token punctuation">;</span>
  <span class="token property">background-@{property}</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>作为<strong style="color:green;">变量名</strong>使用</p></div><ul><li>变量用于<strong>URL</strong></li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@images<span class="token punctuation">:</span></span> <span class="token string">&#39;../img&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;@{images}/white-sand.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>变量用于 @<strong>import语句</strong></li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token comment">// Variables</span>
<span class="token variable">@themes<span class="token punctuation">:</span></span> <span class="token string">&#39;../../src/themes&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// Usage</span>
<span class="token atrule">@import &#39;@</span><span class="token punctuation">{</span>themes<span class="token punctuation">}</span><span class="token operator">/</span>tidal<span class="token operator">-</span>wave.less&#39;<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>作为<strong style="color:green;">字符串一部分</strong>使用</p></div><h3 id="_3-延迟加载" tabindex="-1"><a class="header-anchor" href="#_3-延迟加载"><span>3. 延迟加载</span></a></h3><p>当一个变量被声明多次，会取最后一次的值，并从当前作用域往外寻找变量。</p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token variable">@var<span class="token punctuation">:</span></span> 0<span class="token punctuation">;</span>
<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token variable">@var<span class="token punctuation">:</span></span> 1<span class="token punctuation">;</span>
  <span class="token selector">.brass</span> <span class="token punctuation">{</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 2<span class="token punctuation">;</span>
    <span class="token property">three</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
    <span class="token variable">@var<span class="token punctuation">:</span></span> 3<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token property">one</span><span class="token punctuation">:</span> <span class="token variable">@var</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">one</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.class .brass</span> <span class="token punctuation">{</span>
  <span class="token property">three</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-属性名变量" tabindex="-1"><a class="header-anchor" href="#_4-属性名变量"><span>4. 属性名变量</span></a></h3><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.widget</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #efefef<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>直接在已有的属性名前加<code>$</code>可将其作为变量进行复用</li></ul><h2 id="四、嵌套" tabindex="-1"><a class="header-anchor" href="#四、嵌套"><span>四、嵌套</span></a></h2><p>Less 使用嵌套代替层叠或与层叠结合使用</p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token selector">.navigation</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token selector">.logo</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">#header</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .navigation</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">#header .logo</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、父选择器" tabindex="-1"><a class="header-anchor" href="#五、父选择器"><span>五、父选择器</span></a></h2><p>在嵌套规则中， <code>&amp;</code> 表示父选择器，常用于给现有选择器添加伪类。</p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.header</span> <span class="token punctuation">{</span>
  <span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
      <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.header a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.header a:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>如果没有 <code>&amp;</code>，会被编译成后代选择器 <code>a :hover</code>。</p></li><li><p>除此之外，<code>&amp;</code> 还能用于生成重复类名(近似于拼串)</p></li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.button</span> <span class="token punctuation">{</span>
    <span class="token selector">&amp;-ok</span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;ok.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;-cancel</span> <span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;cancel.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">&amp;1</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.button-ok</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;ok.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button-cancel</span> <span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;cancel.png&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.button1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>生成所有可能的选择器排列</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">p, a, ul, li</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 2px dotted #366<span class="token punctuation">;</span>
  <span class="token comment">//生成所有可能的选择器排列</span>
  <span class="token selector">&amp; &amp;</span><span class="token punctuation">{</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">p p,
p a,
p ul,
p li,
a p,
a a,
a ul,
a li,
ul p,
ul a,
ul ul,
ul li,
li p,
li a,
li ul,
li li</span> <span class="token punctuation">{</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、混合-mixins" tabindex="-1"><a class="header-anchor" href="#六、混合-mixins"><span>六、混合(Mixins)</span></a></h2><p>混合(Mixin)将一组属性从一个规则集包含(或混入)到另一个规则集的方式，可理解为复制粘贴。</p><h3 id="_1-普通混合" tabindex="-1"><a class="header-anchor" href="#_1-普通混合"><span>1. 普通混合</span></a></h3><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.common</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@width</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">@height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
    <span class="token mixin-usage function">.common</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.common</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>混合前的css代码同样存在</p></div><h3 id="_2-带参数的混合" tabindex="-1"><a class="header-anchor" href="#_2-带参数的混合"><span>2. 带参数的混合</span></a></h3><ol><li>混合带参数，参数需要<strong>按顺序传递</strong></li></ol><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
  <span class="token comment">//border: @arguments;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">,</span> #ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>@arguments</code> 变量包含了传入的所有参数</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此时混合前的代码就不存在了（包含圆括号）</p></div><ol start="2"><li>混合带参数并有默认值</li></ol><ul><li>需注意的是，就算有默认值，也要按顺序传递</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>: #ccc)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>1px<span class="token punctuation">,</span> solid<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 会出错</span>
<span class="token selector">.border(<span class="token variable">@width</span>: 1px, <span class="token variable">@style</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span>solid<span class="token punctuation">,</span> #ccc<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>哪怕存在默认值也得按照顺序进行传参，可以使用以下指定参数名来传参</li></ul><h3 id="_3-命名参数" tabindex="-1"><a class="header-anchor" href="#_3-命名参数"><span>3. 命名参数</span></a></h3><p>可以在向混合传参时指定参数名称，从而不需要按顺序传入</p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.border(<span class="token variable">@width</span>, <span class="token variable">@style</span>, <span class="token variable">@color</span>: #ccc)</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> <span class="token variable">@width</span> <span class="token variable">@style</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.border</span><span class="token punctuation">(</span><span class="token variable">@style<span class="token punctuation">:</span></span> solid<span class="token punctuation">,</span> <span class="token variable">@color<span class="token punctuation">:</span></span> red<span class="token punctuation">,</span> <span class="token variable">@width<span class="token punctuation">:</span></span> 100px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此时<code>@color</code>传的参数可以省略</li></ul><h3 id="_4-匹配模式" tabindex="-1"><a class="header-anchor" href="#_4-匹配模式"><span>4. 匹配模式</span></a></h3><p>在多个相同的混合中(参数个数必须相同)，匹配特定的混合。</p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.mixin(dark, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">darken</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.mixin(light, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span><span class="token variable">@color</span><span class="token punctuation">,</span> 10%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// @_ 表示匹配所有</span>
<span class="token selector">.mixin(<span class="token variable">@_</span>, <span class="token variable">@color</span>)</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token variable">@switch<span class="token punctuation">:</span></span> light<span class="token punctuation">;</span>

<span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.mixin</span><span class="token punctuation">(</span><span class="token variable">@switch</span><span class="token punctuation">,</span> #888<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.class</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #a2a2a2<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、运算" tabindex="-1"><a class="header-anchor" href="#七、运算"><span>七、运算</span></a></h2><ul><li>计算结果以操作数最左侧的单位类型为准</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token variable">@conversion-1<span class="token punctuation">:</span></span> 5cm <span class="token operator">+</span> 10mm<span class="token punctuation">;</span> <span class="token comment">// 6cm</span>
<span class="token variable">@conversion-2<span class="token punctuation">:</span></span> 2 <span class="token operator">-</span> 3cm <span class="token operator">-</span> 5mm<span class="token punctuation">;</span> <span class="token comment">// -1.5cm</span>
<span class="token variable">@conversion-3<span class="token punctuation">:</span></span> 3.1 <span class="token operator">*</span> 2cm<span class="token punctuation">;</span> <span class="token comment">// 6.2cm</span>
<span class="token variable">@conversion-4<span class="token punctuation">:</span></span> 4px <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// 4px / 2</span>

<span class="token variable">@incompatible-units<span class="token punctuation">:</span></span> 1cm <span class="token operator">-</span> 1px<span class="token punctuation">;</span> <span class="token comment">// 0.97354167cm</span>

<span class="token variable">@base<span class="token punctuation">:</span></span> 5%<span class="token punctuation">;</span>
<span class="token variable">@filler<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">*</span> 2<span class="token punctuation">;</span> <span class="token comment">// 10%</span>
<span class="token variable">@other<span class="token punctuation">:</span></span> <span class="token variable">@base</span> <span class="token operator">+</span> <span class="token variable">@filler</span><span class="token punctuation">;</span> <span class="token comment">// 15%</span>

<span class="token variable">@color<span class="token punctuation">:</span></span> #224488 <span class="token operator">/</span> 2<span class="token punctuation">;</span> <span class="token comment">// #112244</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> #112244 <span class="token operator">+</span> #111<span class="token punctuation">;</span> <span class="token comment">// #223355</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、继承" tabindex="-1"><a class="header-anchor" href="#八、继承"><span>八、继承</span></a></h2><ul><li>继承可让多个选择器应用同一组属性，最终编译为并集选择器</li><li>其性能比混合高，但灵活性比混合低</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">extend</span><span class="token punctuation">(</span>.inline<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.inline,
nav ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extend-all" tabindex="-1"><a class="header-anchor" href="#extend-all"><span>Extend &quot;all&quot;</span></a></h3><ul><li>可理解为把 <code>all</code> 前的选择器出现的地方全都替换为 <code>extend</code> 前的选择器</li><li>即把 <code>.test</code> 替换为 <code>.replacement</code> 生成一个新的选择器应用样式，且不破坏原有的选择器</li></ul><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.a.b.test,
.test.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;:hover</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.replacement:extend(.test all)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.test:hover,
.replacement:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、避免编译" tabindex="-1"><a class="header-anchor" href="#九、避免编译"><span>九、避免编译</span></a></h2><p>通过加引号可以避免 Less 编译，直接把内容输出到 CSS 中</p><div class="language-less line-numbers-mode" data-ext="less" data-title="less"><pre class="language-less"><code><span class="token selector">.banner .inline .header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token string">&#39;100px + 100px&#39;</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px <span class="token operator">+</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.banner .inline .header</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token string">&#39;100px + 100px&#39;</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80),b={href:"https://juejin.cn/post/7116139958699556877#comment",target:"_blank",rel:"noopener noreferrer"};function g(h,x){const a=t("ExternalLinkIcon");return p(),i("div",null,[u,d,r,n("ul",null,[n("li",null,[n("a",v,[s("Koala"),e(a)])]),k]),m,n("blockquote",null,[n("p",null,[s("SCSS与less大同小异，具体的语法可以参考他人博客"),n("a",b,[s("常用的SCSS语法"),e(a)])])])])}const f=l(o,[["render",g],["__file","less.html.vue"]]),S=JSON.parse('{"path":"/basic_language/preprocess/less.html","title":"Less","lang":"zh-CN","frontmatter":{"title":"Less","description":"一、简介 Less(Leaner Style Sheets 精简样式表) 是一种动态样式语言，属于 css 预处理器的范畴，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展，Less 既可以在 客户端 上运行 ，也可以借助 Node.js 在服务端运行。 Less 编译工具： Koala vscode 的 Easy...","head":[["meta",{"property":"og:url","content":"https://github.com/dcblog/basic_language/preprocess/less.html"}],["meta",{"property":"og:site_name","content":"dcBlog"}],["meta",{"property":"og:title","content":"Less"}],["meta",{"property":"og:description","content":"一、简介 Less(Leaner Style Sheets 精简样式表) 是一种动态样式语言，属于 css 预处理器的范畴，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展，Less 既可以在 客户端 上运行 ，也可以借助 Node.js 在服务端运行。 Less 编译工具： Koala vscode 的 Easy..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T13:13:32.000Z"}],["meta",{"property":"article:author","content":"Dachao"}],["meta",{"property":"article:modified_time","content":"2024-03-19T13:13:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Less\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T13:13:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Dachao\\",\\"email\\":\\"wyc168hard@163.com\\"}]}"]]},"headers":[{"level":2,"title":"一、简介","slug":"一、简介","link":"#一、简介","children":[]},{"level":2,"title":"二、注释","slug":"二、注释","link":"#二、注释","children":[]},{"level":2,"title":"三、变量","slug":"三、变量","link":"#三、变量","children":[{"level":3,"title":"1. 基本使用","slug":"_1-基本使用","link":"#_1-基本使用","children":[]},{"level":3,"title":"2. 变量插值","slug":"_2-变量插值","link":"#_2-变量插值","children":[]},{"level":3,"title":"3. 延迟加载","slug":"_3-延迟加载","link":"#_3-延迟加载","children":[]},{"level":3,"title":"4. 属性名变量","slug":"_4-属性名变量","link":"#_4-属性名变量","children":[]}]},{"level":2,"title":"四、嵌套","slug":"四、嵌套","link":"#四、嵌套","children":[]},{"level":2,"title":"五、父选择器","slug":"五、父选择器","link":"#五、父选择器","children":[]},{"level":2,"title":"六、混合(Mixins)","slug":"六、混合-mixins","link":"#六、混合-mixins","children":[{"level":3,"title":"1. 普通混合","slug":"_1-普通混合","link":"#_1-普通混合","children":[]},{"level":3,"title":"2. 带参数的混合","slug":"_2-带参数的混合","link":"#_2-带参数的混合","children":[]},{"level":3,"title":"3. 命名参数","slug":"_3-命名参数","link":"#_3-命名参数","children":[]},{"level":3,"title":"4. 匹配模式","slug":"_4-匹配模式","link":"#_4-匹配模式","children":[]}]},{"level":2,"title":"七、运算","slug":"七、运算","link":"#七、运算","children":[]},{"level":2,"title":"八、继承","slug":"八、继承","link":"#八、继承","children":[{"level":3,"title":"Extend \\"all\\"","slug":"extend-all","link":"#extend-all","children":[]}]},{"level":2,"title":"九、避免编译","slug":"九、避免编译","link":"#九、避免编译","children":[]}],"git":{"createdTime":1710854012000,"updatedTime":1710854012000,"contributors":[{"name":"dachao","email":"1114686398@qq.com","commits":1}]},"readingTime":{"minutes":4.42,"words":1326},"filePathRelative":"basic_language/preprocess/less.md","localizedDate":"2024年3月19日","excerpt":"<h2>一、简介</h2>\\n<p>Less(Leaner Style Sheets 精简样式表) 是一种动态样式语言，属于 css 预处理器的范畴，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展，Less 既可以在 客户端 上运行 ，也可以借助 Node.js 在服务端运行。</p>\\n<p>Less 编译工具：</p>\\n<ul>\\n<li><a href=\\"http://koala-app.com/index.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Koala</a></li>\\n<li>vscode 的 Easy LESS 插件</li>\\n</ul>","autoDesc":true}');export{f as comp,S as data};
