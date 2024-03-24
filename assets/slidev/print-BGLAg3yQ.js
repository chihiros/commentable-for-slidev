function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-WVU9S3If.js","assets/modules/vue-BvJ_S139.js","assets/index-8nRLaM2k.js","assets/modules/shiki-DuTKT9d9.js","assets/modules/shiki-BSchMNmt.css","assets/index-CEIxCN_q.css","assets/slidev/bottom-xhetVYjb.js","assets/bottom-DbIWt59F.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as m,y as c,M,Y as L,J as V,o as a,b as u,l as d,A as r,i as B,c as f,g as w,h as R,F as p,Z as E,e as b,f as j,C as z,_ as G}from"../modules/vue-BvJ_S139.js";import{t as W}from"../modules/shiki-DuTKT9d9.js";import{G as D,g as I,S as O,a as T,w as H}from"./bottom-xhetVYjb.js";import{s as J,a as k,_ as K,c as g,i as X,b as _,u as y,d as $,C as Y,e as N,f as h,g as Z}from"../index-8nRLaM2k.js";import{P as Q}from"./PrintStyle-B8jgCNBN.js";function U(l){return Array.from(new Set(l))}function q(...l){let e,n,t;l.length===1?(e=0,t=1,[n]=l):[e,n,t=1]=l;const s=[];let o=e;for(;o<n;)s.push(o),o+=t||1;return s}function ee(l,e){if(!e||e==="all"||e==="*")return q(1,l+1);if(e==="none")return[];const n=[];for(const t of e.split(/[,;]/g))if(!t.includes("-"))n.push(+t);else{const[s,o]=t.split("-",2);n.push(...q(+s,o?+o+1:l+1))}return U(n).filter(t=>t<=l).sort((t,s)=>t-s)}const te=["id"],ne=m({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(l){const{nav:e}=l,n=c(()=>e.currentSlideRoute.value),t=c(()=>({height:`${J.value}px`,width:`${k.value}px`})),s=M();K(()=>import("./DrawingPreview-WVU9S3If.js").then(i=>i.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(i=>s.value=i.default);const o=c(()=>`${n.value.no.toString().padStart(3,"0")}-${(e.clicks.value+1).toString().padStart(2,"0")}`);return L(X,V({nav:e,configs:g,themeConfigs:c(()=>g.themeConfig)})),(i,C)=>(a(),u("div",{id:o.value,class:"print-slide-container",style:R(t.value)},[d(r(D)),d(O,{is:n.value.component,"clicks-context":i.nav.clicksContext.value,class:B(r(I)(n.value)),route:n.value},null,8,["is","clicks-context","class","route"]),s.value?(a(),f(r(s),{key:0,page:n.value.no},null,8,["page"])):w("v-if",!0),d(r(T))],12,te))}}),A=_(ne,[["__file","/home/runner/work/commentable-for-slidev/commentable-for-slidev/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),se=m({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(l){const{route:e}=l,{isPrintWithClicks:n}=y(),t=$(e,n.value?0:Y);return(s,o)=>(a(),u(p,null,[d(A,{"clicks-context":r(t),nav:r(N)(s.route,r(t))},null,8,["clicks-context","nav"]),r(n)?(a(!0),u(p,{key:0},E(r(t).total,i=>(a(),f(A,{key:i,nav:r(N)(s.route,r($)(s.route,i))},null,8,["nav"]))),128)):w("v-if",!0)],64))}}),le=_(se,[["__file","/home/runner/work/commentable-for-slidev/commentable-for-slidev/node_modules/@slidev/client/internals/PrintSlide.vue"]]),re={id:"print-content"},oe=m({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(l){const e=l,{slides:n,currentRoute:t}=y(),s=c(()=>e.width),o=c(()=>e.width/h.value),i=c(()=>s.value/o.value),C=c(()=>i.value<h.value?s.value/k.value:o.value*h.value/k.value);let v=n.value;t.value.query.range&&(v=ee(v.length,t.value.query.range).map(P=>v[P-1]));const F=c(()=>({"select-none":!g.selectable}));return L(Z,C),(S,P)=>(a(),u("div",{id:"print-container",class:B(F.value)},[b("div",re,[(a(!0),u(p,null,E(r(v),x=>(a(),f(le,{key:x.no,route:x},null,8,["route"]))),128))]),j(S.$slots,"controls")],2))}}),ie=_(oe,[["__file","/home/runner/work/commentable-for-slidev/commentable-for-slidev/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ce=b("div",{id:"twoslash-container"},null,-1),ue=m({__name:"print",setup(l){const{isPrintMode:e}=y();return z(()=>{e?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),G(()=>{W()}),(n,t)=>(a(),u(p,null,[r(e)?(a(),f(Q,{key:0})):w("v-if",!0),b("div",ae,[d(ie,{class:"w-full h-full",style:R({background:"var(--slidev-slide-container-background, black)"}),width:r(H).width.value},null,8,["style","width"])]),ce],64))}}),_e=_(ue,[["__file","/home/runner/work/commentable-for-slidev/commentable-for-slidev/node_modules/@slidev/client/pages/print.vue"]]);export{_e as default};
