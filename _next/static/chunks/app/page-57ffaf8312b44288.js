(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2711:function(e,t,n){Promise.resolve().then(n.bind(n,4591))},4591:function(e,t,n){"use strict";let r;n.r(t),n.d(t,{default:function(){return W}});var i=n(7437),s=n(7818),a=n(2265),o=n(7544),u=n.n(o),c=n(2549);function l(){return(0,i.jsx)("div",{className:"flex h-96 w-full flex-col items-center justify-center",children:(0,i.jsxs)("svg",{className:"-ml-1 mr-3 size-5 animate-spin text-white",fill:"none",viewBox:"0 0 24 24",children:[(0,i.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,i.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})})}var h=n(6298),d=n(9948),f=n(4939),p=n(9010),v=n(2459),b=class extends p.l{constructor(e,t){super(),this.options=t,this.#e=e,this.#t=null,this.bindMethods(),this.setOptions(t)}#e;#n=void 0;#r=void 0;#i=void 0;#s;#a;#t;#o;#u;#c;#l;#h;#d;#f=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#n.addObserver(this),y(this.#n,this.options)?this.#p():this.updateResult(),this.#v())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return m(this.#n,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return m(this.#n,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#b(),this.#y(),this.#n.removeObserver(this)}setOptions(e,t){let n=this.options,r=this.#n;if(this.options=this.#e.defaultQueryOptions(e),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,h.Nc)(this.options.enabled,this.#n))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#m(),this.#n.setOptions(this.options),n._defaulted&&!(0,h.VS)(this.options,n)&&this.#e.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#n,observer:this});let i=this.hasListeners();i&&R(this.#n,r,this.options,n)&&this.#p(),this.updateResult(t),i&&(this.#n!==r||(0,h.Nc)(this.options.enabled,this.#n)!==(0,h.Nc)(n.enabled,this.#n)||(0,h.KC)(this.options.staleTime,this.#n)!==(0,h.KC)(n.staleTime,this.#n))&&this.#R();let s=this.#g();i&&(this.#n!==r||(0,h.Nc)(this.options.enabled,this.#n)!==(0,h.Nc)(n.enabled,this.#n)||s!==this.#d)&&this.#w(s)}getOptimisticResult(e){let t=this.#e.getQueryCache().build(this.#e,e),n=this.createResult(t,e);return(0,h.VS)(this.getCurrentResult(),n)||(this.#i=n,this.#a=this.options,this.#s=this.#n.state),n}getCurrentResult(){return this.#i}trackResult(e,t){let n={};return Object.keys(e).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),t?.(r),e[r])})}),n}trackProp(e){this.#f.add(e)}getCurrentQuery(){return this.#n}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){let t=this.#e.defaultQueryOptions(e),n=this.#e.getQueryCache().build(this.#e,t);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,t))}fetch(e){return this.#p({...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#i))}#p(e){this.#m();let t=this.#n.fetch(this.options,e);return e?.throwOnError||(t=t.catch(h.ZT)),t}#R(){this.#b();let e=(0,h.KC)(this.options.staleTime,this.#n);if(h.sk||this.#i.isStale||!(0,h.PN)(e))return;let t=(0,h.Kp)(this.#i.dataUpdatedAt,e);this.#l=setTimeout(()=>{this.#i.isStale||this.updateResult()},t+1)}#g(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#n):this.options.refetchInterval)??!1}#w(e){this.#y(),this.#d=e,!h.sk&&!1!==(0,h.Nc)(this.options.enabled,this.#n)&&(0,h.PN)(this.#d)&&0!==this.#d&&(this.#h=setInterval(()=>{(this.options.refetchIntervalInBackground||f.j.isFocused())&&this.#p()},this.#d))}#v(){this.#R(),this.#w(this.#g())}#b(){this.#l&&(clearTimeout(this.#l),this.#l=void 0)}#y(){this.#h&&(clearInterval(this.#h),this.#h=void 0)}createResult(e,t){let n;let r=this.#n,i=this.options,s=this.#i,a=this.#s,o=this.#a,u=e!==r?e.state:this.#r,{state:c}=e,l={...c},d=!1;if(t._optimisticResults){let n=this.hasListeners(),s=!n&&y(e,t),a=n&&R(e,r,t,i);(s||a)&&(l={...l,...(0,v.z)(c.data,e.options)}),"isRestoring"===t._optimisticResults&&(l.fetchStatus="idle")}let{error:f,errorUpdatedAt:p,status:b}=l;if(t.select&&void 0!==l.data){if(s&&l.data===a?.data&&t.select===this.#o)n=this.#u;else try{this.#o=t.select,n=t.select(l.data),n=(0,h.oE)(s?.data,n,t),this.#u=n,this.#t=null}catch(e){this.#t=e}}else n=l.data;if(void 0!==t.placeholderData&&void 0===n&&"pending"===b){let e;if(s?.isPlaceholderData&&t.placeholderData===o?.placeholderData)e=s.data;else if(e="function"==typeof t.placeholderData?t.placeholderData(this.#c?.state.data,this.#c):t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.#t=null}catch(e){this.#t=e}void 0!==e&&(b="success",n=(0,h.oE)(s?.data,e,t),d=!0)}this.#t&&(f=this.#t,n=this.#u,p=Date.now(),b="error");let m="fetching"===l.fetchStatus,w="pending"===b,E="error"===b,C=w&&m,O=void 0!==n;return{status:b,fetchStatus:l.fetchStatus,isPending:w,isSuccess:"success"===b,isError:E,isInitialLoading:C,isLoading:C,data:n,dataUpdatedAt:l.dataUpdatedAt,error:f,errorUpdatedAt:p,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>u.dataUpdateCount||l.errorUpdateCount>u.errorUpdateCount,isFetching:m,isRefetching:m&&!w,isLoadingError:E&&!O,isPaused:"paused"===l.fetchStatus,isPlaceholderData:d,isRefetchError:E&&O,isStale:g(e,t),refetch:this.refetch}}updateResult(e){let t=this.#i,n=this.createResult(this.#n,this.options);if(this.#s=this.#n.state,this.#a=this.options,void 0!==this.#s.data&&(this.#c=this.#n),(0,h.VS)(n,t))return;this.#i=n;let r={};e?.listeners!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,n="function"==typeof e?e():e;if("all"===n||!n&&!this.#f.size)return!0;let r=new Set(n??this.#f);return this.options.throwOnError&&r.add("error"),Object.keys(this.#i).some(e=>this.#i[e]!==t[e]&&r.has(e))})()&&(r.listeners=!0),this.#E({...r,...e})}#m(){let e=this.#e.getQueryCache().build(this.#e,this.options);if(e===this.#n)return;let t=this.#n;this.#n=e,this.#r=e.state,this.hasListeners()&&(t?.removeObserver(this),e.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#v()}#E(e){d.V.batch(()=>{e.listeners&&this.listeners.forEach(e=>{e(this.#i)}),this.#e.getQueryCache().notify({query:this.#n,type:"observerResultsUpdated"})})}};function y(e,t){return!1!==(0,h.Nc)(t.enabled,e)&&void 0===e.state.data&&!("error"===e.state.status&&!1===t.retryOnMount)||void 0!==e.state.data&&m(e,t,t.refetchOnMount)}function m(e,t,n){if(!1!==(0,h.Nc)(t.enabled,e)){let r="function"==typeof n?n(e):n;return"always"===r||!1!==r&&g(e,t)}return!1}function R(e,t,n,r){return(e!==t||!1===(0,h.Nc)(r.enabled,e))&&(!n.suspense||"error"!==e.state.status)&&g(e,n)}function g(e,t){return!1!==(0,h.Nc)(t.enabled,e)&&e.isStaleByTime((0,h.KC)(t.staleTime,e))}var w=a.createContext((r=!1,{clearReset:()=>{r=!1},reset:()=>{r=!0},isReset:()=>r})),E=()=>a.useContext(w),C=n(3191),O=a.createContext(!1),x=()=>a.useContext(O);O.Provider;var S=(e,t)=>{(e.suspense||e.throwOnError)&&!t.isReset()&&(e.retryOnMount=!1)},I=e=>{a.useEffect(()=>{e.clearReset()},[e])},Q=e=>{var t;let{result:n,errorResetBoundary:r,throwOnError:i,query:s}=e;return n.isError&&!r.isReset()&&!n.isFetching&&s&&(t=[n.error,s],"function"==typeof i?i(...t):!!i)},k=e=>{e.suspense&&"number"!=typeof e.staleTime&&(e.staleTime=1e3)},T=(e,t)=>e?.suspense&&t.isPending,j=(e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()});let P=(0,s.default)(()=>Promise.all([n.e(689),n.e(316),n.e(422),n.e(241)]).then(n.bind(n,5473)).then(e=>e.View),{loadableGenerated:{webpack:()=>[5473]},ssr:!1,loading:()=>l()}),D=(0,s.default)(()=>Promise.all([n.e(689),n.e(316),n.e(542)]).then(n.bind(n,4542)).then(e=>e.RiveR3f),{loadableGenerated:{webpack:()=>[4542]},ssr:!1}),L=(0,s.default)(()=>Promise.all([n.e(689),n.e(316),n.e(310)]).then(n.bind(n,8310)).then(e=>e.Fire),{loadableGenerated:{webpack:()=>[8310]},ssr:!1}),F=(0,s.default)(()=>Promise.all([n.e(689),n.e(316),n.e(677),n.e(565)]).then(n.bind(n,2565)).then(e=>e.CampFireRocks),{loadableGenerated:{webpack:()=>[2565]},ssr:!1}),N=(0,s.default)(()=>Promise.all([n.e(689),n.e(918),n.e(316),n.e(53),n.e(422),n.e(622)]).then(n.bind(n,6622)).then(e=>e.Common2),{loadableGenerated:{webpack:()=>[6622]},ssr:!1}),M=(0,s.default)(()=>Promise.all([n.e(689),n.e(918),n.e(316),n.e(53),n.e(422),n.e(622)]).then(n.bind(n,6622)).then(e=>e.DeviceOrientationListener),{loadableGenerated:{webpack:()=>[6622]},ssr:!1}),z=(0,s.default)(()=>Promise.all([n.e(689),n.e(918),n.e(316),n.e(53),n.e(422),n.e(622)]).then(n.bind(n,6622)).then(e=>e.MyText),{loadableGenerated:{webpack:()=>[6622]},ssr:!1}),U=(0,s.default)(()=>Promise.all([n.e(689),n.e(918),n.e(316),n.e(53),n.e(422),n.e(622)]).then(n.bind(n,6622)).then(e=>e.Intro),{loadableGenerated:{webpack:()=>[6622]},ssr:!1}),H=(0,s.default)(()=>Promise.all([n.e(689),n.e(918),n.e(706),n.e(699),n.e(316),n.e(53),n.e(952)]).then(n.bind(n,4102)).then(e=>e.GithubIcon),{loadableGenerated:{webpack:()=>[4102]},ssr:!1}),_=(0,s.default)(()=>Promise.all([n.e(689),n.e(918),n.e(706),n.e(699),n.e(316),n.e(53),n.e(952)]).then(n.bind(n,4102)).then(e=>e.LinkedInIcon),{loadableGenerated:{webpack:()=>[4102]},ssr:!1}),A=(0,s.default)(()=>Promise.all([n.e(689),n.e(918),n.e(706),n.e(699),n.e(316),n.e(53),n.e(952)]).then(n.bind(n,4102)).then(e=>e.ResumeIcon),{loadableGenerated:{webpack:()=>[4102]},ssr:!1}),G=e=>{let{children:t,onLoad:n}=e;return(0,a.useEffect)(()=>{n&&n()},[n]),(0,i.jsx)(i.Fragment,{children:t})};function W(){let[e,t]=(0,a.useState)(!1),n=(0,c.o)(e=>e.isCameraRendered),{isPending:r,error:s}=function(e,t,n){var r,i,s,o;let u=(0,C.NL)(n),c=x(),l=E(),h=u.defaultQueryOptions(e);null===(i=u.getDefaultOptions().queries)||void 0===i||null===(r=i._experimental_beforeQuery)||void 0===r||r.call(i,h),h._optimisticResults=c?"isRestoring":"optimistic",k(h),S(h,l),I(l);let[f]=a.useState(()=>new t(u,h)),p=f.getOptimisticResult(h);if(a.useSyncExternalStore(a.useCallback(e=>{let t=c?()=>void 0:f.subscribe(d.V.batchCalls(e));return f.updateResult(),t},[f,c]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),a.useEffect(()=>{f.setOptions(h,{listeners:!1})},[h,f]),T(h,p))throw j(h,f,l);if(Q({result:p,errorResetBoundary:l,throwOnError:h.throwOnError,query:u.getQueryCache().get(h.queryHash)}))throw p.error;return null===(o=u.getDefaultOptions().queries)||void 0===o||null===(s=o._experimental_afterQuery)||void 0===s||s.call(o,h,p),h.notifyOnChangeProps?p:f.trackResult(p)}({queryKey:["KUHero.riv"],queryFn:()=>fetch("KUHero.riv").then(e=>e.blob)},b,void 0);return r?(0,i.jsx)(l,{}):s?"An error has occurred: "+s.message:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{style:{zIndex:-1},className:"absolute max-w-1",children:(0,i.jsx)(G,{onLoad:()=>t(!0),children:(0,i.jsx)(u(),{className:"size-[512px] overflow-x-clip",src:"KUHero.riv",stateMachines:"Main"})})}),e&&(0,i.jsx)(P,{orbit:!0,className:"flex h-screen w-full flex-col items-center justify-center",children:(0,i.jsxs)(a.Suspense,{fallback:null,children:[(0,i.jsx)(D,{}),(0,i.jsx)(F,{scale:2,position:[0,-2,0]}),(0,i.jsx)(N,{color:"#262626"}),n&&(0,i.jsx)(L,{color:"0xeeeeee",fireTexture:"Fire.png"}),(0,i.jsx)(z,{}),(0,i.jsx)(U,{}),(0,i.jsx)(H,{}),(0,i.jsx)(_,{}),(0,i.jsx)(A,{}),(0,i.jsx)(M,{})]})})]})}},7544:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(2265),i=n(1805),s=r&&"object"==typeof r&&"default"in r?r:{default:r},a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function u(){return Math.min(Math.max(1,"undefined"!=typeof window&&"number"==typeof window.devicePixelRatio?window.devicePixelRatio:1),3)}"function"==typeof SuppressedError&&SuppressedError;var c=function(){function e(){}return e.prototype.observe=function(){},e.prototype.unobserve=function(){},e.prototype.disconnect=function(){},e}(),l=globalThis.ResizeObserver||c,h=void 0!==globalThis.ResizeObserver,d=!h,f={useDevicePixelRatio:!0,fitCanvasToArtboardHeight:!1,useOffscreenRenderer:!0,shouldResizeCanvasToContainer:!0};function p(e){return Object.assign({},f,e)}function v(e){var t,n,i,s,a,o,c,f,v,b,y,m=e.riveLoaded,R=void 0!==m&&m,g=e.canvasElem,w=e.containerRef,E=e.options,C=e.onCanvasHasResized,O=e.artboardBounds,x=p(void 0===E?{}:E),S=r.useState({height:0,width:0}),I=S[0],Q=I.height,k=I.width,T=S[1],j=r.useState({height:0,width:0}),P=j[0],D=P.height,L=P.width,F=j[1],N=r.useState(!0),M=N[0],z=N[1],U=x.fitCanvasToArtboardHeight,H=x.shouldResizeCanvasToContainer,_=x.useDevicePixelRatio,A=x.customDevicePixelRatio,G=(void 0===(t=H)&&(t=!0),i=(n=r.useState({width:0,height:0}))[0],s=n[1],r.useEffect(function(){if("undefined"!=typeof window&&t){var e=function(){s({width:window.innerWidth,height:window.innerHeight})};return d&&(e(),window.addEventListener("resize",e)),function(){return window.removeEventListener("resize",e)}}},[]),c=r.useRef(new l((a=function(e){h&&s({width:e[e.length-1].contentRect.width,height:e[e.length-1].contentRect.height})},o=0,function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];clearTimeout(o),o=window.setTimeout(function(){return a.apply(e,t)},0)}))),r.useEffect(function(){var e=c.current;if(t){var n=w.current;return w.current&&h&&e.observe(w.current),function(){e.disconnect(),n&&h&&e.unobserve(n)}}e.disconnect()},[w,c]),i),W=(f=A||u(),b=(v=r.useState(f))[0],y=v[1],r.useEffect(function(){if("undefined"!=typeof window&&"matchMedia"in window){var e=function(){y(A||u())},t=window.matchMedia("screen and (resolution: ".concat(b,"dppx)"));return t.hasOwnProperty("addEventListener")?t.addEventListener("change",e):t.addListener(e),function(){t.hasOwnProperty("removeEventListener")?t.removeEventListener("change",e):t.removeListener(e)}}},[b,A]),b),V=null!=O?O:{},q=V.maxX,K=V.maxY,B=r.useCallback(function(){var e,t,n,r,i=null!==(t=null===(e=w.current)||void 0===e?void 0:e.clientWidth)&&void 0!==t?t:0,s=null!==(r=null===(n=w.current)||void 0===n?void 0:n.clientHeight)&&void 0!==r?r:0;return U&&O?{width:i,height:O.maxY/O.maxX*i}:{width:i,height:s}},[w,U,q,K]);r.useEffect(function(){if(H&&w.current&&R){var e=B(),t=e.width,n=e.height,r=!1;if(g){var i=t!==k||n!==Q;if(x.fitCanvasToArtboardHeight&&i&&(w.current.style.height=n+"px",r=!0),x.useDevicePixelRatio){if(i||t*W!==L||n*W!==D){var s=W*t,a=W*n;g.width=s,g.height=a,g.style.width=t+"px",g.style.height=n+"px",F({width:s,height:a}),r=!0}}else i&&(g.width=t,g.height=n,F({width:t,height:n}),r=!0);T({width:t,height:n})}C&&(M||r)&&C&&C(),M&&z(!1)}},[g,w,G,W,B,M,z,D,L,Q,k,C,H,U,_,R]),r.useEffect(function(){F({width:0,height:0})},[g])}var b,y=function(){function e(){}return e.prototype.observe=function(){},e.prototype.unobserve=function(){},e.prototype.disconnect=function(){},e}(),m=globalThis.IntersectionObserver||y,R=function(){function e(){var e=this;this.elementsMap=new Map,this.onObserved=function(t){t.forEach(function(t){var n=e.elementsMap.get(t.target);n&&n(t)})},this.observer=new m(this.onObserved)}return e.prototype.registerCallback=function(e,t){this.observer.observe(e),this.elementsMap.set(e,t)},e.prototype.removeCallback=function(e){this.observer.unobserve(e),this.elementsMap.delete(e)},e}(),g=function(){return b||(b=new R),b};function w(e){var t=e.setContainerRef,n=e.setCanvasRef,r=e.className,i=void 0===r?"":r,u=e.style,c=e.children,l=o(e,["setContainerRef","setCanvasRef","className","style","children"]),h=a({width:"100%",height:"100%"},u);return s.default.createElement("div",a({ref:t,className:i},!i&&{style:h}),s.default.createElement("canvas",a({ref:n,style:{verticalAlign:"top",width:0,height:0}},l),c))}function E(e,t){void 0===t&&(t={});var n=r.useState(null),o=n[0],u=n[1],c=r.useRef(null),l=r.useState(null),h=l[0],d=l[1],f=p(t),b=r.useCallback(function(){h&&(h.startRendering(),h.resizeToCanvas())},[h]);v({riveLoaded:!!h,canvasElem:o,containerRef:c,options:f,onCanvasHasResized:b,artboardBounds:null==h?void 0:h.bounds});var y=r.useCallback(function(e){null===e&&o&&(o.height=0,o.width=0),u(e)},[]);r.useEffect(function(){if(o&&e&&null==h){var t=f.useOffscreenRenderer,n=new i.Rive(a(a({useOffscreenRenderer:t},e),{canvas:o}));n.on(i.EventType.Load,function(){o?d(n):n.cleanup()})}},[o,!!e,h]);var m=r.useCallback(function(e){c.current=e},[]),R={observe:r.useCallback(function(e,t){g().registerCallback(e,t)},[]),unobserve:r.useCallback(function(e){g().removeCallback(e)},[])},E=R.observe,C=R.unobserve;r.useEffect(function(){var e,t=!1,n=function(){if(o&&t){var e=o.getBoundingClientRect();e.width>0&&e.height>0&&e.top<(window.innerHeight||document.documentElement.clientHeight)&&e.bottom>0&&e.left<(window.innerWidth||document.documentElement.clientWidth)&&e.right>0&&(null==h||h.startRendering(),t=!1)}};return o&&!1!==f.shouldUseIntersectionObserver&&E(o,function(r){r.isIntersecting?h&&h.startRendering():h&&h.stopRendering(),t=!r.isIntersecting,clearTimeout(e),r.isIntersecting||0!==r.boundingClientRect.width||(e=setTimeout(n,10))}),function(){o&&C(o)}},[E,C,h,o,f.shouldUseIntersectionObserver]),r.useEffect(function(){return function(){h&&(h.cleanup(),d(null))}},[h,o]);var O=null==e?void 0:e.animations;r.useEffect(function(){h&&O&&(h.isPlaying?(h.stop(h.animationNames),h.play(O)):h.isPaused&&(h.stop(h.animationNames),h.pause(O)))},[O,h]);var x=r.useCallback(function(e){return s.default.createElement(w,a({setContainerRef:m,setCanvasRef:y},e))},[y,m]);return{canvas:o,container:c.current,setCanvasRef:y,setContainerRef:m,rive:h,RiveComponent:x}}t.default=function(e){var t=e.src,n=e.artboard,r=e.animations,i=e.stateMachines,u=e.layout,c=e.useOffscreenRenderer,l=e.shouldDisableRiveListeners,h=e.shouldResizeCanvasToContainer,d=e.automaticallyHandleEvents,f=e.children,p=o(e,["src","artboard","animations","stateMachines","layout","useOffscreenRenderer","shouldDisableRiveListeners","shouldResizeCanvasToContainer","automaticallyHandleEvents","children"]),v=E({src:t,artboard:n,animations:r,layout:u,stateMachines:i,autoplay:!0,shouldDisableRiveListeners:void 0!==l&&l,automaticallyHandleEvents:void 0!==d&&d},{useOffscreenRenderer:void 0===c||c,shouldResizeCanvasToContainer:void 0===h||h}).RiveComponent;return s.default.createElement(v,a({},p),f)},t.useResizeCanvas=v,t.useRive=E,t.useRiveFile=function(e){var t=this,n=r.useState(null),s=n[0],a=n[1],o=r.useState("idle"),u=o[0],c=o[1];return r.useEffect(function(){var n,r,s,o=null;return n=void 0,r=void 0,s=function(){return function(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(u){return function(o){if(n)throw TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(this,function(t){try{c("loading"),(o=new i.RiveFile(e)).init(),o.on(i.EventType.Load,function(){null==o||o.getInstance(),a(o),c("success")}),o.on(i.EventType.LoadError,function(){c("failed")}),a(o)}catch(e){console.error(e),c("failed")}return[2]})},new(r||(r=Promise))(function(e,i){function a(e){try{u(s.next(e))}catch(e){i(e)}}function o(e){try{u(s.throw(e))}catch(e){i(e)}}function u(t){var n;t.done?e(t.value):((n=t.value)instanceof r?n:new r(function(e){e(n)})).then(a,o)}u((s=s.apply(t,n||[])).next())}),function(){null==o||o.cleanup()}},[e.src,e.buffer]),{riveFile:s,status:u}},t.useStateMachineInput=function(e,t,n,s){var a=r.useState(null),o=a[0],u=a[1];return r.useEffect(function(){function r(){if(e&&t&&n||u(null),e&&t&&n){var r=e.stateMachineInputs(t);if(r){var i=r.find(function(e){return e.name===n});void 0!==s&&i&&(i.value=s),u(i||null)}}else u(null)}r(),e&&e.on(i.EventType.Load,function(){r()})},[e]),o},Object.keys(i).forEach(function(e){"default"===e||t.hasOwnProperty(e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},4492:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},s=r.useState,a=r.useEffect,o=r.useLayoutEffect,u=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=s({inst:{value:n,getSnapshot:t}}),i=r[0].inst,l=r[1];return o(function(){i.value=n,i.getSnapshot=t,c(i)&&l({inst:i})},[e,n,t]),a(function(){return c(i)&&l({inst:i}),e(function(){c(i)&&l({inst:i})})},[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},5107:function(e,t,n){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i=n(554),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,o=r.useRef,u=r.useEffect,c=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var h=o(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;var f=a(e,(h=c(function(){function e(e){if(!u){if(u=!0,a=e,e=r(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return o=t}return o=e}if(t=o,s(a,e))return t;var n=r(e);return void 0!==i&&i(t,n)?t:(a=e,o=n)}var a,o,u=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]))[0],h[1]);return u(function(){d.hasValue=!0,d.value=f},[f]),l(f),f}},554:function(e,t,n){"use strict";e.exports=n(4492)},5006:function(e,t,n){"use strict";e.exports=n(5107)},2549:function(e,t,n){"use strict";n.d(t,{a:function(){return s},o:function(){return i}});var r=n(9099);let i=(0,r.Ue)(()=>({isCameraRendered:!1,isRiveLoaded:!1})),s=(0,r.Ue)()((e,t)=>({intersections:[],addElement:n=>{let{intersections:r}=t();e({intersections:[...r,n]})},removeElement:n=>{let{intersections:r}=t();e({intersections:r.filter(e=>e.uuid!==n)})}}))},9099:function(e,t,n){"use strict";n.d(t,{Ue:function(){return d}});let r=e=>{let t;let n=new Set,r=(e,r)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=r?r:"object"!=typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,s={setState:r,getState:i,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},a=t=e(r,i,s);return s},i=e=>e?r(e):r;var s=n(2265),a=n(5006);let{useDebugValue:o}=s,{useSyncExternalStoreWithSelector:u}=a,c=!1,l=e=>e,h=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?i(e):e,n=(e,n)=>(function(e,t=l,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let r=u(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return o(r),r})(t,e,n);return Object.assign(n,t),n},d=e=>e?h(e):h}},function(e){e.O(0,[845,213,971,23,744],function(){return e(e.s=2711)}),_N_E=e.O()}]);