import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.7HSmJErP.js";const u=JSON.parse('{"title":"上下页链接","description":"","frontmatter":{},"headers":[],"relativePath":"zh/reference/default-theme-prev-next-links.md","filePath":"zh/reference/default-theme-prev-next-links.md","lastUpdated":1735378952000}'),n={name:"zh/reference/default-theme-prev-next-links.md"},t=e(`<h1 id="prev-next-links" tabindex="-1">上下页链接 <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;上下页链接 {#prev-next-links}&quot;">​</a></h1><p>可以自定义上一页和下一页的文本和链接 (显示在文档页脚处)。如果要使其与侧边栏上的文本不同，这会很有帮助。此外，你可能会发现，要禁用未包含在侧边栏中的页面的页脚或链接时，这很有用。</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev&quot;">​</a></h2><ul><li><p>类型：<code>string | false | { text?: string; link?: string }</code></p></li><li><p>说明：</p><p>指定要在指向上一页的链接上显示的文本/链接。如果没有在 frontmatter 中设置它，文本/链接将从侧边栏配置中推断出来。</p></li><li><p>示例：</p><ul><li><p>仅自定义文本：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Get Started | Markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>自定义文本和链接：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>隐藏上一页：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><p>与 <code>prev</code> 相同，但用于下一页。</p>`,6),l=[t];function p(h,r,k,d,c,o){return i(),a("div",null,l)}const v=s(n,[["render",p]]);export{u as __pageData,v as default};
