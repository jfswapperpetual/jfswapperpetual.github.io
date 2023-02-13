"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[7128],{27657:(e,t,r)=>{r.d(t,{Q:()=>c});var n=r(11001),i=r(73121);const{coin:s,cont:o}=n.SW;function c(){const{unit:e}=(0,i.F7)();return{isCoinUnit:e===s,isContUnit:e===o}}},17128:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var n=r(52322),i=r(2784),s=r(75486),o=r.n(s),c=r(69099),a=r(38896),u=r(59895),l=r(37127),y=r(12374),m=r(19614),p=(r(86067),r(23131)),d=r(97060),v=r(9205),b=r(11001),f=r(29261),k=r(73121),T=r(37227),h=r(35090),g=r(1633),M=r(65588),D=r(75020),I=r(4929),O=r(27657);const S=({symbol:e,type:t,priceType:r})=>`${e}@${t}@${r}`,C=e=>{const[t,r,n]=e.split("@");return{symbol:t,type:r,priceType:n}};var x=function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((n=n.apply(e,t||[])).next())}))};const{brandName:P=""}=window.brokerConfig,j=[p.ls.TRADING,p.ls.DELIVERING];var w;!function(e){e.Futures="futures",e.FuturesMark="futures-mark",e.FuturesIndex="futures-index",e.Delivery="delivery",e.DeliveryMark="delivery-mark",e.DeliveryIndex="delivery-index"}(w||(w={}));const F=({ticker:e,name:t,productType:r,pricePrecision:n})=>({name:t,fullName:t,description:t,ticker:e,tickSize:Math.pow(10,n),exchange:P,supportedResolutions:c.k.DefaultResolutions,type:r});var V=r(54163);var $=r(23716),L=function(e,t,r,n){return new(r||(r=Promise))((function(i,s){function o(e){try{a(n.next(e))}catch(e){s(e)}}function c(e){try{a(n.throw(e))}catch(e){s(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((n=n.apply(e,t||[])).next())}))};const R="myTradingView",E=e=>{[l.sy,l.O7].map((e=>o().createInstance({name:e}))).forEach((t=>t.setItem(R,e)))},A=({symbol:e,namespace:t,useMiniTicker:r=!1})=>{const s=c.k.Store.createStore(t),l=s(c.k.Store.getTrueInterval),[p]=s(c.k.Store.getPriceType),A=(0,a.Vh)(),{contractType:q}=A[e]||{},{datafeed:U,symbolsInfo:B}=(({namespace:e,useMiniTicker:t=!1})=>{const r=c.k.Store.createStore(e),{getI18n:n}=(0,d.ZK)("trd-chart","trade-ui"),{getI18n:s}=(0,d.yk)(),o=(0,a.Vh)(),u=(0,i.useRef)(o),{isContUnit:l}=(0,O.Q)(),y=(0,a._n)(),[m]=r(c.k.Store.getPriceType),p=(0,i.useRef)(y),v=(0,i.useRef)(m);u.current=o,p.current=y,v.current=m;const b=(0,i.useMemo)((()=>l?I.D:I.V),[l]),f=(0,i.useMemo)((()=>s("usdtFutures-13",{defaultValue:"Futures"})||""),[s]),k=(0,i.useMemo)((()=>s("inverseFutures-13",{defaultValue:"Delivery"})||""),[s]),V=(0,i.useMemo)((()=>n("indexPrice",{defaultValue:"Index Price"})||""),[n]),$=(0,i.useMemo)((()=>n("markPrice",{defaultValue:"Mark Price"})||""),[n]),L=(0,i.useMemo)((()=>n("lastPrice",{defaultValue:"Last Price"})||""),[n]),R=(0,i.useMemo)((()=>({exchanges:[{name:P,value:P,desc:""}],symbols_types:[{name:f,value:w.Futures},{name:`${f} ${$}`,value:w.FuturesMark},{name:`${f} ${V}`,value:w.FuturesIndex}]})),[k,f,V,$]),E=(0,i.useCallback)((()=>x(void 0,void 0,void 0,(function*(){try{yield(({checker:e,interval:t=1e3,timeout:r=1e4})=>{let n;return Promise.race([new Promise((r=>{n=setInterval((()=>e()&&r()),t)})),new Promise(((e,t)=>{setTimeout((()=>t(new Error("timeout"))),r)}))]).finally((()=>clearInterval(n)))})({checker:()=>Object.keys(u.current).length>0})}catch(e){}const e=u.current;return Object.keys(e).reduce(((t,r)=>{const{symbol:n,pricePrecision:i,isDelivery:o,contractStatus:a,contractType:u}=e[r];if(!j.includes(a))return t;const{symbol:l,contractTypeI18n:y,deliveryDateFormat:m}=(0,T.H)(e[r],s),p=`${l} ${y}${m?` ${m}`:""}`,d=S({symbol:n,type:u,priceType:c.k.Store.PriceType.Last}),v=S({symbol:n,type:u,priceType:c.k.Store.PriceType.Index}),b=S({symbol:n,type:u,priceType:c.k.Store.PriceType.Mark});return t[d]=F({ticker:d,name:`${p} ${L}`,productType:o?w.Delivery:w.Futures,pricePrecision:i}),t[v]=F({ticker:v,name:`${p} ${V}`,productType:o?w.DeliveryIndex:w.FuturesIndex,pricePrecision:i}),t[b]=F({ticker:b,name:`${p} ${$}`,productType:o?w.DeliveryMark:w.FuturesMark,pricePrecision:i}),t}),{})}))),[s,V,$,L]),A=(0,i.useCallback)((({symbolInfo:e,resolution:t,rangeStartDate:r,rangeEndDate:n})=>x(void 0,void 0,void 0,(function*(){const i=u.current,{symbol:s="",priceType:o=v.current}=C(e.ticker||""),{pair:a,contractType:l,contractVal:y,isDelivery:m}=i[s],p=Math.max(0,1e3*r),d=1e3*n,f=c.k.utils.TVResolutionToTrueInterval[t],k=m?b(y):e=>e,T=(0,D.b)({symbol:s,pair:a,contractType:l,interval:f,isDelivery:m,priceType:o});return(yield(0,M.M)({onFetchKlineData:T,startTime:p,endTime:d})).map(k)}))),[b]),q=(0,i.useCallback)((({symbolInfo:e,resolution:r,callback:n})=>{const i=u.current,{symbol:s="",priceType:o=v.current}=C(e.ticker||""),{pair:a,contractType:l,contractVal:y,isDelivery:m}=i[s],p=c.k.utils.TVResolutionToTrueInterval[r],d=m?b(y):e=>e;return(0,g.Ld)({symbol:s,pair:a,contractType:l,interval:p,priceType:o,isDelivery:m,useMiniTicker:t,checkIfInSync:()=>!0,callback:e=>n(d(e))})}),[b,t]),U=(0,i.useCallback)((()=>x(void 0,void 0,void 0,(function*(){const{serverTime:e}=yield(0,h.b)(!0);return Math.floor(parseInt(`${e}`,10)/1e3)}))),[]),B=(0,i.useMemo)((()=>c.k.createDatafeed()),[]),{datafeed:_,symbolsInfo:N}=B({config:R,onFetchSymbolsInfo:E,onFetchBars:A,onSubscribeBars:q,onFetchServerTimeApi:U});return{datafeed:_,symbolsInfo:N}})({namespace:t,useMiniTicker:r}),_=(0,a.Fg)(),N="light"===_?m.ib:m.Cs,H=(0,y.k)(_),Q=(0,i.useMemo)((()=>o().createInstance({name:t})),[t]),K=(0,i.useMemo)((()=>S({symbol:e,type:q,priceType:p})),[e,q,p]),W=(0,i.useRef)(-1),{executionOrders:G}=(({symbol:e,namespace:t})=>{const r=c.k.OrderHistoryStore.createStore(t),[n]=r(c.k.OrderHistoryStore.getOrderHistory),{getI18n:s}=(0,d.KL)(),o=(({symbol:e})=>{const{getI18n:t}=(0,v.yk)(),r=(0,f.AM)(),{baseAsset:n,marginAsset:i,isDelivery:s}=r[e]||{},{unit:o}=(0,k.F7)();return s?o===b.SW.coin?n:t("Cont"):o===b.AO.usdt?i:n})({symbol:e}),u=(0,a.AM)(),{baseAsset:l,pricePrecision:y,quantityPrecision:m,equalQtyPrecision:p,isDelivery:T,contractVal:h}=u[e]||{},g=(0,i.useMemo)((()=>s("openOrder-sideBuyBOTH",{defaultValue:"Buy"})||""),[s]),M=(0,i.useMemo)((()=>s("openOrder-sideSellBOTH",{defaultValue:"Sell"})||""),[s]),D=(0,i.useMemo)((()=>{switch(o){case l:return T?p:m;default:return T?m:y}}),[T,o,l,p,y,m]),I=(0,i.useCallback)((({avgPrice:e,executedQty:t})=>T?(0,V.GW)(o===l?(({price:e,cont:t,contractVal:r})=>t*r/e)({price:e,cont:t,contractVal:h}):t,D):(0,V.mD)(o===l?t:t*e,D)),[l,h,T,D,o]);return{executionOrders:(0,i.useMemo)((()=>n.filter((({status:e,executedQty:t})=>"FILLED"===e.toUpperCase()||"PARTIAL FILL"===e.toUpperCase()||"PARTIALLY_FILLED"===e.toUpperCase()||"EXPIRED"===e.toUpperCase()&&t>0||"CANCELED"===e.toUpperCase()&&t>0)).map((({id:e,avgPrice:t,side:r,time:n,executedQty:i})=>{const s=`${"BUY"===r?g:M} ${I({avgPrice:t,executedQty:i})} @ ${(+t).toFixed(y)}`;return{id:e,text:"",price:+t,quantity:"",time:Math.round(n/1e3),isBuy:"BUY"===r,tooltip:s}}))),[n,g,M,I,y])}})({symbol:e,namespace:t});(0,u.M)(e,r),(0,u.j)({symbol:e,interval:l,priceType:p});const Y=(0,i.useCallback)((()=>{W.current=Date.now()}),[]),X=(0,i.useCallback)((e=>L(void 0,void 0,void 0,(function*(){return E(e)}))),[]),Z=(0,i.useCallback)((()=>{}),[]),z=(0,i.useCallback)((()=>L(void 0,void 0,void 0,(function*(){const e=yield Q.getItem(R);E(e)}))),[Q]),J=(0,i.useCallback)((e=>$.log("tv-error",e)),[]),ee=(0,i.useCallback)((()=>{}),[]),te=(0,i.useCallback)((()=>{}),[]);return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(c.k.Containers.TradingView,{namespace:t,theme:N,storageName:R,tradingViewProps:{symbol:K,symbolsInfo:B,theme:H,limitOrders:[],positionOrders:[],executionOrders:G,initialConfig:{tvConfig:{library_path:"charting_library_next/",symbol:K,theme:H,datafeed:U},onScriptLoaded:Y,onSave:X,onChartReadyDone:Z,onWillUnmount:z,onCreateOrderShapesError:J,onFirstTimeDataLoadedDone:ee,onSetThemeDone:te}}},void 0)},void 0)}},59895:(e,t,r)=>{r.d(t,{j:()=>c,M:()=>a});var n=r(2784),i=r(69099),s=r(23131),o=r(29261);const c=({symbol:e,interval:t,priceType:r})=>{const{pair:c,contractType:a,isDelivery:u}=(0,o.Vh)()[e]||{},l=(0,n.useRef)();(0,n.useEffect)((()=>{if(!c||!a)return()=>null;const n="mark"===r?e:c;return l.current=void 0,i.k.utils.intervalToMillseconds(t),(u?(0,s.RU)():(0,s.BN)()).getContinuousKlineStream(n,a,t,{priceType:r,symbol:e}).subscribe((e=>{l.current&&(e.time,l.current.time),l.current=e}))}),[c,e,t,a,r,u])},a=(e,t)=>{const{isDelivery:r}=(0,o.Vh)()[e]||{},i=(0,n.useRef)();(0,n.useEffect)((()=>t?()=>null:(r?(0,s.RU)():(0,s.BN)()).getStreamTradeSnap(e).subscribe((e=>{const t=e[e.length-1];i.current&&(t.tradeTime,i.current.tradeTime),i.current=t}))),[r,e,t])}},75020:(e,t,r)=>{r.d(t,{b:()=>i});var n=r(95226);const i=({symbol:e,pair:t,contractType:r,interval:i,isDelivery:s,priceType:o})=>c=>s&&"last"===o?(0,n.kV)(Object.assign(Object.assign({},c),{pair:t,contractType:r,interval:i})):s&&"mark"===o?(0,n.uX)(Object.assign(Object.assign({},c),{symbol:e,interval:i})):s&&"index"===o?(0,n.te)(Object.assign(Object.assign({},c),{pair:t,interval:i})):"mark"===o?(0,n.C1)(Object.assign(Object.assign({},c),{symbol:e,interval:i})):"index"===o?(0,n.hH)(Object.assign(Object.assign({},c),{pair:t,interval:i})):(0,n.MZ)(Object.assign(Object.assign({},c),{pair:t,contractType:r,interval:i}))},65588:(e,t,r)=>{r.d(t,{M:()=>n});const n=({onFetchKlineData:e,startTime:t,endTime:r,limit:n=1e3})=>{return i=void 0,s=void 0,c=function*(){const i=[];let s=[],o=r;const c=0!==r;do{if(s=yield e(Object.assign(Object.assign({},0===o?{}:{endTime:o}),{limit:n})),0===s.length)break;s.forEach((([e,t,r,n,s,o,,c])=>{i.push({time:+e,open:+t,high:+r,low:+n,close:+s,volume:+o,quantity:+c})})),o=s[0][0]-1}while(s.length===n&&o>t&&c);return i.sort(((e,t)=>e.time-t.time)),i},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{a(c.next(e))}catch(e){t(e)}}function n(e){try{a(c.throw(e))}catch(e){t(e)}}function a(t){var i;t.done?e(t.value):(i=t.value,i instanceof o?i:new o((function(e){e(i)}))).then(r,n)}a((c=c.apply(i,s||[])).next())}));var i,s,o,c}},4929:(e,t,r)=>{r.d(t,{D:()=>i,V:()=>n});const n=e=>t=>Object.assign(Object.assign({},t),{volume:t.quantity,quantity:t.volume*e}),i=e=>t=>Object.assign(Object.assign({},t),{volume:t.volume,quantity:t.volume*e})},1633:(e,t,r)=>{r.d(t,{Ld:()=>a});var n=r(69099),i=r(23131),s=r(23716);const o=e=>e,c=e=>e,a=({symbol:e,pair:t,contractType:r,interval:a,priceType:u,isDelivery:l,useMiniTicker:y,callback:m,checkIfInSync:p=(()=>!0)})=>{const d=(0,i.BN)(),v="mark"===u?e:t,b=d.getContinuousKlineStream(v,r,a,{priceType:u,symbol:e});b.selector=o;const f=y?d.getStreamTickers():d.getStreamTradeSnap(e);f.selector=y?(e=>t=>t[e])(e):c;const k=function(e=[]){const t=[];function r(){t.forEach((e=>e()))}return r.subscribe=function(r){const n=[];e.forEach(((e,i)=>{const s=e.subscribe((t=>{n[i]=e.selector(t),r(n)}));t.push(s)}))},r}([b,f]);return k.subscribe((([e,t])=>{if(!t||!e||!p())return;const r=Object.assign({},e);if("last"===u){const e=Array.isArray(t)?t.slice(-1).pop():t,i=n.k.utils.intervalToMillseconds(a),o=+(e.price||e.lastPrice),c=+(e.quantity||e.quoteVolume),u=e.tradeTime||e.eventTime;try{if("1M"===a){const e=new Date(u),t=new Date(r.time).getMonth();if(e.getMonth()>t){const e=+new Date(r.time).setMonth(t+1);Object.assign(r,Object.assign({time:e,open:o,high:o,low:o,close:o},y?{volume:0,quantity:0}:{volume:c,quantity:c}))}}else if(u-r.time>i){const e=r.time+Math.floor((u-r.time)/i)*i;Object.assign(r,Object.assign({time:e,open:o,high:o,low:o,close:o},y?{volume:0,quantity:0}:{volume:c,quantity:c}))}}catch(e){s.error(e)}r.close=o}m(r,e)})),k}}}]);