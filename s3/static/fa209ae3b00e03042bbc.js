"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[7219],{34288:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var o=n(62143),r=n(92036),a=n(68853),i=n(50598),s=n(52322),l=n(2784),c=n(56851),p=n(91038),u=n(5700);const d={color:"primary",mr:"8px",mt:"8px",display:"inline-block",".countdown":{ml:"8px"},".label:hover":{color:"t.primary"}},f=(0,l.memo)((({label:e,price:t,time:n,timeTips:a,labelTips:i,sx:f})=>{const m=(0,l.useMemo)((()=>Object.assign(Object.assign(Object.assign({},u.oB),d),{sx:f})),[f]);return(0,s.jsxs)(o.Z,Object.assign({sx:m},{children:[(0,s.jsx)(c.m,Object.assign({tip:i},{children:(0,s.jsx)("div",Object.assign({className:"label"},{children:e}),void 0)}),void 0),(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("div",Object.assign({className:"price-text emphasize"},{children:t}),void 0),(0,s.jsx)("div",Object.assign({className:"price-text countdown"},{children:(0,s.jsx)(c.m,Object.assign({tip:a},{children:(0,s.jsx)(p.Z,{time:n},void 0)}),void 0)}),void 0)]},void 0)]}),void 0)})),m=(0,l.memo)((({priceColor:e,showPrice:t,differencePrice:n,color:o,fundingTimeProps:i})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.Z,Object.assign({sx:{flexDirection:"column"}},{children:[(0,s.jsx)(a._D,Object.assign({priceColor:e,withSubPrice:!0},{children:t}),void 0),(0,s.jsx)(a.Xd,Object.assign({sx:{color:o}},{children:n}),void 0)]}),void 0),i&&(0,s.jsx)(f,Object.assign({},i),void 0)]},void 0)));var h,x=n(38896),g=n(22686),b=n(70773);e=n.hmd(e),(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&h(e);var v=function(e){var t=e.type,n=e.children,l=(0,b.iq)({type:t}),c=l.list,p=l.fundingTimeProps,u=l.priceColor,d=l.change,f=l.changeColor,h=l.currentPrice,v=l.dataSource,E=(0,x.G3)();return(0,s.jsx)(o.Z,{sx:{px:["sm","sm",0],pt:["12px",0],pb:["12px",0]},children:(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(a.Ar,{sx:{mr:["xs","0"],flex:1,borderRight:"none",pr:["0","16px"]},children:[(0,s.jsx)(o.Z,{sx:{display:"flex",alignItems:"center"},children:n}),(0,s.jsx)(m,{priceColor:u,showPrice:h,differencePrice:d,color:f,fundingTimeProps:E?void 0:p}),E&&(0,s.jsx)(g.Z,{})]}),(0,s.jsx)(a.Ar,{sx:{flex:1},children:(0,s.jsx)(i.Z,{layout:"mobile",list:c,dataSource:v})})]})})};("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(v,"useTickerMobileHandle{{ list, fundingTimeProps, priceColor, change, changeColor, currentPrice, dataSource }}\nuseDeliveryPath{isCoinFutures}",(function(){return[b.iq,x.G3]}));var E=v;const w=E;var k,y;(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(v,"TickerMobileComponent","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/Ticker/TickerMobile.js"),k.register(E,"default","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/Ticker/TickerMobile.js")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)},35395:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(5163),r=n(2784),a=n(62143),i=n(72779),s=n.n(i),l=n(28776),c={"&,&::before":{position:"absolute",width:"6px",height:"6px",zIndex:-1},"&::before":{content:'""',display:"block"}},p={boxSizing:"content-box",position:"absolute",width:"max-content",wordBreak:"normal",zIndex:"tooltip",maxWidth:"296px",'&[data-popper-placement^="top"] > [data-popper-arrow]':{bottom:"-3px"},"& > .gap-fill":{position:"absolute",display:"block"},'&[data-popper-placement^="top"] > [data-popper-arrow]::before':{transform:"rotate(45deg)"},'&[data-popper-placement^="top"] > .gap-fill':{bottom:"-"+l.SG+"px",left:"0",width:"100%",height:l.SG+"px"},'&[data-popper-placement^="bottom"] > [data-popper-arrow]':{top:"-3px"},'&[data-popper-placement^="bottom"] > [data-popper-arrow]::before':{transform:"rotate(225deg)"},'&[data-popper-placement^="bottom"] > .gap-fill':{top:"-"+l.SG+"px",left:"0",width:"100%",height:l.SG+"px"},'&[data-popper-placement^="left"] > [data-popper-arrow]':{right:"-3px"},'&[data-popper-placement^="left"] > [data-popper-arrow]::before':{transform:"rotate(-45deg)"},'&[data-popper-placement^="left"] > .gap-fill':{top:"0",right:"-"+l.SG+"px",width:l.SG+"px",height:"100%"},'&[data-popper-placement^="right"] > [data-popper-arrow]':{left:"-3px"},'&[data-popper-placement^="right"] > [data-popper-arrow]::before':{transform:"rotate(135deg)"},'&[data-popper-placement^="right"] > .gap-fill':{top:"0",left:"-"+l.SG+"px",width:l.SG+"px",height:"100%"}};const u=r.forwardRef((function(e,t){var n=e.arrow,i=e.arrowRef,l=e.arrowStyle,u=e.children,d=e.open,f=e.className,m=e.bg,h=(0,o.__rest)(e,["arrow","arrowRef","arrowStyle","children","open","className","bg"]);return d?r.createElement(a.Z,(0,o.__assign)({ref:t,variant:"tooltip",bg:m,className:s()(f,"bn-tooltip-box")},h,{__css:(0,o.__assign)((0,o.__assign)({},p),{".bn-tooltip-arrow[data-popper-arrow]::before":{backgroundColor:m}})}),u,n&&r.createElement(a.Z,{className:"bn-tooltip-arrow",ref:i,"data-popper-arrow":!0,__css:c,style:l}),r.createElement("i",{className:"gap-fill"})):null}))},21030:(e,t,n)=>{n.d(t,{ZP:()=>h});var o=n(5163),r=n(2784),a=n(50464),i=n(62143),s=n(87938),l=n(53858),c=n(53021),p=n(68106),u=n(35395),d=n(28776),f=n(80142),m=function(){return"undefined"!=typeof window?document.body.offsetHeight:0};const h=r.forwardRef((function(e,t){var n=e.arrow,h=void 0!==n&&n,x=e.boundary,g=e.container,b=e.tip,v=e.delay,E=void 0===v?0:v,w=e.pos,k=e.placement,y=void 0===k?w||"top":k,S=e.children,_=e.open,C=e.trigger,O=void 0===C?"hover":C,j=e.onClick,T=e.enablePortal,P=void 0!==T&&T,M=e.bg,Z=e.scroll,N=e.resize,G=e.boxOffset,L=void 0===G?0:G,R=e.arrowPadding,D=void 0===R?0:R,H=e.fallbackPlacements,I=e.onlyShowOnHover,z=void 0===I||I,B=e.clickOutsideClose,U=void 0!==B&&B,A=e.onClickOutside,F=(0,o.__rest)(e,["arrow","boundary","container","tip","delay","pos","placement","children","open","trigger","onClick","enablePortal","bg","scroll","resize","boxOffset","arrowPadding","fallbackPlacements","onlyShowOnHover","clickOutsideClose","onClickOutside"]),X="rtl"===(0,l.Z)()?d.O9[y]:y,q=r.useRef(null!=_).current,W=r.useRef(null),J=r.useState(null),K=J[0],Q=J[1],V=r.useState(null),Y=V[0],$=V[1],ee=r.useState(null),te=ee[0],ne=ee[1],oe=r.useRef(0),re=r.useRef(),ae=(0,c.D)(K,Y,{placement:X,modifiers:[{name:"eventListeners",options:{scroll:Z,resize:N}},{name:"arrow",options:{element:te,padding:D}},{name:"offset",options:{offset:[L||0,d.SG]}},{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{name:"flip",options:{boundary:x,fallbackPlacements:H}}]}),ie=ae.state,se=ae.styles,le=ae.attributes,ce=ae.update,pe=r.useMemo((function(){return(0,d.BP)(null==ie?void 0:ie.placement)}),[null==ie?void 0:ie.placement]),ue=r.useState(_),de=ue[0],fe=ue[1];q&&(O=void 0,_!==de&&fe(_)),r.useEffect((function(){return function(){re.current&&window.clearTimeout(re.current),re.current=0}}),[de]),(0,f.t)(W,(function(e){U&&fe(!1),A&&A(e)}),!!A||!!U);var me=(0,a.Z)(Q,t),he="click"===O?function(e){re.current&&window.clearTimeout(re.current),oe.current=0,re.current=0,fe(!de),ce&&ce(),j&&j(e)}:j,xe="hover"===O?function(e){!de&&window.performance.now()-oe.current>500&&(re.current=E?re.current||window.setTimeout((function(){return fe(!0)}),E):(fe(!0),0),ce&&ce(),oe.current=window.performance.now()),F.onMouseMove&&F.onMouseMove(e)}:F.onMouseMove,ge="hover"===O?function(e){re.current&&window.clearTimeout(re.current),oe.current=0,re.current=0,fe(!1),ce&&ce(),F.onMouseLeave&&F.onMouseLeave(e)}:F.onMouseLeave,be=z?{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:m}:{};return r.createElement(i.Z,(0,o.__assign)({ref:me},F,{__css:{display:"inline-block",position:"relative"},onClick:he,onMouseMove:xe,onMouseLeave:ge}),r.createElement(p.ZP,(0,o.__assign)({in:de,timeout:d.x9},be),(function(e){return g||P?r.createElement(s.ZP,{container:g},r.createElement(u.Z,(0,o.__assign)({open:!0,arrow:h,arrowStyle:se.arrow,style:(0,o.__assign)((0,o.__assign)((0,o.__assign)({},se.popper),d.hy),pe[e]),bg:M,arrowRef:ne,ref:$},le.popper),r.createElement(i.Z,{ref:W},b))):r.createElement(u.Z,(0,o.__assign)({open:!0,arrow:h,arrowStyle:se.arrow,style:(0,o.__assign)((0,o.__assign)((0,o.__assign)({},se.popper),d.hy),pe[e]),bg:M,arrowRef:ne,ref:$},le.popper),r.createElement(i.Z,{ref:W},b))})),S)}))},28776:(e,t,n)=>{n.d(t,{BP:()=>i,O9:()=>s,SG:()=>l,hy:()=>r,x9:()=>o});var o=120,r={transition:"opacity "+o+"ms ease-in-out, transform "+o+"ms ease-in-out",opacity:.25,transform:"translate3d(0, 0, 0)"},a={bottom:"translate3d(0, 6px, 0)",left:"translate3d(-6px, 0, 0)",right:"translate3d(6px, 0, 0)",top:"translate3d(0, -6px, 0)"},i=function(e){return e=function(e){return e.split("-")[0]}(e||"top"),{entering:{opacity:.25,transform:"translate3d(0, 0, 0)"},entered:{opacity:1,transform:"translate3d(0, 0, 0)"},exiting:{opacity:.25,transform:a[e]},exited:{visibility:"hidden",opacity:0,transform:a[e]}}},s={"bottom-end":"bottom-start","bottom-start":"bottom-end","left-end":"right-end","left-start":"right-start",left:"right","right-end":"left-end","right-start":"left-start",right:"left","top-end":"top-start","top-start":"top-end"},l=8},80142:(e,t,n)=>{n.d(t,{t:()=>a});var o=n(2784),r=n(75548),a=function(e,t,n){var a=(0,r.D)((function(n){e&&e.current&&!e.current.contains(n.target)&&t(n)}));(0,o.useEffect)((function(){return n?(document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}):function(){}}),[n,a])}},68106:(e,t,n)=>{n.d(t,{ZP:()=>h});var o=n(31461),r=n(81665),a=(n(13980),n(2784)),i=n(28316);const s=a.createContext(null);var l="unmounted",c="exited",p="entering",u="entered",d="exiting",f=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,a=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?a?(r=c,o.appearStatus=p):r=u:r=t.unmountOnExit||t.mountOnEnter?l:c,o.state={status:r},o.nextCallback=null,o}(0,r.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==u&&(t=p):n!==p&&n!==u||(t=d)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===p?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[i.findDOMNode(this),o],a=r[0],s=r[1],l=this.getTimeouts(),c=o?l.appear:l.enter;e||n?(this.props.onEnter(a,s),this.safeSetState({status:p},(function(){t.props.onEntering(a,s),t.onTransitionEnd(c,(function(){t.safeSetState({status:u},(function(){t.props.onEntered(a,s)}))}))}))):this.safeSetState({status:u},(function(){t.props.onEntered(a)}))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:i.findDOMNode(this);t?(this.props.onExit(o),this.safeSetState({status:d},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:c},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:c},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=r[0],s=r[1];this.props.addEndListener(a,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,o.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.createElement(s.Provider,{value:null},"function"==typeof n?n(e,r):a.cloneElement(a.Children.only(n),r))},t}(a.Component);function m(){}f.contextType=s,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},f.UNMOUNTED=l,f.EXITED=c,f.ENTERING=p,f.ENTERED=u,f.EXITING=d;const h=f},71926:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(2784);const r=function(e,t){var n=(0,o.useRef)((function(){}));(0,o.useEffect)((function(){n.current=e})),(0,o.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t||0);return function(){return clearInterval(e)}}}),[t])}}}]);