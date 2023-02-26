(self.webpackChunkvolla_solutions=self.webpackChunkvolla_solutions||[]).push([[678],{1799:function(e,t,n){const r=n(7294);const l=r.forwardRef((function({title:e,titleId:t,...n},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}));e.exports=l},243:function(e,t,n){const r=n(7294);const l=r.forwardRef((function({title:e,titleId:t,...n},l){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}));e.exports=l},9985:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return nt},default:function(){return tt}});var r=n(7294),l=n.t(r,2);function o(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}var a=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(a||{}),i=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(i||{});function u({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:a=!0,name:i}){let u=c(t,e);if(a)return s(u,n,r,i);let d=null!=l?l:0;if(2&d){let{static:e=!1,...t}=u;if(e)return s(t,n,r,i)}if(1&d){let{unmount:e=!0,...t}=u;return o(e?0:1,{0(){return null},1(){return s({...t,hidden:!0,style:{display:"none"}},n,r,i)}})}return s(u,n,r,i)}function s(e,t={},n,l){var o;let{as:a=n,children:i,refName:u="ref",...s}=m(e,["unmount","static"]),d=void 0!==e.ref?{[u]:e.ref}:{},p="function"==typeof i?i(t):i;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let g={};if(t){let e=!1,n=[];for(let[r,l]of Object.entries(t))"boolean"==typeof l&&(e=!0),!0===l&&n.push(r);e&&(g["data-headlessui-state"]=n.join(" "))}if(a===r.Fragment&&Object.keys(f(s)).length>0){if(!(0,r.isValidElement)(p)||Array.isArray(p)&&p.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${l} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=function(...e){return e.filter(Boolean).join(" ")}(null==(o=p.props)?void 0:o.className,s.className),t=e?{className:e}:{};return(0,r.cloneElement)(p,Object.assign({},c(p.props,f(m(s,["ref"]))),g,d,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(p.ref,d.ref),t))}return(0,r.createElement)(a,Object.assign({},m(s,["ref"]),a!==r.Fragment&&d,a!==r.Fragment&&g),p)}function c(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let l=n[r];for(let n of l){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function d(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function f(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function m(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}var p=Object.defineProperty,g=(e,t,n)=>(((e,t,n)=>{t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let h=new class{constructor(){g(this,"current",this.detect()),g(this,"handoffState","pending"),g(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},v=(e,t)=>{h.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)};function E(e){let t=(0,r.useRef)(e);return v((()=>{t.current=e}),[e]),t}let w=function(e){let t=E(e);return r.useCallback(((...e)=>t.current(...e)),[t])},b=Symbol();function y(e,t=!0){return Object.assign(e,{[b]:t})}function x(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=w((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[b])))?void 0:n}var S,N=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(N||{});function P(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function T(){let[e,t]=(0,r.useState)(h.isHandoffComplete);return e&&!1===h.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>h.handoff()),[]),e}let O=null!=(S=r.useId)?S:function(){let e=T(),[t,n]=r.useState(e?()=>h.nextId():null);return v((()=>{null===t&&n(h.nextId())}),[t]),null!=t?""+t:void 0};var k=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(k||{});let A=d((function(e,t){let{features:n=1,...r}=e;return u({ourProps:{ref:t,"aria-hidden":2==(2&n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&n)&&2!=(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function C(e){return h.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let L=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),R=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(R||{}),D=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(D||{});function M(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(L)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var j=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(j||{});function I(e,t=0){var n;return e!==(null==(n=C(e))?void 0:n.body)&&o(t,{0(){return e.matches(L)},1(){let t=e;for(;null!==t;){if(t.matches(L))return!0;t=t.parentElement}return!1}})}function H(e){null==e||e.focus({preventScroll:!0})}let B=["textarea","input"].join(",");function $(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),l=t(n);if(null===r||null===l)return 0;let o=r.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:M(e);l.length>0&&a.length>1&&(a=a.filter((e=>!l.includes(e)))),r=null!=r?r:o.activeElement;let i,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},d=0,f=a.length;do{if(d>=f||d+f<=0)return 0;let e=s+d;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}i=a[e],null==i||i.focus(c),d+=u}while(i!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,B))&&n}(i)&&i.select(),i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}var U=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(U||{});function W(){let e=(0,r.useRef)(0);return function(e,t,n){let l=E(t);(0,r.useEffect)((()=>{function t(e){l.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}function _(){let e=(0,r.useRef)(!1);return v((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function V(...e){return(0,r.useMemo)((()=>C(...e)),[...e])}function q(e,t,n,l){let o=E(n);(0,r.useEffect)((()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}),[e,t,l])}function G(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function Y(e,t){let n=(0,r.useRef)([]),l=w(e);(0,r.useEffect)((()=>{let e=[...n.current];for(let[r,o]of t.entries())if(n.current[r]!==o){let r=l(t,e);return n.current=t,r}}),[l,...t])}function z(){let e=[],t={addEventListener(e,n,r,l){return e.addEventListener(n,r,l),t.add((()=>e.removeEventListener(n,r,l)))},requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame(...e){return t.requestAnimationFrame((()=>t.requestAnimationFrame(...e)))},setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return G((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},add(t){return e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}},dispose(){for(let t of e.splice(0))t()},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))}};return t}var K=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(K||{});let X=d((function(e,t){let n=(0,r.useRef)(null),l=x(n,t),{initialFocus:a,containers:i,features:s=30,...c}=e;T()||(s=1);let d=V(n);!function({ownerDocument:e},t){let n=(0,r.useRef)(null);q(null==e?void 0:e.defaultView,"focusout",(e=>{t&&(n.current||(n.current=e.target))}),!0),Y((()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&H(n.current),n.current=null)}),[t]);let l=(0,r.useRef)(!1);(0,r.useEffect)((()=>(l.current=!1,()=>{l.current=!0,G((()=>{l.current&&(H(n.current),n.current=null)}))})),[])}({ownerDocument:d},Boolean(16&s));let f=function({ownerDocument:e,container:t,initialFocus:n},l){let o=(0,r.useRef)(null),a=_();return Y((()=>{if(!l)return;let r=t.current;r&&G((()=>{if(!a.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t)return void(o.current=t)}else if(r.contains(t))return void(o.current=t);null!=n&&n.current?H(n.current):$(r,F.First)===R.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement}))}),[l]),o}({ownerDocument:d,container:n,initialFocus:a},Boolean(2&s));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){let o=_();q(null==e?void 0:e.defaultView,"focus",(e=>{if(!l||!o.current)return;let a=new Set(null==n?void 0:n.current);a.add(t);let i=r.current;if(!i)return;let u=e.target;u&&u instanceof HTMLElement?Q(a,u)?(r.current=u,H(u)):(e.preventDefault(),e.stopPropagation(),H(i)):H(r.current)}),!0)}({ownerDocument:d,container:n,containers:i,previousActiveElement:f},Boolean(8&s));let m=W(),p=w((e=>{let t=n.current;t&&o(m.current,{[U.Forwards]:()=>{$(t,F.First,{skipElements:[e.relatedTarget]})},[U.Backwards]:()=>{$(t,F.Last,{skipElements:[e.relatedTarget]})}})})),g=function(){let[e]=(0,r.useState)(z);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}(),h=(0,r.useRef)(!1),v={ref:l,onKeyDown(e){"Tab"==e.key&&(h.current=!0,g.requestAnimationFrame((()=>{h.current=!1})))},onBlur(e){let t=new Set(null==i?void 0:i.current);t.add(n);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(Q(t,r)||(h.current?$(n.current,o(m.current,{[U.Forwards]:()=>F.Next,[U.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&H(e.target)))}};return r.createElement(r.Fragment,null,Boolean(4&s)&&r.createElement(A,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:k.Focusable}),u({ourProps:v,theirProps:c,defaultTag:"div",name:"FocusTrap"}),Boolean(4&s)&&r.createElement(A,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:k.Focusable}))})),J=Object.assign(X,{features:K});function Q(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}var Z=n(3935);let ee=(0,r.createContext)(!1);function te(){return(0,r.useContext)(ee)}function ne(e){return r.createElement(ee.Provider,{value:e.force},e.children)}let re=r.Fragment;let le=r.Fragment,oe=(0,r.createContext)(null);let ae=d((function(e,t){let n=e,l=(0,r.useRef)(null),o=x(y((e=>{l.current=e})),t),a=V(l),i=function(e){let t=te(),n=(0,r.useContext)(oe),l=V(e),[o,a]=(0,r.useState)((()=>{if(!t&&null!==n||h.isServer)return null;let e=null==l?void 0:l.getElementById("headlessui-portal-root");if(e)return e;if(null===l)return null;let r=l.createElement("div");return r.setAttribute("id","headlessui-portal-root"),l.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==o&&(null!=l&&l.body.contains(o)||null==l||l.body.appendChild(o))}),[o,l]),(0,r.useEffect)((()=>{t||null!==n&&a(n.current)}),[n,a,t]),o}(l),[s]=(0,r.useState)((()=>{var e;return h.isServer?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null})),c=T(),d=(0,r.useRef)(!1);return v((()=>{if(d.current=!1,i&&s)return i.contains(s)||(s.setAttribute("data-headlessui-portal",""),i.appendChild(s)),()=>{d.current=!0,G((()=>{var e;d.current&&(!i||!s||(s instanceof Node&&i.contains(s)&&i.removeChild(s),i.childNodes.length<=0&&(null==(e=i.parentElement)||e.removeChild(i))))}))}}),[i,s]),c&&i&&s?(0,Z.createPortal)(u({ourProps:{ref:o},theirProps:n,defaultTag:re,name:"Portal"}),s):null})),ie=d((function(e,t){let{target:n,...l}=e,o={ref:x(t)};return r.createElement(oe.Provider,{value:n},u({ourProps:o,theirProps:l,defaultTag:le,name:"Popover.Group"}))})),ue=Object.assign(ae,{Group:ie}),se=(0,r.createContext)(null);function ce(){let e=(0,r.useContext)(se);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,ce),e}return e}let de=d((function(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...l}=e,o=ce(),a=x(t);return v((()=>o.register(r)),[r,o.register]),u({ourProps:{ref:a,...o.props,id:r},theirProps:l,slot:o.slot||{},defaultTag:"p",name:o.name||"Description"})})),fe=Object.assign(de,{}),me=(0,r.createContext)(null);me.displayName="OpenClosedContext";var pe=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(pe||{});function ge(){return(0,r.useContext)(me)}let he=(0,r.createContext)((()=>{}));he.displayName="StackContext";var ve=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ve||{});function Ee({children:e,onUpdate:t,type:n,element:l,enabled:o}){let a=(0,r.useContext)(he),i=w(((...e)=>{null==t||t(...e),a(...e)}));return v((()=>{let e=void 0===o||!0===o;return e&&i(0,n,l),()=>{e&&i(1,n,l)}}),[i,n,l,o]),r.createElement(he.Provider,{value:i},e)}function we(e,t,n){let l=E(t);(0,r.useEffect)((()=>{function t(e){l.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function be(e,t,n=!0){let l=(0,r.useRef)(!1);function o(n,r){if(!l.current||n.defaultPrevented)return;let o=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),a=r(n);if(null!==a&&a.getRootNode().contains(a)){for(let e of o){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(a)||n.composed&&n.composedPath().includes(t))return}return!I(a,j.Loose)&&-1!==a.tabIndex&&n.preventDefault(),t(n,a)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{l.current=n}))}),[n]);let a=(0,r.useRef)(null);we("mousedown",(e=>{var t,n;l.current&&(a.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),we("click",(e=>{a.current&&(o(e,(()=>a.current)),a.current=null)}),!0),we("blur",(e=>o(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}const ye="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:xe,useEffect:Se,useLayoutEffect:Ne,useDebugValue:Pe}=l;function Te(e){const t=e.getSnapshot,n=e.value;try{const e=t();return!ye(n,e)}catch{return!0}}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;const Oe=(e=>e.useSyncExternalStore)(l);function ke(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=(null!=(n=t.defaultView)?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,o=e-l;n.style(r,"paddingRight",`${o}px`)}}}function Ae(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ce(){if(!Ae())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(e){return r.containers.flatMap((e=>e())).some((t=>t.contains(e)))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",(e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),a=t.querySelector(r);a&&!l(a)&&(o=a)}catch{}}),!0),n.addEventListener(t,"touchmove",(e=>{e.target instanceof HTMLElement&&!l(e.target)&&e.preventDefault()}),{passive:!1}),n.add((()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)}))}}}function Le(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let Fe=function(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(e){return r.add(e),()=>r.delete(e)},dispatch(e,...l){let o=t[e].call(n,...l);o&&(n=o,r.forEach((e=>e())))}}}((()=>new Map),{PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:z(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Le(n)},l=[Ce(),ke(),{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];l.forEach((({before:e})=>null==e?void 0:e(r))),l.forEach((({after:e})=>null==e?void 0:e(r)))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});function Re(e,t,n){let r=function(e){return Oe(e.subscribe,e.getSnapshot,e.getSnapshot)}(Fe),l=e?r.get(e):void 0,o=!!l&&l.count>0;return v((()=>{if(e&&t)return Fe.dispatch("PUSH",e,n),()=>Fe.dispatch("POP",e,n)}),[t,e]),o}Fe.subscribe((()=>{let e=Fe.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&Fe.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&Fe.dispatch("TEARDOWN",n)}}));let De=new Map,Me=new Map;function je(e,t=!0){v((()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let l=null!=(n=Me.get(r))?n:0;return Me.set(r,l+1),0!==l||(De.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=Me.get(r))?e:1;if(1===t?Me.delete(r):Me.set(r,t-1),1!==t)return;let n=De.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,De.delete(r))}}),[e,t])}var Ie=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ie||{}),He=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(He||{});let Be={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},$e=(0,r.createContext)(null);function Ue(e){let t=(0,r.useContext)($e);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Ue),t}return t}function We(e,t){return o(t.type,Be,e,t)}$e.displayName="DialogContext";let _e=a.RenderStrategy|a.Static;let Ve=d((function(e,t){let n=O(),{id:l=`headlessui-dialog-${n}`,open:a,onClose:i,initialFocus:s,__demoMode:c=!1,...d}=e,[f,m]=(0,r.useState)(0),p=ge();void 0===a&&null!==p&&(a=(p&pe.Open)===pe.Open);let g=(0,r.useRef)(new Set),h=(0,r.useRef)(null),v=x(h,t),E=(0,r.useRef)(null),b=V(h),y=e.hasOwnProperty("open")||null!==p,S=e.hasOwnProperty("onClose");if(!y&&!S)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!y)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!S)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof a)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if("function"!=typeof i)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${i}`);let P=a?0:1,[C,L]=(0,r.useReducer)(We,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),F=w((()=>i(!1))),R=w((e=>L({type:0,id:e}))),D=!!T()&&(!c&&0===P),M=f>1,j=null!==(0,r.useContext)($e),I=M?"parent":"leaf",H=null!==p&&(p&pe.Closing)===pe.Closing,B=!j&&!H&&D,$=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("body > *"))?e:[]).find((e=>"headlessui-portal-root"!==e.id&&(e.contains(E.current)&&e instanceof HTMLElement))))?t:null}),[E]);je($,B);let U=!!M||D,W=(0,r.useCallback)((()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("[data-headlessui-portal]"))?e:[]).find((e=>e.contains(E.current)&&e instanceof HTMLElement)))?t:null}),[E]);je(W,U);let _=w((()=>{var e,t;return[...Array.from(null!=(e=null==b?void 0:b.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))?e:[]).filter((e=>!(e===document.body||e===document.head||!(e instanceof HTMLElement)||e.contains(E.current)||C.panelRef.current&&e.contains(C.panelRef.current)))),null!=(t=C.panelRef.current)?t:h.current]}));be((()=>_()),F,!(!D||M));let G=!(M||0!==P);q(null==b?void 0:b.defaultView,"keydown",(e=>{G&&(e.defaultPrevented||e.key===N.Escape&&(e.preventDefault(),e.stopPropagation(),F()))})),function(e,t,n=(()=>[document.body])){Re(e,t,(e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}}))}(b,!(H||0!==P||j),_),(0,r.useEffect)((()=>{if(0!==P||!h.current)return;let e=new ResizeObserver((e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&F()}}));return e.observe(h.current),()=>e.disconnect()}),[P,h,F]);let[Y,z]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=w((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),l=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(se.Provider,{value:l},e.children)}),[t])]}(),K=(0,r.useMemo)((()=>[{dialogState:P,close:F,setTitleId:R},C]),[P,C,F,R]),X=(0,r.useMemo)((()=>({open:0===P})),[P]),Q={ref:v,id:l,role:"dialog","aria-modal":0===P||void 0,"aria-labelledby":C.titleId,"aria-describedby":Y};return r.createElement(Ee,{type:"Dialog",enabled:0===P,element:h,onUpdate:w(((e,t,n)=>{"Dialog"===t&&o(e,{[ve.Add](){g.current.add(n),m((e=>e+1))},[ve.Remove](){g.current.add(n),m((e=>e-1))}})}))},r.createElement(ne,{force:!0},r.createElement(ue,null,r.createElement($e.Provider,{value:K},r.createElement(ue.Group,{target:h},r.createElement(ne,{force:!1},r.createElement(z,{slot:X,name:"Dialog.Description"},r.createElement(J,{initialFocus:s,containers:g,features:D?o(I,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},u({ourProps:Q,theirProps:d,slot:X,defaultTag:"div",features:_e,visible:0===P,name:"Dialog"})))))))),r.createElement(A,{features:k.Hidden,ref:E}))})),qe=d((function(e,t){let n=O(),{id:l=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:a},i]=Ue("Dialog.Backdrop"),s=x(t);(0,r.useEffect)((()=>{if(null===i.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[i.panelRef]);let c=(0,r.useMemo)((()=>({open:0===a})),[a]);return r.createElement(ne,{force:!0},r.createElement(ue,null,u({ourProps:{ref:s,id:l,"aria-hidden":!0},theirProps:o,slot:c,defaultTag:"div",name:"Dialog.Backdrop"})))})),Ge=d((function(e,t){let n=O(),{id:l=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:a},i]=Ue("Dialog.Panel"),s=x(t,i.panelRef),c=(0,r.useMemo)((()=>({open:0===a})),[a]),d=w((e=>{e.stopPropagation()}));return u({ourProps:{ref:s,id:l,onClick:d},theirProps:o,slot:c,defaultTag:"div",name:"Dialog.Panel"})})),Ye=d((function(e,t){let n=O(),{id:l=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:a,close:i}]=Ue("Dialog.Overlay"),s=x(t),c=w((e=>{if(e.target===e.currentTarget){if(P(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}));return u({ourProps:{ref:s,id:l,"aria-hidden":!0,onClick:c},theirProps:o,slot:(0,r.useMemo)((()=>({open:0===a})),[a]),defaultTag:"div",name:"Dialog.Overlay"})})),ze=d((function(e,t){let n=O(),{id:l=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:a,setTitleId:i}]=Ue("Dialog.Title"),s=x(t);(0,r.useEffect)((()=>(i(l),()=>i(null))),[l,i]);let c=(0,r.useMemo)((()=>({open:0===a})),[a]);return u({ourProps:{ref:s,id:l},theirProps:o,slot:c,defaultTag:"h2",name:"Dialog.Title"})})),Ke=Object.assign(Ve,{Backdrop:qe,Panel:Ge,Overlay:Ye,Title:ze,Description:fe});var Xe=n(1799),Je=n(243),Qe=n.p+"static/logo-volla-8bddbdc8b7cd7d1c1cea130015720846.png",Ze=n.p+"static/hero-visual-fed4f988d15e10fd706070b1437183fc.jpg";const et=[{name:"About",href:"#"},{name:"Services",href:"#"},{name:"Contact Us",href:"#"}];var tt=()=>{const{0:e,1:t}=(0,r.useState)(!1);return r.createElement("main",null,r.createElement("div",{className:"relative bg-white"},r.createElement("div",{className:"mx-auto max-w-7xl"},r.createElement("div",{className:"relative z-10 lg:w-full lg:max-w-2xl"},r.createElement("svg",{className:"absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},r.createElement("polygon",{points:"0,0 90,0 50,100 0,100"})),r.createElement("div",{className:"relative px-6 pt-6 lg:pl-8 lg:pr-0"},r.createElement("nav",{className:"flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global"},r.createElement("a",{href:"#",className:"-m-1.5 p-1.5"},r.createElement("span",{className:"sr-only"},"Volla Solutions"),r.createElement("img",{alt:"Volla Solutions",className:"h-10 w-auto",src:Qe})),r.createElement("button",{type:"button",className:"-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden",onClick:()=>t(!0)},r.createElement("span",{className:"sr-only"},"Open main menu"),r.createElement(Xe,{className:"h-6 w-6","aria-hidden":"true"})),r.createElement("div",{className:"hidden lg:ml-12 lg:block lg:space-x-14"},et.map((e=>r.createElement("a",{key:e.name,href:e.href,className:"text-sm font-semibold leading-6 text-gray-900"},e.name))))),r.createElement(Ke,{as:"div",open:e,onClose:t},r.createElement(Ke.Panel,{className:"fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"},r.createElement("div",{className:"flex flex-row-reverse items-center justify-between"},r.createElement("button",{type:"button",className:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:()=>t(!1)},r.createElement("span",{className:"sr-only"},"Close menu"),r.createElement(Je,{className:"h-6 w-6","aria-hidden":"true"})),r.createElement("a",{href:"#",className:"-m-1.5 p-1.5"},r.createElement("span",{className:"sr-only"},"Volla Solutions"),r.createElement("img",{className:"h-10",src:Qe,alt:""}))),r.createElement("div",{className:"mt-6 space-y-2"},et.map((e=>r.createElement("a",{key:e.name,href:e.href,className:"-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"},e.name))))))),r.createElement("div",{className:"relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0"},r.createElement("div",{className:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"},r.createElement("h1",{className:"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"},"Ambitious ideas",r.createElement("div",{class:"sm:text-5xl mt-2"},"Reliably delivered",r.createElement("span",{class:"text-red-500"},"."))),r.createElement("p",{className:"mt-6 text-lg leading-8 text-gray-600"},"Volla's world-class engineering team delivers the technology backbone of ",r.createElement("span",{className:"text-red-500 font-bold"},"award winning")," products and services."),r.createElement("div",{className:"mt-10 flex items-center gap-x-6"},r.createElement("a",{href:"#",className:"rounded-md bg-red-1000 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"},"Get started")))))),r.createElement("div",{className:"bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"},r.createElement("img",{className:"aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full",src:Ze,alt:""}))))};const nt=()=>r.createElement("title",null,"Volla Solutions")}}]);
//# sourceMappingURL=component---src-pages-index-js-4d93c9a0c4d409063044.js.map