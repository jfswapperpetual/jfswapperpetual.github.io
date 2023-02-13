"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[7284],{13044:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(5163),o=n(2784),r=n(98569);const a=function(e){return o.createElement(r.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z",fill:"currentColor"}))}},71927:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(5163),o=n(2784),r=n(98569);const a=function(e){return o.createElement(r.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",fill:"currentColor"}))}},77536:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(5163),o=n(2784),r=n(62143);const a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._rendered=!1,t}return(0,i.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabKey,n=e.sx,i=e.unmountOnBlur,a=void 0!==i&&i,s=this.props,l=s.activeKey===t,d=!s.lazy||!!l||!a&&this._rendered;return this._rendered=this._rendered||d,o.createElement(r.Z,{sx:n,__css:{display:l?"block":"none"}},d&&this.props.children)},t}(o.PureComponent)},25181:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(5163),o=n(2784),r=n(62143),a=n(54073),s=n.n(a),l=n(76635);const d=o.forwardRef((function(e,t){var n=e.onClick,i=e.content,a=e.tabKey,s=e.activeKey,d=e.sx,c=e.tabDefaultNodeSx,u=e.className,v=e.variant,h=void 0===v?"default":v,p=e.size,b=void 0===p?"normal":p,f=e.id,m=e.type,g=a===s,x=o.useCallback((0,l.cond)([[function(e){return"filled"===e},(0,l.constant)(h+".tab."+m)],[function(e){return"standard"===e||"vertical"===e},(0,l.constant)(h+"."+b)],[l.stubTrue,(0,l.constant)(h+".tab")]]),[h,m,b]);return o.createElement(r.Z,{id:f,sx:d,__css:{cursor:"pointer",minWidth:"auto"},className:u,ref:t,onClick:function(){n&&n()}},"function"==typeof i?i(g):o.createElement(r.Z,{tx:"tabs",variant:x(h),className:g?"active":"",active:g,sx:c},i))}));function c(e){if(!e)return 0;var t=e.parentElement;if(!t)return 0;for(var n=0,i=0;i<t.children.length;++i){var o=t.children[i];if(e.isSameNode(o))break;n+=o.getBoundingClientRect().width}var r=t.getBoundingClientRect().width;return n+e.getBoundingClientRect().width/2-r/2}function u(e,t,n,i){if(e){var o,r,a,s=e.scrollLeft,l=t-s,d=performance.now();window.requestAnimationFrame?function t(){e&&(o=performance.now(),r=(o-d)/1e3,a=Math.min(r/n,1),e.scrollLeft=s+l*function(e){return e<.5?2*e*e:(4-2*e)*e-1}(a),a<1?window.requestAnimationFrame(t):i&&i())}():e.scrollLeft=t}}var v=n(13044),h=n(92036),p=n(85395),b=n.n(p),f=function(e,t){if(t&&t.current){var n,i,o=t.current,r=o.scrollLeft,a=o.children,s=Array.from(a).map((function(e){return e.offsetLeft})),l=(n=e,function(e){return"next"===n?e:-1*e})(4),d=(i=l,function(e){return b()([function(t){return e.findIndex((function(e){return t<=e}))},function(e){return e+i},function(t){return e[t]}])})(s)(r);u(t.current,d,.3)}},m={position:"absolute",top:0,height:"100%",alignItems:"center"},g={justifyContent:"center",alignItems:"center",borderRadius:"8px",bg:"transparent",color:"t.third",cursor:"pointer"},x=function(e){var t=e.handleClick,n=e.rightNode;return n?o.createElement(r.Z,{__css:(0,i.__assign)((0,i.__assign)({},m),{right:0}),onClick:t},n):o.createElement(h.Z,{__css:(0,i.__assign)((0,i.__assign)({},m),{bg:"bg1",right:0,pl:"xs"})},o.createElement(h.Z,{size:"24px",__css:g,onClick:function(){return t()}},o.createElement(v.Z,{size:16})))},j=function(e){var t=e.handleClick,n=e.leftNode;return n?o.createElement(r.Z,{__css:(0,i.__assign)((0,i.__assign)({},m),{left:0}),onClick:t},n):o.createElement(h.Z,{__css:(0,i.__assign)((0,i.__assign)({},m),{bg:"bg1",left:0,pr:"xs"})},o.createElement(h.Z,{size:"24px",__css:(0,i.__assign)((0,i.__assign)({},g),{transform:"rotate(180deg)"}),onClick:t},o.createElement(v.Z,{size:16})))};const y=o.memo((function(e){var t=e.leftBtnVisible,n=e.rightBtnVisible,i=e.scrollingContainer,r=e.sliderButtonsConfig,a=o.useCallback((function(){return f("next",i)}),[i]),s=o.useCallback((function(){return f("prev",i)}),[i]),l=r.leftNode,d=r.rightNode;return o.createElement(o.Fragment,null,t&&o.createElement(j,{handleClick:s,leftNode:l}),n&&o.createElement(x,{handleClick:a,rightNode:d}))}));var O="undefined"!=typeof BN;const w=function(e){function t(t){var n=e.call(this,t)||this;return n.displayName="Tabs",n.handleActiveTabChange=function(e){var t=e.activeKey,i=e.tabsElement,o=e.activeElement;n.setState({activeKey:t}),O||u(i,c(o),.3)},n.triggerSliderButtonsVisible=function(e){var t=e.containerRef,i=e.visibleOffset;if(t&&t.current){var o=t.current,r=o.scrollLeft,a=o.scrollWidth,s=o.clientWidth;n.setState({rightBtnVisible:a>=s+r+i,leftBtnVisible:r>i})}},n.state={activeKey:t.controlledKey||t.defaultActiveKey,leftBtnVisible:!1,rightBtnVisible:!1},n}return(0,i.__extends)(t,e),t.prototype.componentDidMount=function(){var e;if(this.currentTabRef&&this.currentTabRef.current&&!O&&!this.props.disableScroll){var t=this.currentTabRef.current;u(t.parentElement,c(t),.3)}this.props.showSlideButtons&&this.triggerSliderButtonsVisible({containerRef:this.tabsContainerRef,visibleOffset:(null===(e=this.props.sliderButtonsConfig)||void 0===e?void 0:e.visibleOffset)||30})},t.prototype.componentDidUpdate=function(e){var t;if(this.props.controlledKey&&this.props.controlledKey!==e.controlledKey){var n=null===(t=this.eleMap[this.props.controlledKey])||void 0===t?void 0:t.current;n&&n.parentElement&&this.handleActiveTabChange({activeKey:this.props.controlledKey,tabsElement:n.parentElement,activeElement:n})}},t.prototype.render=function(){var e=this,t=this.props,n=t.children,a=t.onChange,l=t.onTabClick,c=t.lazy,u=t.tabSx,v=t.tabClassName,h=t.tabsSx,p=t.tabsClassName,b=t.tabDefaultNodeSx,f=t.variant,m=t.size,g=(t.controlledKey,t.type),x=void 0===g?"secondary":g,j=t.showSlideButtons,O=t.sliderButtonsConfig,w=void 0===O?{}:O,S=(0,i.__rest)(t,["children","onChange","onTabClick","lazy","tabSx","tabClassName","tabsSx","tabsClassName","tabDefaultNodeSx","variant","size","controlledKey","type","showSlideButtons","sliderButtonsConfig"]),C=this.state,k=C.activeKey,_=C.rightBtnVisible,E=C.leftBtnVisible;this.tabs=[],this.eleMap={};var z=o.Children.map(n,(function(t){if(o.isValidElement(t)){var n=t.props,i=n.tab,r=n.tabKey;return e.tabs.push({tab:i,tabKey:r}),o.cloneElement(t,{activeKey:k,lazy:c})}}));this.tabsContainerRef=o.createRef();var R=s()((function(){var t;e.triggerSliderButtonsVisible({containerRef:e.tabsContainerRef,visibleOffset:(null===(t=e.props.sliderButtonsConfig)||void 0===t?void 0:t.visibleOffset)||30})}),500),Z=j&&{onScroll:function(){R()}};return o.createElement(r.Z,(0,i.__assign)({as:"div",tx:"tabs",variant:f+".layout",__css:{position:"relative"}},S),o.createElement(r.Z,(0,i.__assign)({ref:this.tabsContainerRef,tx:"tabs"},Z,{variant:f+".container",sx:h,className:p,__css:{width:"100%",whiteSpace:"nowrap",display:"flex",flexDirection:"row",overflow:"scroll",msOverflowStyle:"none",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}}),this.tabs.map((function(t,n){var i=t.tab,r=t.tabKey,s=o.createRef();return k===r&&(e.currentTabRef=s),e.eleMap[r]=s,o.createElement(d,{size:m,content:i,tabKey:r,activeKey:k,key:n,ref:s,sx:u,className:v,tabDefaultNodeSx:b,variant:f,type:x,id:"tab-"+r,onClick:function(){e.handleActiveTabChange({activeKey:r,tabsElement:s.current.parentElement,activeElement:s.current}),r!==k&&a&&a(r,n),l&&l(r,n)}})}))),z,j&&o.createElement(y,{leftBtnVisible:E,rightBtnVisible:_,scrollingContainer:this.tabsContainerRef,sliderButtonsConfig:w}))},t}(o.PureComponent)},37284:(e,t,n)=>{n.d(t,{MY:()=>be,P_:()=>re,mr:()=>he,i1:()=>xe,bQ:()=>fe,sb:()=>me,e2:()=>ie,k3:()=>se,tW:()=>pe,sN:()=>oe,GP:()=>ce,kc:()=>de,cE:()=>ae,RV:()=>ue,ou:()=>ge,Eu:()=>le,A9:()=>ve});var i=n(52322),o=n(2784),r=n(39727),a=n(59111),s=n(62143),l=n(37127),d=n(11001),c=n(22604),u=n(38896),v=n(9577),h=n(97060);const p=({children:e,active:t=!1,height:n})=>(0,u._n)()?o.cloneElement(e,{active:t}):null;var b=n(53096),f=n(92036),m=n(60190),g=n(29261);const x={color:"t.third",height:"100%",alignItems:"center",fontWeight:"medium",pr:"16px",fontSize:"14px"},j=o.memo((({i18nKey:e,defaultValue:t,active:n,suffix:o,testId:r})=>{const{getI18n:a}=(0,h.ZK)();return(0,i.jsxs)(f.Z,Object.assign({className:n?"active":"",sx:x,"data-testid":r},{children:[a(e,{defaultValue:t}),o]}),void 0)})),y=o.memo((({active:e})=>{const t=(0,m.kD)();return(0,i.jsx)(j,{i18nKey:"trd-layout-tabPositions",defaultValue:"Positions",active:e,testId:"Positions",suffix:`(${t})`},void 0)})),O=o.memo((({active:e})=>{const{preOrders:t}=(0,g.E)();return(0,i.jsx)(j,{i18nKey:"trd-layout-tabOpenOrder",defaultValue:"Open Orders",active:e,suffix:`(${t.length})`,testId:"OpenOrder"},void 0)})),w=o.memo((({active:e})=>(0,i.jsx)(j,{i18nKey:"trd-layout-tabOrderHistory",defaultValue:"Order History",active:e,testId:"OrderHistory"},void 0))),S=o.memo((({active:e})=>(0,i.jsx)(j,{i18nKey:"trd-layout-tabTradeHistory",defaultValue:"Trade History",active:e,testId:"TradeHistory"},void 0))),C=o.memo((({active:e})=>(0,i.jsx)(j,{i18nKey:"trd-layout-tabTransactionHistory",defaultValue:"Transaction History",active:e,testId:"transactionHistory"},void 0))),k=o.memo((({active:e})=>(0,i.jsx)(j,{i18nKey:"trd-layout-tabAssets",defaultValue:"Assets",active:e,testId:"assetsTableTitle"},void 0))),_=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(4363),n.e(8013),n.e(9880),n.e(9982),n.e(5219),n.e(5656),n.e(1215),n.e(1467),n.e(7745),n.e(2274),n.e(123),n.e(9099),n.e(3349),n.e(5047),n.e(1688)]).then(n.bind(n,21688)))),E=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(5219),n.e(4998),n.e(2274),n.e(5047),n.e(8344)]).then(n.bind(n,9527)))),z=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(4363),n.e(8013),n.e(9461),n.e(4998),n.e(123),n.e(2012),n.e(143),n.e(8426),n.e(6949),n.e(3803)]).then(n.bind(n,23844)))),R=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(4363),n.e(8013),n.e(9461),n.e(3234),n.e(123),n.e(2012),n.e(143),n.e(8426),n.e(1136)]).then(n.bind(n,41136)))),Z=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(4363),n.e(8013),n.e(9461),n.e(3234),n.e(123),n.e(2012),n.e(143),n.e(8426),n.e(1451)]).then(n.bind(n,1451)))),P=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(4363),n.e(7631),n.e(9681),n.e(1467),n.e(7745),n.e(9257),n.e(4724),n.e(2261),n.e(470)]).then(n.bind(n,521)))),B=[[e=>(0,i.jsx)(y,{active:e},void 0),(0,i.jsx)(p,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(b.Z,{},void 0)},{children:(0,i.jsx)(_,{},void 0)}),void 0)},void 0)],[e=>(0,i.jsx)(O,{active:e},void 0),(0,i.jsx)(p,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(b.Z,{},void 0)},{children:(0,i.jsx)(E,{},void 0)}),void 0)},void 0)],[e=>(0,i.jsx)(w,{active:e},void 0),(0,i.jsx)(p,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(b.Z,{},void 0)},{children:(0,i.jsx)(z,{},void 0)}),void 0)},void 0)],[e=>(0,i.jsx)(S,{active:e},void 0),(0,i.jsx)(p,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(b.Z,{},void 0)},{children:(0,i.jsx)(R,{},void 0)}),void 0)},void 0)],[e=>(0,i.jsx)(C,{active:e},void 0),(0,i.jsx)(p,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(b.Z,{},void 0)},{children:(0,i.jsx)(Z,{},void 0)}),void 0)},void 0)],[e=>(0,i.jsx)(k,{active:e},void 0),(0,i.jsx)(p,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:(0,i.jsx)(b.Z,{},void 0)},{children:(0,i.jsx)(P,{},void 0)}),void 0)},void 0)]];var K=n(59094),N=n(60390);const M=(0,o.lazy)((()=>Promise.all([n.e(3021),n.e(4106),n.e(7631),n.e(3301),n.e(1467),n.e(7745),n.e(2274),n.e(9257),n.e(4724),n.e(2985),n.e(7498),n.e(9491),n.e(7046),n.e(3606)]).then(n.bind(n,43606)))),I=(0,o.lazy)((()=>Promise.all([n.e(3021),n.e(4106),n.e(7631),n.e(3301),n.e(1467),n.e(7745),n.e(2274),n.e(9257),n.e(4724),n.e(2985),n.e(7498),n.e(9491),n.e(7046),n.e(1037)]).then(n.bind(n,11037)))),T=(0,o.lazy)((()=>Promise.all([n.e(3021),n.e(4106),n.e(7631),n.e(3301),n.e(1467),n.e(7745),n.e(2274),n.e(9257),n.e(4724),n.e(2985),n.e(9491),n.e(7046),n.e(8563)]).then(n.bind(n,76720)))),V=(0,o.lazy)((()=>Promise.all([n.e(8715),n.e(2068)]).then(n.bind(n,28715)))),H=o.memo((({type:e=K.C.Normal,onRemove:t})=>{const n=(0,N._)(),r=(0,o.useMemo)((()=>{switch(e){case K.C.Normal:return(0,i.jsx)(o.Suspense,{fallback:null,children:(0,i.jsx)(M,{onRemove:t},void 0)},void 0);case K.C.Horizontal:return(0,i.jsx)(o.Suspense,{fallback:null,children:(0,i.jsx)(I,{},void 0)},void 0);case K.C.FullScreen:return(0,i.jsx)(o.Suspense,{fallback:null,children:(0,i.jsx)(T,{},void 0)},void 0);default:return null}}),[t]);return(0,i.jsxs)(i.Fragment,{children:[r,(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:n&&(0,i.jsx)(V,{},void 0)}),void 0)]},void 0)}));var F=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const A=o.lazy((()=>Promise.all([n.e(3021),n.e(4363),n.e(8013),n.e(9880),n.e(9982),n.e(1467),n.e(2274),n.e(123),n.e(9099),n.e(316)]).then(n.bind(n,95061)))),L=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(4302),n.e(4971)]).then(n.bind(n,74971)))),D=o.lazy((()=>Promise.all([n.e(5402),n.e(6137)]).then(n.bind(n,46137)))),W=o.lazy((()=>Promise.all([n.e(5509),n.e(8399)]).then(n.bind(n,58399)))),U=o.lazy((()=>Promise.all([n.e(3021),n.e(9880),n.e(1209)]).then(n.bind(n,71209)))),G=o.lazy((()=>Promise.all([n.e(3021),n.e(6033)]).then(n.bind(n,96033)))),Y=o.lazy((()=>Promise.all([n.e(3021),n.e(995),n.e(8473),n.e(7219)]).then(n.bind(n,34288)))),$=o.lazy((()=>Promise.all([n.e(3021),n.e(8586),n.e(2274),n.e(7498),n.e(995),n.e(8473),n.e(1363)]).then(n.bind(n,69532)))),X=o.lazy((()=>Promise.all([n.e(3021),n.e(5219),n.e(1067),n.e(2556)]).then(n.bind(n,2556)))),J=o.lazy((()=>n.e(1366).then(n.bind(n,61366)))),q=o.lazy((()=>Promise.all([n.e(3021),n.e(4363),n.e(8013),n.e(9880),n.e(9982),n.e(3093),n.e(1467),n.e(2274),n.e(123),n.e(9099),n.e(2985),n.e(9018)]).then(n.bind(n,43993)))),Q=o.lazy((()=>Promise.all([n.e(3021),n.e(4363),n.e(8013),n.e(9880),n.e(9982),n.e(1467),n.e(2274),n.e(123),n.e(9099),n.e(7212),n.e(5879)]).then(n.bind(n,67212)))),ee=o.lazy((()=>n.e(3945).then(n.bind(n,93945)))),te=o.lazy((()=>n.e(6297).then(n.bind(n,36297)))),ne=o.lazy((()=>Promise.all([n.e(3021),n.e(5402),n.e(5219),n.e(9672),n.e(5509),n.e(6674),n.e(1813),n.e(1067)]).then(n.bind(n,52416)))),ie=(0,o.memo)((()=>a.ll.headerConfig.disable?null:(0,i.jsx)(v.hM,Object.assign({sx:{bg:"background",zIndex:10,borderRadius:0,position:["initial","relative"]},autoHeight:!0,name:"header",area:"header"},{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(ee,{},void 0)}),void 0)}),void 0))),oe=(0,o.memo)((({w:e})=>(0,i.jsx)(v.hM,Object.assign({area:"market",name:"market"},{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(ne,{isGridWidget:!0,w:e},void 0)}),void 0)}),void 0))),re=(0,o.memo)((({onRemove:e=(()=>null),isElectronPro:t=!1,isPro:n})=>{const[r]=(0,u.z4)();return(0,i.jsx)(v.hM,Object.assign({area:"chart",name:"chart"},{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(A,{symbol:r,useMiniTicker:!1,namespace:l.sy,globalNamespace:l.A4,toolbarConfig:{headerSlot:null,closeHandler:e,isPro:n||t||!1,showFullscreenIcon:!0,showChartModeDropdown:!0,tabKeys:["Origin","TradingView","Depth"]}},void 0)}),void 0)}),void 0)})),ae=(0,o.memo)((({type:e=d.CU.Normal})=>{var t;const{isMobile:n}=(0,h.Fs)();return e===d.CU.FullScreen||e===d.CU.Horizontal?(0,i.jsx)(v.hM,Object.assign({sx:{width:"100%",position:"relative",height:"100%",bg:"popupBg",overflowY:e===d.CU.Horizontal?"scroll":"auto",overflowX:"hidden"},area:"orderform",name:"horizontalOrderForm"},{children:(0,i.jsx)(H,{type:e},void 0)}),void 0):(0,i.jsx)(c.Z,Object.assign({sx:{width:"100%",overflowY:["initial","scroll"],overflowX:["visible","hidden"],position:["fixed","relative"],bottom:["0"],left:["0"],height:[(null===(t=null===a.ll||void 0===a.ll?void 0:a.ll.footerConfig)||void 0===t?void 0:t.disable)?"75px":"88px","100%","100%"],bg:"popupBg",gridArea:"orderform"},name:"orderForm",variant:n?"":"widget.default"},{children:(0,i.jsx)(H,{type:e},void 0)}),void 0)})),se=(0,o.memo)((({onRemove:e})=>{const t=[...B],{isMobile:n}=(0,h.Fs)();n&&(t.splice(2,0,t[t.length-1]),t.pop());const o=(0,r.I0)(),{activeTab:a}=(0,u.TH)();return(0,i.jsx)(v.oZ,{draggable:!0,area:"userinfo",onRemove:e,panes:t,extra:null,controlledKey:a,onChangeKey:e=>o.userTab.updateState({activeTab:e})},void 0)})),le=(0,o.memo)((e=>{var{withMb:t=!1}=e,n=F(e,["withMb"]);return(0,i.jsx)(v.hM,Object.assign({sx:{pb:t?16:0},area:"trades",name:"trades"},n,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(D,{},void 0)}),void 0)}),void 0)})),de=(0,o.memo)((e=>(0,i.jsx)(v.hM,Object.assign({py:"xs",area:"orderbook",name:"orderbook",sx:{div:{overflow:"hidden"}}},e,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(L,{},void 0)}),void 0)}),void 0))),ce=()=>(0,i.jsx)(v.hM,Object.assign({area:"switch",name:"switch",autoHeight:!0},{children:(0,i.jsxs)(o.Suspense,Object.assign({fallback:null},{children:[(0,i.jsx)(Y,Object.assign({type:"futures"},{children:(0,i.jsx)(X,{showRightBorderLine:!1},void 0)}),void 0),(0,i.jsx)(J,{},void 0)]}),void 0)}),void 0),ue=e=>(0,i.jsx)(v.hM,Object.assign({area:"subheader",name:"subheader",autoHeight:!0},e,{children:(0,i.jsxs)(o.Suspense,Object.assign({fallback:null},{children:[(0,i.jsx)($,Object.assign({type:"futures",sx:{bg:"moduleBg",px:"16px",py:"12px"}},{children:(0,i.jsx)(X,{showRightBorderLine:!0},void 0)}),void 0),(0,i.jsx)(J,{},void 0)]}),void 0)}),void 0),ve=(0,o.memo)((()=>(0,i.jsx)(v.hM,Object.assign({area:"subheader",name:"subheader"},{children:(0,i.jsxs)(o.Suspense,Object.assign({fallback:null},{children:[(0,i.jsx)($,Object.assign({type:"futures",sx:{height:"100%",bg:"moduleBg",pl:"16px"}},{children:(0,i.jsx)(X,{showRightBorderLine:!0},void 0)}),void 0),(0,i.jsx)(J,{},void 0)]}),void 0)}),void 0))),he=(0,o.memo)((()=>{const{getI18n:e}=(0,h.ZK)(),[t]=(0,u.z4)();return(0,i.jsx)(v.oZ,{area:"charts",name:"charts",panes:[[e("chartTle",{defaultValue:"Chart"}),(0,i.jsxs)(o.Suspense,Object.assign({fallback:null},{children:[(0,i.jsx)(A,{symbol:t,useMiniTicker:!1,namespace:l.sy,globalNamespace:l.A4,toolbarConfig:{headerSlot:null,isPro:!1,showFullscreenIcon:!1,showChartModeDropdown:!1,tabKeys:["Depth"]}},"chart"),","]}),void 0)],[e("orderBookTle",{defaultValue:"Order Book"}),(0,i.jsx)(s.Z,Object.assign({py:"xs",width:"100%",height:"100%"},{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(L,{},"orderBook")}),void 0)}),"orderbook")],[e("tradesTle",{defaultValue:"Trades"}),(0,i.jsx)(D,{},"trades")]]},void 0)})),pe=(0,o.memo)((e=>(0,i.jsx)(v.hM,Object.assign({area:"marginRatio",name:"marginRatio"},e,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(U,{},void 0)}),void 0)}),void 0))),be=(0,o.memo)((e=>(0,i.jsx)(v.hM,Object.assign({area:"assetsCard",name:"assetsCard"},e,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(G,{},void 0)}),void 0)}),void 0))),fe=(0,o.memo)((({onRemove:e})=>(0,i.jsx)(v.hM,Object.assign({area:"favorite",name:"favorite",sx:{div:{overflow:"hidden"}}},{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(W,{onRemove:e},void 0)}),void 0)}),void 0))),me=(0,o.memo)((()=>{const e=(0,u.Pc)(),{isExistFutureAccount:t}=e,n=(0,u._n)(),[r]=(0,u.e5)(),a=t&&n&&r;return(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:a?(0,i.jsx)(q,{},void 0):null}),void 0)})),ge=(0,o.memo)((({sx:e={}})=>{var t;return(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(null===(t=a.ll.footerConfig)||void 0===t?void 0:t.disable)?null:(0,i.jsx)(te,{sx:e},void 0)}),void 0)})),xe=e=>{const[t]=(0,u.z4)(),{namespace:n}=e,r=F(e,["namespace"]);return(0,i.jsx)(v.hM,Object.assign({area:"depth",name:"depthchart"},r,{children:(0,i.jsx)(o.Suspense,Object.assign({fallback:null},{children:(0,i.jsx)(Q,{namespace:n,symbol:t},void 0)}),void 0)}),void 0)}},9577:(e,t,n)=>{n.d(t,{Jy:()=>p,hM:()=>g,oZ:()=>m});var i=n(52322),o=n(92036),r=n(62143),a=n(25181),s=n(77536),l=n(2784),d=n(72779),c=n.n(d),u=n(22604),v=n(90404),h=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const p=40,b=e=>{var{children:t,title:n,area:a,renderExtra:s,onRemove:l,titleShrink:d=0,autoHeight:v,draggable:b=!1}=e,f=h(e,["children","title","area","renderExtra","onRemove","titleShrink","autoHeight","draggable"]);return(0,i.jsxs)(u.Z,Object.assign({__css:{position:"relative",gridArea:a,zIndex:"auto",width:"100%",bg:"moduleBg",height:"100%",overflow:"hidden"}},f,{children:[n&&(0,i.jsxs)(o.Z,Object.assign({sx:{position:"relative",zIndex:1,height:p,px:"sm",fontSize:1,color:"t.primary",justifyContent:"space-between",alignItems:"center",bg:"moduleBg",flexShrink:0,flexGrow:0,userSelect:l?"auto":"none"},className:c()({draggableHandle:b||l})},{children:[(0,i.jsx)(o.Z,Object.assign({sx:{fontSize:"14px",flexShrink:d,fontWeight:500}},{children:n}),void 0),s&&s()]}),void 0),(0,i.jsx)(r.Z,Object.assign({sx:v?{overflowY:"auto",overflowX:"hidden"}:{position:"absolute",top:0,left:0,right:0,bottom:0,paddingTop:n?p:0,overflowY:"auto",overflowX:"hidden"}},{children:t}),void 0)]}),void 0)},f={closeD:{cursor:"pointer",flexShrink:0,position:"absolute",right:0,top:0,color:"icons.close",zIndex:1,"&:hover":{color:"t.third"}},tabsContainer:{height:"100%",display:"flex",flexDirection:"column"},tabs:{flexShrink:0,flexGrow:0,height:40,px:"16px",width:["100%","100%","calc(100% - 220px)"],fontSize:"16px",lineHeight:"16px",position:"relative",bg:"transparent","div.active":{color:"t.yellow",borderBottom:"none"},"div:hover":{color:"t.yellow"}}},m=e=>{var{panes:t,extra:n,area:o,onRemove:d,draggable:c,controlledKey:p,onChangeKey:b}=e,m=h(e,["panes","extra","area","onRemove","draggable","controlledKey","onChangeKey"]);return(0,i.jsxs)(u.Z,Object.assign({__css:(0,l.useMemo)((()=>({width:"100%",height:"100%",gridArea:o,bg:"moduleBg",zIndex:"auto",position:"relative",overflow:"hidden"})),[o]),variant:"widget.default",name:"position"},m,{children:[d&&(0,i.jsx)(v.Z,{onRemove:d,sx:f.closeD},void 0),n,(0,i.jsx)(a.Z,Object.assign({lazy:!0,variant:"trade-next",sx:f.tabsContainer,tabsSx:f.tabs,tabsClassName:d||c?"draggableHandle":"",tabClassName:"draggableCancel",defaultActiveKey:"0",controlledKey:p,onChange:b},{children:t.map((([e,t],n)=>(0,i.jsx)(s.Z,Object.assign({sx:{flex:1,height:"calc(100% - 40px)"},tab:e,tabKey:String(n)},{children:(0,i.jsx)(r.Z,Object.assign({className:"draggableCancel",width:"100%",height:"100%"},{children:t}),void 0)}),n)))}),void 0)]}),void 0)},g=e=>{var{onRemove:t,renderExtra:n}=e,o=h(e,["onRemove","renderExtra"]);return(0,i.jsx)(b,Object.assign({},o,{onRemove:t,renderExtra:()=>(0,i.jsxs)(i.Fragment,{children:[n&&n(),t&&(0,i.jsx)(v.Z,{onRemove:t},void 0)]},void 0)}),void 0)}},59094:(e,t,n)=>{var i;n.d(t,{C:()=>i}),function(e){e.Normal="NORMAL",e.Horizontal="HORIZONTAL",e.FullScreen="FULL_SCREEN"}(i||(i={}))},80920:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(52322),o=n(2784),r=n(48658),a=n(5163),s=n(91728),l=n(72763),d=n(92362),c=n(20962),u="https://data-collect.toolsfdg.net/api/v1/flat_data?name=app-crash-error",v={hasError:!1,error:null,info:null,eventId:null},h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state=v,t.resetErrorBoundary=function(){var e=t.state,n=e.error,i=e.info,o=e.eventId,r=t.props.onReset;r&&r(n,null==i?void 0:i.componentStack,o),t.setState(v)},t}return(0,a.__extends)(t,e),t.getDerivedStateFromError=function(){return{hasError:!0}},t.prototype.componentDidCatch=function(e,t){var n,i,o,r,a,v,h,p,b,f,m,g,x,j,y,O=this,w=this.props,S=w.track,C=w.beforeCapture,k=null,_=null;"undefined"!=typeof Sentry&&void 0!==(null===(i=null===(n=window.Sentry)||void 0===n?void 0:n.getCurrentHub())||void 0===i?void 0:i.getClient())?(_=null===(v=null===(a=null===(r=null===(o=window.Sentry)||void 0===o?void 0:o.getCurrentHub())||void 0===r?void 0:r.getClient())||void 0===a?void 0:a._dsn)||void 0===v?void 0:v.projectId,Sentry.withScope((function(n){n.setLevel(Sentry.Severity.Fatal),n.setTag("widget",O.props.name),n.setExtra("widget",O.props.name),C&&C(n,e,null==t?void 0:t.componentStack),k=Sentry.captureException(e)}))):void 0!==(null===(h=null==s?void 0:l.Gd())||void 0===h?void 0:h.getClient())&&(_=null===(f=null===(b=null===(p=null==s?void 0:l.Gd())||void 0===p?void 0:p.getClient())||void 0===b?void 0:b._dsn)||void 0===f?void 0:f.projectId,d.$e((function(n){n.setLevel(c.z.Fatal),n.setTag("widget",O.props.name),n.setExtra("widget",O.props.name),C&&C(n,e,null==t?void 0:t.componentStack),k=d.Tb(e)}))),null===(g=(m=this.props).onError)||void 0===g||g.call(m,e,null==t?void 0:t.componentStack,k),S&&S("widget_error",{widget:this.props.name}),y={errorName:e.name,errorMessage:e.message,errorStack:e.stack,componentName:this.props.name,isServer:!1,eventId:k,sentryProjectId:_,url:null===(x=null===window||void 0===window?void 0:window.location)||void 0===x?void 0:x.href,pathname:null===(j=null===window||void 0===window?void 0:window.location)||void 0===j?void 0:j.pathname},navigator.sendBeacon?navigator.sendBeacon(u,JSON.stringify({items:[y]})):fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:[y]})}).catch((function(){})),this.setState({error:e,info:t,hasError:!0,eventId:k})},t.prototype.componentDidMount=function(){var e=this.props.onComponentMounting;e&&e()},t.prototype.componentWillUnmount=function(){var e=this.state,t=e.error,n=e.info,i=e.eventId,o=this.props.onUnmount;o&&o(t,null==n?void 0:n.componentStack,i)},t.prototype.render=function(){var e=this.state,t=e.error,n=e.info,i=e.hasError,s=e.eventId,l=this.props,d=l.fallbackRender,c=l.FallbackComponent,u=l.fallback;if(i){var v={componentStack:null==n?void 0:n.componentStack,error:t,resetErrorBoundary:this.resetErrorBoundary,eventId:s};return o.isValidElement(u)?u:"function"==typeof d?d(v):"function"==typeof c?o.createElement(c,(0,a.__assign)({},v)):o.createElement(r.Z,{fontSize:3,color:"t.primary",p:3},(this.props.name||"Something")+" went wrong.")}return this.props.children},t}(o.Component),p=n(23716);const b=function(e){var{children:t,name:n,onError:a,onComponentMounting:s,fallbackRender:l,FallbackComponent:d,fallback:c}=e,u=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}(e,["children","name","onError","onComponentMounting","fallbackRender","FallbackComponent","fallback"]);const v=(0,o.useCallback)(((e,t,i)=>{null==a||a(e,t,i),p.error(e,t),p.log(`${n||"Something"} went wrong.`)}),[n,a]),b=(0,o.useCallback)((()=>{null==s||s()}),[s]);let f;return o.isValidElement(c)||"function"==typeof l||"function"==typeof d||(f=(0,i.jsx)(r.Z,Object.assign({fontSize:3,color:"t.primary",p:3},{children:`Sorry, ${n||"Something"} went wrong. Please refresh the page.`}),void 0)),(0,i.jsx)(h,Object.assign({name:n,onError:v,onComponentMounting:b,fallback:f||c,fallbackRender:l,FallbackComponent:d},u,{children:t}),void 0)}},22604:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(52322),o=n(2784),r=n(62143),a=n(80920);const s=o.memo((e=>(0,i.jsx)(a.Z,Object.assign({name:e.name},{children:(0,i.jsx)(r.Z,Object.assign({__css:{overflow:"hidden"},variant:"widget.default"},e,{children:e.children}),void 0)}),void 0)))},90404:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(52322),o=n(71927);const r=e=>{var{onRemove:t}=e,n=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}(e,["onRemove"]);return(0,i.jsx)(o.Z,Object.assign({onClick:t,className:"trading-page-close-button",size:16,sx:{cursor:"pointer",position:"absolute",color:"icons.close",top:0,right:0,zIndex:1,"&:hover":{color:"t.third"}}},n),void 0)}}}]);