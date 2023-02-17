"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[8426],{38254:(e,t,n)=>{n.d(t,{Z:()=>R});var r,o=n(56666),i=n(2867),a=n(19034),s=n.n(a),l=n(2784),c=n(92036),d=n(55742),u=n(30210),m=n(48658),f=n(62143),p=n(45362),g=n(10337),h=n(50143),v=n(14485),b=n(97918),x=n(97060),y=n(52322);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var _="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},j=s()().add(1,"day"),C=s()().subtract(2,"year"),T=function(e){return(0,x.ZK)("trd-tableSearch",e)};_(T,"useBaseLanguage{}",(function(){return[x.ZK]}));var S={alignItems:"center",justifyContent:"center",color:"t.third",cursor:"pointer",fontSize:0,minWidth:"48px",p:"minor",borderRadius:"2px",height:"24px",lineHeight:"24px","&:hover":{color:"t.primary",bg:"bg3"}},O={bg:"line",color:"t.yellow"},M=function(e){var t=e.withReset,n=void 0!==t&&t,r=e.type,o=e.onSearch,a=e.loadMore,s=void 0===a?function(){}:a,w=e.onReset,_=void 0===w?function(){}:w,M=e.children,k=void 0===M?null:M,R=(0,b.hf)(),Z=T().getI18n,I=(0,x.yk)().getI18n,D=(0,x.Fs)(),L=D.isMobile,P=D.isIPad,N=(0,l.useState)((0,v.OQ)(r)),A=(0,i.Z)(N,2),H=A[0],B=A[1],z={"1d":Z("day",{defaultValue:"1 Day"}),"1w":Z("week",{defaultValue:"1 Week"}),"1m":Z("month",{defaultValue:"1 Month"}),"3m":Z("quarter",{defaultValue:"3 Months"})},F=Object.keys(z).map((function(e){var t=e===r,n={onClick:t?function(){return!1}:function(){var t=(0,v.OQ)(e);o(t),B(t)},sx:t?O:{},children:z[e]};return(0,y.jsx)(c.Z,E({__css:S},n),e)})),U=z[r];return(0,y.jsxs)(c.Z,{sx:{alignItems:"center"},children:[(0,y.jsx)(d.ZP,{enablePortal:!0,trigger:"click",overlay:(0,y.jsx)(u.Z,{sx:{bg:"popupBg",p:0,borderRadius:0},"data-testid":"QuickDateFilter",children:F}),placement:"bottom-start",children:!L&&P&&(0,y.jsxs)(c.Z,{__css:E(E({},S),{},{mr:"minor",color:"t.primary",bg:"bg3"}),children:[(0,y.jsx)(m.Z,{children:U||z["1d"]}),(0,y.jsx)(g.Z,{sx:{transform:"scale(1.8)"},size:12})]})}),!L&&!P&&(0,y.jsx)(c.Z,{sx:{alignItems:"center",display:"flex","> div":{mr:"minor"}},children:F}),(0,y.jsxs)(c.Z,{sx:{alignItems:"center",ml:"sm",".ant-input":{fontSize:0,pb:"minor",color:"t.third",lineHeight:"14px",borderBottom:"1px solid",borderBottomColor:"lines.light"}},children:[(0,y.jsx)(f.Z,{fontSize:"12px",color:"t.third",mr:"8px",children:I("range-date",{defaultValue:"Date"})}),(0,y.jsx)(h.Z,{locale:null==R?void 0:R.toLowerCase(),variant:"phantom",sz:"tiny",containerSx:{color:"t.primary",minWidth:"auto"},separator:I("range-to",{defaultValue:"to"}),"data-testid":"DateFilter",disabledDate:function(e){return e>j||e<C},onChange:function(e,t){var n=(0,i.Z)(t,2),r=n[0],o=n[1],a=new Date(r).setHours(0,0,0,0),s=new Date(o).setHours(24,0,0,0);B({startTime:a,endTime:s,type:"custom"})}}),(0,y.jsx)(c.Z,{children:k}),(0,y.jsx)(p.Z,{variant:"default",colorStyle:"secondary",sz:"s",ml:["sm","8px","sm"],bg:"line","data-testid":"Search",onClick:function(){H&&(o(E({},H)),s())},children:Z("searchBtn",{defaultValue:"Search"})})]}),n&&(0,y.jsx)(p.Z,{variant:"default",colorStyle:"secondary",sz:"s",ml:["sm","8px","sm"],bg:"line",onClick:function(){B(null),_()},children:Z("resetBtn",{defaultValue:"Reset"})})]})};_(M,"useCode{locale}\nuseLanguage{{ getI18n }}\nuseFuturesLanguage{{ getI18n: getFutI18n }}\nuseResponsive{{ isMobile, isIPad }}\nuseState{[dateTime, updateDate](getTimeRange(type))}",(function(){return[b.hf,T,x.yk,x.Fs]}));var k=l.memo(M);const R=k;var Z,I;(Z="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(Z.register(j,"endMoment","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/UserTab/common/TimeSearch.js"),Z.register(C,"startMoment","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/UserTab/common/TimeSearch.js"),Z.register(T,"useLanguage","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/UserTab/common/TimeSearch.js"),Z.register(S,"radioCss","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/UserTab/common/TimeSearch.js"),Z.register(O,"activeRadioStyle","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/UserTab/common/TimeSearch.js"),Z.register(M,"TimeSearch","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/UserTab/common/TimeSearch.js"),Z.register(k,"default","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/UserTab/common/TimeSearch.js")),(I="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&I(e)},10337:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(5163),o=n(2784),i=n(98569);const a=function(e){return o.createElement(i.Z,(0,r.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),o.createElement("path",{d:"M14.5 10.29a1 1 0 011 1v.353a1 1 0 01-.273.686l-2.5 2.65a1 1 0 01-1.454 0l-2.5-2.65a1 1 0 01-.273-.686v-.353a1 1 0 011-1h5z"}))}},30210:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(5163),o=n(2784),i=n(62143),a=(0,o.forwardRef)((function(e,t){return o.createElement(i.Z,(0,r.__assign)({ref:t,tx:"card",variant:"default"},e))}));a.displayName="Card";const s=a},27986:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(5163),o=n(2784),i=n(98569),a=n(62143),s=function(e){return o.createElement(i.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{d:"M3 10.5v3h18v-3H3z",fill:"currentColor"}))},l=function(e){return o.createElement(i.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",fill:"currentColor"}))},c=function(e){return e["data-indeterminate"]?o.createElement(s,(0,r.__assign)({},e)):o.createElement(l,(0,r.__assign)({},e))},d=(0,o.forwardRef)((function(e,t){var n=e.className,i=e.sx,s=e.defaultChecked,l=void 0!==s&&s,d=e.checked,u=e.indeterminate,m=void 0!==u&&u,f=e.size,p=void 0===f?16:f,g=e.onChange,h=e.children,v=(0,r.__rest)(e,["className","sx","defaultChecked","checked","indeterminate","size","onChange","children"]),b=o.useRef(null!=d).current,x=o.useState(l),y=x[0],w=x[1];return b&&d!==y&&w(void 0!==d&&d),o.createElement(o.Fragment,null,o.createElement(a.Z,{className:n,sx:i,__css:{mr:"xs",flexShrink:0,width:p,height:p,lineHeight:"number"==typeof p?p+"px":p,"> svg":{boxSizing:"border-box",cursor:"pointer",border:"1px solid",borderColor:"t.disabled",borderRadius:"small",maxWidth:"100%",maxHeight:"100%",bg:"transparent",fill:"transparent"},"> svg path":{fill:"inherit"},":hover":{"input:not(:disabled) ~ svg":{borderColor:"primary"}},"input:checked ~ svg":{border:"none",bg:"primary",fill:m?"checkbox.indeterminateFill":"bg1"},"input:disabled ~ svg":{cursor:"not-allowed",bg:"line",fill:"line",border:"none"},"input:checked:disabled ~ svg":{fill:"t.disabled"}}},o.createElement(a.Z,(0,r.__assign)({ref:t,as:"input",type:"checkbox","data-bn-type":"checkbox",hidden:!0},v,{checked:y,"data-indeterminate":y&&m,onChange:function(e){var t=!y;b||w(t),e.target.checked=t,e.currentTarget.checked=t,g&&g(e)},sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),o.createElement(c,{"aria-hidden":"true","data-indeterminate":m})),h)}));d.displayName="Checkbox";const u=d},67887:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(5163),o=n(2784),i=n(56980),a=n(87938),s=n(62143),l=n(50464),c={position:"fixed",top:0,bottom:0,right:0,left:0,zIndex:"drawer"},d={overflow:"auto",zIndex:"999999"},u={top:{parent:{flexDirection:"column"},child:{width:"100%",transition:"all 0.5s ease"}},bottom:{parent:{flexDirection:"column-reverse"},child:{width:"100%",transition:"all 0.5s ease"}},left:{parent:{},child:{height:"100%",transition:"all 0.5s ease"}},right:{parent:{flexDirection:"row-reverse"},child:{height:"100%",transition:"all 0.5s ease"}}},m=(0,o.forwardRef)((function(e,t){var n=e.visible,m=void 0!==n&&n,f=e.direction,p=void 0===f?"right":f,g=e.bg,h=void 0===g?"background":g,v=e.maskBg,b=e.children,x=e.childProps,y=void 0===x?{}:x,w=e.outerClick,E=(0,r.__rest)(e,["visible","direction","bg","maskBg","children","childProps","outerClick"]),_=(0,o.useState)(m),j=_[0],C=_[1],T=(0,o.useRef)(),S=(0,o.useState)(),O=S[0],M=S[1],k=(0,o.useState)(),R=k[0],Z=k[1],I=(0,o.useState)("auto"),D=I[0],L=I[1],P=v?{bg:v,position:"absolute",top:0,bottom:0,right:0,left:0}:{position:"absolute",top:0,bottom:0,right:0,left:0},N=(0,i.Z)(),A=N[0],H=N[1],B=H.width,z=H.height,F=(0,l.Z)(t,A),U=o.cloneElement(b,{ref:F});return(0,o.useEffect)((function(){"top"!==p&&"bottom"!==p||Z(m?z:0)}),[z,p,m]),(0,o.useEffect)((function(){"left"!==p&&"right"!==p||M(m?B:0)}),[B,p,m]),(0,o.useEffect)((function(){return m?(C(!0),L(document.body.style.overflow||"auto"),document.body.style.setProperty("overflow","hidden")):T.current=setTimeout((function(){return C(!1)}),500),function(){try{clearTimeout(T.current)}catch(e){}document.body.style.setProperty("overflow",D)}}),[m]),o.createElement(a.ZP,null,o.createElement(s.Z,(0,r.__assign)({__css:(0,r.__assign)((0,r.__assign)({},c),u[p].parent),display:m||j?"flex":"none"},E),o.createElement(s.Z,(0,r.__assign)({__css:(0,r.__assign)((0,r.__assign)({},d),u[p].child),width:O,height:R,bg:h},y),U),o.createElement(s.Z,(0,r.__assign)({},P,{flex:1,onClick:function(e){return w&&w(e)}}))))}));m.displayName="Drawer";const f=m},55742:(e,t,n)=>{n.d(t,{ZP:()=>w});var r=n(5163),o=n(2784),i=n(53021),a=n(18149),s=n.n(a);function l(e){var t=(0,o.useState)(e),n=t[0],r=t[1];return(0,o.useEffect)((function(){var t,o;r((t=n)===(o=e)||s()(t,o)?t:o)}),[e]),n}var c=n(75548),d=n(62143),u=n(87938),m=n(21232),f=n(50464),p={right:"left",left:"right","top-start":"top-end","right-start":"left-start","left-start":"right-start","bottom-start":"bottom-end","top-end":"top-start","right-end":"left-end","left-end":"right-end","bottom-end":"bottom-start"},g=function(){},h=function(){return o.createElement("div",{"data-ssr":!0,suppressHydrationWarning:!0})},v=(0,o.forwardRef)((function(e,t){return o.createElement(d.Z,(0,r.__assign)({ref:t,__css:{position:"relative",display:"inline-block",outline:"none"}},e))})),b=(0,o.forwardRef)((function(e,t){var n=e.visible,i=(0,r.__rest)(e,["visible"]),a=(0,o.useContext)(m.Z).context,s=o.useState(!1),l=s[0],c=s[1];(0,o.useEffect)((function(){var e=n!==l?setTimeout((function(){return c(Boolean(n))})):void 0;return function(){e&&clearTimeout(e)}}),[n,l]);var u=(0,o.useMemo)((function(){return(0,r.__assign)((0,r.__assign)({},n?l?{}:{visibility:"hidden"}:{display:"none",pointerEvents:"none",visibility:"hidden"}),{zIndex:"modal"===a?1201:"dropdown"})}),[n,l,a]);return o.createElement(d.Z,(0,r.__assign)({ref:t,tx:"dropdown",variant:"box",__css:u},i))})),x=(0,o.forwardRef)((function(e,t){var n=e.children,a=e.dir,s=e.disabled,d=e.enablePortal,u=void 0!==d&&d,m=e.overlay,b=void 0===m?o.createElement(o.Fragment,null):m,x=e.overlayProps,w=void 0===x?{}:x,E=e.trigger,_=e.isFixed,j=void 0!==_&&_,C=e.forceTop,T=void 0!==C&&C,S=e.onVisibleChange,O=void 0===S?g:S,M=e.open,k=e.placement,R=void 0===k?"bottom-start":k,Z=e.onClick,I=e.needSeo,D=void 0!==I&&I,L=(0,r.__rest)(e,["children","dir","disabled","enablePortal","overlay","overlayProps","trigger","isFixed","forceTop","onVisibleChange","open","placement","onClick","needSeo"]),P=T?"top":R;P="rtl"===a&&p[P]||P;var N=E||"click",A=(0,o.useState)(!s&&!0===M),H=A[0],B=A[1],z=(0,o.useRef)(0),F=(0,o.useState)(),U=F[0],V=F[1],Y=o.useRef(null!=M).current,K=(0,o.useState)(D),G=K[0],W=K[1];H&&!u&&G&&W(!1);var $=(0,o.useMemo)((function(){return b}),[b]),q=(0,f.Z)(V,t),Q=(0,o.useState)(null),X=Q[0],J=Q[1],ee=o.useMemo((function(){return j||!H?[{name:"eventListeners",options:{scroll:!1,resize:!1}}]:void 0}),[j,H]),te=(0,i.D)(U,X,{placement:P,strategy:"fixed",modifiers:ee}),ne=te.styles,re=te.attributes,oe=te.forceUpdate,ie=(0,c.D)((function(e){(e=Boolean(e))!==H&&(e&&oe&&oe(),B(!0===e),O(!0===e))}));Y&&(ie(M),N=void 0),s&&(ie(!1),N=void 0);var ae=(0,c.D)((function(e){e.target instanceof Node&&((null==U?void 0:U.contains(e.target))||(null==X?void 0:X.contains(e.target)))||ie(!1)}));(0,o.useEffect)((function(){return!Y&&H?window.addEventListener("click",ae):window.removeEventListener("click",ae),function(){window.removeEventListener("click",ae)}}),[Y,ae,H]);var se=(0,c.D)(N?function(e){window.performance.now()-z.current>500&&ie(!H),Z&&Z(e)}:Z||function(){}),le=(0,c.D)("hover"===N?function(t){!H&&window.performance.now()-z.current>500&&(ie(!0),z.current=window.performance.now()),e.onMouseMove&&e.onMouseMove(t)}:e.onMouseMove||function(){}),ce=(0,c.D)("hover"===N?function(t){ie(!1),e.onMouseLeave&&e.onMouseLeave(t)}:e.onMouseLeave||function(){}),de=l(L),ue=l(w),me=l(ne.popper),fe=l(re.popper),pe=(0,o.useMemo)((function(){return G?"undefined"!=typeof window&&window.document&&window.document.createElement?o.createElement(h,null):o.createElement("div",{style:{display:"none"}},$):null}),[G,$]);return(0,o.useMemo)((function(){return o.createElement(v,(0,r.__assign)({className:H?"checked":void 0,ref:q,onClick:se,onMouseMove:le,onMouseLeave:ce},de),pe,n,o.createElement(y,{enablePortal:u,popupVisible:H,attributesPopper:fe,overlay:b,overlayProps:ue,stylesPopper:me,setPopperElement:J}))}),[H,q,se,le,ce,de,pe,n,u,fe,b,ue,me])})),y=(0,o.memo)((function(e){var t=e.enablePortal,n=e.popupVisible,i=e.attributesPopper,a=e.overlay,s=e.overlayProps,l=e.stylesPopper,c=e.setPopperElement;return t?n?o.createElement(u.ZP,null,o.createElement(b,(0,r.__assign)({},s,{ref:c,style:l,visible:n},i),a)):null:o.createElement(b,(0,r.__assign)({},s,{ref:c,style:l,visible:n},i),a)}));x.displayName="Dropdown";const w=(0,o.memo)(x)},33322:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(5163),o=n(2784),i=n(92036),a=(0,o.forwardRef)((function(e,t){var n=i.Z;return o.createElement(n,(0,r.__assign)({ref:t,as:"label",tx:"forms",variant:"label"},e,{__css:{alignItems:"center"}}))}));a.displayName="Label";const s=a},50464:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784);function o(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function i(e,t){return r.useMemo((function(){return null==e&&null==t?null:function(n){o(e,n),o(t,n)}}),[e,t])}},37407:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(5163),o=n(2784),i=n(98569);const a=function(e){return o.createElement(i.Z,(0,r.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{d:"M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",fill:"currentColor"}))}},977:(e,t,n)=>{function r(e,t,n){void 0===t&&(t="yyyy-MM-dd hh:mm"),void 0===n&&(n=!1);var r=n?{"M+":e.getUTCMonth()+1,"d+":e.getUTCDate(),"h+":e.getUTCHours(),"m+":e.getUTCMinutes(),"s+":e.getUTCSeconds(),"q+":Math.floor((e.getUTCMonth()+3)/3),S:e.getUTCMilliseconds()}:{"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()},o=t;return/(y+)/.test(t)&&(o=t.replace(RegExp.$1,(""+e.getFullYear()).substr(4-RegExp.$1.length))),Object.keys(r).forEach((function(e){new RegExp("("+e+")").test(o)&&(o=o.replace(RegExp.$1,1===RegExp.$1.length?r[e]:("00"+r[e]).substr((""+r[e]).length)))})),o}n.d(t,{v:()=>r})},34656:(e,t,n)=>{n.d(t,{Bs:()=>i,Wm:()=>c,li:()=>a,n:()=>s,t9:()=>d});var r=n(23131),o=n(17584);const i="1d",a=1,s=200,l=(0,r.nM)(),c=l?["ALL","TRANSFER","COIN_SWAP","REALIZED_PNL","FUNDING_FEE","COMMISSION","INSURANCE_CLEAR","REFERRAL_KICKBACK","COMMISSION_REBATE","CROSS_COLLATERAL_TRANSFER","OPTIONS_PREMIUM_FEE","OPTIONS_SETTLE_PROFIT","BATTLE_COMMISSION","BATTLE_REALIZED_PNL","API_REBATE"]:["ALL","TRANSFER","REALIZED_PNL","FUNDING_FEE","COMMISSION","AUTO_EXCHANGE","INSURANCE_CLEAR","REFERRAL_KICKBACK","COMMISSION_REBATE","CROSS_COLLATERAL_TRANSFER","OPTIONS_PREMIUM_FEE","OPTIONS_SETTLE_PROFIT","POSITION_LIMIT_INCREASE_FEE","API_REBATE"],d=l?o.lE:(e,t)=>e},10015:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(52322),o=n(28879),i=n.n(o),a=n(2784),s=n(72779),l=n.n(s),c=n(97918),d=n(67887),u=n(62143),m=n(92036),f=n(55742),p=n(48658),g=n(21209),h=n(45362),v=n(50143),b=n(5163),x=n(98569);const y=function(e){return a.createElement(x.Z,(0,b.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 4H5v3.5l5 5V21l4-2.319V12.5l5-5V4z",fill:"currentColor"}))};var w=n(77711),E=n(37407),_=n(97060),j=n(34656);const C={px:"16px",width:"100vw",height:"100vh",borderRadius:"4px 4px 0 0",".header":{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",height:"52px",mb:"20px",".header-title":{fontSize:"20px",lineHeight:"28px",color:"t.primary"}},".column":{mb:"32px"},".column-title":{color:"t.secondary",fontSize:"14px",lineHeight:"20px",mb:"4px"},".range-picker > div":{"> div > div":{p:"14px 12px",fontSize:"14px",bg:"inputBg",color:"t.primary"},"> p":{color:"t.primary"}},".footer":{position:"absolute",bottom:"50px",height:"40px",display:"flex",justifyContent:"space-between",left:"16px",right:"16px",button:{minWidth:"168px"}}},T={bg:"popupBg",px:"16px",fontSize:"16px",lineHeight:"24px",".header":{display:"flex",justifyContent:"space-between",alignItems:"center",height:"52px",color:"t.primary"},".items":{display:"flex",justifyContent:"space-between",alignItems:"center",height:"48px",color:"t.primary","&.active":{color:"t.yellow"}}},S={mb:"32px",".drop-down":{width:"100%",height:"48px",bg:"inputBg",color:"t.primary",alignItems:"center",justifyContent:"space-between",flexDirection:"row",px:"12px",border:"1px solid",borderColor:"line"}},O=({title:e,data:t,visible:n,activeKey:o,setVisible:i,onChange:a})=>(0,r.jsx)(d.Z,Object.assign({childProps:{maxHeight:"50vh"},visible:n,direction:"bottom",outerClick:()=>i(!1),maskBg:"rgba(0,0,0,.3)"},{children:(0,r.jsxs)(u.Z,Object.assign({sx:T},{children:[(0,r.jsxs)(m.Z,Object.assign({justifyContent:"space-between",alignItems:"center"},{children:[(0,r.jsx)("div",Object.assign({className:"header"},{children:e}),void 0),(0,r.jsx)(w.Z,{size:20,onClick:()=>i(!1)},void 0)]}),void 0),Object.keys(t).map((e=>(0,r.jsx)("div",Object.assign({className:l()({items:!0,active:e===o}),onClick:()=>a(e)},{children:t[e]}),e)))]}),void 0)}),void 0),M=({title:e,data:t,defaultKey:n,onChange:o})=>{const[i,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(n),d=(0,a.useCallback)((e=>{c(e),o(e)}),[c,onchange]);return(0,r.jsx)(u.Z,Object.assign({sx:S},{children:(0,r.jsx)(f.ZP,Object.assign({trigger:"click",overlay:(0,r.jsx)(O,{visible:i,setVisible:s,title:e,data:t,activeKey:l,onChange:d},void 0),enablePortal:!0,onVisibleChange:s,sx:{width:"100%"}},{children:(0,r.jsxs)(m.Z,Object.assign({className:"drop-down"},{children:[(0,r.jsx)(p.Z,Object.assign({variant:"subtitle2"},{children:t[l]}),void 0),(0,r.jsx)(E.Z,{color:"t.third",size:16,sx:{transformOrigin:"center center",transform:`rotate(${i?"180deg":"0deg"})`,transition:"transform .3s"}},void 0)]}),void 0)}),void 0)}),void 0)},k=[i()().subtract(2,"year").format("YYYY-MM-DD"),i()().format("YYYY-MM-DD")],R=({onSearch:e,isTransaction:t,onTransactionFilterChange:n})=>{const[o,s]=(0,a.useState)(!1),l=(0,a.useCallback)((()=>s((e=>!e))),[s]),d=(0,c.hf)(),{getI18n:f}=(0,_.ZK)(),{getI18n:p}=(0,_.yk)(),b=(0,a.useRef)({startTime:new Date(i()().subtract(1,t?"day":"week").format("YYYY-MM-DD")).setHours(0,0,0,0),endTime:Date.now()}),x=(0,a.useCallback)((()=>{const{startTime:t,endTime:r,filter:o}=b.current;null==n||n(o),e({type:"custom",startTime:t,endTime:r}),s(!1)}),[e,s]),E=(0,a.useMemo)((()=>[e=>{b.current.startTime=new Date(e).setHours(0,0,0,0)},e=>{b.current.endTime=new Date(e).setHours(24,0,0,0)}]),[]);return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)(y,{size:20,onClick:l,sx:{position:"absolute",right:"0",top:"15px"}},void 0),o&&(0,r.jsxs)(g.Z,Object.assign({visible:!0,sx:C,onMaskClick:()=>s(!1)},{children:[(0,r.jsxs)(m.Z,Object.assign({className:"header"},{children:[(0,r.jsx)("div",Object.assign({className:"header-title"},{children:p("Filter")}),void 0),(0,r.jsx)(w.Z,{size:20,onClick:()=>s(!1)},void 0)]}),void 0),(0,r.jsxs)("div",Object.assign({className:"column"},{children:[(0,r.jsx)("div",Object.assign({className:"column-title"},{children:p("range-date")}),void 0),(0,r.jsx)(u.Z,Object.assign({className:"range-picker"},{children:(0,r.jsx)(v.Z,{isResponsive:!0,format:"YYYY-MM-DD",locale:null==d?void 0:d.toLowerCase(),allowClear:!1,separator:"-",mOnChange:E,mValue:[i()(b.current.startTime).format("YYYY-MM-DD"),i()(b.current.endTime).format("YYYY-MM-DD")],mStartDateRange:k,mEndDateRange:k},void 0)}),void 0)]}),void 0),t&&(0,r.jsxs)("div",Object.assign({className:"column"},{children:[(0,r.jsx)("div",Object.assign({className:"column-title"},{children:f("trd-openOrder-type")}),void 0),(0,r.jsx)(M,{title:f("trd-openOrder-type"),data:j.Wm.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:"ALL"===t?f("trd-tradeTransaction-ALL",{defaultValue:"All"}):f(`trd-tradeTransaction-bt-${t}`,{defaultValue:t})})),{}),defaultKey:b.current.filter||"ALL",onChange:e=>b.current.filter=e},void 0)]}),void 0),(0,r.jsxs)(m.Z,Object.assign({className:"footer"},{children:[(0,r.jsx)(h.Z,Object.assign({variant:"default",colorStyle:"secondary",onClick:()=>s(!1)},{children:p("cancelBtnText")}),void 0),(0,r.jsx)(h.Z,Object.assign({variant:"primary",onClick:x},{children:f("trd-tableSearch-searchBtn")}),void 0)]}),void 0)]}),void 0)]},void 0)}},44951:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(52322),o=n(2784),i=n(92036),a=n(48658),s=n(68762),l=n.n(s),c=n(94645),d=n(39790);var u=n(77345),m=n(5163),f=n(98569);const p=function(e){return o.createElement(f.Z,(0,m.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),o.createElement("path",{d:"M8 4a1 1 0 00-1-1H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1v-3a1 1 0 10-2 0v2H5V5h2a1 1 0 001-1z"}),o.createElement("path",{d:"M13 3a1 1 0 100 2h4.586l-9.879 9.879a1 1 0 101.414 1.414l9.88-9.879V11a1 1 0 002 0V4a1 1 0 00-1-1H13z"}))};var g=n(28879),h=n.n(g),v=n(89945),b=n.n(v),x=n(57449),y=n.n(x),w=n(70909),E=n.n(w),_=n(92547),j=n.n(_),C=n(90742),T=n.n(C),S=n(42090),O=n.n(S),M=n(64989),k=n.n(M),R=n(10264),Z=n.n(R);h().extend(b()),h().extend(y()),h().extend(k()),h().extend(Z()),h().extend(j()),h().extend(E()),h().extend(T()),h().extend(O());const I=h();var D=n(97060);const L={color:"t.third",fontSize:[1,0],alignItems:"center","& .text":{userSelect:"none"}},P=o.memo((({title:e,dateTime:t,downloadUrl:n})=>{const{getI18n:s}=(0,D.Vw)(),[m,f]=(0,o.useState)(!1);(0,o.useEffect)((()=>{f((()=>"number"==typeof(null==t?void 0:t.startTime)&&"number"==typeof(null==t?void 0:t.endTime)))}),[t,n]);const g=(0,o.useCallback)((()=>{if(!m)return;const{formatStartDate:r,formatEndDate:o}=(({startDate:e,endDate:t,isUtc:n=!1})=>{const r=I(e).startOf("day"),o=I(t).endOf("day");return{formatStartDate:(n?I.utc(r):r).valueOf(),formatEndDate:(n?I.utc(o):o).valueOf()}})({startDate:null==t?void 0:t.startTime,endDate:null==t?void 0:t.endTime}),i=(0,u.DT)({startTime:r,endTime:o});!function(e,t){new Promise((function(n,r){var o=new XMLHttpRequest;o.open("GET",e,!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.responseType="blob",o.setRequestHeader("csrftoken",l()(function(){if(!d.C)return["",""];var e=window.document.cookie.match(/cr00=([a-z0-9-]+)/i);return e&&e.length?e:["",""]}()[1]||"")),o.setRequestHeader("clienttype","web"),o.setRequestHeader("lang",d.C&&(document.location.pathname.split("/").slice(1)[0]||c.Q.read("lang"))||"en"),o.onload=function(){if(200===o.status){var e=o.response;if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(e,t);else{var i=window.document.createElement("a"),a=o.getResponseHeader("Content-Type");i.href=window.URL.createObjectURL(new Blob([e],{type:a})),i.download=t||"filename.xlsx",document.body.appendChild(i),i.click(),document.body.removeChild(i)}return n()}r(Error("xhr.status is not 200, got: "+o.status))},o.onerror=function(){r(Error("Failed with xhr.status: "+o.status+". xhr.statusText: "+o.statusText))},o.send()}))}(`${n}?${i}`,`${e}.xlsx`)}),[n,t,m,e]);return(0,r.jsxs)(i.Z,Object.assign({sx:Object.assign(Object.assign({},L),{cursor:m?"pointer":"auto"}),onClick:g},{children:[(0,r.jsx)(p,{size:16,mr:"4px"},void 0),(0,r.jsx)(a.Z,Object.assign({className:"text"},{children:s("exchange-common-Export",{defaultValue:"Export"})}),void 0)]}),void 0)}))}}]);