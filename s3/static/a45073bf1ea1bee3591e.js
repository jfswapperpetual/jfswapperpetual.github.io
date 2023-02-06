"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[2985],{55606:(e,i,t)=>{t.d(i,{C:()=>p});var r=t(39727),o=t(29261),s=t(75038),n=t(60190),a=t(58273),l=t(10370),c=t(31953),d=t(48752),u=t(45385);const p=({symbol:e,positionSide:i,orderPrice:t,assumePrice:p,triggerPrice:m,activationPrice:P,orderAmount:b,formType:v,side:g,cost:y,openLost:O,contractVal:f,reduceOnly:S=!1})=>{const T=(0,r.v9)(s.Y),x=(0,n.$J)(),k=(0,r.v9)(a._Y),j=(0,r.v9)(l.G),h=(0,o.AM)(),{marginAsset:A="BTC"}=(null==h?void 0:h[e])||{},C=(null==k?void 0:k[A])||{},L=(0,c._g)(e,i),N=x[L]||{},{entryPrice:E,positionSize:M,isolatedWallet:_,bidNotional:I,askNotional:R}=N,W=Math.abs(M),V=Number(M),{takerCommission:B}=(0,o.aq)();if((1===g&&V<0||-1===g&&V>0)&&W&&(W===b||W<b&&S))return{liquidationPrice:0,currentPosition:N};const{estIsolatedWallet:z,estCrossWalletBalance:F}=(0,d.calculateEstWalletBalance)({entryPrice:E,positionSize:M,orderPrice:t,assumePrice:p,triggerPrice:m,activationPrice:P,orderAmount:b,formType:v,side:g,isolatedWallet:_,crossWalletBalance:(null==C?void 0:C.crossWalletBalance)||0,cost:y,openLost:O,bidNotional:I,askNotional:R,contractVal:f,takerCommission:(B||0)/1e6}),q=Object.assign(Object.assign({},N),{entryPrice:(0,d.calculateEstEP)({entryPrice:E,positionSize:M,orderPrice:t,assumePrice:p,triggerPrice:m,activationPrice:P,orderAmount:b,formType:v,side:g}),positionSize:(0,d.calculateEstSize)({positionSize:M,orderAmount:b,side:g}),isolatedWallet:z}),D=Object.values(Object.assign(Object.assign({},x),{[L]:Object.assign({},q)})),w=(0,c.nn)({positions:(0,c.J9)(D),marginAsset:A}),Y=(0,u.Ak)(T,[q],Object.assign(Object.assign({},k),{[A]:Object.assign(Object.assign({},k[A]),{crossWalletBalance:F})}),j,e,!0,!1,w),{liquidationPrice:$=0}=(null==Y?void 0:Y[0])||{};return{liquidationPrice:$,currentPosition:q}}},36628:(e,i,t)=>{t.d(i,{F:()=>g});var r=t(33470),o=t(39727),s=t(84755),n=t(38896),a=t(2896),l=t(92392),c=t(10117),d=t(23131),u=t(11001),p=t(54163),m=t(27831),P=t(99e3),b=t(97060),v=t(685);function g({afterSubmit:e,overrides:i={},isLiteMode:t=!1}){const{trackWebClickWithWalletAddress:g}=(0,b.fM)(),y=(0,o.I0)(),{setMessageInfo:O}=(0,n.YT)(),{getI18n:f}=(0,b.yk)(),S=(0,n.G3)(),T=(0,n.c7)(),[x]=(0,n.eY)(),{marginType:k}=(0,n.uO)(),j=(0,n.Gf)(),h=(o,b)=>{var h,A,C,L,N,E;const{preference:{orderConfirmation:M,positionMode:_,assetMode:I,enableAdvancedTPSL:R,priceProtection:W},futuresOrderForm:V,userCenter:{loginStatus:{isLoggedIn:B}},products:{currentProduct:{filters:z=[],equalQtyPrecision:F=2,minQty:q,marginAsset:D,contractVal:w=1,pricePrecision:Y},allProducts:$},pageStore:{symbol:[K,[Q,Z]]},markPrice:H,position:U,leverage:{curLeverage:J},exchangeInfo:{infos:G},balance:X,assetIndex:ee}=b;if(!B)return;const ie=i.orderType||V.orderType,te=i.positionDirection||V.positionDirection,re=i.timeInForce||V.timeInForce,oe="boolean"==typeof i.reduceOnly?i.reduceOnly:V.reduceOnly,se="boolean"==typeof i.isTPSLEnabled?i.isTPSLEnabled:V.isTPSLEnabled,ne=(null===(h=d.vQ[Z])||void 0===h?void 0:h.pricePrecision)||d.vQ.delivery.pricePrecision,ae=(null===(A=z.find(P.$H))||void 0===A?void 0:A.tickSize)||"",le=(0,p.OR)(ae),ce=(0,p.OR)(null===(C=z.find(P.W4))||void 0===C?void 0:C.stepSize),de=(0,p.OR)(null===(L=z.find(P.vr))||void 0===L?void 0:L.stepSize),ue=null===(N=z.find(P.Jv))||void 0===N?void 0:N.notional,{levels:pe}=G[K]||{levels:c.zq.map((e=>(0,c.Wv)(e)))},{askPrice:me,bidPrice:Pe}=(0,l.OA)({tickSize:ae,symbol:K,levels:pe,isDelivery:S}),be=Number(T()),ve=(0,l._V)({orderType:ie,equalQtyPrecision:F,unit:x,filters:z}),ge=(0,l._V)({orderType:ie,equalQtyPrecision:F,unit:S?s.SW.cont:s.AO.coin,filters:z}),ye=Number(null===(E=H[K])||void 0===E?void 0:E.markPrice),{side:Oe,buyOrderAmount:fe,sellOrderAmount:Se,unitAmount:Te,activatePriceWorkingType:xe}=o,ke="BUY"===Oe,je=Number(o.limitPrice),he=ke?fe:Se,Ae=Number(o.triggerPrice),Ce=Number(o.activatePrice),Le=Number(o.priceRate),Ne=(0,l.JN)({orderType:ie,activatePrice:Ce,stopPrice:Ae,limitPrice:je,lastTradePrice:be,activatePriceWorkingType:xe,markPrice:ye}),Ee=Te&&!~Te.indexOf("%")?Number(Te):Number((0,l.ee)({unit:x,contractVal:w,price:Ne,orderAmount:he,stepSizePrecision:(0,u.Br)(ie)?de:ce,tickSizePrecision:le,equalQtyPrecision:F})),Me=e=>(0,m.w_)({askPrice:me,bidPrice:Pe,orderPrice:je,formType:ie,markPrice:ye,pricePrecision:Y,isDelivery:S,type:e}),{buyCost:_e,sellCost:Ie,buyOpenLost:Re,sellOpenLost:We}=(0,l.l3)({positionMode:_,positions:U,symbol:K,leverage:J,buyOrderAmount:fe,sellOrderAmount:Se,orderType:ie,askPrice:me,bidPrice:Pe,price:je,markPrice:ye,pricePrecision:Y,isDelivery:S,contractVal:w}),Ve=(0,l.vY)({symbol:K,isDelivery:S,leverage:J,marginAsset:D,contractVal:w,positions:(0,n.xm)(U,$),balance:X.balance,assetIndexes:ee,assetMode:I,marginType:k,brackets:j}),{BuyText:Be,SellText:ze}=(0,l.ad)({positionMode:_,positionDirection:te,getFutI18n:f}),Fe="BUY"===Oe?Be:ze,{valid:qe,message:De}=(0,l.mv)({unit:x,orderAmount:he,price:Ne,contractVal:w,unitAmountPrecision:ve,orderAmountPrecision:ge,base:Q,margin:D,minQty:+q,minNotional:ue,getFutI18n:f,isDelivery:S,messageType:"order-form-toast",reduceOnly:oe,positionDirection:te});if(!qe)return void O({message:De,variant:"error"});const we=()=>{let i="POST_ONLY"===ie?"LIMIT":ie;const s=o.triggerPriceWorkingType;ke?("CONTRACT_PRICE"===s&&Ae<be||"MARK_PRICE"===s&&Ae<ye)&&(i="STOP"===i?"TAKE_PROFIT":i,i="STOP_MARKET"===i?"TAKE_PROFIT_MARKET":i):("CONTRACT_PRICE"===s&&Ae>be||"MARK_PRICE"===s&&Ae>ye)&&(i="STOP"===i?"TAKE_PROFIT":i,i="STOP_MARKET"===i?"TAKE_PROFIT_MARKET":i);const n=(0,l.M6)({formData:Object.assign(Object.assign({},o),{buyOrderAmount:Number((0,r.Jp)(o.buyOrderAmount).toFixed(ge,1)),sellOrderAmount:Number((0,r.Jp)(o.sellOrderAmount).toFixed(ge,1))}),orderType:i,positionDirection:te,timeInForce:"POST_ONLY"===ie?u.rb.POST_ONLY:re,reduceOnly:oe,enableAdvancedTPSL:R,isTPSLEnabled:se,priceProtection:W,symbol:K,positionMode:_});return"subOrderList"in n?y.futuresOrderForm.placeStrategy(n).then((i=>{i.success&&(e&&e(),O({message:f("order-submitted",{defaultValue:""}),variant:"success"}))})):(!t&&g({pageName:"advancedMode",$element_id:"openPosition",$element_type:"BUY"===n.side?"Long":"Short",$element_content:(n.quantity*Number(n.price||be||0)).toFixed(2),title:n.symbol}),y.futuresOrderForm.placeOrder(Object.assign(Object.assign({},n),{placeType:"order-form",options:t?{enableErrorMsgIntercept:!1}:void 0})).then((i=>{if(i.success)e&&e(),!t&&O({message:f("order-submitted",{defaultValue:""}),variant:"success"});else if(t){(0,v.triggerNotificationLite)(!1,i.message);const{price:e,quantity:t,side:o,symbol:s}=i.params||{};g({pageName:"liteMode",$element_id:"openPositionResponse",$element_type:"BUY"===o?"Long":"Short",$element_content:(0,r.Jp)(t,e).toFixed(2,1),title:s,status:"fail",error:i.message})}return i})))};(0,l.i)({orderType:ie,orderAmount:he,price:je,priceRate:Le,stopPrice:Ae,hideMask:()=>a.ee.emit("HIDE_MOBILE_MASK",void 0),orderConfirmation:M,showConfirm:()=>a.ee.emit("SHOW_ORDER_CONFIRM_PANEL",{orderType:ie,placeOrder:we,orderForm:{triggerPrice:Ae,price:je,buyQty:Ee,sellQty:Ee,side:Oe,callbackRate:Le,activationPrice:Ce,positionSide:(0,l.JO)({side:Oe,positionDirection:te,positionMode:_}),buyCost:(0,r.GW)(_e,ne,!0),sellCost:(0,r.GW)(Ie,ne,!0),tickSize:le,limitStepSize:ce,marketStepSize:de,availableBalance:Ve,takeProfitStopPrice:o.takeProfitStopPrice,takeProfitStopPriceWorkingType:o.takeProfitStopPriceWorkingType,stopLossStopPrice:o.stopLossStopPrice,stopLossStopPriceWorkingType:o.stopLossStopPriceWorkingType,strategySide:o.strategySide,oLastPrice:be},bCost:_e,sCost:Ie,buyOpenLost:Re,sellOpenLost:We,positionDirection:te,title:Fe,isDelivery:S,Cont:f("Cont"),contractVal:w,getAssumePrice:Me}),placeOrder:we,disableOrderConfirmation:t})};return e=>{y.futuresOrderForm.handleSubmit({formData:e,submitHandler:h})}}},59464:(e,i,t)=>{t.d(i,{JX:()=>n,N3:()=>s});var r=t(33470);const o=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function s(e){const i=`${e}`.match(o);return i?Math.max(0,(i[1]?i[1].length:0)-(i[2]?+i[2]:0)):0}function n(e,i){return isNaN(+e)?"":(0,r.PD)(e).toFixed(i,1)}},53421:(e,i,t)=>{t.d(i,{Z:()=>R});var r=t(52322),o=t(2784),s=t(21209),n=t(48658),a=t(62143),l=t(27986),c=t(92036),d=t(45362),u=t(33470),p=t(39727),m=t(84755),P=t(23131),b=t(34215),v=t(55606),g=t(38896),y=t(75038),O=t(60190),f=t(58273),S=t(10370),T=t(31953),x=t(72958),k=t(27831);const j=({symbol:e,positionSide:i,orderPrice:t,assumePrice:r,triggerPrice:o,activationPrice:s,orderAmount:n,formType:a,side:l,cost:c,openLost:d,reduceOnly:u=!1})=>{n=Number(n);const m=(0,p.v9)(y.Y),P=(0,O.$J)(),b=(0,p.v9)(f._Y),v=(0,p.v9)(S.G),j=(0,g.AM)(),{marginAsset:h="USDT"}=(null==j?void 0:j[e])||{},A=(null==b?void 0:b[h])||{},C=(0,T._g)(e,i),L=P[C]||{},{entryPrice:N,positionSize:E,isolatedWallet:M,bidNotional:_,askNotional:I}=L,R=Math.abs(E),W=Number(E);if((1===l&&W<0||-1===l&&W>0)&&R&&(R===n||R<n&&u))return{liquidationPrice:0,currentPosition:L};const{estIsolatedWallet:V,estCrossWalletBalance:B}=(0,k.VX)({entryPrice:N,positionSize:E,orderPrice:t,assumePrice:r,triggerPrice:o,activationPrice:s,orderAmount:n,formType:a,side:l,isolatedWallet:M,crossWalletBalance:(null==A?void 0:A.crossWalletBalance)||0,cost:c,openLost:d,bidNotional:_,askNotional:I,takerCommission:0}),z=Object.assign(Object.assign({},L),{entryPrice:(0,k.dK)({entryPrice:N,positionSize:E,orderPrice:t,assumePrice:r,triggerPrice:o,activationPrice:s,orderAmount:n,formType:a,side:l}),positionSize:(0,k.iZ)({positionSize:E,orderAmount:n,side:l}),isolatedWallet:V}),F=Object.values(Object.assign(Object.assign({},P),{[C]:Object.assign({},z)})),q=(0,T.nn)({positions:(0,T.J9)(F),marginAsset:h}),D=(0,x.Zk)(m,[z],Object.assign(Object.assign({},b),{[h]:Object.assign(Object.assign({},b[h]),{crossWalletBalance:B})}),v,e,!0,!1,q),{liquidationPrice:w=0}=(null==D?void 0:D[0])||{};return{liquidationPrice:w,currentPosition:z}};var h=t(56851),A=t(30990),C=t(11001);var L=t(97060);const N={position:"relative",padding:"20px 24px 24px 24px",width:["calc(100vw - 32px)","384px"],bg:"modalBg",boxShadow:"elevation3",borderRadius:"8px",".title":{marginBottom:"28px",color:"t.primary"},".field":{display:"flex",justifyContent:"space-between",mt:"12px",letterSpacing:"0.16px",fontSize:"14px",lineHeight:"20px",fontWeight:"normal",minHeight:"20px",".label":{color:"t.third","&.highlight":{color:"t.primary",fontWeight:"medium"}},".value":{color:"t.primary",textAlign:"right","&.buy":{color:"t.buy"},"&.sell":{color:"t.sell"},"&.highlight":{fontWeight:"medium"}}},".top-line":{pt:"4px",mt:"16px",borderTop:"0.5px solid",borderTopColor:"line"},".show-again":{display:"flex",mt:"22px",cursor:"pointer",color:"t.secondary",fontSize:"12px",lineHeight:"16px"}},E=["STOP","STOP_MARKET","TAKE_PROFIT","TAKE_PROFIT_MARKET"],M=["MARKET","STOP_MARKET","TAKE_PROFIT_MARKET"],_=({label:e,value:i,unit:t,labelClassName:o="",valueClassName:s="",className:n=""})=>(0,r.jsxs)("div",Object.assign({className:`field ${n}`},{children:[(0,r.jsx)("div",Object.assign({className:`label ${o}`},{children:e}),void 0),(0,r.jsxs)("div",Object.assign({className:`value ${s}`},{children:[i," ",t||""]}),void 0)]}),void 0),I={orderType:"LIMIT",placeOrder:()=>{},bCost:0,sCost:0,positionDirection:"OPEN",isDelivery:!1,Cont:null,buyOpenLost:0,sellOpenLost:0,contractVal:1,getAssumePrice:()=>0,orderForm:{triggerPrice:0,price:0,buyQty:0,sellQty:0,side:"BUY",callbackRate:0,activationPrice:0,oLastPrice:0,positionSide:"BOTH",buyCost:0,sellCost:0,availableBalance:0,tickSize:0,limitStepSize:0,marketStepSize:0,takeProfitStopPrice:0,stopLossStopPrice:0,takeProfitStopPriceWorkingType:"",stopLossStopPriceWorkingType:"",strategySide:1}},R=(0,o.forwardRef)((({symbol:e,quote:i,ticker:t,base:y,marginAsset:O},f)=>{const[S,T]=(0,o.useState)(!1),[x,k]=(0,o.useState)(I),R=(0,p.v9)(b.Lu),{getI18n:W}=(0,L.yk)(),V=(0,p.I0)(),{unit:B="cont",orderConfirmation:z,positionMode:F,assetMode:q=!1}=(0,g.F7)(),[D]=(0,g.uD)(),{marketTakeBound:w}=(0,g.j2)(),Y=100*+w,{orderType:$="LIMIT",placeOrder:K,bCost:Q=0,sCost:Z=0,positionDirection:H="OPEN",isDelivery:U=!1,Cont:J=null,buyOpenLost:G=0,sellOpenLost:X=0,contractVal:ee=0,getAssumePrice:ie=(()=>0),orderForm:te}=x,{triggerPrice:re=0,price:oe=0,buyQty:se=0,sellQty:ne=0,side:ae="BUY",callbackRate:le,activationPrice:ce=0,positionSide:de="BOTH",buyCost:ue,sellCost:pe,availableBalance:me,tickSize:Pe,limitStepSize:be,marketStepSize:ve,takeProfitStopPrice:ge,stopLossStopPrice:ye,takeProfitStopPriceWorkingType:Oe,stopLossStopPriceWorkingType:fe,strategySide:Se}=te,Te=1===Se?"BUY":"SELL",{reduceOnly:xe=!1}=R||{},{BuyText:ke,SellText:je}=(0,g.x_)(H),he=Number(ge)||0,Ae=Number(ye)||0,Ce=!xe&&"CLOSE"!==H&&D&&!(!he&&!Ae)&&Te===ae,Le=(0,g.CE)(),Ne="BUY"===ae,Ee=Ne?"buy":"sell",Me=Ne?"button.buyHover":"button.sellHover",_e=Ne?ke:je,[Ie,Re]=(0,o.useState)(!1),{equalQtyPrecision:We=2}=t,Ve=Pe,Be=Ne?se:ne,ze=Ne?ue:pe,Fe=Ne?Q:Z,qe=W("TRIGGER_TYPE"===Oe?"lastPrice":"tradeHistory-positions-markPriceTitle",{defaultValue:"Last Price"}),De=W("CONTRACT_PRICE"===fe?"lastPrice":"tradeHistory-positions-markPriceTitle",{defaultValue:"Last Price"}),we=Ne?G:X,Ye=U?v.C:j,$e=(({orderType:e,equalQtyPrecision:i,marketStepSize:t,limitStepSize:r,tickSize:s=2,unit:n})=>(0,o.useCallback)(((o=!0)=>{let a;return a=(0,C.Br)(e)?t:r,n===m.SW.coin&&(a=i),(void 0===o||o)&&n===m.AO.usdt&&(a=s),a}),[e,n,t,r,i,s]))({orderType:$,equalQtyPrecision:We,marketStepSize:ve,limitStepSize:be,tickSize:Pe,unit:B})(),Ke=(0,A.Z)({orderType:$,qty:Be,triggerPrice:re,orderPrice:te.price,contractVal:ee,activationPrice:ce,lastPrice:te.oLastPrice,markPrice:Le,isDelivery:U,precision:$e}),Qe=B===m.SW.coin||B===m.AO.usdt?Ke:Number("BUY"===ae?se:ne||0),{currentPosition:Ze,liquidationPrice:He}=Ye({symbol:e,positionSide:de,orderPrice:Number(oe||0),assumePrice:ie("BUY"===ae?"bid":"ask")||0,triggerPrice:Number(re||0),activationPrice:Number(ce||0),orderAmount:Qe,formType:$,side:"BUY"===ae?1:-1,cost:Fe,openLost:we,contractVal:ee,reduceOnly:xe}),{liquidationPrice:Ue,diff:Je}=(({liquidationPrice:e,markPrice:i,places:t})=>(0,o.useMemo)((()=>{if(e<=0)return{liquidationPrice:"--",diff:"--"};const r=e-i;return{liquidationPrice:(0,u.uf)(e,t),diff:r}}),[t,e,i]))({currentPosition:Ze,liquidationPrice:He,markPrice:Le,places:Ve});let Ge;const{shortName:Xe}=(0,g.oO)();Ge=U?B===m.SW.coin?y:J:B===m.AO.coin?y:O,(0,o.useImperativeHandle)(f,(()=>({showOrderConfirmPanel:e=>{k(e),T(!0)}})));const{marginType:ei}=(0,g.uO)(),ii=xe||F&&"CLOSE"===H||ei===P.Yl.ISOLATED||"TRAILING_STOP_MARKET"===$||Fe>me,ti=(0,o.useCallback)((()=>{return e=void 0,i=void 0,r=function*(){if(Ie){const e=Object.assign(Object.assign({},z),{[$.toUpperCase()]:!1});V.preference.changeOrderConfirmation(e)}K(te),T(!1)},new((t=void 0)||(t=Promise))((function(o,s){function n(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var i;e.done?o(e.value):(i=e.value,i instanceof t?i:new t((function(e){e(i)}))).then(n,a)}l((r=r.apply(e,i||[])).next())}));var e,i,t,r}),[Ie,K,te,z,$,V]);return(0,o.useMemo)((()=>(0,r.jsxs)(s.Z,Object.assign({visible:S,tx:"orderForm.confirmPanel",variant:"container",sx:N,onMaskClick:()=>{T(!1)},onPressEnter:()=>{ti()},onPressEsc:()=>{T(!1)}},{children:[(0,r.jsx)(n.Z,Object.assign({variant:"title6",className:"title"},{children:W("order-confirmation",{defaultValue:"Order Confirmation"})}),void 0),(0,r.jsx)(_,{labelClassName:"highlight",label:Xe,value:_e,valueClassName:`${Ee} highlight`},void 0),E.includes($)&&(0,r.jsx)(_,{label:W("stopPriceTitle",{defaultValue:"Stop Price"}),value:(0,u.uf)(re,Ve),unit:i},void 0),M.includes($)&&(0,r.jsx)(_,{label:W("priceTitle",{defaultValue:"Price"}),value:W("market",{defaultValue:"Market"})},void 0),!M.includes($)&&("TRAILING_STOP_MARKET"===$?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{label:W("callbackRate",{defaultValue:"Callback Rate"}),value:(0,u.uf)(le,1),unit:"%"},void 0),Number(ce)?(0,r.jsx)(_,{label:W("activationPrice",{defaultValue:"Activation Price"}),value:(0,u.uf)(ce,Ve),unit:i},void 0):null]},void 0):(0,r.jsx)(_,{label:W("priceTitle",{defaultValue:"Price"}),value:(0,u.uf)(oe,Ve),unit:i},void 0)),(0,r.jsx)(_,{label:W("orderQtyTitle",{defaultValue:"Order Qty"}),value:(0,u.Jp)(Be).toFixed($e,1),unit:Ge},void 0),"OPEN"===H&&(0,r.jsx)(_,{label:W("cost",{defaultValue:"Cost"}),value:ze,unit:O},void 0),!ii&&!q&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,Object.assign({mt:"16px",tx:"orderForm.confirmPanel",variant:"line"},{children:(0,r.jsx)(_,{label:W("markPrice",{defaultValue:"Mark Price"}),value:(0,u.uf)(Le,Ve),unit:i},void 0)}),void 0),(0,r.jsx)(a.Z,Object.assign({mt:"16px",tx:"orderForm.confirmPanel",variant:"line"},{children:(0,r.jsx)(_,{label:(0,r.jsx)(h.m,Object.assign({tip:(0,r.jsx)(n.Z,Object.assign({as:"div"},{children:W("estLiquidationPriceTip",{defaultValue:""})}),void 0),placement:"bottom"},{children:W("estLiquidationPrice",{defaultValue:"Est. Liquidation Price"})}),void 0),value:Ue,unit:i},void 0)}),void 0),(0,r.jsx)(_,{label:(0,r.jsx)(h.m,Object.assign({tip:(0,r.jsx)(n.Z,Object.assign({as:"div"},{children:W("estLiqMpDifferenceTip",{defaultValue:""})}),void 0),placement:"bottom"},{children:W("estLiqMpDifference",{defaultValue:"Est. Liquidation Price/Mark Price Difference"})}),void 0),value:"--"===Je?Je:`${(0,u.uf)(100*(Le?Number(Je)/Le:0),2)}%`,unit:"--"===Je?"":`(${(0,u.uf)(Je,Ve)})`},void 0)]},void 0),Ce&&(0,r.jsxs)("div",Object.assign({className:"top-line"},{children:[he?(0,r.jsx)(_,{label:W("takeProfit",{defaultValue:"Take Profit"}),value:`${qe} ${Ne?">=":"<="} ${he}`,unit:i},void 0):null,Ae?(0,r.jsx)(_,{label:W("stopLoss",{defaultValue:"Stop Loss"}),value:`${De} ${Ne?"<=":">="} ${Ae}`,unit:i},void 0):null]}),void 0),"MARKET"===$&&!Ce&&(0,r.jsx)(n.Z,Object.assign({variant:"caption",mt:3,color:"t.sell"},{children:W("orderFailHintV2",{value:Y,defaultValue:`Your order will fail should the market price deviate from the marked price by more than ${Y}%`})}),void 0),(0,r.jsxs)("label",Object.assign({className:"show-again"},{children:[(0,r.jsx)(l.Z,{className:"checkbox",onChange:()=>{Re(!Ie)}},void 0),W("dontAskAgain",{defaultValue:"Don’t ask me again"})]}),void 0),(0,r.jsxs)(c.Z,Object.assign({mt:"24px",width:"100%"},{children:[(0,r.jsx)(d.Z,Object.assign({colorStyle:"secondary",onClick:()=>{Re(!1),T(!1)},sx:{width:"164px",letterSpacing:"0.16px",mr:"8px",py:"10px"}},{children:W("cancelBtnText",{defaultValue:"Cancel"})}),void 0),(0,r.jsx)(d.Z,Object.assign({colorStyle:Ee,onClick:ti,sx:{width:"164px",letterSpacing:"0.16px",py:"10px"}},{children:_e}),void 0)]}),void 0)]}),void 0)),[q,S,Ee,_e,Xe,W,$,re,Ve,i,le,ce,oe,Be,$e,Ge,H,ze,Ce,he,qe,De,Ne,Ae,Le,ii,Ue,Je,Ie,ti,Me,O])}))},56851:(e,i,t)=>{t.d(i,{m:()=>m});var r=t(52322),o=t(2784),s=t(62143),n=t(48658),a=t(21030),l=t(33656);const c={display:"flex",alignItems:"center",cursor:"help",color:"t.third",borderBottom:["1px dotted","1px dotted","none"],borderBottomColor:"t.third","&:hover":{color:"t.primary",borderBottomColor:"t.primary"}},d={maxWidth:"296px",margin:"-4px 0",lineHeight:"16px",color:"t.white",whiteSpace:"pre-line"};var u=t(97060);const p=e=>{var{link:i}=e,t=function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)i.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["link"]);const{getI18n:o}=(0,u.yk)();return(0,r.jsx)(n.Z,Object.assign({as:"a",variant:"addressLink",href:i,target:"_blank",color:"t.yellow",fontSize:12},t,{children:o("learnMore",{defaultValue:"Learn More"})}),void 0)};const m=o.memo((e=>{var{children:i,tip:t,learnMoreLink:o,placement:u,hideUnderLine:m,sx:P,tipSx:b,labelSx:v,onTipClick:g}=e,y=function(e,i){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)i.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["children","tip","learnMoreLink","placement","hideUnderLine","sx","tipSx","labelSx","onTipClick"]);const{isIPad:O}=(0,l.F)(),f=(0,r.jsxs)(s.Z,Object.assign({sx:Object.assign(Object.assign({},d),b)},g&&{onClick:g},{children:[t,o&&(0,r.jsxs)(r.Fragment,{children:[" ",(0,r.jsx)(p,{link:o},void 0)]},void 0)]}),void 0);return(0,r.jsx)(a.ZP,Object.assign({tip:f,delay:500,sx:P,bg:"bg4",placement:u,arrow:!0,enablePortal:!O},y,{children:(0,r.jsx)(n.Z,Object.assign({sx:Object.assign(Object.assign(Object.assign({},c),v),m?{borderBottom:"none"}:{})},{children:i}),void 0)}),void 0)}))}}]);