import{setServerPlatform as Oe,renderToStream as De}from"@builder.io/qwik/server";import{getNotFound as Ie}from"./@qwik-city-not-found-paths.js";import{isStaticPath as Me}from"./@qwik-city-static-paths.js";import{createReadStream as $e}from"fs";import{join as te,extname as Le}from"path";import{fileURLToPath as Ee}from"url";import{Http2ServerRequest as Fe}from"http2";import{TextEncoderStream as Ke,TextDecoderStream as Ue,WritableStream as We,ReadableStream as Be}from"stream/web";import{fetch as Je,Headers as Xe,Request as Ze,Response as Ve,FormData as Ge}from"undici";import Ye from"crypto";import{_deserializeData as et,_serializeData as tt,_verifySerializable as st,componentQrl as A,inlinedQrl as k,_jsxC as x,Slot as fe,useStylesQrl as it,useVisibleTaskQrl as nt,_noopQrl as ot,_jsxQ as f,_jsxBranch as rt,useOnDocument as at,eventQrl as lt,useContext as V,jsx as we,SkipRender as ct,useServerData as he,useStore as D,_weakSerialize as dt,useSignal as W,useContextProvider as Q,useTaskQrl as ut,useLexicalScope as se,createContextId as T,noSerialize as ge,getLocale as mt,withLocale as ie,_fnSignal as pt,_wrapSignal as ft}from"@builder.io/qwik";import{Fragment as L}from"@builder.io/qwik/jsx-runtime";var be=class extends Error{constructor(e,t){super(t),this.status=e}};function wt(e,t){let s="Server Error";return t!=null&&(typeof t.message=="string"?s=t.message:s=String(t)),"<html>"+ye(e,s)+"</html>"}function ye(e,t){typeof e!="number"&&(e=500),typeof t=="string"?t=gt(t):t="";const s=typeof t=="string"?"600px":"300px",i=e>=500?yt:bt;return`
<head>
  <meta charset="utf-8">
  <meta http-equiv="Status" content="${e}">
  <title>${e} ${t}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body { color: ${i}; background-color: #fafafa; padding: 30px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif; }
    p { max-width: ${s}; margin: 60px auto 30px auto; background: white; border-radius: 4px; box-shadow: 0px 0px 50px -20px ${i}; overflow: hidden; }
    strong { display: inline-block; padding: 15px; background: ${i}; color: white; }
    span { display: inline-block; padding: 15px; }
  </style>
</head>
<body><p><strong>${e}</strong> <span>${t}</span></p></body>
`}var ht=/[&<>]/g,gt=e=>e.replace(ht,t=>{switch(t){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return""}}),bt="#006ce9",yt="#713fc2",ne={lax:"Lax",none:"None",strict:"Strict"},_t={seconds:1,minutes:1*60,hours:1*60*60,days:1*60*60*24,weeks:1*60*60*24*7},xt=(e,t,s)=>{const i=[`${e}=${t}`];return typeof s.domain=="string"&&i.push(`Domain=${s.domain}`),typeof s.maxAge=="number"?i.push(`Max-Age=${s.maxAge}`):Array.isArray(s.maxAge)?i.push(`Max-Age=${s.maxAge[0]*_t[s.maxAge[1]]}`):typeof s.expires=="number"||typeof s.expires=="string"?i.push(`Expires=${s.expires}`):s.expires instanceof Date&&i.push(`Expires=${s.expires.toUTCString()}`),s.httpOnly&&i.push("HttpOnly"),typeof s.path=="string"&&i.push(`Path=${s.path}`),s.sameSite&&ne[s.sameSite]&&i.push(`SameSite=${ne[s.sameSite]}`),s.secure&&i.push("Secure"),i.join("; ")},kt=e=>{const t={};if(typeof e=="string"&&e!==""){const s=e.split(";");for(const i of s){const n=i.split("=");n.length>1&&(t[decodeURIComponent(n[0].trim())]=decodeURIComponent(n[1].trim()))}}return t},I=Symbol("request-cookies"),Z=Symbol("response-cookies"),_e,St=class{constructor(e){this[_e]={},this[I]=kt(e)}get(e){const t=this[I][e];return t?{value:t,json(){return JSON.parse(t)},number(){return Number(t)}}:null}getAll(){return Object.keys(this[I]).reduce((e,t)=>(e[t]=this.get(t),e),{})}has(e){return!!this[I][e]}set(e,t,s={}){const i=typeof t=="string"?t:encodeURIComponent(JSON.stringify(t));this[Z][e]=xt(e,i,s)}delete(e,t){this.set(e,"deleted",{...t,maxAge:0})}headers(){return Object.values(this[Z])}};_e=Z;var M=class{},$=class extends M{},oe=new WeakMap,vt="qaction",jt="qfunc";function Ht(e){const{url:t,params:s,request:i,status:n,locale:a}=e,o={};i.headers.forEach((l,d)=>o[d]=l);const r=e.sharedMap.get(F),c=e.sharedMap.get(He),u=e.sharedMap.get(Dt);return{url:new URL(t.pathname+t.search,t).href,requestHeaders:o,locale:a(),nonce:u,qwikcity:{params:{...s},loadedRoute:Mt(e),response:{status:n(),loaders:K(e),action:r,formData:c}}}}var Qt=(e,t,s,i)=>{const n=[],a=[],o=[],r=!!(t&&Pt(t[1]));return e&&re(n,a,o,e,r,s),t&&(r&&(s==="POST"&&(o.unshift(Ct),o.push(qt)),o.push(Tt),o.push(zt)),re(n,a,o,t[1],r,s),r&&(n.length+le.length>0&&o.push(le(n,a)),o.push(i))),o},re=(e,t,s,i,n,a)=>{for(const o of i){typeof o.onRequest=="function"?s.push(o.onRequest):Array.isArray(o.onRequest)&&s.push(...o.onRequest);let r;switch(a){case"GET":{r=o.onGet;break}case"POST":{r=o.onPost;break}case"PUT":{r=o.onPut;break}case"PATCH":{r=o.onPatch;break}case"DELETE":{r=o.onDelete;break}case"OPTIONS":{r=o.onOptions;break}case"HEAD":{r=o.onHead;break}}if(typeof r=="function"?s.push(r):Array.isArray(r)&&s.push(...r),n){const c=Object.values(o).filter(l=>ae(l,"server_loader"));e.push(...c);const u=Object.values(o).filter(l=>ae(l,"server_action"));t.push(...u)}}},ae=(e,t)=>e&&typeof e=="function"&&e.__brand===t;function le(e,t){return async s=>{if(s.headersSent){s.exit();return}const{method:i}=s,n=K(s),a=s[E];if(i==="POST"){const o=s.query.get(vt);if(o){const r=globalThis._qwikActionsMap,c=t.find(u=>u.__id===o)??(r==null?void 0:r.get(o));if(c){s.sharedMap.set(F,o);const u=await s.parseBody();if(!u||typeof u!="object")throw new Error("Expected request data to be an object");const l=await ce(s,c.__validators,u);if(!l.success)n[o]=s.fail(l.status??500,l.error);else{const d=await c.__qrl(l.data,s);c.__qrl,n[o]=d}}}}e.length>0&&await Promise.all(e.map(o=>{const r=o.__id;return n[r]=ce(s,o.__validators,void 0).then(c=>c.success?o.__qrl(s):s.fail(c.status??500,c.error)).then(c=>(typeof c=="function"?n[r]=c():(o.__qrl,n[r]=c),c))}))}}async function ce(e,t,s){let i={success:!0,data:s};if(t)for(const n of t)if(i=await n.validate(e,s),i.success)s=i.data;else return i;return i}async function qt(e){const t=e.query.get(jt);if(t&&e.request.headers.get("X-QRL")===t&&e.request.headers.get("Content-Type")==="application/qwik-json"){e.exit();const s=e[E],i=await e.parseBody();if(Array.isArray(i)){const[n,...a]=i;if(Rt(n)&&n.getHash()===t){const o=await n.apply(e,a);e.headers.set("Content-Type","application/qwik-json"),e.send(200,await s._serializeData(o,!0));return}}throw e.error(500,"Invalid request")}}function Tt(e){const t=Y(e),{basePathname:s,pathname:i,url:n}=e;if(!qe(i)&&i!==s&&!i.endsWith(".html")){if(t){if(!i.endsWith("/"))throw e.redirect(302,i+"/"+n.search)}else if(i.endsWith("/"))throw e.redirect(302,i.slice(0,i.length-1)+n.search)}}var Rt=e=>typeof e=="function"&&typeof e.getSymbol=="function";function Pt(e){const t=e[e.length-1];return t&&typeof t.default=="function"}function xe(e,t){return e.pathname.endsWith(q)?e.pathname.slice(0,-q.length+(t?1:0))+e.search:e.pathname}var G=new TextEncoder;function Ct({url:e,request:t,error:s}){let i=t.headers.get("origin"),n=e.origin;if(i!==n)throw s(403,`Cross-site ${t.method} form submissions are forbidden`)}function At(e){return async t=>{if(t.headersSent||t.pathname.endsWith(q))return;t.request.headers.forEach((d,w)=>d);const i=t.headers;i.has("Content-Type")||i.set("Content-Type","text/html; charset=utf-8");const n=Y(t),{readable:a,writable:o}=new TextEncoderStream,r=t.getWritableStream(),c=a.pipeTo(r,{preventClose:!0}),u=o.getWriter(),l=t.status();try{const d=Qe(t)==="static",w=await e({base:t.basePathname+"build/",stream:u,serverData:Ht(t),containerAttributes:{["q:render"]:d?"static":""}}),p={loaders:K(t),action:t.sharedMap.get(F),status:l!==200?l:200,href:xe(t.url,n)};(typeof w).html==="string"&&await u.write(w.html),t.sharedMap.set("qData",p)}finally{await u.ready,await u.close(),await c}await r.close()}}async function zt(e){if(qe(e.pathname)){try{await e.next()}catch(l){if(!(l instanceof $))throw l}if(e.headersSent||e.exited)return;const s=e.status(),i=e.headers.get("Location"),n=Y(e);if(s>=301&&s<=308&&i){const l=Nt(i);if(l){e.headers.set("Location",l),e.getWritableStream().close();return}else e.status(200),e.headers.delete("Location")}e.request.headers.forEach((l,d)=>l),e.headers.set("Content-Type","application/json; charset=utf-8");const o={loaders:K(e),action:e.sharedMap.get(F),status:s!==200?s:200,href:xe(e.url,n),redirect:i??void 0},r=e.getWritableStream().getWriter(),u=await e[E]._serializeData(o,!0);r.write(G.encode(u)),e.sharedMap.set("qData",o),r.close()}}function Nt(e){if(e.startsWith("/")){const t=q,s=new URL(e,"http://localhost");return(s.pathname.endsWith("/")?s.pathname.slice(0,-1):s.pathname)+(t.startsWith("/")?"":"/")+t+s.search}else return}function Ot(e){const t=[];return e==="day"?e=60*60*24:e==="week"?e=60*60*24*7:e==="month"?e=60*60*24*30:e==="year"?e=60*60*24*365:e==="private"?e={private:!0,noCache:!0}:e==="immutable"?e={public:!0,immutable:!0,maxAge:60*60*24*365,staleWhileRevalidate:60*60*24*365}:e==="no-cache"&&(e={noCache:!0}),typeof e=="number"&&(e={maxAge:e,sMaxAge:e,staleWhileRevalidate:e}),e.immutable&&t.push("immutable"),e.maxAge&&t.push(`max-age=${e.maxAge}`),e.sMaxAge&&t.push(`s-maxage=${e.sMaxAge}`),e.noStore&&t.push("no-store"),e.noCache&&t.push("no-cache"),e.private&&t.push("private"),e.public&&t.push("public"),e.staleWhileRevalidate&&t.push(`stale-while-revalidate=${e.staleWhileRevalidate}`),t.join(", ")}var ke=Symbol("RequestEvLoaders"),Se=Symbol("RequestEvMode"),ve=Symbol("RequestEvRoute"),E=Symbol("RequestEvQwikSerializer"),je=Symbol("RequestEvTrailingSlash"),F="@actionId",He="@actionFormData",Dt="@nonce";function It(e,t,s,i=!0,n="/",a,o){const{request:r,platform:c,env:u}=e,l=new St(r.headers.get("cookie")),d=new Headers,w=new URL(r.url);let p=-1,y=null,b,_=e.locale,g=200;const R=async()=>{for(p++;p<s.length;){const m=s[p],h=m(v);h instanceof Promise&&await h,p++}},P=()=>{if(y!==null)throw new Error("Response already sent")},j=(m,h)=>{if(P(),typeof m=="number"){g=m;const H=v.getWritableStream().getWriter();H.write(typeof h=="string"?G.encode(h):h),H.close()}else if(g=m.status,m.headers.forEach((C,H)=>{d.append(H,C)}),m.body){const C=v.getWritableStream();m.body.pipeTo(C)}else{if(g>=300&&g<400)return new $;v.getWritableStream().getWriter().close()}return new M},S={},N=new Map,v={[ke]:S,[Se]:e.mode,[je]:i,[ve]:t,[E]:a,cookie:l,headers:d,env:u,method:r.method,params:(t==null?void 0:t[0])??{},pathname:w.pathname,platform:c,query:w.searchParams,request:r,url:w,basePathname:n,sharedMap:N,get headersSent(){return y!==null},get exited(){return p>=de},next:R,exit:()=>(p=de,new M),cacheControl:m=>{P(),d.set("Cache-Control",Ot(m))},resolveValue:async m=>{const h=m.__id;if(m.__brand==="server_loader"&&!(h in S))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");return S[h]},status:m=>typeof m=="number"?(P(),g=m,m):g,locale:m=>(typeof m=="string"&&(_=m),_||""),error:(m,h)=>(g=m,d.delete("Cache-Control"),new be(m,h)),redirect:(m,h)=>(P(),g=m,d.set("Location",h),d.delete("Cache-Control"),m>301&&d.set("Cache-Control","no-store"),new $),defer:m=>typeof m=="function"?m:()=>m,fail:(m,h)=>(P(),g=m,d.delete("Cache-Control"),{failed:!0,...h}),text:(m,h)=>(d.set("Content-Type","text/plain; charset=utf-8"),j(m,h)),html:(m,h)=>(d.set("Content-Type","text/html; charset=utf-8"),j(m,h)),parseBody:async()=>b!==void 0?b:b=$t(v.request,N,a),json:(m,h)=>(d.set("Content-Type","application/json; charset=utf-8"),j(m,JSON.stringify(h))),send:j,isDirty:()=>y!==null,getWritableStream:()=>(y===null&&(y=e.getWritableStream(g,d,l,o,v)),y)};return Object.freeze(v)}function K(e){return e[ke]}function Y(e){return e[je]}function Mt(e){return e[ve]}function Qe(e){return e[Se]}var de=999999999,$t=async(e,t,s)=>{var i;const n=e.clone(),a=((i=e.headers.get("content-type"))==null?void 0:i.split(/[;,]/,1)[0].trim())??"";if(a==="application/x-www-form-urlencoded"||a==="multipart/form-data"){const o=await n.formData();return t.set(He,o),Lt(o)}else{if(a==="application/json")return await n.json();if(a==="application/qwik-json")return s._deserializeData(await n.text())}},Lt=e=>{const t={};return e.forEach((s,i)=>{const n=i.split(".").filter(o=>o);let a=t;for(let o=0;o<n.length;o++){let r=n[o];o===n.length-1?r.endsWith("[]")?(r=r.slice(0,-2),a[r]=a[r]||[],a[r].push(s)):a[r]=s:a=a[r]={...a[r]}}}),t};function Et(e,t,s,i=!0,n="/",a){let o;const r=new Promise(u=>o=u),c=It(e,t,s,i,n,a,o);return{response:r,requestEv:c,completion:Ft(c,o)}}async function Ft(e,t){try{await e.next()}catch(s){if(s instanceof $)await e.getWritableStream().close();else if(s instanceof be){if(console.error(s),!e.headersSent){const i=wt(s.status,s);e.html(s.status,i)}}else if(!(s instanceof M)){if(Qe(e)!=="dev")try{e.headersSent||(e.headers.set("content-type","text/html; charset=utf-8"),e.cacheControl({noCache:!0}),e.status(500));const i=e.getWritableStream();if(!i.locked){const n=i.getWriter();await n.write(G.encode(ye(500,"Internal Server Error"))),await n.close()}}catch{console.error("Unable to render error page")}return s}}finally{e.isDirty()||t(null)}}function Kt(e,t){if(e.endsWith(q)){const s=e.length-Ut+(t?1:0);e=e.slice(0,s),e===""&&(e="/")}return e}var qe=e=>e.endsWith(q),q="/q-data.json",Ut=q.length,Wt=async(e,t,s,i)=>{if(Array.isArray(e))for(const n of e){const a=n[0].exec(i);if(a){const o=n[1],r=Jt(n[2],a),c=n[4],u=new Array(o.length),l=[],d=Bt(t,i);let w;return o.forEach((p,y)=>{ue(p,l,b=>u[y]=b,s)}),ue(d,l,p=>w=p==null?void 0:p.default,s),l.length>0&&await Promise.all(l),[r,u,w,c]}}return null},ue=(e,t,s,i)=>{if(typeof e=="function"){const n=oe.get(e);if(n)s(n);else{const a=e();typeof a.then=="function"?t.push(a.then(o=>{i!==!1&&oe.set(e,o),s(o)})):a&&s(a)}}},Bt=(e,t)=>{if(e){t=t.endsWith("/")?t:t+"/";const s=e.find(i=>i[0]===t||t.startsWith(i[0]+(t.endsWith("/")?"":"/")));if(s)return s[1]}},Jt=(e,t)=>{const s={};if(e)for(let i=0;i<e.length;i++){const n=(t==null?void 0:t[i+1])??"",a=n.endsWith("/")?n.slice(0,-1):n;s[e[i]]=decodeURIComponent(a)}return s};async function Xt(e,t,s){const{render:i,qwikCityPlan:n}=t,{routes:a,serverPlugins:o,menus:r,cacheModules:c,trailingSlash:u,basePathname:l}=n,d=e.url.pathname,w=Kt(d,u),p=await Zt(o,a,r,c,w,e.request.method,i);return p?Et(e,p[0],p[1],u,l,s):null}async function Zt(e,t,s,i,n,a,o){const r=await Wt(t,s,i,n),c=Qt(e,r,a,At(o));return c.length>0?[r,c]:null}var{ORIGIN:Vt,PROTOCOL_HEADER:me,HOST_HEADER:Gt}=process.env;function Yt(e){const t=e.headers,s=me&&t[me]||(e.socket.encrypted||e.connection.encrypted?"https":"http"),i=Gt??(e instanceof Fe?":authority":"host"),n=t[i];return`${s}://${n}`}function B(e){const t=Vt??Yt(e);return new URL(e.originalUrl||e.url||"/",t)}async function es(e,t,s,i){const n=new Headers,a=t.headers;for(const l in a){const d=a[l];if(typeof d=="string")n.set(l,d);else if(Array.isArray(d))for(const w of d)n.append(l,w)}const o=async function*(){for await(const l of t)yield l},r=t.method==="HEAD"||t.method==="GET"?void 0:o(),c={method:t.method,headers:n,body:r,duplex:"half"};return{mode:i,url:e,request:new Request(e.href,c),env:{get(l){return process.env[l]}},getWritableStream:(l,d,w)=>{s.statusCode=l,d.forEach((b,_)=>s.setHeader(_,b));const p=w.headers();return p.length>0&&s.setHeader("Set-Cookie",p),new WritableStream({write(b){s.write(b)},close(){s.end()}})},platform:{ssr:!0,incomingMessage:t,node:process.versions.node},locale:void 0}}var ts={"3gp":"video/3gpp","3gpp":"video/3gpp",asf:"video/x-ms-asf",asx:"video/x-ms-asf",avi:"video/x-msvideo",avif:"image/avif",bmp:"image/x-ms-bmp",css:"text/css",flv:"video/x-flv",gif:"image/gif",htm:"text/html",html:"text/html",ico:"image/x-icon",jng:"image/x-jng",jpeg:"image/jpeg",jpg:"image/jpeg",js:"application/javascript",json:"application/json",kar:"audio/midi",m4a:"audio/x-m4a",m4v:"video/x-m4v",mid:"audio/midi",midi:"audio/midi",mng:"video/x-mng",mov:"video/quicktime",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",mpg:"video/mpeg",ogg:"audio/ogg",pdf:"application/pdf",png:"image/png",rar:"application/x-rar-compressed",shtml:"text/html",svg:"image/svg+xml",svgz:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",txt:"text/plain",wbmp:"image/vnd.wap.wbmp",webm:"video/webm",webp:"image/webp",wmv:"video/x-ms-wmv",woff:"font/woff",woff2:"font/woff2",xml:"text/xml",zip:"application/zip"};function ss(){typeof global<"u"&&typeof globalThis.fetch!="function"&&typeof process<"u"&&process.versions.node&&(globalThis.fetch=Je,globalThis.Headers=Xe,globalThis.Request=Ze,globalThis.Response=Ve,globalThis.FormData=Ge),typeof globalThis.TextEncoderStream>"u"&&(globalThis.TextEncoderStream=Ke,globalThis.TextDecoderStream=Ue),typeof globalThis.WritableStream>"u"&&(globalThis.WritableStream=We,globalThis.ReadableStream=Be),typeof globalThis.crypto>"u"&&(globalThis.crypto=Ye.webcrypto)}function is(e){var t;ss();const s={_deserializeData:et,_serializeData:tt,_verifySerializable:st};e.manifest&&Oe(e.manifest);const i=((t=e.static)==null?void 0:t.root)??te(Ee(import.meta.url),"..","..","dist");return{router:async(r,c,u)=>{try{const l=await es(B(r),r,c,"server"),d=await Xt(l,e,s);if(d){const w=await d.completion;if(w)throw w;if(d.requestEv.headersSent)return}u()}catch(l){console.error(l),u(l)}},notFound:async(r,c,u)=>{try{if(!c.headersSent){const l=B(r),d=Ie(l.pathname);c.writeHead(404,{"Content-Type":"text/html; charset=utf-8","X-Not-Found":l.pathname}),c.end(d)}}catch(l){console.error(l),u(l)}},staticFile:async(r,c,u)=>{var l;try{const d=B(r);if(Me(r.method||"GET",d)){const w=te(i,d.pathname),p=$e(w),y=Le(d.pathname).replace(/^\./,""),b=ts[y];b&&c.setHeader("Content-Type",b),(l=e.static)!=null&&l.cacheControl&&c.setHeader("Cache-Control",e.static.cacheControl),p.on("error",u),p.pipe(c);return}return u()}catch(d){console.error(d),u(d)}}}}const ns=()=>x(L,{children:x(fe,null,3,"YR_0")},1,"YR_1"),os=A(k(ns,"s_PdBZ3iDbPQA")),rs=Object.freeze(Object.defineProperty({__proto__:null,default:os},Symbol.toStringTag,{value:"Module"})),as="",ls=()=>(it(k(as,"s_dggxx9OoiPs")),nt(ot("s_ONzJ7Uwvx2o"),{strategy:"document-ready"}),x(L,{children:f("div",null,{class:"swiper"},[f("div",null,{class:"swiper-wrapper"},[f("div",null,{class:"swiper-slide"},"Slide 1",3,null),f("div",null,{class:"swiper-slide"},"Slide 2",3,null),f("div",null,{class:"swiper-slide"},"Slide 3",3,null),f("div",null,{class:"swiper-slide"},"Slide 10",3,null),f("div",null,{class:"swiper-slide"},"Slide 20",3,null),f("div",null,{class:"swiper-slide"},"Slide 30",3,null),f("div",null,{class:"swiper-slide"},"Slide 100",3,null),f("div",null,{class:"swiper-slide"},"Slide 200",3,null),f("div",null,{class:"swiper-slide"},"Slide 300",3,null)],3,null),f("div",null,{class:"swiper-pagination"},null,3,null),f("div",null,{class:"swiper-button-prev"},null,3,null),f("div",null,{class:"swiper-button-next"},null,3,null),f("div",null,{class:"swiper-scrollbar"},null,3,null)],3,null)},3,"p5_0")),cs=A(k(ls,"s_UdIHNtZ13Ow")),ds=Object.freeze(Object.defineProperty({__proto__:null,default:cs},Symbol.toStringTag,{value:"Module"})),us=[],ms=()=>rs,ps=[[/^\/$/,[ms,()=>ds],void 0,"/",["q-32627427.js","q-4db948db.js"]]],fs=[],ws=!0,hs="/",gs=!0,bs={routes:ps,serverPlugins:us,menus:fs,trailingSlash:ws,basePathname:hs,cacheModules:gs},ys={symbols:{s_02wMImzEAbk:{origin:"../../../HolismSite/Qwik/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag"},s_ONzJ7Uwvx2o:{origin:"routes/index.jsx",displayName:"Index_component_useVisibleTask",canonicalFilename:"s_onzj7uwvx2o",hash:"ONzJ7Uwvx2o",ctxKind:"function",ctxName:"useVisibleTask$",captures:!1,parent:"s_UdIHNtZ13Ow"},s_1QKKC0NVXEU:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_1qkkc0nvxeu",hash:"1QKKC0NVXEU",ctxKind:"function",ctxName:"component$",captures:!1},s_2KzwmpC8w9k:{origin:"root.jsx",displayName:"root_component",canonicalFilename:"s_2kzwmpc8w9k",hash:"2KzwmpC8w9k",ctxKind:"function",ctxName:"component$",captures:!1},s_AKetNByE5TM:{origin:"../../../HolismSite/Qwik/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_aketnbye5tm",hash:"AKetNByE5TM",ctxKind:"function",ctxName:"component$",captures:!1},s_PdBZ3iDbPQA:{origin:"routes/layout.jsx",displayName:"Layout_component",canonicalFilename:"s_pdbz3idbpqa",hash:"PdBZ3iDbPQA",ctxKind:"function",ctxName:"component$",captures:!1},s_TxCFOy819ag:{origin:"../../../HolismSite/Qwik/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1},s_UdIHNtZ13Ow:{origin:"routes/index.jsx",displayName:"Index_component",canonicalFilename:"s_udihntz13ow",hash:"UdIHNtZ13Ow",ctxKind:"function",ctxName:"component$",captures:!1},s_yDcyHPF1T2o:{origin:"router-head.jsx",displayName:"RouterHead_component",canonicalFilename:"s_ydcyhpf1t2o",hash:"yDcyHPF1T2o",ctxKind:"function",ctxName:"component$",captures:!1},s_dggxx9OoiPs:{origin:"routes/index.jsx",displayName:"Index_component_useStyles",canonicalFilename:"s_dggxx9ooips",hash:"dggxx9OoiPs",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_UdIHNtZ13Ow"},s_KnNE9eL0qfc:{origin:"../../../HolismSite/Qwik/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component_useOnDocument_event",canonicalFilename:"s_knne9el0qfc",hash:"KnNE9eL0qfc",ctxKind:"function",ctxName:"eventQrl$1",captures:!1,parent:"s_AKetNByE5TM"},s_fX0bDjeJa0E:{origin:"../../../HolismSite/Qwik/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag"}},mapping:{s_02wMImzEAbk:"q-eda35e0c.js",s_ONzJ7Uwvx2o:"q-c02c915f.js",s_1QKKC0NVXEU:"q-98abf6f7.js",s_2KzwmpC8w9k:"q-98abf6f7.js",s_AKetNByE5TM:"q-eae86b00.js",s_PdBZ3iDbPQA:"q-497932c8.js",s_TxCFOy819ag:"q-eda35e0c.js",s_UdIHNtZ13Ow:"q-c02c915f.js",s_yDcyHPF1T2o:"q-87fdeb33.js",s_dggxx9OoiPs:"q-c02c915f.js",s_KnNE9eL0qfc:"q-eae86b00.js",s_fX0bDjeJa0E:"q-eda35e0c.js"},bundles:{"q-32627427.js":{size:185,imports:["q-acd73b39.js"],dynamicImports:["q-497932c8.js"],origins:["src/routes/layout.jsx"]},"q-45aab3b6.js":{size:2536,origins:["../../HolismSite/Qwik/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-497932c8.js":{size:134,imports:["q-acd73b39.js"],origins:["src/entry_Layout.js","src/s_pdbz3idbpqa.js"],symbols:["s_PdBZ3iDbPQA"]},"q-4db948db.js":{size:185,imports:["q-acd73b39.js"],dynamicImports:["q-c02c915f.js"],origins:["src/routes/index.jsx"]},"q-7eba9b16.js":{size:58,imports:["q-acd73b39.js"]},"q-87fdeb33.js":{size:674,imports:["q-98abf6f7.js","q-acd73b39.js"],origins:["src/entry_RouterHead.js","src/s_ydcyhpf1t2o.js"],symbols:["s_yDcyHPF1T2o"]},"q-98abf6f7.js":{size:7087,imports:["q-acd73b39.js"],dynamicImports:["q-87fdeb33.js","q-eae86b00.js","q-eda35e0c.js"],origins:["../../HolismSite/Qwik/node_modules/@builder.io/qwik-city/index.qwik.mjs","@qwik-city-sw-register","src/entry_root.js","src/router-head.jsx","src/routes/header.jsx","src/s_1qkkc0nvxeu.js","src/s_2kzwmpc8w9k.js"],symbols:["s_1QKKC0NVXEU","s_2KzwmpC8w9k"]},"q-acd73b39.js":{size:46008,dynamicImports:["q-98abf6f7.js"],origins:["../../HolismSite/Qwik/node_modules/@builder.io/qwik/core.min.mjs","../../HolismSite/Qwik/node_modules/tailwindcss/tailwind.css","src/global.css","src/root.tsx"]},"q-c02c915f.js":{size:70963,imports:["q-acd73b39.js"],origins:["../../HolismSite/Qwik/node_modules/ssr-window/ssr-window.esm.js","../../HolismSite/Qwik/node_modules/swiper/core/breakpoints/getBreakpoint.js","../../HolismSite/Qwik/node_modules/swiper/core/breakpoints/index.js","../../HolismSite/Qwik/node_modules/swiper/core/breakpoints/setBreakpoint.js","../../HolismSite/Qwik/node_modules/swiper/core/check-overflow/index.js","../../HolismSite/Qwik/node_modules/swiper/core/classes/addClasses.js","../../HolismSite/Qwik/node_modules/swiper/core/classes/index.js","../../HolismSite/Qwik/node_modules/swiper/core/classes/removeClasses.js","../../HolismSite/Qwik/node_modules/swiper/core/core.js","../../HolismSite/Qwik/node_modules/swiper/core/defaults.js","../../HolismSite/Qwik/node_modules/swiper/core/events-emitter.js","../../HolismSite/Qwik/node_modules/swiper/core/events/index.js","../../HolismSite/Qwik/node_modules/swiper/core/events/onClick.js","../../HolismSite/Qwik/node_modules/swiper/core/events/onLoad.js","../../HolismSite/Qwik/node_modules/swiper/core/events/onResize.js","../../HolismSite/Qwik/node_modules/swiper/core/events/onScroll.js","../../HolismSite/Qwik/node_modules/swiper/core/events/onTouchEnd.js","../../HolismSite/Qwik/node_modules/swiper/core/events/onTouchMove.js","../../HolismSite/Qwik/node_modules/swiper/core/events/onTouchStart.js","../../HolismSite/Qwik/node_modules/swiper/core/grab-cursor/index.js","../../HolismSite/Qwik/node_modules/swiper/core/grab-cursor/setGrabCursor.js","../../HolismSite/Qwik/node_modules/swiper/core/grab-cursor/unsetGrabCursor.js","../../HolismSite/Qwik/node_modules/swiper/core/loop/index.js","../../HolismSite/Qwik/node_modules/swiper/core/loop/loopCreate.js","../../HolismSite/Qwik/node_modules/swiper/core/loop/loopDestroy.js","../../HolismSite/Qwik/node_modules/swiper/core/loop/loopFix.js","../../HolismSite/Qwik/node_modules/swiper/core/moduleExtendParams.js","../../HolismSite/Qwik/node_modules/swiper/core/modules/observer/observer.js","../../HolismSite/Qwik/node_modules/swiper/core/modules/resize/resize.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/index.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/slideNext.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/slidePrev.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/slideReset.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/slideTo.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/slideToClickedSlide.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/slideToClosest.js","../../HolismSite/Qwik/node_modules/swiper/core/slide/slideToLoop.js","../../HolismSite/Qwik/node_modules/swiper/core/transition/index.js","../../HolismSite/Qwik/node_modules/swiper/core/transition/setTransition.js","../../HolismSite/Qwik/node_modules/swiper/core/transition/transitionEmit.js","../../HolismSite/Qwik/node_modules/swiper/core/transition/transitionEnd.js","../../HolismSite/Qwik/node_modules/swiper/core/transition/transitionStart.js","../../HolismSite/Qwik/node_modules/swiper/core/translate/getTranslate.js","../../HolismSite/Qwik/node_modules/swiper/core/translate/index.js","../../HolismSite/Qwik/node_modules/swiper/core/translate/maxTranslate.js","../../HolismSite/Qwik/node_modules/swiper/core/translate/minTranslate.js","../../HolismSite/Qwik/node_modules/swiper/core/translate/setTranslate.js","../../HolismSite/Qwik/node_modules/swiper/core/translate/translateTo.js","../../HolismSite/Qwik/node_modules/swiper/core/update/index.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateActiveIndex.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateAutoHeight.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateClickedSlide.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateProgress.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateSize.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateSlides.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateSlidesClasses.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateSlidesOffset.js","../../HolismSite/Qwik/node_modules/swiper/core/update/updateSlidesProgress.js","../../HolismSite/Qwik/node_modules/swiper/modules/navigation/navigation.js","../../HolismSite/Qwik/node_modules/swiper/modules/pagination/pagination.js","../../HolismSite/Qwik/node_modules/swiper/shared/classes-to-selector.js","../../HolismSite/Qwik/node_modules/swiper/shared/create-element-if-not-defined.js","../../HolismSite/Qwik/node_modules/swiper/shared/get-browser.js","../../HolismSite/Qwik/node_modules/swiper/shared/get-device.js","../../HolismSite/Qwik/node_modules/swiper/shared/get-support.js","../../HolismSite/Qwik/node_modules/swiper/shared/process-lazy-preloader.js","../../HolismSite/Qwik/node_modules/swiper/shared/utils.js","../../HolismSite/Qwik/node_modules/swiper/swiper.min.css?inline","src/entry_Index.js","src/s_dggxx9ooips.js","src/s_onzj7uwvx2o.js","src/s_udihntz13ow.js"],symbols:["s_dggxx9OoiPs","s_ONzJ7Uwvx2o","s_UdIHNtZ13Ow"]},"q-d9c0f8c0.js":{size:112,imports:["q-acd73b39.js"],dynamicImports:["q-45aab3b6.js"],origins:["@qwik-city-entries"]},"q-eae86b00.js":{size:756,imports:["q-98abf6f7.js","q-acd73b39.js"],origins:["src/entry_RouterOutlet.js","src/s_aketnbye5tm.js","src/s_knne9el0qfc.js"],symbols:["s_AKetNByE5TM","s_KnNE9eL0qfc"]},"q-eda35e0c.js":{size:2336,imports:["q-98abf6f7.js","q-acd73b39.js"],dynamicImports:["q-32627427.js","q-4db948db.js","q-d9c0f8c0.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_TxCFOy819ag"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-b0cb93ec.css",dangerouslySetInnerHTML:`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 360px){.container{max-width:360px}}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.static{position:static!important}
`}}],version:"1",options:{target:"client",buildMode:"production",forceFullBuild:!0,entryStrategy:{type:"smart"}},platform:{qwik:"0.100.0",vite:"",rollup:"3.20.2",env:"node",os:"linux",node:"18.15.0"}},_s='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',xs=T("qc-s"),ks=T("qc-c"),Te=T("qc-ic"),Re=T("qc-h"),Pe=T("qc-l"),Ss=T("qc-n"),vs=T("qc-a"),js=A(k(()=>{rt(),at("qinit",lt(k(()=>{const t="_qCityPopstateFallback";window._qCityPopstateFallback||(window[t]=()=>{window._qCityHistory||location.reload()},setTimeout(()=>{addEventListener("popstate",window._qCityPopstateFallback)},0))},"RouterOutlet_component_useOnDocument_event_KnNE9eL0qfc")));const e=V(Te);if(e.value&&e.value.length>0){const t=e.value.length;let s=null;for(let i=t-1;i>=0;i--)s=we(e.value[i].default,{children:s});return s}return ct},"RouterOutlet_component_AKetNByE5TM")),J=e=>e.pathname+e.search+e.hash,Hs=(e,t,s,i)=>{const n=Ce(),o={head:n,withLocale:r=>ie(i,r),resolveValue:r=>{const c=r.__id;if(r.__brand==="server_loader"&&!(c in e.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const u=e.loaders[c];if(u instanceof Promise)throw new Error("Loaders returning a function can not be referred to in the head function.");return u},...t};for(let r=s.length-1;r>=0;r--){const c=s[r]&&s[r].head;c&&(typeof c=="function"?pe(n,ie(i,()=>c(o))):typeof c=="object"&&pe(n,c))}return o.head},pe=(e,t)=>{typeof t.title=="string"&&(e.title=t.title),X(e.meta,t.meta),X(e.links,t.links),X(e.styles,t.styles),Object.assign(e.frontmatter,t.frontmatter)},X=(e,t)=>{if(Array.isArray(t))for(const s of t){if(typeof s.key=="string"){const i=e.findIndex(n=>n.key===s.key);if(i>-1){e[i]=s;continue}}e.push(s)}},Ce=()=>({title:"",meta:[],links:[],styles:[],frontmatter:{}}),Qs=()=>V(Re),qs=()=>V(Pe),Ts=()=>ge(he("qwikcity")),Rs=A(k(()=>{const e=Ts();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const t=he("url");if(!t)throw new Error("Missing Qwik URL Env Data");const s=new URL(t),i=D({url:s,params:e.params,isNavigating:!1}),n=dt(D(e.response.loaders)),a=W(J(s)),o=D(Ce),r=D({headings:void 0,menu:void 0}),c=W(),u=e.response.action,l=u?e.response.loaders[u]:void 0,d=W(l?{id:u,data:e.response.formData,output:{result:l,status:e.response.status}}:void 0),w=k(async(p,y)=>{const[b,_,g]=se();p===void 0?(p=_.value,_.value=""):y&&(_.value="");const R=new URL(p,g.url);p=J(R),!(!y&&_.value===p)&&(_.value=p,b.value=void 0,g.isNavigating=!0)},"QwikCityProvider_component_goto_fX0bDjeJa0E",[d,a,i]);return Q(ks,r),Q(Te,c),Q(Re,o),Q(Pe,i),Q(Ss,w),Q(xs,n),Q(vs,d),ut(k(({track:p})=>{const[y,b,_,g,R,P,j,S]=se();async function N(){const[m,h]=p(()=>[j.value,y.value]),C=mt("");let H=new URL(m,S.url),ee,U=null;if(U=R.loadedRoute,ee=R.response,U){const[Ae,O,ze]=U,Ne=O[O.length-1];S.url=H,S.params={...Ae},j.untrackedValue=J(H);const z=Hs(ee,S,O,C);b.headings=Ne.headings,b.menu=ze,_.value=ge(O),g.links=z.links,g.meta=z.meta,g.styles=z.styles,g.title=z.title,g.frontmatter=z.frontmatter}}return N()},"QwikCityProvider_component_useTask_02wMImzEAbk",[d,r,c,o,e,n,a,i])),x(fe,null,3,"qY_0")},"QwikCityProvider_component_TxCFOy819ag")),Ps=e=>{Object.seal(e)},Cs="qRender",As=(e,t,s,i,n)=>{const a={$seq$:0,$hostElement$:t,$element$:s,$event$:i,$url$:n,$qrl$:void 0,$props$:void 0,$renderCtx$:void 0,$subscriber$:void 0,$waitOn$:void 0,$locale$:e};return Ps(a),a};As(void 0,void 0,void 0,Cs);const zs=e=>we("script",{dangerouslySetInnerHTML:_s,nonce:e.nonce}),Ns=()=>{const e=Qs(),t=qs();return x(L,{children:[f("title",null,null,e.title,1,null),f("link",null,{rel:"canonical",href:pt(s=>s.url.href,[t],"p0.url.href")},null,3,null),f("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),f("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),e.meta.map(s=>f("meta",{...s},null,null,2,s.key)),e.links.map(s=>f("link",{...s},null,null,2,s.key)),e.styles.map(s=>f("style",{...s.props,dangerouslySetInnerHTML:ft(s,"style")},null,null,2,s.key))]},1,"eH_0")},Os=A(k(Ns,"s_yDcyHPF1T2o"));const Ds=()=>x(L,{children:f("meta",null,{name:"description",content:"Amazing project"},null,3,null)},3,"UX_0");const Is=()=>x(Rs,{children:[f("head",null,null,[f("meta",null,{charSet:"utf-8"},null,3,null),f("link",null,{rel:"manifest",href:"/manifest.json"},null,3,null),x(Os,null,3,"op_0"),x(Ds,null,3,"op_1"),f("script",{dangerouslySetInnerHTML:`const handlers = {}
    const app = {

        on: (name, fn) => {
            if (!handlers[name]) handlers[name] = [];
            handlers[name].push(fn);
        },
    
        trigger: (name, params) => {
            if (!handlers[name]) return false;
            handlers[name].forEach((fn) => fn.call(fn, params));
        },
    
        off: (name, fn) => {
            if (handlers[name]) {
                const index = handlers[name].indexOf(fn);
                if (index >= 0) handlers[name].splice(index, 1);
            }
        }
    }`},null,null,3,null)],1,null),f("body",null,{lang:"en"},[x(js,null,3,"op_2"),x(zs,null,3,"op_3")],1,null)]},1,"op_4"),Ms=A(k(Is,"s_1QKKC0NVXEU"));function $s(e){return De(x(Ms,null,3,"kP_0"),{manifest:ys,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}const Ys=is({render:$s,qwikCityPlan:bs});export{Ys as default};