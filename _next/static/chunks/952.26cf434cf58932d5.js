"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[952],{4102:function(t,e,r){r.r(e),r.d(e,{GithubIcon:function(){return b},LinkedInIcon:function(){return P},ResumeIcon:function(){return O},default:function(){return y},getSVGAttrs:function(){return g}});for(var n,o=r(7437),i=r(1942),a=r(5122),s=r(7776),l=r(2265),c=r(7316),u={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},p=new Uint8Array(16),d=[],f=0;f<256;++f)d.push((f+256).toString(16).slice(1));var h=function(t,e,r){if(u.randomUUID&&!e&&!t)return u.randomUUID();var o=(t=t||{}).random||(t.rng||function(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(p)})();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){r=r||0;for(var i=0;i<16;++i)e[r+i]=o[i];return e}return function(t,e=0){return(d[t[e+0]]+d[t[e+1]]+d[t[e+2]]+d[t[e+3]]+"-"+d[t[e+4]]+d[t[e+5]]+"-"+d[t[e+6]]+d[t[e+7]]+"-"+d[t[e+8]]+d[t[e+9]]+"-"+d[t[e+10]]+d[t[e+11]]+d[t[e+12]]+d[t[e+13]]+d[t[e+14]]+d[t[e+15]]).toLowerCase()}(o)},m=r(2549);function w(t){let e=t=>{document.body.style.cursor=t?"pointer":"auto"},r=(0,m.a)(t=>t.addElement),n=(0,m.a)(t=>t.removeElement),o=n=>{r({distance:n.distance,point:n.point,uuid:t}),Object.keys(m.a.getState().intersections).length>0?e(!0):e(!1)},i=r=>{n({distance:r.distance,point:r.point,uuid:t}.uuid),Object.keys(m.a.getState().intersections).length>0?e(!0):e(!1)},[a]=(0,l.useState)(()=>({onPointerOver:o,onPointerOut:i}));return a}var v=r(4379);let g=t=>({viewBox:t({}).props.attr.viewBox,paths:[...t({}).props.children.map(t=>t.props.d)]});function y(t){let{active:e,setActive:r}=t,n=(0,l.useMemo)(()=>h(),[]),i=(0,l.useRef)(null),{onPointerOver:a,onPointerOut:c}=w(n),u=(0,l.useMemo)(()=>{let r=t.svg.paths.map(t=>new Path2D(t)),n=new s.Vector4(...t.svg.viewBox.split(" ").map(t=>parseInt(t)));return new s.CanvasTexture(function(t,e,r){let{paths:n,viewport:o}=t,i=document.createElement("canvas"),{width:a,height:s}=r,l=a-6;i.width=parseInt("".concat(a)),i.height=parseInt("".concat(s));let c=a/s>o.width/o.height?(s-6)/o.height:l/o.width,u=i.getContext("2d");u.save(),u.clearRect(0,0,i.width,i.height),u.fill(),u.beginPath(),u.fillStyle="rgba(255, 255, 255, 0.8)",u.shadowBlur=3,u.shadowColor=e,u.shadowBlur=0,u.translate(a/2+3,s/2+3),u.scale(.85*c,.85*c),u.translate(-o.x-o.width/2,-o.y-o.height/2);for(let t=0;t<n.length;t++)u.beginPath(),u.fillStyle=e,u.fill(new Path2D(n[t]));return u.restore(),i}({paths:r,viewport:n},e?"teal":"white",new s.Vector2(128,128)))},[t,e]);return(0,o.jsx)("sprite",{ref:i,position:t.position,scale:t.scale,onPointerOver:t=>{r(!0),a&&a(t)},onPointerOut:t=>{r(!1),c&&c(t)},onPointerDown:e=>{e.stopPropagation();let r=e.target;r.releasePointerCapture(e.pointerId),setTimeout(()=>{r.releasePointerCapture(e.pointerId),window.open(t.link,"_blank"),r.releasePointerCapture(e.pointerId)},50)},onPointerUp:()=>r(!1),children:(0,o.jsx)("spriteMaterial",{attach:"material",map:u})})}let b=()=>{let t=g(i.hJX),[e,r]=(0,l.useState)(Math.floor((window.innerWidth-500)/250)),[n,a]=(0,l.useState)(!1);return(0,c.C)((t,e)=>{r(Math.max(Math.floor((window.innerWidth-500)/250),0))}),(0,o.jsx)(y,{svg:t,position:[-3+e,3,-3],scale:[2,2,2],link:"https://www.github.com/Handfish/",active:n,setActive:a})},O=()=>{let t=g(a.HpK),e=(0,l.useMemo)(()=>h(),[]),[r,n]=(0,l.useState)(!1),[i,s]=(0,l.useState)(Math.floor((window.innerWidth-500)/250));(0,c.C)((t,e)=>{s(Math.max(Math.floor((window.innerWidth-500)/250),0))});let{onPointerOver:u,onPointerOut:p}=w(e),d="https://handfish.github.io/Portfolio/KUResume.pdf";return(0,o.jsxs)("group",{onPointerOver:t=>{n(!0),u&&u(t)},onPointerOut:t=>{n(!1),p&&p(t)},onPointerDown:t=>{t.stopPropagation();let e=t.target;e.releasePointerCapture(t.pointerId),setTimeout(()=>{e.releasePointerCapture(t.pointerId),window.open(d,"_blank"),e.releasePointerCapture(t.pointerId)},50)},onPointerUp:()=>n(!1),children:[(0,o.jsx)(y,{svg:t,position:[.5+i,3,-3],scale:[2,2,2],link:d,active:r,setActive:()=>{}}),(0,o.jsxs)(v.x,{font:"Inter-Bold.woff",fontSize:.5,letterSpacing:-.06,position:[.5+i,1.9,-3],children:["Resume",(0,o.jsx)("meshBasicMaterial",{color:r?"teal":"#e5e5e5",toneMapped:!1})]})]})},P=()=>{let t=g(i.ltd),[e,r]=(0,l.useState)(Math.floor((window.innerWidth-500)/250)),[n,a]=(0,l.useState)(!1);return(0,c.C)((t,e)=>{r(Math.max(Math.floor((window.innerWidth-500)/250),0))}),(0,o.jsx)(y,{svg:t,position:[-3+e,1,-3],scale:[2,2,2],link:"https://www.linkedin.com/in/kenny-udovic-6a1bbb123/",active:n,setActive:a})}},1810:function(t,e,r){r.d(e,{w_:function(){return u}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach(function(e){var n,o;n=e,o=r[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function u(t){return e=>n.createElement(p,s({attr:c({},t.attr)},e),function t(e){return e&&e.map((e,r)=>n.createElement(e.tag,c({key:r},e.attr),t(e.child)))}(t.child))}function p(t){var e=e=>{var r,{attr:o,size:i,title:l}=t,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,a),p=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,u,{className:r,style:c(c({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==i?n.createElement(i.Consumer,null,t=>e(t)):e(o)}}}]);