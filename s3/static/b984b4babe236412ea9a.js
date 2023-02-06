"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[9491,2364],{30210:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5163),a=r(2784),i=r(62143),o=(0,a.forwardRef)((function(e,t){return a.createElement(i.Z,(0,n.__assign)({ref:t,tx:"card",variant:"default"},e))}));o.displayName="Card";const s=o},2364:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E,openDepositModal:()=>N,openDepositWithdrawLiteModal:()=>I,openWithdrawModal:()=>A});var n=r(52322),a=r(51072),i=r(62143),o=r(92036),s=r(45362),c=r(48658),l=r(72779),d=r.n(l),u=r(2784),p=r(1253),b=r(97060),f=r(4724),m=r(2896),h=r(32181),v=r(93603),T=r(22521),x=r(77542),g=r(22994),O=r(80941);const w=(0,u.memo)((({isDrawerLayout:e=!1,defaultToken:t})=>{const{getI18n:r,t:a,refreshBalance:i,unlimitWithdrawAssets:o}=(0,T.s)(),{showWalletConnectDialog:s}=(0,v.dc)(),{onTransactionButtonClick:c,onTransactionSuccess:l,onTransactionFail:d}=(0,g.zU)({isDrawerLayout:e,type:"withdraw"}),{onSelectTokenOptionClick:u,onSelectTokenDrawerPopup:p,onSelectTokenButtonClick:b}=(0,O.u)({isDrawerLayout:e});return(0,n.jsx)(h.bO,{onSelectTokenButtonClick:b,onSelectTokenDrawerPopup:p,onSelectTokenOptionClick:u,onWithdrawButtonClick:c,onTransactionSuccess:l,onTransactionFail:d,isDrawerLayout:e,defaultCoin:t||"BNB",getI18n:r,tradeType:h.v3.Futures,isSupportSpot:!1,t:a,refreshBalance:i,topfoldUI:(0,n.jsx)(x.L,{direction:"withdraw"},void 0),onConnectWalletButtonClick:s,unlimitWithdrawAssets:o},void 0)}));var y=r(98735);const j={bg:"bg3",borderRadius:"16px",mb:"16px",button:{height:"40px",borderRadius:"16px",flex:1,bg:"bg3",color:"t.white","&:hover:not(:disabled):not(:active):not(.inactive)":{color:"t.white"},"&.active":{bg:"primary"},"& > div":{fontWeight:600}}},_={pageName:"liteMode",$element_id:"transferPopups"},k=(0,u.memo)((({activeTab:e,setActiveTab:t,defaultToken:r})=>{const{getI18n:a}=(0,b.HK)(),{layout:l}=(0,y.vT)();(0,b.Tb)(_,l===y.dJ);const{trackWebClickWithWalletAddress:u}=(0,b.fM)();return(0,n.jsxs)(i.Z,Object.assign({pb:"24px"},{children:[(0,n.jsxs)(o.Z,Object.assign({sx:j},{children:[(0,n.jsx)(s.Z,Object.assign({onClick:()=>{u({pageName:"liteMode",$element_id:"switchTabTransferModule",$element_content:"Deposit"}),t("deposit")},type:"button",variant:"quiet",className:d()({active:"deposit"===e})},{children:(0,n.jsx)(c.Z,Object.assign({variant:"subtitle2",color:"t.primary"},{children:a("Deposit",{defaultValue:"Deposit"})}),void 0)}),void 0),(0,n.jsx)(s.Z,Object.assign({onClick:()=>{u({pageName:"liteMode",$element_id:"switchTabTransferModule",$element_content:"Withdrawal"}),t("withdraw")},type:"button",variant:"quiet",className:d()({active:"withdraw"===e})},{children:(0,n.jsx)(c.Z,Object.assign({variant:"subtitle2",color:"t.primary"},{children:a("Withdraw",{defaultValue:"Withdraw"})}),void 0)}),void 0)]}),void 0),"deposit"===e&&(0,n.jsx)(f.I,{isDrawerLayout:!0,defaultToken:r},void 0),"withdraw"===e&&(0,n.jsx)(w,{isDrawerLayout:!0,defaultToken:r},void 0)]}),void 0)})),R=(0,u.memo)((()=>{const{getI18n:e}=(0,b.yk)(),[t,r]=(0,u.useState)(!1),[o,s]=(0,u.useState)("deposit"),[l,d]=(0,u.useState)("BNB");return(0,u.useEffect)((()=>m.ee.on("SHOW_DEPOSIT_WITHDRAW_DRAWER",(({tab:e,token:t})=>{d(t||"BNB"),r(!0),s(e)}))),[]),(0,n.jsxs)(a.ZP.Modal,Object.assign({visible:t},{children:[(0,n.jsx)(a.ZP.ModalTitle,{title:(0,n.jsx)(c.Z,Object.assign({color:"t.primary"},{children:e("Balance",{defaultValue:"Balance"})}),void 0),variant:"center",onClose:()=>r(!1)},void 0),(0,n.jsx)(p.V,Object.assign({isDrawerVisible:t},{children:(0,n.jsx)(i.Z,Object.assign({height:"440px"},{children:(0,n.jsx)(k,{activeTab:o,setActiveTab:s,defaultToken:l},void 0)}),void 0)}),void 0)]}),void 0)})),A=()=>m.ee.emit("SHOW_DEPOSIT_WITHDRAW_DRAWER",{tab:"withdraw"}),N=()=>m.ee.emit("SHOW_DEPOSIT_WITHDRAW_DRAWER",{tab:"deposit"}),I=({tab:e,token:t})=>m.ee.emit("SHOW_DEPOSIT_WITHDRAW_DRAWER",{tab:e,token:t}),E=R},33073:(e,t,r)=>{r.d(t,{k:()=>d,i:()=>l});var n=r(94106),a=r(60520),i=r(33470),o=r(38896),s=r(39591),c=r(5271);const l=()=>{const e=(0,o.KQ)();return!e.loading&&!e.isError&&0===Object.values(e).reduce(((e,t)=>e+((null==t?void 0:t.walletBalance)||0)),0)},d=()=>{const[e,t]=(0,n.qo)({name:[a.T.SIDE,a.T.UNIT_AMOUNT]}),r=(({side:e})=>{const t=(0,s.Z)({lastPriceType:"trade"}),[r]=(0,o.KK)(),{maxBuyUnitAmount:n,maxSellUnitAmount:a}=(0,o.l_)({reduceOnly:r,orderPrice:t}),{pricePrecision:l}=(0,o.j2)();return e===c.hp.BUY?(0,i.Jp)(n).toFixed(l,1):(0,i.Jp)(a).toFixed(l,1)})({side:e}),d=l(),u=0===Number(r);return{maxAvailableBalance:r,amount:t,isInsufficient:!u&&Number(t||0)>Number(r),isZeroBalance:d,isOrderBookEmpty:u}}},1253:(e,t,r)=>{r.d(t,{V:()=>i});var n=r(52322),a=r(2784);const i=({children:e,isDrawerVisible:t})=>{const[r,i]=(0,a.useState)(t),o=(0,a.useRef)(null);return(0,a.useEffect)((function(){t&&!r&&i(!0)}),[t,r]),(0,a.useEffect)((function(){const e=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting&&r&&i(!1)}))}),{threshold:0});return o.current&&e.observe(o.current),()=>e.disconnect()}),[r]),(0,n.jsx)("div",Object.assign({ref:o},{children:(t||r)&&e}),void 0)}},79555:(e,t,r)=>{r.d(t,{u:()=>o});var n=r(52322),a=r(48658);const i={maxWidth:"104px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o=({children:e})=>(0,n.jsx)(a.Z,Object.assign({sx:i},{children:e}),void 0)},91289:(e,t,r)=>{r.d(t,{Q:()=>T});var n=r(52322),a=r(2784),i=r(62143),o=r(16831),s=r(59464),c=r(26786),l=r(48658),d=r(79555);const u={display:"inline-block"},p=({text:e,target:t})=>(0,n.jsx)(l.Z,Object.assign({as:"label",htmlFor:t,color:"t.third",sx:u},{children:"string"==typeof e?(0,n.jsx)(d.u,{children:e},void 0):e}),void 0),b={marginTop:"10px",borderRadius:"4px",border:"none !important",fontSize:"14px",bg:"inputBg",".bn-input-prefix":{display:"flex",alignItems:"center","> label":{height:"22px"}},".bn-input-suffix":{display:"flex",alignItems:"center",height:"100%",marginLeft:"4px"},"> .bn-input-status-disabled":{bg:"transparent !important","> input::placeholder":{color:"t.placeholder"}}},f={sx:{width:"100%",height:"40px",margin:"0",borderRadius:"inherit"}},m={"&::placeholder":{textAlign:"left !important"},border:"none !important",MozAppearance:"textfield","::-webkit-outer-spin-button, ::-webkit-inner-spin-button":{WebkitAppearance:"none"}};const h=/^\d+\.?\d*|%$/,v=/^0+(?=\d)/,T=(0,a.forwardRef)(((e,t)=>{var{precision:r,maxLength:l,value:d,onChange:u,prefix:T,target:x,className:g,maxNumberValue:O}=e,w=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["precision","maxLength","value","onChange","prefix","target","className","maxNumberValue"]);const y=(0,a.useRef)(`${x}-${(1e3*Math.random()).toFixed(0)}`),j=!Number.isNaN(Number(d)),_=(0,c.nH)(r),k=e=>{let t=e;return!h.test(t)&&""!==t||Number.isNaN(Number(t))?d:(t=t.replace(v,""),(0,s.N3)(t)>r&&(t=t.replace(new RegExp(`^(\\d*\\.\\d{${r}})\\d*`),"$1")),l&&t.split(".")[0].length>l&&(t=d),0===r&&(t=t.replace(".","")),O&&Number(t)>O&&(t=O.toString()),t)},R=k(d);return(0,a.useEffect)((function(){R!==d&&"function"==typeof u&&u(R)}),[R,u,d]),(0,n.jsx)(i.Z,Object.assign({__css:b,variant:"orderform.inputWrapper",className:g},{children:(0,n.jsx)(o.Z,Object.assign({},w,{className:"order-form-input",id:y.current,variant:"inline",boxProps:f,sx:m,type:j?"number":"text",step:_,value:R,onChange:e=>{"function"==typeof u&&u(k(e.target.value))},onKeyDown:e=>{if(69===e.keyCode||189===e.keyCode||187===e.keyCode)return e.preventDefault(),!1},prefix:T&&(0,n.jsx)(p,{text:T,target:y.current},void 0),ref:t}),void 0)}),void 0)}))},70420:(e,t,r)=>{r.d(t,{L:()=>o});var n=r(52322),a=r(94106),i=r(91289);const o=e=>{var{fieldName:t,required:r=!0,error:o}=e,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["fieldName","required","error"]);const{field:{onChange:c,ref:l,name:d},fieldState:{invalid:u}}=(0,a.bc)({name:t,rules:{required:r}}),p=(0,a.qo)({name:t});return(0,n.jsx)(i.Q,Object.assign({},s,{value:p,onChange:c,error:o||u,target:t,name:d,ref:l}),void 0)}},61438:(e,t,r)=>{r.d(t,{w:()=>l});var n=r(2784),a=r(94106),i=r(33470),o=r(38896),s=r(84755),c=r(39591);const l=({fieldName:e,unitAmountFieldName:t,side:r})=>{const{setValue:l}=(0,a.Gc)(),[,[d]]=(0,o.z4)(),u=(0,o.XY)(d),{contractVal:p}=(0,o.j2)(),[b]=(0,o.eY)(),[f]=(0,o.KK)(),m=(0,c.Z)({lastPriceType:"trade"}),{maxBuyOrderAmount:h,maxSellOrderAmount:v}=(0,o.V2)({reduceOnly:f,orderPrice:m}),T=(0,a.qo)({name:t})||0,x="string"==typeof T&&~(null==T?void 0:T.indexOf("%")),g="buy"===r?h:v,O=Number((0,i.yd)(x?parseFloat(T)/100*g:(({unit:e,contractVal:t,price:r,unitAmount:n})=>{const a=e===s.SW.coin,o=e===s.AO.usdt;if(a){const e=Number(t);return r?(0,i.Jp)(n/e,r):0}return o?r?n/r:0:n})({unit:b,contractVal:p,price:m,unitAmount:T}),u,1));return(0,n.useEffect)((()=>{l(e,O)}),[e,O,l]),null}},41825:(e,t,r)=>{r.d(t,{u:()=>i});var n=r(94106),a=r(60520);const i=({side:e})=>{const t="buy"===e?a.T.BUY_ORDER_AMOUNT:a.T.SELL_ORDER_AMOUNT,r=(0,n.qo)({name:t});return Number(r)}},39591:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(94106),a=r(38896),i=r(60520);const o=({lastPriceType:e})=>{const[t,r,o,s]=(0,n.qo)({name:[i.T.LIMIT_PRICE,i.T.TRIGGER_PRICE,i.T.ACTIVATE_PRICE,i.T.ACTIVATE_PRICE_WORKING_TYPE]}),[c]=(0,a.K5)(),l="MARKET"===c,d="TRAILING_STOP_MARKET"===c,u="trade"===e,p=(0,a.uH)(l&&u||d&&!o&&"CONTRACT_PRICE"===s),{bidPrice:b,askPrice:f}=(0,a.y$)(l&&!u),m=(0,a.aJ)(d&&!o&&"MARK_PRICE"===s);let h;switch(c){case"LIMIT":case"STOP":case"TAKE_PROFIT":case"POST_ONLY":h=t;break;case"MARKET":switch(e){case"trade":h=p;break;case"bid":h=b;break;case"ask":h=f}break;case"STOP_MARKET":case"TAKE_PROFIT_MARKET":h=r;break;case"TRAILING_STOP_MARKET":h=o||("MARK_PRICE"===s?m:p)}return Number(h)||0}}}]);