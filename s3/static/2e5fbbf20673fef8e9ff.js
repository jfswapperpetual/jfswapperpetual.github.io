"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[6949],{93111:(e,t,r)=>{r.d(t,{Z:()=>l}),r(2784);var o,n=r(7688),a=r(52322);e=r.hmd(e),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i=function(e){var t=e.width,r=e.height,o=e.extend,i=e.children;return o?i({width:t,height:r}):(0,a.jsx)(n.Z,{children:i})},s=i;const l=s;var d,c;(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(i,"MyAutoSizer","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/shared/components/AutoSizer.js"),d.register(s,"default","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/shared/components/AutoSizer.js")),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)},85435:(e,t,r)=>{r.d(t,{pB:()=>j});var o=r(38777),n=r(56666),a=r(59740),i=r(29261),s=r(98331),l=r(48658),d=r(62143),c=r(21248),u=r(44613),p=r(2784),f=r(93111),m=r(53096),g=r(97060),y=r(52322);e=r.hmd(e);var h,v=["children","i18nKey","i18nDefault"],x=["loading","listGridProps","header","getListGridConfig","resetDeps","emptyNode","autoSizerProps"],b=["listGridConfig","renderHeaderCell","data","style"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&h(e);var O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},S="trd-common",_=function(e){return(0,g.ZK)(S,e)};O(_,"useBaseLanguage{}",(function(){return[g.ZK]}));var j=function(e){var t=e.children,r=e.i18nKey,o=void 0===r?"nodata":r,n=e.i18nDefault,i=void 0===n?"no data":n,s=(0,a.Z)(e,v),d=_().getI18n;return(0,y.jsx)(l.Z,P(P({variant:"columns.emptyLine",__css:{height:"100%",width:"100%",minHeight:"20px",display:"flex",alignItems:"center",justifyContent:"center"}},s),{},{children:t||d(o,{defaultValue:i})}))};O(j,"useLanguage{{ getI18n }}",(function(){return[_]}));var k=function(e){var t=e.loading,r=void 0!==t&&t,n=e.listGridProps,l=void 0===n?{}:n,g=e.header,h=void 0===g?null:g,v=e.getListGridConfig,w=void 0===v?function(e){return e}:v,O=e.resetDeps,S=void 0===O?[]:O,_=e.emptyNode,k=void 0===_?(0,y.jsx)(j,{}):_,M=e.autoSizerProps,Z=(0,a.Z)(e,x),T=(0,p.useRef)(null),E=l||{},L=E.listGridConfig,C=E.renderHeaderCell,G=E.data,H=E.style,R=(0,a.Z)(E,b);(0,s.Z)((function(){if(T&&T.current){var e=T.current.listRef;if(e&&e.current){var t=e.current,r=e.current.state,o=Math.floor(r.scrollOffset/32);t.resetAfterIndex(o,!0)}}}),1e3/60,(0,o.Z)(S));var A=(0,i.tZ)(),V=(0,u.cp)(A),I=h?[{header:!0}].concat(G):G,N=!r&&!G.length;return(0,y.jsxs)(d.Z,P(P({__css:{position:"relative",flex:1}},Z),{},{children:[(0,y.jsx)(m.Z,{fullScreen:!0,inner:!0,show:r}),(0,y.jsx)(f.Z,P(P({},M),{},{children:function(e){var t=e.height,r=e.width;return N?(0,y.jsxs)(d.Z,{sx:{height:t,width:r,display:"flex",alignItems:"center",justifyContent:"center"},children:[h,k]}):(0,y.jsx)(c.Z,P(P({threshold:5,style:P({direction:V},H)},R),{},{className:"list-grid",ref:T,data:I,renderHeaderCell:C,listGridConfig:w(P(P({collapseHeight:80},L),{},{height:Math.max(t,0),width:r}))}))}}))]}))};O(k,"useRef{listGridRef}\nuseDebounce{}\nuseLng{lang}",(function(){return[s.Z,i.tZ]}));var M,Z,T=p.memo(k);(M="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(M.register(S,"prefix","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/shared/components/EmptyGrid.js"),M.register(_,"useLanguage","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/shared/components/EmptyGrid.js"),M.register(j,"EmptyText","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/shared/components/EmptyGrid.js"),M.register(k,"EmptyGrid","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/shared/components/EmptyGrid.js"),M.register(T,"default","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/shared/components/EmptyGrid.js")),(Z="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&Z(e)},53935:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(5163),n=r(2784),a=r(98569);const i=function(e){return n.createElement(a.Z,(0,o.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z",fill:"currentColor"}))}},35395:(e,t,r)=>{r.d(t,{Z:()=>u});var o=r(5163),n=r(2784),a=r(62143),i=r(72779),s=r.n(i),l=r(28776),d={"&,&::before":{position:"absolute",width:"6px",height:"6px",zIndex:-1},"&::before":{content:'""',display:"block"}},c={boxSizing:"content-box",position:"absolute",width:"max-content",wordBreak:"normal",zIndex:"tooltip",maxWidth:"296px",'&[data-popper-placement^="top"] > [data-popper-arrow]':{bottom:"-3px"},"& > .gap-fill":{position:"absolute",display:"block"},'&[data-popper-placement^="top"] > [data-popper-arrow]::before':{transform:"rotate(45deg)"},'&[data-popper-placement^="top"] > .gap-fill':{bottom:"-"+l.SG+"px",left:"0",width:"100%",height:l.SG+"px"},'&[data-popper-placement^="bottom"] > [data-popper-arrow]':{top:"-3px"},'&[data-popper-placement^="bottom"] > [data-popper-arrow]::before':{transform:"rotate(225deg)"},'&[data-popper-placement^="bottom"] > .gap-fill':{top:"-"+l.SG+"px",left:"0",width:"100%",height:l.SG+"px"},'&[data-popper-placement^="left"] > [data-popper-arrow]':{right:"-3px"},'&[data-popper-placement^="left"] > [data-popper-arrow]::before':{transform:"rotate(-45deg)"},'&[data-popper-placement^="left"] > .gap-fill':{top:"0",right:"-"+l.SG+"px",width:l.SG+"px",height:"100%"},'&[data-popper-placement^="right"] > [data-popper-arrow]':{left:"-3px"},'&[data-popper-placement^="right"] > [data-popper-arrow]::before':{transform:"rotate(135deg)"},'&[data-popper-placement^="right"] > .gap-fill':{top:"0",left:"-"+l.SG+"px",width:l.SG+"px",height:"100%"}};const u=n.forwardRef((function(e,t){var r=e.arrow,i=e.arrowRef,l=e.arrowStyle,u=e.children,p=e.open,f=e.className,m=e.bg,g=(0,o.__rest)(e,["arrow","arrowRef","arrowStyle","children","open","className","bg"]);return p?n.createElement(a.Z,(0,o.__assign)({ref:t,variant:"tooltip",bg:m,className:s()(f,"bn-tooltip-box")},g,{__css:(0,o.__assign)((0,o.__assign)({},c),{".bn-tooltip-arrow[data-popper-arrow]::before":{backgroundColor:m}})}),u,r&&n.createElement(a.Z,{className:"bn-tooltip-arrow",ref:i,"data-popper-arrow":!0,__css:d,style:l}),n.createElement("i",{className:"gap-fill"})):null}))},21030:(e,t,r)=>{r.d(t,{ZP:()=>g});var o=r(5163),n=r(2784),a=r(50464),i=r(62143),s=r(87938),l=r(53858),d=r(53021),c=r(68106),u=r(35395),p=r(28776),f=r(80142),m=function(){return"undefined"!=typeof window?document.body.offsetHeight:0};const g=n.forwardRef((function(e,t){var r=e.arrow,g=void 0!==r&&r,y=e.boundary,h=e.container,v=e.tip,x=e.delay,b=void 0===x?0:x,w=e.pos,P=e.placement,O=void 0===P?w||"top":P,S=e.children,_=e.open,j=e.trigger,k=void 0===j?"hover":j,M=e.onClick,Z=e.enablePortal,T=void 0!==Z&&Z,E=e.bg,L=e.scroll,C=e.resize,G=e.boxOffset,H=void 0===G?0:G,R=e.arrowPadding,A=void 0===R?0:R,V=e.fallbackPlacements,I=e.onlyShowOnHover,N=void 0===I||I,K=e.clickOutsideClose,$=void 0!==K&&K,F=e.onClickOutside,D=(0,o.__rest)(e,["arrow","boundary","container","tip","delay","pos","placement","children","open","trigger","onClick","enablePortal","bg","scroll","resize","boxOffset","arrowPadding","fallbackPlacements","onlyShowOnHover","clickOutsideClose","onClickOutside"]),z="rtl"===(0,l.Z)()?p.O9[O]:O,B=n.useRef(null!=_).current,Q=n.useRef(null),U=n.useState(null),Y=U[0],q=U[1],W=n.useState(null),J=W[0],X=W[1],ee=n.useState(null),te=ee[0],re=ee[1],oe=n.useRef(0),ne=n.useRef(),ae=(0,d.D)(Y,J,{placement:z,modifiers:[{name:"eventListeners",options:{scroll:L,resize:C}},{name:"arrow",options:{element:te,padding:A}},{name:"offset",options:{offset:[H||0,p.SG]}},{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},{name:"flip",options:{boundary:y,fallbackPlacements:V}}]}),ie=ae.state,se=ae.styles,le=ae.attributes,de=ae.update,ce=n.useMemo((function(){return(0,p.BP)(null==ie?void 0:ie.placement)}),[null==ie?void 0:ie.placement]),ue=n.useState(_),pe=ue[0],fe=ue[1];B&&(k=void 0,_!==pe&&fe(_)),n.useEffect((function(){return function(){ne.current&&window.clearTimeout(ne.current),ne.current=0}}),[pe]),(0,f.t)(Q,(function(e){$&&fe(!1),F&&F(e)}),!!F||!!$);var me=(0,a.Z)(q,t),ge="click"===k?function(e){ne.current&&window.clearTimeout(ne.current),oe.current=0,ne.current=0,fe(!pe),de&&de(),M&&M(e)}:M,ye="hover"===k?function(e){!pe&&window.performance.now()-oe.current>500&&(ne.current=b?ne.current||window.setTimeout((function(){return fe(!0)}),b):(fe(!0),0),de&&de(),oe.current=window.performance.now()),D.onMouseMove&&D.onMouseMove(e)}:D.onMouseMove,he="hover"===k?function(e){ne.current&&window.clearTimeout(ne.current),oe.current=0,ne.current=0,fe(!1),de&&de(),D.onMouseLeave&&D.onMouseLeave(e)}:D.onMouseLeave,ve=N?{appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEnter:m}:{};return n.createElement(i.Z,(0,o.__assign)({ref:me},D,{__css:{display:"inline-block",position:"relative"},onClick:ge,onMouseMove:ye,onMouseLeave:he}),n.createElement(c.ZP,(0,o.__assign)({in:pe,timeout:p.x9},ve),(function(e){return h||T?n.createElement(s.ZP,{container:h},n.createElement(u.Z,(0,o.__assign)({open:!0,arrow:g,arrowStyle:se.arrow,style:(0,o.__assign)((0,o.__assign)((0,o.__assign)({},se.popper),p.hy),ce[e]),bg:E,arrowRef:re,ref:X},le.popper),n.createElement(i.Z,{ref:Q},v))):n.createElement(u.Z,(0,o.__assign)({open:!0,arrow:g,arrowStyle:se.arrow,style:(0,o.__assign)((0,o.__assign)((0,o.__assign)({},se.popper),p.hy),ce[e]),bg:E,arrowRef:re,ref:X},le.popper),n.createElement(i.Z,{ref:Q},v))})),S)}))},28776:(e,t,r)=>{r.d(t,{BP:()=>i,O9:()=>s,SG:()=>l,hy:()=>n,x9:()=>o});var o=120,n={transition:"opacity "+o+"ms ease-in-out, transform "+o+"ms ease-in-out",opacity:.25,transform:"translate3d(0, 0, 0)"},a={bottom:"translate3d(0, 6px, 0)",left:"translate3d(-6px, 0, 0)",right:"translate3d(6px, 0, 0)",top:"translate3d(0, -6px, 0)"},i=function(e){return e=function(e){return e.split("-")[0]}(e||"top"),{entering:{opacity:.25,transform:"translate3d(0, 0, 0)"},entered:{opacity:1,transform:"translate3d(0, 0, 0)"},exiting:{opacity:.25,transform:a[e]},exited:{visibility:"hidden",opacity:0,transform:a[e]}}},s={"bottom-end":"bottom-start","bottom-start":"bottom-end","left-end":"right-end","left-start":"right-start",left:"right","right-end":"left-end","right-start":"left-start",right:"left","top-end":"top-start","top-start":"top-end"},l=8},80142:(e,t,r)=>{r.d(t,{t:()=>a});var o=r(2784),n=r(75548),a=function(e,t,r){var a=(0,n.D)((function(r){e&&e.current&&!e.current.contains(r.target)&&t(r)}));(0,o.useEffect)((function(){return r?(document.addEventListener("mousedown",a),document.addEventListener("touchstart",a),function(){document.removeEventListener("mousedown",a),document.removeEventListener("touchstart",a)}):function(){}}),[r,a])}},27657:(e,t,r)=>{r.d(t,{Q:()=>s});var o=r(11001),n=r(73121);const{coin:a,cont:i}=o.SW;function s(){const{unit:e}=(0,n.F7)();return{isCoinUnit:e===a,isContUnit:e===i}}},4474:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(2784),n=r(23716);const a=(0,o.createContext)({symbol:"",changeSymbol:e=>{n.info(e)},useColumn:e=>({}),actionModifyOrder:e=>Promise.resolve(),actionCancel:(e,t)=>Promise.resolve(),actionModifyConfirmModal:(e,t,r)=>!1,actionStrategyModal:e=>!1,useStrategyOrder:(...e)=>({}),checked:!0,handleHideOtherPairs:e=>!0,emptyText:"You have no open orders.",headers:[]})},53818:(e,t,r)=>{r.d(t,{HU:()=>c,ZP:()=>u,f8:()=>d});var o=r(52322),n=r(2784),a=r(30210),i=r(92036),s=r(4474),l=r(46555);const d={bg:"modalBg",p:0,py:"4px",mt:"8px"},c={alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"12px",lineHeight:"16px",p:"minor",whiteSpace:"nowrap",height:"24px",minWidth:"96px",color:"t.primary",":hover":{bg:"line"}},u=n.memo((()=>{const{getI18n:e}=(0,l.Z)(),{actionCancel:t}=(0,n.useContext)(s.Z);return(0,o.jsx)(a.Z,Object.assign({sx:d},{children:[{text:e("actionAll",{defaultValue:"All"}),message:e("actionAllMsg",{defaultValue:"Are you sure you want to cancel all?"})},{text:e("actionLimit",{defaultValue:"Limit"}),message:e("actionLimitMsg",{defaultValue:"Are you sure to cancel all Limit orders?"})},{text:e("actionStopLimit",{defaultValue:"Stop-Limit"}),message:e("actionStopLimitMsg",{defaultValue:"Are you sure to cancel all Stop-Limit orders?"})}].map(((e,r)=>(0,o.jsx)(i.Z,Object.assign({sx:c,onClick:()=>{t(r,e.message)}},{children:e.text}),r)))}),void 0)}))},46555:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(97060);const n=e=>(0,o.ZK)("trd-openOrder",e)},71859:(e,t,r)=>{r.d(t,{Z:()=>o});const o=(0,r(2784).createContext)({symbol:"",status:"All",useColumn:(...e)=>({}),handleStatusFilter:e=>{},emptyText:"You have no order history.",handleHideOtherPairs:e=>!1,checked:!0})},55354:(e,t,r)=>{r.d(t,{VE:()=>i,ZK:()=>n,ih:()=>s});var o=r(97060);const n=e=>(0,o.ZK)("trd-orderHistory",e),a=[115,90,110,80,80,80,80,90,60,60,160,80],i=e=>{const t=a[e];return[8,9].includes(e)?{whiteSpace:"nowrap",width:`${t}px`,flex:`1 0 ${t}px`}:{width:`${t}px`,flex:`1 0 ${t}px`}},s=a.reduce(((e,t)=>e+t),0)},51099:(e,t,r)=>{r.d(t,{R7:()=>M,g4:()=>A,aM:()=>g});var o=r(2784),n=r(39727),a=r(2821),i=r(5163),s={limit:15,offset:1},l=r(98331),d=r(977);const c=()=>(0,d.v)(new Date,"yyyy-MM-dd hh:mm:ss");const u=[],p=e=>{const t={offset:0,limit:e},{pagination:r,updatePagination:n}=function(e,t){void 0===t&&(t=s);var r=(0,o.useState)(t),n=r[0],a=r[1],l=(0,o.useMemo)((function(){var t=n.limit,r=n.offset,o=r>0?t*(r-1):0,a=o+t;return e.slice(o,a)}),[e,n]);return(0,o.useEffect)((function(){a(t)}),[e]),{pagedData:l,pagination:n,updatePagination:function(e){a((0,i.__assign)((0,i.__assign)({},n),e))},total:Math.ceil(e.length/n.limit)}}(u,t),[a,d]=(0,o.useState)(c()),{offset:p}=r;return(0,l.Z)((()=>{n({offset:p+1})}),100/6,[a]),{pagination:r,refresh:()=>n({offset:0}),loadMore:()=>{return e=void 0,t=void 0,o=function*(){return d(c())},new((r=void 0)||(r=Promise))((function(n,a){function i(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,s)}l((o=o.apply(e,t||[])).next())}));var e,t,r,o}}};var f=r(38896),m=r(68135);const g=(e=200,t,r,i)=>{const s=(0,o.useRef)(null),l=(0,n.I0)(),d=(0,f.oZ)(),{pagination:c,loadMore:u,refresh:g}=p(e),{limit:y,offset:h}=c,{total:v,preHistory:x,loading:b}=d,{length:w}=x||[],P={startTime:t,endTime:r},O={accountType:(0,m.lx)(i)},S=(0,o.useCallback)(((e,t)=>{l.orders.mergeState({type:"orderHistory.merge",payload:{loading:!0}}),(0,a.jL)(e).then((e=>{const{data:r,total:o}=e,n=r,a=o;l.orders.mergeState({type:0===t?"orderHistory.init":"orderHistory.concat",payload:{orders:n,total:a,loading:!1}})})).catch((()=>{}))}),[l.orders]);(0,o.useEffect)((()=>{S(Object.assign(Object.assign(Object.assign({},P),O),{page:h+1,rows:y}),h)}),[h,y]);const _=[t,r];return(0,o.useEffect)((()=>{if(s.current){const{startTime:e,endTime:o}=s.current;e===t&&o===r||(h>0?g():S(Object.assign(Object.assign(Object.assign({},P),O),{page:h+1,rows:y}),0))}s.current={startTime:t,endTime:r}}),_),Object.assign(Object.assign({},d),{onRefresh:()=>g(),hasMore:!b&&w<v,loadMore:u})};var y=r(33470),h=r(37227),v=r(23131),x=r(9205),b=r(3638),w=r(32485),P=r(72114),O=r(42871),S=r(48752),_=r(27657);const j=e=>(0,x.ZK)("trd-openOrder",e),k=(0,v.nM)(),M=e=>k?(({insertTime:e,side:t,price:r,origQty:o,avgPrice:n,executedQty:a,symbol:i="",stopPrice:s,workingType:l,type:c,origType:u,activatePrice:p,markPrice:m})=>{var g;const b=u||c,{getI18n:O}=j(),{isCoinUnit:k}=(0,_.Q)(),{getI18n:M}=(0,x.yk)(),Z=((0,f.Vh)()||{})[i]||{},{tickProps:{lastPrice:T}}=(0,P.k)((0,v.RU)()),{pricePrecision:E,quantityPrecision:L,equalQtyPrecision:C,marginAsset:G,contractVal:H=100}=Z,R=(0,w.i)({side:t,type:b}),A=Number(s)||Number(r),V=(0,y.uf)(A,E),I=parseFloat(String(n)),N=I&&(0,y.uf)(0,E)!==(0,y.uf)(I,E);let K=R&&A&&V?`${O(null===(g=v.HZ[l])||void 0===g?void 0:g.replace(/\s/g,"-"),{defaultValue:v.HZ[l]})}  ${[R,V].join(" ")}`:v.GR;Number(p)&&(K=`${M("activationPrice",{defaultValue:"Activation Price"})} \r\n${["BUY"===t?"<=":">=",(0,y.uf)(p,E)].join(" ")}`);const $=M("Cont",{defaultValue:"Cont"});let F=Number(r);v.cQ.includes(b)?F=Number(s):"TRAILING_STOP_MARKET"===b?F=Number(p):"MARKET"===b&&(F=Number(N?n:T));let D,z=i;return Z&&(D=(0,h.H)(Z,M),z=D.shortName),{nextDate:(0,d.v)(new Date(e),"yyyy-MM-dd hh:mm:ss"),nextPair:z,symbolName:D,nextType:O(`type-${b}`,{defaultValue:b}),nextAvgPrice:N?(0,y.uf)(I,E):v.GR,nextPrice:v.Y1.includes(b)?v.GR:(0,y.uf)(r,E),nextAmount:k?`${(0,S.unitChangeCoinQty)({quantity:o,contractVal:H,price:F,precision:C})} ${G}`:`${(0,y.uf)(o,L)} ${$}`,nextFilled:k?`${(0,S.unitChangeCoinQty)({quantity:a,contractVal:H,price:n,precision:C})} ${G}`:`${(0,y.uf)(a,L)} ${$}`,nextTriggerConditions:K,orderType:b,formatedMarkPrice:"LIQUIDATION"===b?(0,y.uf)(m,E):v.GR}})(e):(({insertTime:e,side:t,price:r,origQty:o,avgPrice:n,executedQty:a,symbol:i="",stopPrice:s,workingType:l,type:c,origType:u,activatePrice:p,markPrice:m})=>{var g;const S=u||c,{getI18n:_}=j(),{getI18n:k}=(0,x.yk)(),M=((0,f.Vh)()||{})[i]||{},{getFormatedQuantity:Z}=(0,O.s7)(M),{tickProps:{lastPrice:T}}=(0,P.k)((0,v.BN)()),{quantityPrecision:E=(0,b.M)(String(o)),pricePrecision:L=(0,b.M)(String(n))}=M,C=(0,w.i)({side:t,type:S}),G=Number(s)||Number(r),H=(0,y.uf)(G,L),R=parseFloat(String(n)),A=R&&(0,y.uf)(0,L)!==(0,y.uf)(R,L);let V=C&&G&&H?`${_(null===(g=v.HZ[l])||void 0===g?void 0:g.replace(/\s/g,"-"),{defaultValue:v.HZ[l]})}  ${[C,H].join(" ")}`:v.GR;Number(p)&&(V=`${k("activationPrice",{defaultValue:"Activation Price"})} \r\n${["BUY"===t?"<=":">=",(0,y.uf)(p,L)].join(" ")}`);let I=r;v.cQ.includes(S)?I=s:"TRAILING_STOP_MARKET"===S?I=p:"MARKET"===S&&(I=A?n:T);let N,K=i;return M&&(N=(0,h.H)(M,k),K=N.shortName),{nextDate:(0,d.v)(new Date(e),"yyyy-MM-dd hh:mm:ss"),nextPair:K,symbolName:N,nextType:_(`type-${S}`,{defaultValue:S}),nextAvgPrice:A?(0,y.uf)(R,L):v.GR,nextPrice:v.Y1.includes(S)?v.GR:(0,y.uf)(r,L),nextAmount:Z({quantity:o,price:I,qtyPrecision:E}),nextFilled:Z({quantity:parseFloat(String(a))||0,price:n,qtyPrecision:E}),nextTriggerConditions:V,orderType:S,formatedMarkPrice:"LIQUIDATION"===S?(0,y.uf)(m,L):v.GR}})(e);var Z=r(52322),T=r(97060),E=r(55354),L=r(30210),C=r(92036),G=r(71859),H=r(53818);const R=o.memo((()=>{const{getI18n:e}=(0,T.KL)(),{handleStatusFilter:t,status:r}=(0,o.useContext)(G.Z);return(0,Z.jsx)(L.Z,Object.assign({sx:H.f8},{children:[{text:e("openOrder-actionAll",{defaultValue:"All"}),key:"All"},{text:e("orderHistory-status-Filled",{defaultValue:"Filled"}),key:"Filled"},{text:e("orderHistory-status-Partial-Fill",{defaultValue:"Partially Filled"}),key:"Partial-Fill"},{text:e("orderHistory-status-Canceled",{defaultValue:"Canceled"}),key:"Canceled"},{text:e("orderHistory-status-Expired",{defaultValue:"Expired"}),key:"Expired"}].map((e=>(0,Z.jsx)(C.Z,Object.assign({sx:H.HU,color:r===e.key?"t.yellow":"t.primary",onClick:()=>t(e.key)},{children:e.text}),e.key)))}),void 0)})),A=()=>{const{getI18n:e}=(0,E.ZK)(),{getI18n:t}=(0,T.yk)();return(0,o.useMemo)((()=>[{text:e("time",{defaultValue:"Time"})},{text:e("symbol",{defaultValue:"Symbol"})},{text:e("type",{defaultValue:"Type"})},{text:e("side",{defaultValue:"Side"})},{text:e("average",{defaultValue:"Average"})},{text:e("price",{defaultValue:"Price"})},{text:e("filled",{defaultValue:"Executed"})},{text:e("amount",{defaultValue:"Amount"})},{text:e("reduceOnly",{defaultValue:"Reduce Only"}),sx:{whiteSpace:"break-spaces"}},{text:t("orderType-postOnly",{defaultValue:"Post Only"}),sx:{whiteSpace:"pre-wrap"}},{text:e("triggerConditions",{defaultValue:"Trigger"}),area:"left"},{text:e("status",{defaultValue:"Status"}),overlay:(0,Z.jsx)(R,{},void 0)},{text:""}]),[e,t])}},92790:(e,t,r)=>{r.d(t,{i:()=>l});var o=r(52322),n=r(62143),a=r(4028),i=r(53096),s=r(85435);const l=e=>{var{className:t,data:r,renderItem:l,hasMore:d,loadMore:c,loading:u=!1,emptyText:p,onClick:f,sx:m}=e,g=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r}(e,["className","data","renderItem","hasMore","loadMore","loading","emptyText","onClick","sx"]);const y=null==r?void 0:r.length;return(0,o.jsxs)(n.Z,Object.assign({className:t,onClick:f,sx:m},g,{children:[(0,o.jsx)(i.Z,{fullScreen:!0,inner:!0,show:u},void 0),y?(0,o.jsxs)(o.Fragment,{children:[r.map(l),d&&c?(0,o.jsx)(a.Z,{showMore:c,check:{offset:200},loading:u},void 0):null]},void 0):(0,o.jsx)(s.pB,{children:p},void 0)]}),void 0)}},32485:(e,t,r)=>{r.d(t,{i:()=>o});const o=({side:e,type:t})=>"BUY"===e&&"STOP"===t?">=":"SELL"===e&&"STOP"===t?"<=":"BUY"===e&&"STOP_MARKET"===t?">=":"SELL"===e&&"STOP_MARKET"===t||"BUY"===e&&"TAKE_PROFIT"===t?"<=":"SELL"===e&&"TAKE_PROFIT"===t?">=":"BUY"===e&&"TAKE_PROFIT_MARKET"===t?"<=":"SELL"===e&&"TAKE_PROFIT_MARKET"===t?">=":""}}]);