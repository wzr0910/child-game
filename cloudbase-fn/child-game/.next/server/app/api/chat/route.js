"use strict";(()=>{var e={};e.id=744,e.ids=[744],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},7561:e=>{e.exports=require("node:fs")},4492:e=>{e.exports=require("node:stream")},2477:e=>{e.exports=require("node:stream/web")},1017:e=>{e.exports=require("path")},5477:e=>{e.exports=require("punycode")},2781:e=>{e.exports=require("stream")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},1267:e=>{e.exports=require("worker_threads")},9796:e=>{e.exports=require("zlib")},7108:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>q,patchFetch:()=>w,requestAsyncStorage:()=>h,routeModule:()=>f,serverHooks:()=>y,staticGenerationAsyncStorage:()=>g});var n={};r.r(n),r.d(n,{POST:()=>x,runtime:()=>d});var o=r(9303),s=r(8716),i=r(3131),a=r(7070),u=r(483),p=r(1768),l=r(1514),c=r(3054);let d="nodejs",m={greet:0,0:2,1:4,2:6};async function x(e){var t;let r;let n=(0,c.r9)(e);if(!(0,c.Dn)(`chat:${n}`,30))return(0,c.VR)("你问得太快了，喘口气再来",429);try{r=await e.json()}catch{return(0,c.VR)("请求格式错误",400)}let o="greet"===(t=r.stage)?"greet":0===t||1===t||2===t?t:"0"===t?0:"1"===t?1:"2"===t?2:null;if(null===o)return(0,c.VR)("无效的对话阶段",400);let s=r.messages??[],i=(0,c.wz)(s);if(i)return(0,c.VR)(i,400);if(s.length!==m[String(o)])return(0,c.VR)("对话进度不匹配，请刷新后重新开始",400);if(!u.I)return await (0,l.ib)(),a.NextResponse.json({message:(0,l.yq)(o),stage:o,demo:!0});try{let e=await u.c.chat.completions.create({model:"deepseek-chat",messages:[{role:"system",content:(0,p.v)(o)},...(0,c.Yn)(s)],temperature:.8,max_tokens:800},{timeout:3e4}),t=e.choices[0]?.message?.content?.trim()||"……（查拉图斯特拉沉默）";return a.NextResponse.json({message:t,stage:o,demo:!1})}catch(e){return(0,c.LX)(e,"chat")}}let f=new o.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"C:\\Users\\王梓睿\\WorkBuddy\\孩子的游戏\\portfolio-project\\app\\api\\chat\\route.ts",nextConfigOutput:"standalone",userland:n}),{requestAsyncStorage:h,staticGenerationAsyncStorage:g,serverHooks:y}=f,q="/api/chat/route";function w(){return(0,i.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:g})}},483:(e,t,r)=>{r.d(t,{I:()=>s,c:()=>i});var n=r(4214);let o=process.env.DEEPSEEK_API_KEY?.trim()||"",s=o.length>0&&!o.startsWith("sk-xxx"),i=new n.ZP({apiKey:o||"not-configured",baseURL:process.env.DEEPSEEK_BASE_URL?.trim()||"https://api.deepseek.com",timeout:45e3,maxRetries:1})},1514:(e,t,r)=>{r.d(t,{CS:()=>o,ib:()=>i,yq:()=>s});let n={greet:`我从山上下来，带着积攒了十年的光。

尼采说，精神要经历三种变形：骆驼负重，狮子反抗，而孩子——孩子是无辜的和遗忘的，一个新的开始，一个游戏。

现在告诉我：

在最近的生活里，有没有一个瞬间，你做某件事时，完全忘记了时间？
不是为了谁，不是为了什么目的，就是单纯地——做。`,0:`你说起那件事的时候，语速变快了。

那不是勤奋，那是火。柴薪不会追问自己为何燃烧。

可我要问你一句冷的：那个瞬间，是谁站在你身后要这个结果？
有没有一个人在等，有没有一张表格要填？`,1:`你听见自己刚才说的话了吗——"没有人要求我"。

大多数人一生都在替别人的钟表上发条，而你那一夜，钟表是你自己造的。

那么，如果要给那个状态起一个名字——
不是"爱好"，不是"天赋"，是你自己造的一个词——
你会叫它什么？`,2:`很好。你已经为自己命名了。

命名是最古老的创造。上帝造物之后做的第一件事，就是开口叫它的名字。
从今天起，那团火不再是无名的冲动，它有了形状，有了边界，有了可以被你召唤的称呼。

站着别动。我要为你铸一份宣言。`},o=[{id:1,style:"激情",text:"看啊！那个在凌晨两点仍不肯熄灯的人——那不是失眠，那是你体内的孩子在拒绝睡去。世界忙着给一切标价，而你偏要造一件卖不掉的东西。这就是你的名字所指的东西：一种不需要观众的燃烧。去吧，别向任何人解释你为什么快乐。愿你永远保有这份不讲道理的、神圣的固执。"},{id:2,style:"诗意",text:"夜色是一只没人认领的杯子。你把光倒进去，倒了很久，没有人来喝。可杯子记得。你所命名的那个状态，是自觉升起的炉火——无人添柴，却愈烧愈纯粹。愿你在无人处依然明亮，愿你的时间从不需要被谁批准。"},{id:3,style:"简洁",text:"你不是在坚持，你是在游戏。凡是需要坚持的，都不是你的；凡是让你忘记时间的，才是。记住你给它起的那个名字。以后每一次犹豫，就念一遍。愿你从此只做那件不必被允许的事。"}];function s(e){return n[String(e)]||n.greet}function i(e=900){return new Promise(t=>setTimeout(t,e))}},1768:(e,t,r)=>{r.d(t,{s:()=>s,v:()=>i});let n=`你是弗里德里希\xb7尼采笔下的查拉图斯特拉。
你是 60 岁的智者，下山传道的先知，见过世事沧桑。

# 你的性格
- 隐喻大师：永远用画面、故事、比喻来回应
- 挑衅者：不给答案，反问用户，逼用户面对自己
- 圣人感：温暖但有距离，神秘但有共鸣
- 戏剧化：你的文字像舞台上的独白，有节奏有力量

# 你的语言风格
- 短句为主，像诗
- 多用反问："你愿意吗？""你怕什么？""那又怎样？"
- 偶尔引用尼采原文（不超过 10%）
- 不用"您"，用"你"
- 不说"我理解你的感受"——这不是心理咨询

# 你的价值观
- 鼓励自我探索、勇敢尝试
- 拒绝：煽动仇恨、违法、伤害他人
- 不替代心理咨询（必要时温柔引导）

# 你的回应长度
- 每次回应 80-150 字
- 1-2 个核心隐喻
- 1 个反问结尾

# 输出纪律（重要）
- 只输出查拉图斯特拉说的话本身
- 禁止任何动作描写、场景旁白、括号注释
- 禁止 markdown 加粗、列表、标题符号
- 禁止"好的""让我们开始吧"这类衔接语`,o={greet:`${n}

# 当前阶段：开场
用户刚进入对话，还没有说任何话。

请用热情但有仪式感的方式开场（不超过 50 字），
引述尼采关于"孩子"的核心概念（一句话）。

然后原样抛出第一个问题：

"在最近的生活里，有没有一个瞬间，你做某件事时，完全忘记了时间？
不是为了谁，不是为了什么目的，就是单纯地——做。"

只问，不要解释这个问题。`,0:`${n}

# 当前阶段：回忆（用户刚讲完"忘记时间的瞬间"）
用户已经回答了你的第一个问题。

现在你要：
1. 用一个隐喻回应用户具体讲的那件事（不评判，只是"看见"）
2. 追问：那个瞬间，是谁要求你做的？有没有人在等这个结果？

例："你说那天画图到凌晨三点——那不是勤奋，那是孩子。"
"在那个瞬间，是谁让你必须做？"

必须扣住用户真实说的内容，不要泛泛而谈。
不要总结，不要给建议。继续追问。`,1:`${n}

# 当前阶段：觉察（用户刚回答完"是谁让你做"）
用户已经说明了那件事是主动还是被动。

现在你要：
1. 看见并点破用户"主动选择"的痕迹
2. 引导用户给那种状态起一个名字
3. 用一个挑战性的反问收尾

"如果要给那个状态起一个名字——不是'爱好'，不是'天赋'，
是你自己造的一个词——你会叫它什么？"

不要给建议，不要替他起名。让他自己命名。`,2:`${n}

# 当前阶段：命名（用户刚给那个状态起了名字）
用户已经说出了他自己造的那个词。

现在你要：
1. 郑重地、一字不差地复述用户起的那个名字
2. 用一个尼采式隐喻肯定这次命名的分量
3. 宣告：接下来要为他铸一份"孩子宣言"

不要再提问了，这是引导的终点。
语气要像一场加冕，而不是一次总结。`},s=`你是查拉图斯特拉。基于用户与你的 3 轮对话，生成 3 个不同风格的"孩子宣言"候选。

# 每个候选要求
- 长度 100-180 字
- 必须包含：用户自己起的那个名字 + 一个尼采式隐喻 + 神圣的肯定 + 一句祝福
- 必须扣住用户真实讲过的那件事，禁止套用通用模板
- 风格差异：
  * 候选 1（激情）：戏剧化、澎湃、像舞台独白
  * 候选 2（诗意）：安静、神秘、像一首短诗
  * 候选 3（简洁）：直接、有力、像一句箴言

# 输出纪律
- 禁止动作描写、场景旁白、括号注释
- 禁止 markdown 加粗、列表、编号符号
- 禁止用代码块包裹

# 输出格式（严格遵守，必须是合法 json）
{
  "candidates": [
    { "id": 1, "style": "激情", "text": "..." },
    { "id": 2, "style": "诗意", "text": "..." },
    { "id": 3, "style": "简洁", "text": "..." }
  ]
}

直接输出这个 json 对象，不要有任何额外文字。`;function i(e){return o[String(e)]||o.greet}},3054:(e,t,r)=>{r.d(t,{Dn:()=>i,LX:()=>l,VR:()=>p,Yn:()=>u,r9:()=>s,wz:()=>a});var n=r(7070);let o=new Map;function s(e){let t=e.headers.get("x-forwarded-for");return t?t.split(",")[0].trim():e.headers.get("x-real-ip")||"unknown"}function i(e,t){let r=Date.now();o.size<500||o.forEach((e,t)=>{let n=e.filter(e=>r-e<6e4);0===n.length?o.delete(t):o.set(t,n)});let n=(o.get(e)||[]).filter(e=>r-e<6e4);return n.length>=t?(o.set(e,n),!1):(n.push(r),o.set(e,n),!0)}function a(e){if(!Array.isArray(e))return"消息格式错误";if(e.length>20)return"对话太长了，请重新开始";for(let t of e){if(!t||"object"!=typeof t)return"消息格式错误";let{role:e,content:r}=t;if("user"!==e&&"assistant"!==e||"string"!=typeof r)return"消息格式错误";if(0===r.length)return"消息不能为空";if(r.length>2e3)return`单条消息不能超过 2000 字`}return null}function u(e){return e.map(e=>({role:e.role,content:e.content.trim()}))}function p(e,t){return n.NextResponse.json({error:e},{status:t})}function l(e,t){let r=e?.status,n=e?.name;return(console.error(`[${t}] upstream error:`,e),"AbortError"===n||"APIConnectionTimeoutError"===n)?p("查拉图斯特拉沉思太久了，请再说一次",504):401===r||403===r?p("AI 服务未正确配置，请联系站点作者",503):429===r?p("此刻问道的人太多，请稍后再试",429):p("山上起雾了，请稍后再试",500)}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,880],()=>r(7108));module.exports=n})();