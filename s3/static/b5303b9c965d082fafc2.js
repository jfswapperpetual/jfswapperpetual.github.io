(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[6033],{96033:(e,t,n)=>{"use strict";n.r(t),n.d(t,{AssetsContent:()=>se,Label:()=>ee,default:()=>le});var o=n(2867),r=n(56666),s=n(59740),i=n(2784),a=n(39727),l=n(72779),c=n.n(l),u=n(45362),d=n(62143),p=n(55742),f=n(92036),m=n(48658),g=n(33470),x=n(5163),h=n(98569);const v=function(e){return i.createElement(h.Z,(0,x.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 9V6h13.5V2.5l5 5-5 5V9H3zm18 9v-3H7v-3.5l-5 5 5 5V18h14z",fill:"currentColor"}))};var b=n(37407),w=n(19076),y=n(97060),j=n(2896),E=n(23131),_=n(38896),S=n(56851),O=n(52322),k=n(87612),C=n(86828),M=n(81993),Z=n(42902),P=n(59687),A=n(40887),I=n(96406);const L={justifyContent:"space-between",borderTop:"1px solid",borderTopColor:"newLine",mt:"8px",".asset-label":{display:"flex",alignItems:"center",color:"t.primary"}},T={cursor:"pointer"},R={maxWidth:"100%",m:0,".asset-block":{mb:"24px",".asset-title":{fontSize:"14px",lineHeight:"20px",mb:"8px"},".asset-desc":{fontSize:"12px",lineHeight:"16px",whiteSpace:"pre-line"}}},N={py:"4px",mt:"6px",bg:"modalBg",boxShadow:"elevation2",borderRadius:"4px",cursor:"pointer",".asset-option":{padding:"6px 16px",color:"t.primary","&:hover":{bg:"line"},"&.active":{color:"t.yellow"},fontSize:"14px",lineHeight:"20px"}},z=i.memo((()=>{const{getI18n:e,t}=(0,y.yk)(),n=(0,y.tZ)();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(d.Z,Object.assign({className:"asset-block"},{children:[(0,O.jsx)(d.Z,Object.assign({className:"asset-title"},{children:e("singleAsset",{defaultValue:"Single-Asset Mode"})}),void 0),(0,O.jsx)(m.Z,Object.assign({className:"asset-desc"},{children:e("singleAssetDes",{defaultValue:"Supports USDⓈ-M Futures trading by only using the single margin asset of the symbol. \n PNL of the same margin asset positions can be offset. \n Supports Cross Margin Mode and Isolated Margin Mode."})}),void 0)]}),void 0),(0,O.jsxs)(d.Z,Object.assign({className:"asset-block"},{children:[(0,O.jsx)(d.Z,Object.assign({className:"asset-title"},{children:e("multiAssets",{defaultValue:"Multi-Assets Mode"})}),void 0),(0,O.jsx)(m.Z,Object.assign({className:"asset-desc"},{children:e("multiAssetsDes",{defaultValue:"USDⓈ-M Futures trading across multiple margin assets. \n PNL can be offset among the different margin asset positions. \n Only supports Cross Margin Mode."})}),void 0)]}),void 0),(0,O.jsx)(d.Z,{children:(0,O.jsx)(k.c,{t,ns:"futures-ui",i18nKey:"futures-trade-assetModeDes",defaults:"<text>If there are open positions or open orders in USDⓈ-M Futures, Multi-Assets Mode cannot be activated. Multi-Assets Mode only applies to USDⓈ-M Futures.</text> <text>Before activating Multi-Assets Mode, please read the <jump>guide</jump> in detail to better manage USDⓈ-M Futures account risk accordingly when using Multi-Assets Mode.</text>",components:{text:(0,O.jsx)(m.Z,{fontSize:"12px",lineHeight:"16px"},void 0),jump:(0,O.jsx)(C.Z,{href:`${E.Td}/${(0,Z.sU)(n)}/articles/4408166582041`,sx:{color:"t.yellow",mt:"0 !important",display:"inline"},target:"_blank"},void 0)},values:{guide:e("guide",{defaultValue:"guide"})}},void 0)},void 0)]},void 0)})),D=(0,i.forwardRef)((({},e)=>{const t=(0,a.v9)((e=>e.position.positionMap));return(0,i.useImperativeHandle)(e,(()=>({checkHasIsolated:()=>Object.values(t).some((e=>e.isolated))}))),null})),B=({children:e})=>{const{getI18n:t}=(0,y.yk)(),{data:n,setData:o,hasInitialized:r}=(0,y.SR)("FUTURES_TRADE_ASSET_SWITCH_TIP",!1);return r?(0,O.jsx)(S.m,Object.assign({bg:"primary",placement:"top",enablePortal:!0,hideUnderLine:!0,tipSx:{margin:"-12px"},tip:(0,O.jsxs)(f.Z,Object.assign({sx:{flexDirection:"column",p:"16px",width:"213px"}},{children:[(0,O.jsx)(m.Z,Object.assign({sx:{color:"bg5",fontSize:"14px",lineHeight:"22px"}},{children:t("asset-switch-tip",{defaultValue:"Switch to Multi-Asset Mode and use a variety of assets other than USDT as margin"})}),void 0),(0,O.jsx)(f.Z,Object.assign({sx:{justifyContent:"flex-end",marginTop:"10px"}},{children:(0,O.jsx)(u.Z,Object.assign({onClick:()=>o(!0),sx:{borderRadius:"4px",bg:"t.white",backgroundImage:"none",color:"bg6",minWidth:"62px",height:"24px"}},{children:t("OK")}),void 0)}),void 0)]}),void 0),open:!n},{children:e}),void 0):null},H=i.memo((({sx:e={}})=>{var t;const{assetMode:n=!1}=(0,_.F7)(),{getI18n:o}=(0,y.yk)(),r=(0,I.I)((e=>e.setVisible)),s=(0,I.I)((e=>e.setAssetMode)),{enqueueNotification:l}=(0,M.Z)(),u=(0,i.useRef)(null),g=[{label:o("singleAsset",{defaultValue:"Single-Asset Mode"}),value:!1},{label:o("multiAssets",{defaultValue:"Multi-Assets Mode"}),value:!0}],x=(0,a.I0)(),h=(0,i.useCallback)((e=>{var t;return(null===(t=null==u?void 0:u.current)||void 0===t?void 0:t.checkHasIsolated())?(r(!0),void s(e)):x.preference.changeAssetMode({joinMargin:e}).then((e=>{const{success:t}=e;t&&l({header:o("adjustAssetMode",{defaultValue:"Adjust Asset Mode"}),message:o("adjustAssetModeSuccess",{defaultValue:"Asset mode adjusted successfully."}),variant:"success"})}))}),[x.preference]);return(0,O.jsxs)(f.Z,Object.assign({__css:L,sx:e},{children:[(0,O.jsxs)(f.Z,Object.assign({alignItems:"center",mt:"6px"},{children:[(0,O.jsx)(m.Z,Object.assign({color:"t.third"},{children:o("assetMode",{defaultValue:"Asset Mode"})}),void 0),(0,O.jsx)(S.m,Object.assign({tip:(0,O.jsx)(z,{},void 0),hideUnderLine:!0,enablePortal:!0,tipSx:R,labelSx:T},{children:(0,O.jsx)(P.Z,{size:16,ml:"6px"},void 0)}),void 0)]}),void 0),(0,O.jsx)(d.Z,Object.assign({mt:"6px"},{children:(0,O.jsx)(B,{children:(0,O.jsx)(p.ZP,Object.assign({trigger:"hover",enablePortal:!0,overlay:(0,O.jsx)(d.Z,Object.assign({sx:N},{children:g.map((e=>{const{label:t,value:o}=e||{};return(0,O.jsx)("div",Object.assign({className:c()({"asset-option":!0,active:o===n}),onClick:()=>h(o)},{children:t}),t)}))}),void 0)},{children:(0,O.jsxs)("div",Object.assign({className:"asset-label"},{children:[null===(t=g.find((e=>e.value===n)))||void 0===t?void 0:t.label,(0,O.jsx)(A.Z,{ml:"4px",color:"t.third",size:16},void 0)]}),void 0)}),void 0)},void 0)}),void 0),(0,O.jsx)(D,{ref:u},void 0)]}),void 0)}));var V=n(9577);const F={position:"absolute",zIndex:999,top:`-${V.Jy}px`,display:"inline-flex",alignItems:"center",justifyContent:"flex-end",height:`${V.Jy}px`,mr:"24px",cursor:"pointer",right:"-10px"},U={position:"absolute",zIndex:999,top:`-${V.Jy}px`,right:"16px",display:"flex",alignItems:"center",justifyContent:"flex-end",height:`${V.Jy}px`,cursor:"pointer"},G={".asset-label":{display:"flex",alignItems:"center",color:"t.primary"}},W={py:"4px",mt:"6px",bg:"modalBg",boxShadow:"elevation2",borderRadius:"4px",cursor:"pointer",overflowY:"auto",maxHeight:"193px",".asset-option":{padding:"4px 16px",color:"t.primary","&:hover":{bg:"line"},"&.active":{color:"t.yellow"},fontSize:"12px"}};var K=n(93603),$=n(40977);e=n.hmd(e);var q,J=["children"];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}(q="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&q(e);var Y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},ee=(0,i.forwardRef)((function(e,t){var n=e.children,o=(0,s.Z)(e,J);return(0,O.jsx)(u.Z,X(X({variant:"default",colorStyle:"secondary",sz:"tiny",sx:{flex:1,mr:"8px",fontWeight:"normal",":last-of-type":{mr:"0"}},ref:t},o),{},{children:n}))})),te=function(e){var t=e.balance,n=e.onChange,o=e.curAsset,r=Object.values(t);return(0,O.jsx)(d.Z,{sx:G,children:(0,O.jsx)(p.ZP,{trigger:"hover",enablePortal:!0,overlay:(0,O.jsx)(d.Z,{sx:W,children:r.map((function(e){var t=(e||{}).asset;return(0,O.jsx)("div",{className:c()({"asset-option":!0,active:t===o}),onClick:function(){n(t)},children:t},t)}))}),children:(0,O.jsxs)("div",{className:"asset-label",children:[o,(0,O.jsx)(b.Z,{ml:"4px",color:"t.third",size:16})]})})})},ne=i.memo(Y((function(e){var t=e.curAsset,n=e.balance,o=e.setCurAsset,r=e.showSelector,s=(0,_.C3)()===E.UW,i=(0,y.Fs)().isIPad;return(0,O.jsxs)(d.Z,{sx:i?U:F,children:[r&&(0,O.jsx)(te,{curAsset:t,balance:n,onChange:o}),s&&(0,O.jsx)(v,{sx:{color:"t.yellow200",border:"1px solid",borderColor:"t.yellow200",cursor:"pointer",borderRadius:"2px",fontSize:"16px",ml:"16px"},onClick:function(){}})]})}),"useFuturesLayout{}\nuseResponsive{{ isIPad }}",(function(){return[_.C3,y.Fs]})),(function(e,t){var n=e.curAsset,o=e.balance,r=e.setCurAsset,s=t.curAsset,i=t.balance,a=t.setCurAsset,l=Object.keys(o).join(),c=Object.keys(i).join();return n===s&&r===a&&l===c})),oe=i.memo(Y((function(e){e.getFutI18n;var t=e.disabled,n=e.curAsset,o=(0,y.KL)().getI18n;return(0,O.jsxs)(f.Z,{sx:{justifyContent:"space-between",pt:"6px"},children:[(0,O.jsx)(ee,{onClick:function(){return j.ee.emit("OPEN_DEPOSIT_MODAL",n)},disabled:t,children:o("tradeTransaction-bt-DEPOSIT")}),(0,O.jsx)(ee,{onClick:function(){return j.ee.emit("OPEN_WITHDRAW_MODAL",n)},disabled:t,children:o("tradeTransaction-bt-WITHDRAW")})]})}),"useTradeLanguage{{ getI18n: getTradeI18n }}",(function(){return[y.KL]}))),re=i.memo(Y((function(e){var t=e.marginPrecision,n=e.marginAsset,o=(0,_.Gb)(n);return(0,O.jsxs)(m.Z,{color:"t.primary",children:[(0,g.GW)(o||0,t,!0)," ",n]})}),"useUFuturesTotalUPNL{totalUnrealizedPNL}",(function(){return[_.Gb]}))),se=i.memo(Y((function(e){var t=e.isEmptyBalance,n=e.loading,o=e.getFutI18n,r=e.walletBalance,s=e.marginPrecision,a=e.quoteAsset,l=(0,i.useMemo)((function(){return(0,O.jsxs)(f.Z,{justifyContent:"space-between",sx:{marginTop:"8px",lineHeight:"16px"},children:[(0,O.jsx)(S.m,{tip:o("tradeHistory-positions-walletBalanceTip",{defaultValue:""}),children:o("tradeHistory-positions-walletBalanceLabel",{defaultValue:"Wallet Balance"})}),(0,O.jsxs)(m.Z,{color:"t.primary",children:[(0,g.GW)(r||0,s,!0)," ",a]})]})}),[o,a,s,r]);return(0,O.jsxs)(O.Fragment,{children:[!t&&!n&&(0,O.jsxs)(d.Z,{mt:"16px",mb:"24px",children:[l,(0,O.jsxs)(f.Z,{justifyContent:"space-between",sx:{marginTop:"8px",lineHeight:"16px"},children:[(0,O.jsx)(S.m,{tip:o("tradeHistory-positions-unrealizedPnlTip",{defaultValue:""}),children:o("tradeHistory-positions-unrealizedPNLLabel",{defaultValue:"Unrealized PNL"})}),(0,O.jsx)(re,{marginPrecision:s,marginAsset:a})]})]}),t&&!n&&(0,O.jsx)(w.Z,{showIcon:!0,mt:"12px",flexDirection:"row",variant:"warning",children:o("TransferAssetToTrading",{defaultValue:"Please transfer assets into futures account to start trading."})})]})}),"useMemo{USDTBalance}")),ie=function(){var e,t,n=(0,y.yk)(),r=n.getI18n,s=n.i18n.language,l=(0,_._n)(),c=(0,_.Pc)().isExistFutureAccount,u=(0,a.I0)(),p=(0,_.KQ)(),f=(0,_.Kc)("loading"),m=(0,_.z4)(),g=(0,o.Z)(m,2),x=(0,o.Z)(g[1],2),h=x[0],v=x[1],b=(0,i.useState)(v),w=(0,o.Z)(b,2),j=w[0],S=w[1],k=(0,y.Fs)().isMobile,C=Object.values(p).every((function(e){return!e.walletBalance})),M=(0,_.F7)().assetMode,Z=void 0!==M&&M,P=(0,K.dc)().networkType;return(0,i.useEffect)((function(){var e=v;if(Z)switch(P){case $.Zc.BSC:e="BNB";break;case $.Zc.ETH:e="ETH"}S(e),u.transferAssets.updateState({transferAsset:e})}),[v,u,Z,P]),k?null:(0,O.jsxs)(d.Z,{fontSize:"12px",px:"16px",sx:{position:"relative"},children:[(0,O.jsx)(ne,{getFutI18n:r,curAsset:j,balance:p,setCurAsset:S,showSelector:l}),(0,O.jsx)(oe,{getFutI18n:r,futUrlConfig:E.x,locale:s,base:h,curAsset:j,disabled:!l||!c}),l&&(0,O.jsx)(se,{isEmptyBalance:C,loading:f,getFutI18n:r,walletBalance:null===(e=p[j])||void 0===e?void 0:e.walletBalance,marginPrecision:4,quoteAsset:j,bnbWalletBalance:null===(t=p.BNB)||void 0===t?void 0:t.walletBalance,locale:s}),l&&!C&&!f&&(0,O.jsx)(H,{})]})};Y(ie,"useFuturesLanguage{{\n    getI18n: getFutI18n,\n    i18n: { language: locale },\n  }}\nuseIsLogin{isLoggedIn}\nuseUserInfo{{ isExistFutureAccount }}\nuseDispatch{dispatch}\nuseBalance{balance}\nuseBalanceStatus{balanceLoading}\nuseSymbol{[, [base, quoteAsset]]}\nuseState{[curAsset, setCurAsset](quoteAsset)}\nuseResponsive{{ isMobile }}\nusePreference{{ assetMode = false }}\nuseWeb3Adapter{{ networkType }}\nuseEffect{}",(function(){return[y.yk,_._n,_.Pc,a.I0,_.KQ,_.Kc,_.z4,y.Fs,_.F7,K.dc]}));var ae=i.memo(ie);const le=ae;var ce,ue;(ce="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(ce.register(ee,"Label","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js"),ce.register(te,"FuturesAssetsSelector","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js"),ce.register(ne,"AssetsHeader","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js"),ce.register(oe,"AssetsButtons","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js"),ce.register(re,"AssetUPNLText","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js"),ce.register(se,"AssetsContent","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js"),ce.register(ie,"FuturesAssets","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js"),ce.register(ae,"default","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/components/AssetsCard/index.js")),(ue="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&ue(e)},59687:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(5163),r=n(2784),s=n(98569);const i=function(e){return r.createElement(s.Z,(0,o.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M12 9a1 1 0 100-2 1 1 0 000 2zm0 8a1 1 0 001-1v-5a1 1 0 10-2 0v5a1 1 0 001 1z"}),r.createElement("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-2 0a8 8 0 10-16 0 8 8 0 0016 0z",clipRule:"evenodd"}))}},40887:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(5163),r=n(2784),s=n(98569);const i=function(e){return r.createElement(s.Z,(0,o.__assign)({width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M14.5 10.29a1 1 0 011 1v.353a1 1 0 01-.273.686l-2.5 2.65a1 1 0 01-1.454 0l-2.5-2.65a1 1 0 01-.273-.686v-.353a1 1 0 011-1h5z"}))}},55742:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>y});var o=n(5163),r=n(2784),s=n(53021),i=n(18149),a=n.n(i);function l(e){var t=(0,r.useState)(e),n=t[0],o=t[1];return(0,r.useEffect)((function(){var t,r;o((t=n)===(r=e)||a()(t,r)?t:r)}),[e]),n}var c=n(75548),u=n(62143),d=n(87938),p=n(21232),f=n(50464),m={right:"left",left:"right","top-start":"top-end","right-start":"left-start","left-start":"right-start","bottom-start":"bottom-end","top-end":"top-start","right-end":"left-end","left-end":"right-end","bottom-end":"bottom-start"},g=function(){},x=function(){return r.createElement("div",{"data-ssr":!0,suppressHydrationWarning:!0})},h=(0,r.forwardRef)((function(e,t){return r.createElement(u.Z,(0,o.__assign)({ref:t,__css:{position:"relative",display:"inline-block",outline:"none"}},e))})),v=(0,r.forwardRef)((function(e,t){var n=e.visible,s=(0,o.__rest)(e,["visible"]),i=(0,r.useContext)(p.Z).context,a=r.useState(!1),l=a[0],c=a[1];(0,r.useEffect)((function(){var e=n!==l?setTimeout((function(){return c(Boolean(n))})):void 0;return function(){e&&clearTimeout(e)}}),[n,l]);var d=(0,r.useMemo)((function(){return(0,o.__assign)((0,o.__assign)({},n?l?{}:{visibility:"hidden"}:{display:"none",pointerEvents:"none",visibility:"hidden"}),{zIndex:"modal"===i?1201:"dropdown"})}),[n,l,i]);return r.createElement(u.Z,(0,o.__assign)({ref:t,tx:"dropdown",variant:"box",__css:d},s))})),b=(0,r.forwardRef)((function(e,t){var n=e.children,i=e.dir,a=e.disabled,u=e.enablePortal,d=void 0!==u&&u,p=e.overlay,v=void 0===p?r.createElement(r.Fragment,null):p,b=e.overlayProps,y=void 0===b?{}:b,j=e.trigger,E=e.isFixed,_=void 0!==E&&E,S=e.forceTop,O=void 0!==S&&S,k=e.onVisibleChange,C=void 0===k?g:k,M=e.open,Z=e.placement,P=void 0===Z?"bottom-start":Z,A=e.onClick,I=e.needSeo,L=void 0!==I&&I,T=(0,o.__rest)(e,["children","dir","disabled","enablePortal","overlay","overlayProps","trigger","isFixed","forceTop","onVisibleChange","open","placement","onClick","needSeo"]),R=O?"top":P;R="rtl"===i&&m[R]||R;var N=j||"click",z=(0,r.useState)(!a&&!0===M),D=z[0],B=z[1],H=(0,r.useRef)(0),V=(0,r.useState)(),F=V[0],U=V[1],G=r.useRef(null!=M).current,W=(0,r.useState)(L),K=W[0],$=W[1];D&&!d&&K&&$(!1);var q=(0,r.useMemo)((function(){return v}),[v]),J=(0,f.Z)(U,t),Q=(0,r.useState)(null),X=Q[0],Y=Q[1],ee=r.useMemo((function(){return _||!D?[{name:"eventListeners",options:{scroll:!1,resize:!1}}]:void 0}),[_,D]),te=(0,s.D)(F,X,{placement:R,strategy:"fixed",modifiers:ee}),ne=te.styles,oe=te.attributes,re=te.forceUpdate,se=(0,c.D)((function(e){(e=Boolean(e))!==D&&(e&&re&&re(),B(!0===e),C(!0===e))}));G&&(se(M),N=void 0),a&&(se(!1),N=void 0);var ie=(0,c.D)((function(e){e.target instanceof Node&&((null==F?void 0:F.contains(e.target))||(null==X?void 0:X.contains(e.target)))||se(!1)}));(0,r.useEffect)((function(){return!G&&D?window.addEventListener("click",ie):window.removeEventListener("click",ie),function(){window.removeEventListener("click",ie)}}),[G,ie,D]);var ae=(0,c.D)(N?function(e){window.performance.now()-H.current>500&&se(!D),A&&A(e)}:A||function(){}),le=(0,c.D)("hover"===N?function(t){!D&&window.performance.now()-H.current>500&&(se(!0),H.current=window.performance.now()),e.onMouseMove&&e.onMouseMove(t)}:e.onMouseMove||function(){}),ce=(0,c.D)("hover"===N?function(t){se(!1),e.onMouseLeave&&e.onMouseLeave(t)}:e.onMouseLeave||function(){}),ue=l(T),de=l(y),pe=l(ne.popper),fe=l(oe.popper),me=(0,r.useMemo)((function(){return K?"undefined"!=typeof window&&window.document&&window.document.createElement?r.createElement(x,null):r.createElement("div",{style:{display:"none"}},q):null}),[K,q]);return(0,r.useMemo)((function(){return r.createElement(h,(0,o.__assign)({className:D?"checked":void 0,ref:J,onClick:ae,onMouseMove:le,onMouseLeave:ce},ue),me,n,r.createElement(w,{enablePortal:d,popupVisible:D,attributesPopper:fe,overlay:v,overlayProps:de,stylesPopper:pe,setPopperElement:Y}))}),[D,J,ae,le,ce,ue,me,n,d,fe,v,de,pe])})),w=(0,r.memo)((function(e){var t=e.enablePortal,n=e.popupVisible,s=e.attributesPopper,i=e.overlay,a=e.overlayProps,l=e.stylesPopper,c=e.setPopperElement;return t?n?r.createElement(d.ZP,null,r.createElement(v,(0,o.__assign)({},a,{ref:c,style:l,visible:n},s),i)):null:r.createElement(v,(0,o.__assign)({},a,{ref:c,style:l,visible:n},s),i)}));b.displayName="Dropdown";const y=(0,r.memo)(b)},50464:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(2784);function r(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function s(e,t){return o.useMemo((function(){return null==e&&null==t?null:function(n){r(e,n),r(t,n)}}),[e,t])}},37407:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(5163),r=n(2784),s=n(98569);const i=function(e){return r.createElement(s.Z,(0,o.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{d:"M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",fill:"currentColor"}))}},32027:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(5163),r=n(2784),s=n(98569);const i=function(e){return r.createElement(s.Z,(0,o.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",fill:"currentColor"}))}},53858:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(2784),r=n(22706);function s(){return o.useContext(r.Z)}},19076:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(5163),r=n(2784),s=n(92036),i=n(62143),a=n(87938),l=n(32027),c=n(71927),u=n(23377),d=n(77711),p=function(e){var t=e.isShow,n=e.variant,i=e.getValid,a=e.customIcon,d={info:l.Z,error:c.Z,warning:l.Z,success:u.Z}[n],p=a&&i(a)?r.cloneElement(a,(0,o.__assign)({size:20},a.props),[]):r.createElement(d,{size:20});return t?r.createElement(s.Z,{sx:{width:"24px",height:"24px",mr:"xs",justifyContent:"center",alignItems:"center",flexShrink:0}},p):null},f=function(e){var t=e.isShow,n=e.onClose;return t?r.createElement(s.Z,{sx:{width:"24px",height:"24px",justifyContent:"center",alignItems:"center",color:"t.disabled",marginLeft:"auto"}},r.createElement(d.Z,{size:18,onClick:n,cursor:"pointer"})):null},m=(0,r.forwardRef)((function(e,t){var n=e.children,a=e.icon,l=e.variant,c=void 0===l?"warning":l,u=e.closable,d=void 0!==u&&u,m=e.showIcon,g=void 0===m||m,x=e.onClose,h=e.title,v=e.insideCenter,b=void 0!==v&&v,w=e.__css,y=(0,o.__rest)(e,["children","icon","variant","closable","showIcon","onClose","title","insideCenter","__css"]);return r.createElement(s.Z,(0,o.__assign)({tx:"alertV2",variant:c,alignItems:"flex-start",ref:t,width:"100%",__css:(0,o.__assign)({p:"ls"},w)},y),r.createElement(s.Z,{justifyContent:b?"center":"",flex:"1",alignItems:"flex-start"},r.createElement(p,{isShow:g,variant:c,getValid:r.isValidElement,customIcon:a}),r.createElement(i.Z,{__css:{wordBreak:"break-word",flexShrink:1,height:"auto",lineHeight:"24px",width:b?"auto":"100%",color:"alertV2."+c+"FontColor"}},h&&r.createElement(i.Z,{as:"p",__css:{fontWeight:"medium"}},h),n)),r.createElement(f,{isShow:d,onClose:x}))})),g=(0,r.forwardRef)((function(e,t){var n=e.enablePortal,s=e.container,i=e.topOfPage,l=e.__css,c=(0,o.__rest)(e,["enablePortal","container","topOfPage","__css"]);return i||n||s?r.createElement(a.ZP,{container:s},r.createElement(m,(0,o.__assign)({__css:i?(0,o.__assign)({position:"fixed",top:0,left:0,zIndex:"alert",borderRadius:0},l):{}},c,{ref:t}))):r.createElement(m,(0,o.__assign)({},c))}));g.displayName="AlertV2";const x=g},35395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(5163),r=n(2784),s=n(62143),i=n(72779),a=n.n(i),l=n(28776),c={"&,&::before":{position:"absolute",width:"6px",height:"6px",zIndex:-1},"&::before":{content:'""',display:"block"}},u={boxSizing:"content-box",position:"absolute",width:"max-content",wordBreak:"normal",zIndex:"tooltip",maxWidth:"296px",'&[data-popper-placement^="top"] > [data-popper-arrow]':{bottom:"-3px"},"& > .gap-fill":{position:"absolute",display:"block"},'&[data-popper-placement^="top"] > [data-popper-arrow]::before':{transform:"rotate(45deg)"},'&[data-popper-placement^="top"] > .gap-fill':{bottom:"-"+l.SG+"px",left:"0",width:"100%",height:l.SG+"px"},'&[data-popper-placement^="bottom"] > [data-popper-arrow]':{top:"-3px"},'&[data-popper-placement^="bottom"] > [data-popper-arrow]::before':{transform:"rotate(225deg)"},'&[data-popper-placement^="bottom"] > .gap-fill':{top:"-"+l.SG+"px",left:"0",width:"100%",height:l.SG+"px"},'&[data-popper-placement^="left"] > [data-popper-arrow]':{right:"-3px"},'&[data-popper-placement^="left"] > [data-popper-arrow]::before':{transform:"rotate(-45deg)"},'&[data-popper-placement^="left"] > .gap-fill':{top:"0",right:"-"+l.SG+"px",width:l.SG+"px",height:"100%"},'&[data-popper-placement^="right"] > [data-popper-arrow]':{left:"-3px"},'&[data-popper-placement^="right"] > [data-popper-arrow]::before':{transform:"rotate(135deg)"},'&[data-popper-placement^="right"] > .gap-fill':{top:"0",left:"-"+l.SG+"px",width:l.SG+"px",height:"100%"}};const d=r.forwardRef((function(e,t){var n=e.arrow,i=e.arrowRef,l=e.arrowStyle,d=e.children,p=e.open,f=e.className,m=e.bg,g=(0,o.__rest)(e,["arrow","arrowRef","arrowStyle","children","open","className","bg"]);return p?r.createElement(s.Z,(0,o.__assign)({ref:t,variant:"tooltip",bg:m,className:a()(f,"bn-tooltip-box")},g,{__css:(0,o.__assign)((0,o.__assign)({},u),{".bn-tooltip-arrow[data-popper-arrow]::before":{backgroundColor:m}})}),d,n&&r.createElement(s.Z,{className:"bn-tooltip-arrow",ref:i,"data-popper-arrow":!0,__css:c,style:l}),r.createElement("i",{className:"gap-fill"})):null}))},21030:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>g});var o=n(5163),r=n(2784),s=n(50464),i=n(62143),a=n(87938),l=n(53858),c=n(53021),u=n(68106),d=n(35395),p=n(28776),f=n(80142),m=function(){return"undefined"!=typeof window?document.body.offsetHeight:0};const g=r.forwardRef((function(e,t){var n=e.arrow,g=void 0!==n&&n,x=e.boundary,h=e.container,v=e.tip,b=e.delay,w=void 0===b?0:b,y=e.pos,j=e.placement,E=void 0===j?y||"top":j,_=e.children,S=e.open,O=e.trigger,k=void 0===O?"hover":O,C=e.onClick,M=e.enablePortal,Z=void 0!==M&&M,P=e.bg,A=e.scroll,I=e.resize,L=e.boxOffset,T=void 0===L?0:L,R=e.arrowPadding,N=void 0===R?0:R,z=e.fallbackPlacements,D=e.onlyShowOnHover,B=void 0===D||D,H=e.clickOutsideClose,V=void 0!==H&&H,F=e.onClickOutside,U=(0,o.__rest)(e,["arrow","boundary","container","tip","delay","pos","placement","children","open","trigger","onClick","enablePortal","bg","scroll","resize","boxOffset","arrowPadding","fallbackPlacements","onlyShowOnHover","clickOutsideClose","onClickOutside"]),G="rtl"===(0,l.Z)()?p.O9[E]:E,W=r.useRef(null!=S).current,K=r.useRef(null),$=r.useState(null),q=$[0],J=$[1],Q=r.useState(null),X=Q[0],Y=Q[1],ee=r.useState(null),te=ee[0],ne=ee[1],oe=r.useRef(0),re=r.useRef(),se=(0,c.D)(q,X,{placement:G,modifiers:[{name:"eventListeners",options:{scroll:A,resize:I}},{name:"arrow",options:{element:te,padding:N}},{name:"offset",options:{offset:[T||0,p.SG]}},{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{name:"flip",options:{boundary:x,fallbackPlacements:z}}]}),ie=se.state,ae=se.styles,le=se.attributes,ce=se.update,ue=r.useMemo((function(){return(0,p.BP)(null==ie?void 0:ie.placement)}),[null==ie?void 0:ie.placement]),de=r.useState(S),pe=de[0],fe=de[1];W&&(k=void 0,S!==pe&&fe(S)),r.useEffect((function(){return function(){re.current&&window.clearTimeout(re.current),re.current=0}}),[pe]),(0,f.t)(K,(function(e){V&&fe(!1),F&&F(e)}),!!F||!!V);var me=(0,s.Z)(J,t),ge="click"===k?function(e){re.current&&window.clearTimeout(re.current),oe.current=0,re.current=0,fe(!pe),ce&&ce(),C&&C(e)}:C,xe="hover"===k?function(e){!pe&&window.performance.now()-oe.current>500&&(re.current=w?re.current||window.setTimeout((function(){return fe(!0)}),w):(fe(!0),0),ce&&ce(),oe.current=window.performance.now()),U.onMouseMove&&U.onMouseMove(e)}:U.onMouseMove,he="hover"===k?function(e){re.current&&window.clearTimeout(re.current),oe.current=0,re.current=0,fe(!1),ce&&ce(),U.onMouseLeave&&U.onMouseLeave(e)}:U.onMouseLeave,ve=B?{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:m}:{};return r.createElement(i.Z,(0,o.__assign)({ref:me},U,{__css:{display:"inline-block",position:"relative"},onClick:ge,onMouseMove:xe,onMouseLeave:he}),r.createElement(u.ZP,(0,o.__assign)({in:pe,timeout:p.x9},ve),(function(e){return h||Z?r.createElement(a.ZP,{container:h},r.createElement(d.Z,(0,o.__assign)({open:!0,arrow:g,arrowStyle:ae.arrow,style:(0,o.__assign)((0,o.__assign)((0,o.__assign)({},ae.popper),p.hy),ue[e]),bg:P,arrowRef:ne,ref:Y},le.popper),r.createElement(i.Z,{ref:K},v))):r.createElement(d.Z,(0,o.__assign)({open:!0,arrow:g,arrowStyle:ae.arrow,style:(0,o.__assign)((0,o.__assign)((0,o.__assign)({},ae.popper),p.hy),ue[e]),bg:P,arrowRef:ne,ref:Y},le.popper),r.createElement(i.Z,{ref:K},v))})),_)}))},28776:(e,t,n)=>{"use strict";n.d(t,{BP:()=>i,O9:()=>a,SG:()=>l,hy:()=>r,x9:()=>o});var o=120,r={transition:"opacity "+o+"ms ease-in-out, transform "+o+"ms ease-in-out",opacity:.25,transform:"translate3d(0, 0, 0)"},s={bottom:"translate3d(0, 6px, 0)",left:"translate3d(-6px, 0, 0)",right:"translate3d(6px, 0, 0)",top:"translate3d(0, -6px, 0)"},i=function(e){return e=function(e){return e.split("-")[0]}(e||"top"),{entering:{opacity:.25,transform:"translate3d(0, 0, 0)"},entered:{opacity:1,transform:"translate3d(0, 0, 0)"},exiting:{opacity:.25,transform:s[e]},exited:{visibility:"hidden",opacity:0,transform:s[e]}}},a={"bottom-end":"bottom-start","bottom-start":"bottom-end","left-end":"right-end","left-start":"right-start",left:"right","right-end":"left-end","right-start":"left-start",right:"left","top-end":"top-start","top-start":"top-end"},l=8},80142:(e,t,n)=>{"use strict";n.d(t,{t:()=>s});var o=n(2784),r=n(75548),s=function(e,t,n){var s=(0,r.D)((function(n){e&&e.current&&!e.current.contains(n.target)&&t(n)}));(0,o.useEffect)((function(){return n?(document.addEventListener("mousedown",s),document.addEventListener("touchstart",s),function(){document.removeEventListener("mousedown",s),document.removeEventListener("touchstart",s)}):function(){}}),[n,s])}},18149:(e,t,n)=>{var o=n(88746);e.exports=function(e,t){return o(e,t)}},68106:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>g});var o=n(31461),r=n(81665),s=(n(13980),n(2784)),i=n(28316);const a=s.createContext(null);var l="unmounted",c="exited",u="entering",d="entered",p="exiting",f=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,s=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?s?(r=c,o.appearStatus=u):r=d:r=t.unmountOnExit||t.mountOnEnter?l:c,o.state={status:r},o.nextCallback=null,o}(0,r.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==u&&n!==d&&(t=u):n!==u&&n!==d||(t=p)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===u?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[i.findDOMNode(this),o],s=r[0],a=r[1],l=this.getTimeouts(),c=o?l.appear:l.enter;e||n?(this.props.onEnter(s,a),this.safeSetState({status:u},(function(){t.props.onEntering(s,a),t.onTransitionEnd(c,(function(){t.safeSetState({status:d},(function(){t.props.onEntered(s,a)}))}))}))):this.safeSetState({status:d},(function(){t.props.onEntered(s)}))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:i.findDOMNode(this);t?(this.props.onExit(o),this.safeSetState({status:p},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:c},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:c},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:i.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=r[0],a=r[1];this.props.addEndListener(s,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,o.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(a.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function m(){}f.contextType=a,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},f.UNMOUNTED=l,f.EXITED=c,f.ENTERING=u,f.ENTERED=d,f.EXITING=p;const g=f},96406:(e,t,n)=>{"use strict";n.d(t,{I:()=>o});const o=(0,n(74388).Z)((e=>({visible:!1,setVisible:t=>e((()=>({visible:t}))),assetMode:!1,setAssetMode:t=>e((()=>({assetMode:t})))})))},56851:(e,t,n)=>{"use strict";n.d(t,{m:()=>f});var o=n(52322),r=n(2784),s=n(62143),i=n(48658),a=n(21030),l=n(33656);const c={display:"flex",alignItems:"center",cursor:"help",color:"t.third",borderBottom:["1px dotted","1px dotted","none"],borderBottomColor:"t.third","&:hover":{color:"t.primary",borderBottomColor:"t.primary"}},u={maxWidth:"296px",margin:"-4px 0",lineHeight:"16px",color:"t.white",whiteSpace:"pre-line"};var d=n(97060);const p=e=>{var{link:t}=e,n=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["link"]);const{getI18n:r}=(0,d.yk)();return(0,o.jsx)(i.Z,Object.assign({as:"a",variant:"addressLink",href:t,target:"_blank",color:"t.yellow",fontSize:12},n,{children:r("learnMore",{defaultValue:"Learn More"})}),void 0)};const f=r.memo((e=>{var{children:t,tip:n,learnMoreLink:r,placement:d,hideUnderLine:f,sx:m,tipSx:g,labelSx:x,onTipClick:h}=e,v=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n}(e,["children","tip","learnMoreLink","placement","hideUnderLine","sx","tipSx","labelSx","onTipClick"]);const{isIPad:b}=(0,l.F)(),w=(0,o.jsxs)(s.Z,Object.assign({sx:Object.assign(Object.assign({},u),g)},h&&{onClick:h},{children:[n,r&&(0,o.jsxs)(o.Fragment,{children:[" ",(0,o.jsx)(p,{link:r},void 0)]},void 0)]}),void 0);return(0,o.jsx)(a.ZP,Object.assign({tip:w,delay:500,sx:m,bg:"bg4",placement:d,arrow:!0,enablePortal:!b},v,{children:(0,o.jsx)(i.Z,Object.assign({sx:Object.assign(Object.assign(Object.assign({},c),x),f?{borderBottom:"none"}:{})},{children:t}),void 0)}),void 0)}))}}]);