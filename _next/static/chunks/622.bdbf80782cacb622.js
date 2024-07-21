"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[622],{6622:function(e,t,n){n.r(t),n.d(t,{Common:function(){return w},Common2:function(){return x},Cube:function(){return v},DeviceOrientationListener:function(){return p},Intro:function(){return j},MyText:function(){return g},View:function(){return y}});var r=n(7437),i=n(2265),o=n(7954),a=n(4379),s=n(2589),c=n(6547),u=n(7316),d=n(7776);let l=(e,t,n)=>Math.min(Math.max(e,t),n);var h=e=>{let{intensity:t=1,intensityFlux:n=2,color:o=16777215,distance:a=0,decay:s=2,shadows:c}=e,h=(0,i.useRef)(null),f=(0,i.useRef)(performance.now()/1e3),m=(0,i.useRef)(f.current),w=(0,i.useRef)(f.current),p=(0,i.useRef)(1),x=(0,i.useRef)(1),j=(0,i.useRef)(new d.Vector3),g=(0,i.useRef)(new d.Vector3);return(0,i.useEffect)(()=>{if(h.current){let e=h.current;e.color.set(o),e.distance=a,e.decay=s,e.castShadow=!!c,c&&(e.shadow.mapSize.width=c.mapSize||512,e.shadow.mapSize.height=c.mapSize||512,e.shadow.camera.near=c.cameraNear||.5,e.shadow.camera.far=c.cameraFar||500,e.shadow.bias=c.bias||1e-4,e.shadow.radius=c.edgeRadius||1)}},[o,a,s,c]),(0,u.C)(e=>{if(!h.current)return;let r=performance.now()/1e3,i=r-m.current;if(i>.125){m.current=r;let e=1+(Math.random()-.5)*2*n*.125,t=e-p.current;e=p.current+t,p.current=x.current,x.current=l(e,.25,1.5)}else{let e=i/.125,n=(1-e)*p.current+e*x.current;h.current.intensity=n*t}if(r-w.current>.0625){w.current=r;let e=r-f.current;g.current.set(Math.random()-.5,Math.random()-.5,Math.random()-.5),g.current.multiplyScalar(e),g.current.add(j.current),g.current.multiplyScalar(.5),h.current.position.copy(g.current),j.current.copy(g.current),f.current=r}}),(0,r.jsxs)("group",{position:[0,1,0],children:[(0,r.jsx)("pointLight",{position:[0,0,0],intensity:2e4,distance:4,decay:2,color:o}),(0,r.jsx)("pointLight",{ref:h})]})},f=n(3859),m=n(2549);let w=e=>{let{color:t}=e;return(0,r.jsxs)(i.Suspense,{fallback:null,children:[t&&(0,r.jsx)("color",{attach:"background",args:[t]}),(0,r.jsx)("ambientLight",{}),(0,r.jsx)("pointLight",{position:[0,0,10],intensity:10,decay:.2}),(0,r.jsx)("pointLight",{position:[-10,-10,-10],color:"black",decay:.2}),(0,r.jsx)(o.c,{makeDefault:!0,fov:40,position:[0,0,6]})]})},p=()=>((0,i.useEffect)(()=>{let e=e=>{},t=t=>{"visible"===document.visibilityState&&e(t)};return window.addEventListener("deviceorientation",e,!0),document.addEventListener("visibilitychange",t,!0),()=>{window.removeEventListener("deviceorientation",e,!0),document.removeEventListener("visibilitychange",t,!0)}},[]),null),x=e=>{let{color:t}=e,[n,a]=(0,i.useState)(Math.max(Math.floor((window.innerWidth-200)/200),0));return(0,i.useEffect)(()=>{m.o.setState({isCameraRendered:!0})},[]),(0,u.C)((e,t)=>{a(Math.max(Math.floor((window.innerWidth-200)/200),0))}),(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsx)("color",{attach:"background",args:[t]}),(0,r.jsx)(o.c,{makeDefault:!0,fov:40,position:[15,20,30]}),(0,r.jsx)(h,{intensity:50+200*n,intensityFlux:400,color:16755200,distance:100,decay:1.6}),(0,r.jsx)("pointLight",{position:[0,0,10],intensity:4,decay:.2})]})},j=()=>{let[e]=(0,i.useState)(()=>new d.Vector3),[t,n]=(0,i.useState)(Math.floor((window.innerWidth-400)/200)),[r,o]=(0,i.useState)(Math.floor((window.innerHeight-400)/200));return(0,u.C)((e,t)=>{n(Math.floor((window.innerWidth-400)/200)),o(Math.max(Math.floor((window.innerHeight-200)/200),0))}),(0,u.C)(n=>{n.camera.position.lerp(e.set(-30*n.pointer.x+17,3+-10*n.pointer.y+6,24),.05),n.camera.lookAt(0+1.5*t,2,-4)})},g=e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.x,{font:"Inter-Bold.woff",fontSize:window.innerWidth<400?2.5:2.8,letterSpacing:-.06,position:[0,8,-4],rotation:[0,Math.PI/4,0],children:["Kenneth",(0,r.jsx)("meshPhongMaterial",{})]}),(0,r.jsxs)(a.x,{font:"Inter-Bold.woff",fontSize:window.innerWidth<400?2.5:2.8,letterSpacing:-.06,position:[0,5.5,-4],rotation:[0,Math.PI/4,0],children:["Udovic",(0,r.jsx)("meshPhongMaterial",{})]})]}),v=e=>(0,r.jsxs)("mesh",{...e,children:[(0,r.jsx)("boxGeometry",{args:[3,3,3]}),(0,r.jsx)("meshStandardMaterial",{color:"hotpink"})]}),y=(0,i.forwardRef)((e,t)=>{let{children:n,orbit:o,...a}=e,u=(0,i.useRef)(null);return(0,i.useImperativeHandle)(t,()=>u.current),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{ref:u,...a}),(0,r.jsx)(f.S,{children:(0,r.jsxs)(s.G,{track:u,children:[n,o&&(0,r.jsx)(c.z,{})]})})]})});y.displayName="View"},3859:function(e,t,n){n.d(t,{S:function(){return o}});var r=n(7437),i=n(2146);let o=e=>{let{children:t}=e;return(0,r.jsx)(i.v.In,{children:t})}},2146:function(e,t,n){n.d(t,{v:function(){return r}});let r=(0,n(1115).Z)()}}]);