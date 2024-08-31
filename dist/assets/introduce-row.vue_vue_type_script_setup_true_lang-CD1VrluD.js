import{T as E,a as I,P as V}from"./index-B4rY1Ymw.js";import{a8 as z,am as h,t as D,a9 as H,aa as W}from"./antd-DmgnH5Vs.js";import{d as B,a4 as k,ab as R,ac as t,a7 as e,af as r,S as g,ai as j,a2 as G,f as w,s as S,o as L,j as M,k as a,at as v,au as m,u as y,G as b}from"./vue-fN1Vr7K9.js";import{_ as P}from"./index-CfvVur41.js";import C from"./trend-CDFcSs09.js";const O={class:"chartCard"},U={class:"chartTop"},q={class:"metaWrap"},J={class:"meta"},K={class:"title"},Q={class:"action"},X={class:"total"},Y={class:"contentFixed"},Z={class:"footer"},tt=B({__name:"chart-card",props:{loading:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},title:{type:String,default:""},total:{type:Number},contentHeight:{type:Number}},setup(o){const i=o;return(n,x)=>{const c=z;return k(),R(c,{bind:i,"body-style":{padding:"20px 24px 8px 24px"}},{default:t(()=>[e("div",O,[e("div",U,[e("div",q,[e("div",J,[e("span",K,r(o.title),1),e("span",Q,[g(n.$slots,"action",{},void 0,!0)])]),e("div",X,[g(n.$slots,"total",{},void 0,!0)])])]),e("div",{class:"content",style:j({height:`${o.contentHeight}px`||"auto"})},[e("div",Y,[g(n.$slots,"default",{},void 0,!0)])],4),e("div",Z,[g(n.$slots,"footer",{},void 0,!0)])])]),_:3},8,["bind"])}}}),$=P(tt,[["__scopeId","data-v-00509e27"]]),et={class:"field"},at={class:"label"},ot={class:"number"},nt=B({__name:"field",props:{label:{type:String,default:""},value:{type:String,default:""}},setup(o){return(i,n)=>(k(),G("div",et,[e("span",at,r(o.label),1),e("span",ot,r(o.value),1)]))}}),T=P(nt,[["__scopeId","data-v-2269717f"]]),lt=e("span",{class:"trendText"},"12%",-1),st=e("span",{class:"trendText"},"11%",-1),it=e("span",null,r("78%"),-1),rt={style:{whiteSpace:"nowrap",overflow:"hidden"}},dt=e("span",{class:"trendText"},"12%",-1),ct=e("span",{class:"trendText"},"11%",-1),gt=B({__name:"introduce-row",props:{loading:{type:Boolean,default:!1}},setup(o){function i(s){return s.toLocaleString()}const n={xs:24,sm:12,md:12,lg:12,xl:6,style:{marginBottom:"24px"}},x=w(),c=w(),F=w(),N=[7,5,4,2,4,7,5,6,5,9,6,3,1,5,3,6,5],u=S(),_=S(),f=S();return L(()=>{var s,d,l;u.value=new E(x.value,{height:46,data:N,smooth:!0,autoFit:!0,areaStyle:{fill:"l(270) 0:#ffffff 0.5:#d4bcf2 1:#975FE4"},line:{color:"#975FE4"}}),(s=u.value)==null||s.render(),_.value=new I(c.value,{height:46,autoFit:!0,data:N}),(d=_.value)==null||d.render(),f.value=new V(F.value,{height:46,autoFit:!0,percent:.78,barWidthRatio:.2,color:"#13C2C2"}),(l=f.value)==null||l.render()}),M(()=>{var s,d,l;(s=u.value)==null||s.destroy(),u.value=void 0,(d=_.value)==null||d.destroy(),_.value=void 0,(l=f.value)==null||l.destroy(),f.value=void 0}),(s,d)=>{const l=D,p=H,A=W;return k(),R(A,{gutter:24},{default:t(()=>[a(p,v(m({...n})),{default:t(()=>[a($,{bordered:!1,title:"总销售额",loading:o.loading,"content-height":46},{action:t(()=>[a(l,{title:"指标说明"},{default:t(()=>[a(y(h))]),_:1})]),total:t(()=>[e("span",null,r(`¥${i(126560)}`),1)]),footer:t(()=>[a(T,{label:"日销售额",value:"￥12,423"})]),default:t(()=>[a(C,{flag:"up",style:{marginRight:"16px"}},{default:t(()=>[b(" 周同比 "),lt]),_:1}),a(C,{flag:"down"},{default:t(()=>[b(" 日同比 "),st]),_:1})]),_:1},8,["loading"])]),_:1},16),a(p,v(m({...n})),{default:t(()=>[a($,{bordered:!1,title:"访问量",loading:o.loading,"content-height":46},{action:t(()=>[a(l,{title:"指标说明"},{default:t(()=>[a(y(h))]),_:1})]),total:t(()=>[e("span",null,r(`${i(8846)}`),1)]),footer:t(()=>[a(T,{label:"日访问量",value:i(1234)},null,8,["value"])]),default:t(()=>[e("div",{ref_key:"tinyAreaContainer",ref:x},null,512)]),_:1},8,["loading"])]),_:1},16),a(p,v(m({...n})),{default:t(()=>[a($,{bordered:!1,title:"支付笔数",loading:o.loading,"content-height":46},{action:t(()=>[a(l,{title:"指标说明"},{default:t(()=>[a(y(h))]),_:1})]),total:t(()=>[e("span",null,r(`${i(6560)}`),1)]),footer:t(()=>[a(T,{label:"转化率",value:"60%"})]),default:t(()=>[e("div",{ref_key:"tinyColumnContainer",ref:c},null,512)]),_:1},8,["loading"])]),_:1},16),a(p,v(m({...n})),{default:t(()=>[a($,{bordered:!1,title:"运营活动效果",loading:o.loading,"content-height":46},{action:t(()=>[a(l,{title:"指标说明"},{default:t(()=>[a(y(h))]),_:1})]),total:t(()=>[it]),footer:t(()=>[e("div",rt,[a(C,{flag:"up",style:{marginRight:"16px"}},{default:t(()=>[b(" 周同比 "),dt]),_:1}),a(C,{flag:"down"},{default:t(()=>[b(" 日同比 "),ct]),_:1})])]),default:t(()=>[e("div",{ref_key:"progressContainer",ref:F},null,512)]),_:1},8,["loading"])]),_:1},16)]),_:1})}}});export{gt as _};
