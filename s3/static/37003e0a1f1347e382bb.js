"use strict";(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[9467],{24336:(e,t,r)=>{r.d(t,{c:()=>i});var n=r(5163),a=r(2784),l=r(92036),i=function(e){var t=e.onClick,r=e.active,i=e.children,o=(0,n.__rest)(e,["onClick","active","children"]);return a.createElement(l.Z,(0,n.__assign)({},o,{onClick:t,sx:(0,n.__assign)({px:"ls",py:"sm",fontSize:"xs",color:r?"t.yellow":"t.primary",bg:"transparent",cursor:"pointer",alignItems:"center",":hover":{bg:"bg3"},"& > *:not(:last-child)":{mr:"5px"}},o.sx)}),i)}},76364:(e,t,r)=>{r.d(t,{a:()=>i});var n=r(5163),a=r(2784),l=r(92036),i=function(e){var t=e.children,r=(0,n.__rest)(e,["children"]);return a.createElement(l.Z,(0,n.__assign)({},r,{sx:(0,n.__assign)({bg:"popupBg",shadow:"0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",borderRadius:"4px",py:"5px",flexDirection:"column"},r.sx)}),t)}},39467:(e,t,r)=>{r.r(t),r.d(t,{OrderMark:()=>_,default:()=>f});var n=r(5163),a=r(2784),l=r(34274),i=r(21030),o=r(62143),s=r(92036),c=r(27986),p=r(55742),u=r(53935),d=r(6157),m=r(24336),x=r(76364),g=function(e){var t=e.values,r=e.options,n=e.onClickDropdownItem,l=a.createElement(x.a,null,r.map((function(e){var r=e.value,l=e.children,p=e.tooltip;return a.createElement(m.c,{key:""+r,active:!1,onClick:function(e){e.stopPropagation(),null==n||n(r)},sx:{px:"xs",py:"ls"}},a.createElement(o.Z,{sx:{width:"100%",display:"grid",gridTemplateColumns:"1fr auto auto"}},a.createElement(s.Z,{sx:{alignItems:"center",fontSize:"12px",lineHeight:"16px",marginRight:"5px"}},l),a.createElement(s.Z,{sx:{marginRight:"16px"}},p?a.createElement(i.Z,{enablePortal:!0,arrow:!0,placement:"top",tip:p,sx:{display:"flex",alignItems:"center"}},a.createElement(u.Z,{size:14,color:"t.third"})):null),a.createElement(s.Z,{sx:{alignItems:"center"}},a.createElement(c.Z,{sx:{width:"20px",height:"20px",margin:"0px"},checked:t.includes(r)}))))})));return a.createElement(p.ZP,{enablePortal:!0,trigger:"hover",overlay:l,sx:{display:"block"}},a.createElement(d.Z,{sx:{display:"block"},color:t.length>0?"t.yellow":"t.third",size:20}))},h=r(35208),_=function(e){var t=e.namespace,r=e.isFullscreen,o=e.options,s=e.orderHistoryTooltip,c=(0,h.u)({namespace:t,options:o,orderHistoryTooltip:s}),p=c.values,u=c.options,d=c.onClickItem,m=(0,l.Z)("","trade-ui").getI18n,x=(0,a.useMemo)((function(){return m("trd-chart-order-mark",{defaultValue:"Display Settings"})||""}),[m]),_=(0,a.useMemo)((function(){return u.map((function(e){var t=e.text,r=(0,n.__rest)(e,["text"]);return(0,n.__assign)({children:t},r)}))}),[u]);return a.createElement(i.Z,{enablePortal:!0,placement:r?"left":"top",arrow:!0,tip:x,sx:{cursor:"pointer",minWidth:"auto"}},a.createElement(g,{values:p,options:_,onClickDropdownItem:d}))};const f=_}}]);