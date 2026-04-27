"use strict";var h=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=h(function(q,m){
var g=require('@stdlib/assert-is-collection/dist'),s=require('@stdlib/assert-is-function/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function d(r,e,i,n){var u,a;if(!g(r))throw new TypeError(t('1THAh',r));if(!s(e))throw new TypeError(t('1TH2H',e));if(!s(i))throw new TypeError(t('1TH3N',i));if(u=r.length,u===0&&(e.call(n,void 0,void 0,r),u=r.length,u===0))return r;a=0;do e.call(n,r[a],a,r),a+=1,u=r.length;while(a<u&&i(r[a-1],a-1,r));return r}m.exports=d
});var w=v();module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
