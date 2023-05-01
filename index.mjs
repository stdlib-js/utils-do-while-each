// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function s(s,i,o,n){var l,d;if(!r(s))throw new TypeError(e("0jUBO",s));if(!t(i))throw new TypeError(e("0jU2S",i));if(!t(o))throw new TypeError(e("0jU3Z",o));if(0===(l=s.length)&&(i.call(n,void 0,void 0,s),0===(l=s.length)))return s;d=0;do{i.call(n,s[d],d,s),d+=1,l=s.length}while(d<l&&o(s[d-1],d-1,s));return s}export{s as default};
//# sourceMappingURL=index.mjs.map
