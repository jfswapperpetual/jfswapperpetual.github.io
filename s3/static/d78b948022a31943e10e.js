"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[5047],{59546:(e,t,n)=>{n.d(t,{Y5:()=>c,_p:()=>a,f5:()=>d});var i,o=n(86522);function r(e){return/[^\d|.|,|\u3002|\%]/.test(e)}e=n.hmd(e),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&i(e),"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,l,a=function(e,t,n,i){var s="object"!==(0,o.Z)(e)?e:e.target.value;return r(Number(s))?"":~s.indexOf("%")?s:(/\u3002|,/.test(s)&&(s=s.replace(/[\u3002|,]/g,".")),/^0\d/.test(s)?s="0":/^\./.test(s)?s=0+s.substring(0,i+1):Number(s)>=0&&-1!==s.indexOf(".")&&s.split(".")[1].length>=i&&(s=s.replace(new RegExp("^(\\d*\\.\\d{".concat(i,"})\\d*")),"$1")),Number.isNaN(Number(s))?"":(n?t(n,s):t(s),s))},c=function(e){return!/\d*\.?\d+$/.test(e.target.value)&&(e.target.value="")},d=function(e,t){return"Enter"===e.key&&t()};(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(r,"inputCheck","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register((function(e,t){return r(e.key)||e.target.value.length>=t&&e.preventDefault()}),"onKeyPress","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register(a,"onInputChange","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register(c,"onBlur","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/utils/input.js"),s.register(d,"onKeyDown","/flow/src/git.toolsfdg.net/mono/mono/web/apps/cloud-trade-sdk/src/futures/utils/input.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)},18495:(e,t,n)=>{n.d(t,{a:()=>B,H:()=>T});var i,o=n(5163),r=n(2784),s=n(13980),l=n.n(s),a=n(8301),c=n(12436),d=n.n(c),u=n(61049),p=n.n(u),h=n(18149),m=n.n(h),f=n(62143),v=n(72779),x=n.n(v),g=n(20573),y=n(7688),b=n(28316),w=n(10687),j={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",textAlign:"center"},k=(0,r.memo)((function(e){var t=e.show,n=void 0===t||t,i=e.fullScreen,s=void 0!==i&&i,l=e.inner,a=e.children,c=e.zIndex;if(!n)return a||null;var d=r.createElement(w.Z,{sx:(0,o.__assign)({zIndex:c||"100"},j)});return s?r.createElement(r.Fragment,null,a,r.createElement("div",{style:{position:l?"absolute":"fixed",top:0,left:0,width:"100%",height:"100%",background:"radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",zIndex:2e3}},d)):r.createElement(r.Fragment,null,a,d)}));k.show=function(e){var t=(void 0===e?{}:e).fullScreen,n=void 0!==t&&t;i||(i=document.createElement("div"),document.body.appendChild(i)),b.render(r.createElement(k,{fullScreen:n}),i)},k.hide=function(){i&&b.render(r.createElement(k,{show:!1}),i)};const C=k;var S={fontSize:0,textAlign:"center",padding:"8px 6px",color:"t.third"};const O=(0,r.memo)((function(e){var t=e.children,n=(0,o.__rest)(e,["children"]);return r.createElement(f.Z,(0,o.__assign)({sx:S,className:"emptyLine"},n),t)}));var E=n(44613),_=n(74628),Z=n(76699),N=function(){var e=(0,Z.$)().i18n.language||"undefined"!=typeof window&&window.localStorage.i18nextLng||"en";return(0,_.yV)(e)};a.t7.displayName="FixedSizeList";var I,H,P,T=(0,r.memo)((function(e){var t=e.className,n=e.children,i=(0,o.__rest)(e,["className","children"]),s=x()("list-item-entity",t);return r.createElement(r.Fragment,null,r.createElement("div",(0,o.__assign)({className:s},i),n),r.createElement(g.xB,{styles:{".list-item-entity":{display:"flex",alignItems:"center",justifyContent:" space-between",flex:1}}}))})),L=function(){},M=(0,o.__read)([38,40],2),z=M[0],D=M[1],R=function(e){function t(t){var n,i=e.call(this,t)||this;return i.state={isScrolling:!1,isHover:!1,activeId:0,scrollOffset:0},i.renderItem=function(e){var t=e.index,n=e.style,s=i.props,l=s.dataSource,a=s.itemElement,c=s.openShotCut,d=i.state.activeId,u=!!c&&d===t;return r.createElement(r.Fragment,null,r.createElement("div",{style:n,className:"list-item-container"},r.createElement(a,(0,o.__assign)({},l[t],{activeId:d,active:u}))),r.createElement(g.xB,{styles:{".list-item-container":{display:"flex",alignItems:"center",overflowX:"hidden"}}}))},i.renderChild=function(){var e=i.props,t=e.dataSource,n=void 0===t?[]:t,s=e.itemKey,l=e.itemHeight,c=e.loading,d=void 0!==c&&c,u=e.loadWithContent,p=void 0!==u&&u,h=e.direction,m=e.listSx,f=void 0===m?{}:m,v=e.emptyText,x=e.emptyChildren,g=i.state.isScrolling,b=!d&&0===n.length;i.ListStyle=(0,o.__assign)({direction:h},f);var w=r.createElement(y.Z,{className:"list-auto-sizer"},(function(e){var t=e.width,c=e.height;return r.createElement(a.t7,{style:(0,o.__assign)({direction:h},f),className:"fixed-size-list",width:t,height:c,itemCount:n.length,itemSize:l,itemData:n,itemKey:s,overscanCount:g?10:1,outerRef:i.outerListRef,innerRef:i.innerListRef,useIsScrolling:!0},i.renderItem)}));return d?p?r.createElement(r.Fragment,null,r.createElement(C,{fullScreen:!0,inner:!0}),w):r.createElement(C,{fullScreen:!0,inner:!0}):b?r.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexGrow:1}},x||(v?r.createElement(O,null,v):null)):w},i.handleScroll=d()(i.handleScroll.bind(i),200),i.handleMouseEnter=i.handleMouseEnter.bind(i),i.handleMouseLeave=i.handleMouseLeave.bind(i),i.handleKeyDown=i.handleKeyDown.bind(i),i.keyScroll=i.keyScroll.bind(i),i.outerListRef=r.createRef(null),i.innerListRef=r.createRef(null),i.maxHeight=t.itemHeight,i.minHeight=.1,i.eventAttached=!1,i.keys=((n={})[z]=0,n[D]=0,n),i}return(0,o.__extends)(t,e),t.prototype.componentDidMount=function(){this.props.openShotCut&&(this.eventAttached=!0,document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentDidUpdate=function(){this.props.openShotCut&&(this.eventAttached||document.addEventListener("keydown",this.handleKeyDown),this.keyScroll())},t.prototype.componentWillUnmount=function(){this.eventAttached&&(this.eventAttached=!1,document.removeEventListener("keydown",this.handleKeyDown)),this.clearTimer()},t.prototype.shouldComponentUpdate=function(e,t){var n=m()(e.dataSource,this.props.dataSource);return n?e.loading!==this.props.loading||e.itemHeight!==this.props.itemHeight||e.listSx!==this.props.listSx:!(n||!this.props.changeOnDataSourceUpdate)||(!t.isScrolling||!this.state.isScrolling)&&t.isHover===this.state.isHover},t.prototype.handleMouseEnter=function(){this.setState({isHover:!0})},t.prototype.handleMouseLeave=function(){this.setState({isHover:!1})},t.prototype.handleScroll=function(){var e=this;this.state.isHover&&(this.setState({isScrolling:!0}),this.clearTimer(),this.timer=setTimeout((function(){e.setState({isScrolling:!1})}),1e3))},t.prototype.clearTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},t.prototype.handleKeyDown=function(e){var t,n=e.keyCode,i=e.metaKey,o=e.ctrlKey,r=this.props,s=r.itemHeight,l=r.dataSource,a=r.openShotCut,c=r.onKeyDownCallback,d=r.tradeType,u=this.state.activeId;if(a&&(13===n||n===z||n===D)&&(e&&e.preventDefault(),e.stopPropagation(),this.keys=((t={})[z]=Math.max(this.minHeight,this.state.scrollOffset-s),t[D]=Math.min(this.state.scrollOffset+s,this.maxHeight),t),this.keys[n]&&this.scrollItem(this.keys[n]),13===n)){var h=l.filter((function(e,t){return t===u})),m=h.length?h[0]:{};p()(c)&&c({data:m,metaKey:i,ctrlKey:o,tradeType:d})}},t.prototype.keyScroll=function(){this.innerListRef.current&&(this.maxHeight=this.innerListRef.current.style.height.replace("px","")||this.props.itemHeight),this.outerListRef.current&&this.outerListRef.current.scrollTo({left:0,top:this.state.scrollOffset,behavior:"auto"})},t.prototype.scrollItem=function(e){this.setState({activeId:Math.floor(e/this.props.itemHeight),scrollOffset:e})},t.prototype.render=function(){var e=this.props,t=e.variant,n=e.sx,i=e.tx,o=e.scrollPerf,s=void 0===o||o;return r.createElement(f.Z,{onScroll:s?this.handleScroll:L,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,__css:{position:"relative",display:"flex",flexDirection:"column",flexGrow:1},className:"list-container",variant:t,sx:n,tx:i},this.renderChild())},t.propTypes={dataSource:l().array.isRequired,itemElement:l().elementType.isRequired,itemHeight:l().number.isRequired,itemKey:l().func,sx:l().object,tx:l().string,variant:l().string,loading:l().bool,openShotCut:l().bool,onKeyDownCallback:l().func,emptyText:l().string,tradeType:l().string,changeOnDataSourceUpdate:l().boolean},t}(r.Component),B=(H=(I=R).displayName||I.name||"Component",(P=function(e){var t,n=(t=N(),(0,E.cp)(t));return r.createElement(I,(0,o.__assign)({},e,{direction:n}))}).displayName="WithDirection("+H+")",P)},19925:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(5163),o=n(2784),r=n(62143),s=(0,o.forwardRef)((function(e,t){return e.visible?o.createElement(r.Z,(0,i.__assign)({ref:t,variant:"mask"},e,{__css:{position:"fixed",top:0,left:0,bottom:0,right:0}})):null}));s.displayName="Mask";const l=s},74258:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(5163),o=n(2784),r=n(98569);const s=function(e){return o.createElement(r.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fill:"currentColor",d:"M3 4h18v3H3z"}),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 2H9v2h6V2zm4 5H5v14h14V7zm-8.5 2H8v9h2.5V9zm3 0H16v9h-2.5V9z",fill:"currentColor"}))}},4058:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(5163),o=n(2784),r=n(98569);const s=function(e){return o.createElement(r.Z,(0,i.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 7H4v3h16V7zm0 7H4v3h16v-3z",fill:"currentColor"}))}},34553:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(5163),o=n(2784),r=n(87938),s=n(92036),l=n(19925),a=n(62143),c=n(48658),d=n(77711),u="undefined"!=typeof window?o.useLayoutEffect:o.useEffect,p=(0,o.forwardRef)((function(e,t){var n=e.open,p=e.title,h=e.titleSx,m=e.containerSx,f=e.contentSx,v=e.mask,x=void 0===v||v,g=e.maskSx,y=e.showMaskOnMobile,b=void 0!==y&&y,w=e.onMaskClick,j=e.onCloseIconClick,k=e.showCloseIcon,C=void 0===k||k,S=e.children,O=e.onPressEnter,E=void 0===O?function(){}:O,_=e.onPressEsc,Z=void 0===_?function(){}:_,N=e.specialCss,I=void 0===N?{}:N,H=e.closeSx,P=void 0===H?{}:H,T=e.closeIconProps,L=void 0===T?{}:T,M=e.showTitleBottomLine,z=void 0===M||M,D=(0,i.__rest)(e,["open","title","titleSx","containerSx","contentSx","mask","maskSx","showMaskOnMobile","onMaskClick","onCloseIconClick","showCloseIcon","children","onPressEnter","onPressEsc","specialCss","closeSx","closeIconProps","showTitleBottomLine"]),R=function(e){13===e.keyCode?E(e):27===e.keyCode&&Z(e)};if((0,o.useEffect)((function(){return n?document.addEventListener("keydown",R):document.removeEventListener("keydown",R),function(){document.removeEventListener("keydown",R)}}),[n]),u((function(){return x&&n?document.body.style.overflow="hidden":document.body.style.removeProperty("overflow"),function(){document.body.style.removeProperty("overflow")}}),[x,n]),!n||"undefined"==typeof document||!document.body)return null;var B=!1;"undefined"!=typeof window&&window.matchMedia("(max-width: 766px)").matches&&(B=!0);var A=(0,i.__assign)({zIndex:"unset"},g),V=x&&(b||!B);return o.createElement(r.ZP,null,o.createElement(s.Z,{__css:(0,i.__assign)({zIndex:"modal",position:"fixed",alignItems:"center",justifyContent:"center",top:0,left:0,bottom:0,right:0},I),sx:m},V&&o.createElement(l.Z,{visible:!0,onClick:function(e){return w&&w(e)},sx:A}),o.createElement(a.Z,(0,i.__assign)({ref:t,__css:{position:"relative",borderRadius:["0px","large","large"],boxShadow:"dialog",backgroundColor:"popupBg",width:["100%","auto"],height:["100%","auto"],color:"t.primary"}},D),C&&o.createElement(a.Z,(0,i.__assign)({__css:{position:"absolute",top:0,right:0,left:"unset",pt:"20px",pr:"md",color:"t.disabled",cursor:"pointer",":hover":{color:"t.third"}}},L,{sx:P,onClick:function(e){return j&&j(e)}}),o.createElement(d.Z,{size:24})),p&&o.createElement(c.Z,{variant:"headline6",className:"modal-title",__css:{pl:"md",pr:"lg",pt:"20px",pb:"19px",borderBottom:"1px solid",borderBottomColor:"line",border:z?"":"none",textAlign:"left"},sx:h},p),o.createElement(a.Z,{className:"style-dialog-body",__css:{p:"md",fontSize:"sm",lineHeight:"20px"},sx:f},S))))}));p.displayName="StyledDialog";const h=p},59745:(e,t,n)=>{n.d(t,{y:()=>s});var i=n(5163),o=n(2784),r=n(62143),s=(0,o.forwardRef)((function(e,t){var n=e.children,s=(0,i.__rest)(e,["children"]);return o.createElement(r.Z,(0,i.__assign)({},s,{ref:t,__css:{position:["fixed","static"],zIndex:[1,"auto"],left:["0px","unset"],bottom:["0px","unset"],pt:"md",pb:["md","0px"],px:["md","0px"],width:["100%","unset"],boxShadow:["0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 4px rgba(0, 0, 0, 0.08)","none"],bg:"popupBg"}}),n)}))},24685:(e,t,n)=>{n.d(t,{v:()=>d});var i=n(52322),o=n(29261),r=n(97060),s=n(68598),l=n(92036),a=n(45362);const c={margin:"28px auto 0",flexDirection:"column",alignItems:"center",".tip":{fontSize:"14px",lineHeight:"20px",color:"t.primary"}},d=({apiError:e=!1,confirmTip:t="",onRefresh:n=(()=>{}),onConfirm:d=(()=>{}),children:u})=>{const p=(0,o.zk)("abnormal"),{getI18n:h}=(0,r.yk)();return p||!e?u:(0,i.jsxs)(l.Z,Object.assign({sx:c},{children:[(0,i.jsx)(s.Z,{size:48},void 0),(0,i.jsxs)("div",Object.assign({className:"tip"},{children:[h("apiErrorRefreshTip",{defaultValue:"Data lost due to service malfunction, please refresh the page."}),(0,i.jsx)(a.Z,Object.assign({variant:"quiet",onClick:n},{children:h("refresh",{defaultValue:"Refresh"})}),void 0)]}),void 0),(0,i.jsxs)("div",Object.assign({className:"tip"},{children:[t,(0,i.jsx)(a.Z,Object.assign({variant:"quiet",onClick:d},{children:h("confirmBtn",{defaultValue:"Confirm"})}),void 0)]}),void 0)]}),void 0)}},19739:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(52322),o=n(21209),r=n(48658),s=n(27986),l=n(92036),a=n(45362),c=n(2784),d=n(37227),u=n(33470),p=n(97060),h=n(3638),m=n(11001),f=n(38896),v=n(23131);const x={position:"relative",padding:"20px 24px 24px 24px",width:["calc(100vw - 32px)","384px"],bg:"modalBg",boxShadow:"elevation3",borderRadius:"8px",".title":{marginBottom:"28px",color:"t.primary"},".field":{display:"flex",justifyContent:"space-between",mt:"12px",letterSpacing:"0.16px",fontSize:"14px",lineHeight:"20px",fontWeight:"normal",minHeight:"20px",".label":{color:"t.third","&.highlight":{color:"t.primary",fontWeight:"medium"}},".value":{color:"t.primary",textAlign:"right","&.buy":{color:"t.buy"},"&.sell":{color:"t.sell"},"&.highlight":{fontWeight:"medium"}}},".top-line":{pt:"4px",mt:"16px",borderTop:"0.5px solid",borderTopColor:"line"},".show-again":{display:"flex",mt:"22px",cursor:"pointer",color:"t.secondary",fontSize:"12px",lineHeight:"16px"}},g=({labelExtra:e="",label:t="",value:n="",unit:o="",labelClassName:r="",valueClassName:s="",className:l=""})=>(0,i.jsxs)("div",Object.assign({className:`field ${l}`},{children:[(0,i.jsxs)("div",Object.assign({className:`label ${r}`},{children:[t,e]}),void 0),(0,i.jsxs)("div",Object.assign({className:`value ${s}`},{children:[n," ",o||""]}),void 0)]}),void 0),y=(0,v.nM)(),b=c.memo((({symbol:e,title:t,color:n,orderSide:b,amendedField:w,isMarket:j,limitPrice:k,qty:C,isClose:S,epnl:O,onClose:E,onConfirm:_=(()=>{}),closeTip:Z})=>{const{getI18n:N}=(0,p.yk)(),I=(0,f.AM)()[e]||{},{shortName:H}=(0,d.H)(I,N),{baseAsset:P,quoteAsset:T,marginAsset:L,quantityPrecision:M,pricePrecision:z,equalQtyPrecision:D=2,tickSize:R,marketTakeBound:B}=I,A=(0,h.p)(Number(R)),V=100*+B,{unit:F}=(0,f.F7)(),K=F===m.SW.coin,W=F===m.AO.usdt;let q,G=M;y?K?(q=P,G=D):q=N("Cont"):W?(q=L,G=A):q=P;const[$,U]=(0,c.useState)(!1),Q=(0,c.useCallback)((()=>{return e=void 0,t=void 0,i=function*(){$&&Z(),_(),E()},new((n=void 0)||(n=Promise))((function(o,r){function s(e){try{a(i.next(e))}catch(e){r(e)}}function l(e){try{a(i.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}a((i=i.apply(e,t||[])).next())}));var e,t,n,i}),[$,Z,_,E]),Y=`(${N("amended",{defaultValue:"Amended"})})`;return(0,i.jsxs)(o.Z,Object.assign({visible:!0,onMaskClick:()=>E(),sx:x},{children:[(0,i.jsx)(r.Z,Object.assign({variant:"title6",className:"title"},{children:N("order-confirmation",{defaultValue:"Order Confirmation"})}),void 0),(0,i.jsx)(g,{labelClassName:"highlight",label:H,value:t,valueClassName:n},void 0),j?(0,i.jsx)(g,{label:N("priceTitle",{defaultValue:"Price"}),value:N("market",{defaultValue:"Market"})},void 0):(0,i.jsx)(g,{label:N("priceTitle",{defaultValue:"Price"}),labelExtra:w===v.y3.PRICE||w===v.y3.BOTH?Y:"",value:(0,u.uf)(k,A),unit:T},void 0),(0,i.jsx)(g,{label:N("orderQtyTitle",{defaultValue:"Order Qty"}),labelExtra:w===v.y3.QUANTITY||w===v.y3.BOTH?Y:"",value:(0,u.uf)(C,G),unit:q},void 0),S&&(0,i.jsx)(g,{label:N("estimatedPNL",{defaultValue:"Estimated PNL"}),className:"top-line",value:(0,u.uf)(O,z),unit:L},void 0),j&&(0,i.jsx)(r.Z,Object.assign({variant:"caption",mt:3,color:"t.sell"},{children:N("orderFailHintV2",{value:V,defaultValue:`Your order will fail should the market price deviate from the marked price by more than ${V}%`})}),void 0),(0,i.jsxs)("label",Object.assign({className:"show-again"},{children:[(0,i.jsx)(s.Z,{defaultChecked:$,onChange:()=>{U(!$)}},void 0),N("dontAskAgain",{defaultValue:"Don’t ask me again"})]}),void 0),(0,i.jsxs)(l.Z,Object.assign({mt:"19px",width:"100%"},{children:[(0,i.jsx)(a.Z,Object.assign({colorStyle:"secondary",onClick:()=>E(),sx:{width:"164px",letterSpacing:"0.16px",mr:"8px",py:"10px"}},{children:N("cancelBtnText",{defaultValue:"Cancel"})}),void 0),(0,i.jsx)(a.Z,Object.assign({colorStyle:n,onClick:Q,sx:{width:"164px",letterSpacing:"0.16px",py:"10px"}},{children:t}),void 0)]}),void 0)]}),void 0)}))},65916:(e,t,n)=>{n.d(t,{O:()=>s});var i=n(52322),o=n(62143);const r={display:"flex",flexDirection:"column",".pair":{fontWeight:"semibold"},".extra":{fontWeight:"normal"}},s=e=>{var{symbolName:t,fallbackText:n=""}=e,s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n}(e,["symbolName","fallbackText"]);return(0,i.jsx)(o.Z,Object.assign({__css:r},s,{children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",Object.assign({className:"pair"},{children:t.symbol}),void 0),(0,i.jsx)("div",Object.assign({className:"extra"},{children:`${t.contractTypeI18n} ${t.deliveryDateFormat}`}),void 0)," "]},void 0):n}),void 0)}},39477:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(52322),o=n(2784),r=n(72779),s=n.n(r),l=n(55742),a=n(62143),c=n(92036),d=n(37407),u=n(97060);const p={py:"4px",mt:"6px",bg:"modalBg",boxShadow:"elevation2",borderRadius:"4px",cursor:"pointer",".filter-option":{padding:"10px 32px 10px 16px",color:"t.primary","&:hover":{bg:"line"},"&.active":{color:"t.yellow"},fontSize:"14px"}},h=({workingType:e,changeWorkingType:t,sx:n={}})=>{var r;const{getI18n:h}=(0,u.yk)(),m=(0,o.useMemo)((()=>[{label:h("advancedStrategy-lastPrice",{defaultValue:"Last"}),type:"CONTRACT_PRICE"},{label:h("advancedStrategy-markPrice",{defaultValue:"Mark"}),type:"MARK_PRICE"}]),[h]),f=(0,o.useMemo)((()=>Object.assign({height:"40px",bg:"inputBg",borderRadius:"4px",justifyContent:"center",alignItems:"center",color:"t.primary",minWidth:"80px"},n)),[n]);return(0,i.jsx)(l.ZP,Object.assign({trigger:"hover",sx:{ml:"8px"},overlay:(0,i.jsx)(a.Z,Object.assign({sx:p},{children:m.map((({label:n,type:o})=>(0,i.jsx)("div",Object.assign({className:s()({"filter-option":!0,active:o===e}),onClick:()=>{o!==e&&t(o)}},{children:n}),o)))}),void 0)},{children:(0,i.jsxs)(c.Z,Object.assign({sx:f},{children:[null===(r=m.find((t=>t.type===e)))||void 0===r?void 0:r.label,(0,i.jsx)(d.Z,{ml:"4px",color:"t.third",size:16},void 0)]}),void 0)}),void 0)}},28123:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(52322),o=n(33322),r=n(27986),s=n(2784);const l={display:"flex",mt:"16px","& .checkBox":{height:"16px",width:"16px"},"& .label":{color:"t.primary",fontSize:"12px"}},a=(0,s.memo)((({defaultChecked:e,value:t,label:n,getValue:a,style:c})=>{const[d,u]=(0,s.useState)(e);return(0,i.jsxs)(o.Z,Object.assign({sx:l,style:c,onClick:e=>{e.stopPropagation()}},{children:[(0,i.jsx)(r.Z,{checked:d,onChange:e=>{u(e.currentTarget.checked),a({[t]:e.currentTarget.checked})},className:"checkBox"},void 0),(0,i.jsx)("div",Object.assign({className:"label"},{children:n}),void 0)]}),void 0)})),c=(0,s.memo)((({options:e=[],getValue:t})=>(0,i.jsx)(i.Fragment,{children:e.map((e=>(0,i.jsx)(a,{label:e.label,getValue:t,value:e.value,defaultChecked:e.defaultChecked,style:e.style},e.value)))},void 0)))},87364:(e,t,n)=>{n.d(t,{ZP:()=>y});var i=n(52322),o=n(2784),r=n(28316),s=n(21209),l=n(45362),a=n(62143),c=n(92036),d=n(88236),u=n(34553),p=n(59745),h=n(19614),m=n(59111),f=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};const{notificationPosition:v}=m.ll;let x=0;var g;!function(e){e.dialog="dialog",e.styledDialog="styledDialog"}(g||(g={}));const y=new class{constructor(){this.id="",this.show=e=>{var{type:t=g.styledDialog}=e,n=f(e,["type"]);let i=document.getElementById(this.id);if(i||(i=document.createElement("div"),i.id=this.id,document.body.appendChild(i)),r.unmountComponentAtNode(i),t===g.dialog){if(!n.dialogProps)throw new Error("must pass dialogProps");this.showDialog(n,i)}else this.showStyledDialog(n,i)},this.showDialog=(e,t)=>{const{dialogProps:n}=e;requestAnimationFrame((()=>{const{isLight:o}=e;r.render((0,i.jsx)(h.f6,Object.assign({theme:o?h.ib:h.Cs},{children:(0,i.jsxs)(s.Z,Object.assign({sx:Object.assign({width:["298px","360px","360px"],p:"md"},e.sx),visible:!0,onMaskClick:this.close},{children:[null==n?void 0:n.body,(0,i.jsx)(l.Z,Object.assign({mt:["16px","16px","24px"],sz:"l",width:"100%",onClick:this.close},{children:null==n?void 0:n.okText}),void 0)]}),void 0)}),void 0),t)}))},this.showStyledDialog=(e,t)=>{requestAnimationFrame((()=>{const{isLight:n}=e;r.render((0,i.jsx)(h.f6,Object.assign({theme:n?h.ib:h.Cs},{children:(0,i.jsx)(d.Z,Object.assign({queueSize:2,closable:!0,autoHideDuration:4500,anchorOrigin:{vertical:e.isMobile?"top":v.vertical,horizontal:v.horizontal}},{children:(0,i.jsx)(u.Z,Object.assign({open:!0,onMaskClick:this.close,onCloseIconClick:this.close},e),void 0)}),void 0)}),void 0),t)}))},this.close=()=>{const e=document.getElementById(this.id);e&&r.unmountComponentAtNode(e)},this.confirm=e=>{return t=this,n=void 0,s=function*(){var{isLight:t,sx:n,content:r,cancelText:s,okText:d,hasFooter:u=!0}=e,h=f(e,["isLight","sx","content","cancelText","okText","hasFooter"]);return new Promise(((e,m)=>{this.show(Object.assign(Object.assign({},h),{isLight:t,sx:Object.assign({minWidth:"368px"},n),children:(0,i.jsxs)(o.Fragment,{children:[(0,i.jsx)(a.Z,Object.assign({sx:{mt:"xs",textAlign:"center"}},{children:r}),void 0),u&&(0,i.jsx)(p.y,{children:(0,i.jsxs)(c.Z,{children:[s&&(0,i.jsx)(l.Z,Object.assign({flexGrow:1,variant:"outline",onClick:m,sz:"l",sx:{boxShadow:"none",border:"1px solid",borderColor:"dropdown.hoverBg",color:"t.primary",mr:3,width:.5,"&:hover":{borderColor:"t.yellow300",color:"t.yellow300",bg:"transparent !important"}}},{children:s}),void 0),d&&(0,i.jsx)(l.Z,Object.assign({sx:{width:.5},sz:"l",flexGrow:1,onClick:e},{children:d}),void 0)]},void 0)},void 0)]},void 0)}))}))},new((r=void 0)||(r=Promise))((function(e,i){function o(e){try{a(s.next(e))}catch(e){i(e)}}function l(e){try{a(s.throw(e))}catch(e){i(e)}}function a(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(o,l)}a((s=s.apply(t,n||[])).next())}));var t,n,r,s},this.id=`uikit-dialog${x}`,x++}}},77376:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(33656);const o=({children:e})=>{const{isMobile:t,isIPad:n}=(0,i.F)();return e&&e({isMobile:t,isIPad:n})}},18046:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(52322),o=n(62143),r=n(4058),s=n(45219);const l={minWidth:"150px",backgroundColor:"rgba(255, 0, 0, .2)","& .sort-item":{boxShadow:"none !important"}},a={color:"t.primary",display:"flex",zIndex:1e4,backgroundColor:"popupBg",justifyContent:"space-between",alignItems:"center",padding:"8px 2px",fontSize:"12px",boxShadow:"0px 0px 8px rgba(0, 0, 0, 0.3)","&:first-child":{marginTop:"16px"}},c=(0,s.W6)((()=>(0,i.jsx)(r.Z,{color:"t.third",size:20},void 0))),d=(0,s.W8)((({value:e})=>(0,i.jsxs)(o.Z,Object.assign({sx:a,className:"sort-item"},{children:[e,(0,i.jsx)(c,{},void 0)]}),void 0))),u=(0,s.JN)((({children:e})=>(0,i.jsx)(o.Z,Object.assign({sx:l},{children:e}),void 0))),p=({items:e,onSort:t})=>(0,i.jsx)(u,Object.assign({transitionDuration:100,useDragHandle:!0,onSortEnd:({oldIndex:n,newIndex:i},o)=>{o.stopPropagation(),o.preventDefault();const r=e.map((e=>e.value)),[s]=r.splice(n,1);r.splice(i,0,s),t(r)}},{children:e.map(((e,t)=>(0,i.jsx)(d,{value:e.label,index:t},e.value)))}),void 0)}}]);