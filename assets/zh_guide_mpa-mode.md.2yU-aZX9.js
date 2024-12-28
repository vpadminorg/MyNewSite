import{_ as e,D as t,c as n,j as i,a as s,I as p,a4 as l,o as h}from"./chunks/framework.7HSmJErP.js";const A=JSON.parse('{"title":"MPA 模式","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/mpa-mode.md","filePath":"zh/guide/mpa-mode.md","lastUpdated":1735378952000}'),d={name:"zh/guide/mpa-mode.md"},k={id:"mpa-mode",tabindex:"-1"},r=i("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "MPA 模式 <Badge type="warning" text="experimental" /> {#mpa-mode}"'},"​",-1),c=l(`<p>可以通过命令行输入 <code>vitepress build --mpa</code> 或在配置文件中指定 <code>mpa: true</code> 配置选项来启用 MPA (Multi-Page Application) 模式。</p><p>在 MPA 模式下，所有页面都默认不会包含任何 JavaScript。因此，站点也许可以在评估工具中获得更好的初始访问性能分数。</p><p>但是，由于缺少 SPA 路由，在 MPA 模式下切换页面时会重新加载整个页面，而不会像 SPA 模式那样立即响应。</p><p>同时请注意，默认情况下不使用 JavaScript 意味着你实际上只是将 Vue 作为服务器端模板语言。浏览器不会附加任何事件处理程序，因此将不会有任何交互性。要加载客户端 JavaScript，需要使用特殊的 <code>&lt;script client&gt;</code> 标签：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;client side JavaScript!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Hello</span></span></code></pre></div><p><code>&lt;script client&gt;</code> 是 VitePress 独有的功能，而不是 Vue 的功能。它可以在 <code>.md</code> 和 <code>.vue</code> 文件中使用，但只能在 MPA 模式下使用。所有主题组件中的客户端脚本将被打包在一起，而特定页面的客户端脚本将会分开处理。</p><p>请注意，<code>&lt;script client&gt;</code> <strong>不会被视为 Vue 组件代码</strong>，它只是普通的 JavaScript 模块。因此，只有在站点需要极少的客户端交互时，才应该使用 MPA 模式。</p>`,7);function o(E,g,m,_,y,u){const a=t("Badge");return h(),n("div",null,[i("h1",k,[s("MPA 模式 "),p(a,{type:"warning",text:"experimental"}),s(),r]),c])}const P=e(d,[["render",o]]);export{A as __pageData,P as default};
