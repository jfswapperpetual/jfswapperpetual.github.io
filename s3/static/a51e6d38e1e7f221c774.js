(self.webpackChunkcloud_trade_sdk=self.webpackChunkcloud_trade_sdk||[]).push([[8093],{27986:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(5163),o=r(2784),a=r(98569),i=r(62143),c=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{d:"M3 10.5v3h18v-3H3z",fill:"currentColor"}))},u=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",fill:"currentColor"}))},s=function(e){return e["data-indeterminate"]?o.createElement(c,(0,n.__assign)({},e)):o.createElement(u,(0,n.__assign)({},e))},l=(0,o.forwardRef)((function(e,t){var r=e.className,a=e.sx,c=e.defaultChecked,u=void 0!==c&&c,l=e.checked,d=e.indeterminate,f=void 0!==d&&d,b=e.size,v=void 0===b?16:b,p=e.onChange,h=e.children,m=(0,n.__rest)(e,["className","sx","defaultChecked","checked","indeterminate","size","onChange","children"]),x=o.useRef(null!=l).current,j=o.useState(u),g=j[0],y=j[1];return x&&l!==g&&y(void 0!==l&&l),o.createElement(o.Fragment,null,o.createElement(i.Z,{className:r,sx:a,__css:{mr:"xs",flexShrink:0,width:v,height:v,lineHeight:"number"==typeof v?v+"px":v,"> svg":{boxSizing:"border-box",cursor:"pointer",border:"1px solid",borderColor:"t.disabled",borderRadius:"small",maxWidth:"100%",maxHeight:"100%",bg:"transparent",fill:"transparent"},"> svg path":{fill:"inherit"},":hover":{"input:not(:disabled) ~ svg":{borderColor:"primary"}},"input:checked ~ svg":{border:"none",bg:"primary",fill:f?"checkbox.indeterminateFill":"bg1"},"input:disabled ~ svg":{cursor:"not-allowed",bg:"line",fill:"line",border:"none"},"input:checked:disabled ~ svg":{fill:"t.disabled"}}},o.createElement(i.Z,(0,n.__assign)({ref:t,as:"input",type:"checkbox","data-bn-type":"checkbox",hidden:!0},m,{checked:g,"data-indeterminate":g&&f,onChange:function(e){var t=!g;x||y(t),e.target.checked=t,e.currentTarget.checked=t,p&&p(e)},sx:{position:"absolute",opacity:0,zIndex:-1,width:1,height:1,overflow:"hidden"}})),o.createElement(s,{"aria-hidden":"true","data-indeterminate":f})),h)}));l.displayName="Checkbox";const d=l},33322:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(5163),o=r(2784),a=r(92036),i=(0,o.forwardRef)((function(e,t){var r=a.Z;return o.createElement(r,(0,n.__assign)({ref:t,as:"label",tx:"forms",variant:"label"},e,{__css:{alignItems:"center"}}))}));i.displayName="Label";const c=i},71927:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(5163),o=r(2784),a=r(98569);const i=function(e){return o.createElement(a.Z,(0,n.__assign)({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",fill:"currentColor"}))}},67993:(e,t,r)=>{var n=r(752),o=r(90249);e.exports=function(e,t){return e&&n(t,o(t),e)}},55906:(e,t,r)=>{var n=r(752),o=r(18582);e.exports=function(e,t){return e&&n(t,o(t),e)}},18874:(e,t,r)=>{var n=r(86571),o=r(72517),a=r(60091),i=r(67993),c=r(55906),u=r(92175),s=r(51522),l=r(7680),d=r(19987),f=r(13483),b=r(76939),v=r(70940),p=r(99917),h=r(8222),m=r(78725),x=r(86152),j=r(73226),g=r(4714),y=r(29259),w=r(43679),_=r(90249),A=r(18582),E="[object Arguments]",k="[object Function]",C="[object Object]",S={};S[E]=S["[object Array]"]=S["[object ArrayBuffer]"]=S["[object DataView]"]=S["[object Boolean]"]=S["[object Date]"]=S["[object Float32Array]"]=S["[object Float64Array]"]=S["[object Int8Array]"]=S["[object Int16Array]"]=S["[object Int32Array]"]=S["[object Map]"]=S["[object Number]"]=S[C]=S["[object RegExp]"]=S["[object Set]"]=S["[object String]"]=S["[object Symbol]"]=S["[object Uint8Array]"]=S["[object Uint8ClampedArray]"]=S["[object Uint16Array]"]=S["[object Uint32Array]"]=!0,S["[object Error]"]=S[k]=S["[object WeakMap]"]=!1,e.exports=function e(t,r,I,M,R,T){var Z,z=1&r,F=2&r,O=4&r;if(I&&(Z=R?I(t,M,R,T):I(t)),void 0!==Z)return Z;if(!y(t))return t;var U=x(t);if(U){if(Z=p(t),!z)return s(t,Z)}else{var B=v(t),N=B==k||"[object GeneratorFunction]"==B;if(j(t))return u(t,z);if(B==C||B==E||N&&!R){if(Z=F||N?{}:m(t),!z)return F?d(t,c(Z,t)):l(t,i(Z,t))}else{if(!S[B])return R?t:{};Z=h(t,B,z)}}T||(T=new n);var D=T.get(t);if(D)return D;T.set(t,Z),w(t)?t.forEach((function(n){Z.add(e(n,r,I,n,t,T))})):g(t)&&t.forEach((function(n,o){Z.set(o,e(n,r,I,o,t,T))}));var L=U?void 0:(O?F?b:f:F?A:_)(t);return o(L||t,(function(n,o){L&&(n=t[o=n]),a(Z,o,e(n,r,I,o,t,T))})),Z}},74511:(e,t,r)=>{var n=r(70940),o=r(15125);e.exports=function(e){return o(e)&&"[object Map]"==n(e)}},8109:(e,t,r)=>{var n=r(70940),o=r(15125);e.exports=function(e){return o(e)&&"[object Set]"==n(e)}},34727:(e,t,r)=>{var n=r(79882);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},96058:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},70169:(e,t,r)=>{var n=r(50857),o=n?n.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},7680:(e,t,r)=>{var n=r(752),o=r(80633);e.exports=function(e,t){return n(e,o(e),t)}},19987:(e,t,r)=>{var n=r(752),o=r(12680);e.exports=function(e,t){return n(e,o(e),t)}},76939:(e,t,r)=>{var n=r(1897),o=r(12680),a=r(18582);e.exports=function(e){return n(e,a,o)}},12680:(e,t,r)=>{var n=r(65067),o=r(47353),a=r(80633),i=r(30981),c=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,a(e)),e=o(e);return t}:i;e.exports=c},99917:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,n=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},8222:(e,t,r)=>{var n=r(79882),o=r(34727),a=r(96058),i=r(70169),c=r(6190);e.exports=function(e,t,r){var u=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new u(+e);case"[object DataView]":return o(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return c(e,r);case"[object Map]":return new u;case"[object Number]":case"[object String]":return new u(e);case"[object RegExp]":return a(e);case"[object Set]":return new u;case"[object Symbol]":return i(e)}}},1395:(e,t,r)=>{var n=r(49432),o=r(50343),a=r(68286),i=r(36060);e.exports=function(e){var t=null==e?0:e.length,r=a;return e=t?o(e,(function(e){if("function"!=typeof e[1])throw new TypeError("Expected a function");return[r(e[0]),e[1]]})):[],i((function(r){for(var o=-1;++o<t;){var a=e[o];if(n(a[0],this,r))return n(a[1],this,r)}}))}},54073:(e,t,r)=>{var n=r(29259),o=r(61100),a=r(7642),i=Math.max,c=Math.min;e.exports=function(e,t,r){var u,s,l,d,f,b,v=0,p=!1,h=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(t){var r=u,n=s;return u=s=void 0,v=t,d=e.apply(n,r)}function j(e){return v=e,f=setTimeout(y,t),p?x(e):d}function g(e){var r=e-b;return void 0===b||r>=t||r<0||h&&e-v>=l}function y(){var e=o();if(g(e))return w(e);f=setTimeout(y,function(e){var r=t-(e-b);return h?c(r,l-(e-v)):r}(e))}function w(e){return f=void 0,m&&u?x(e):(u=s=void 0,d)}function _(){var e=o(),r=g(e);if(u=arguments,s=this,b=e,r){if(void 0===f)return j(b);if(h)return clearTimeout(f),f=setTimeout(y,t),x(b)}return void 0===f&&(f=setTimeout(y,t)),d}return t=a(t)||0,n(r)&&(p=!!r.leading,l=(h="maxWait"in r)?i(a(r.maxWait)||0,t):l,m="trailing"in r?!!r.trailing:m),_.cancel=function(){void 0!==f&&clearTimeout(f),v=0,u=b=s=f=void 0},_.flush=function(){return void 0===f?d:w(o())},_}},4714:(e,t,r)=>{var n=r(74511),o=r(47826),a=r(4146),i=a&&a.isMap,c=i?o(i):n;e.exports=c},43679:(e,t,r)=>{var n=r(8109),o=r(47826),a=r(4146),i=a&&a.isSet,c=i?o(i):n;e.exports=c},45126:(e,t,r)=>{var n=r(18874),o=r(26423);e.exports=function(e){return o(n(e,1))}},61100:(e,t,r)=>{var n=r(37772);e.exports=function(){return n.Date.now()}},34725:e=>{e.exports=function(){return!0}}}]);