"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{5473:function(e,n,t){t.r(n),t.d(n,{Common:function(){return f},ResumeIntroAnimation:function(){return d},View:function(){return m}});var r=t(7437),i=t(2265),s=t(7954),o=t(2589),u=t(6547),c=t(3859),a=t(7316),l=t(7776);let f=e=>{let{color:n}=e;return(0,r.jsxs)(i.Suspense,{fallback:null,children:[n&&(0,r.jsx)("color",{attach:"background",args:[n]}),(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{position:[0,0,10],intensity:10,decay:.2}),(0,r.jsx)("pointLight",{position:[-10,-10,-10],color:"black",decay:.2}),(0,r.jsx)(s.c,{makeDefault:!0,fov:40,position:[0,0,6]})]})},d=()=>{let[e]=(0,i.useState)(()=>new l.Vector3);return(0,a.C)(n=>{n.camera.position.lerp(e.set(5*n.mouse.x,3+2*n.mouse.y,14),.05),n.camera.lookAt(0,0,0)})},m=(0,i.forwardRef)((e,n)=>{let{children:t,orbit:s,...a}=e,l=(0,i.useRef)(null);return(0,i.useImperativeHandle)(n,()=>l.current),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:l,...a}),(0,r.jsx)(c.S,{children:(0,r.jsxs)(o.G,{track:l,children:[t,s&&(0,r.jsx)(u.z,{})]})})]})});m.displayName="View"},3859:function(e,n,t){t.d(n,{S:function(){return s}});var r=t(7437),i=t(2146);let s=e=>{let{children:n}=e;return(0,r.jsx)(i.v.In,{children:n})}},2146:function(e,n,t){t.d(n,{v:function(){return r}});let r=(0,t(1115).Z)()}}]);