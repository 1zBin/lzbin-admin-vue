import{d as P,f as c,s as R,o as S,b as E,a4 as M,ab as N,ac as e,a7 as t,k as n,G as o,u as i,m as f,A as y}from"./vue-fN1Vr7K9.js";import{b as O}from"./index-BYCIblO0.js";import{a6 as V,e as $,M as F,D as q,aq as A,ar as G,as as I,a8 as L}from"./antd-DmgnH5Vs.js";import{_ as U}from"./index-B5vk6X0H.js";import"./color-Cy5-zeZu.js";const j={class:"salesCardExtra"},z={class:"salesTypeRadio"},H=P({__name:"proportion-sales",props:{loading:{type:Boolean,default:!1}},setup(g){const s=c("all"),m=c(),x=c(),v=c();function h(a){s.value=a.target.value}const d=R([]);function u(a,l){const r=new O(a,{appendPadding:10,data:l,angleField:"y",colorField:"x",radius:1,innerRadius:.6,label:{type:"spider",formatter:_=>`${_.x}: ${_.y.toLocaleString()}`},legend:!1,interactions:[{type:"element-selected"},{type:"element-active"}],statistic:{title:{content:"销售额"}}});r.render(),d.value.push(r)}const C=[{x:"家用电器",y:4544},{x:"食用酒水",y:3321},{x:"个护健康",y:3113},{x:"服饰箱包",y:2341},{x:"母婴产品",y:1231},{x:"其他",y:1231}],b=[{x:"家用电器",y:244},{x:"食用酒水",y:321},{x:"个护健康",y:311},{x:"服饰箱包",y:41},{x:"母婴产品",y:121},{x:"其他",y:111}],T=[{x:"家用电器",y:99},{x:"食用酒水",y:188},{x:"个护健康",y:344},{x:"服饰箱包",y:255},{x:"其他",y:65}];return S(()=>{u(m.value,C),u(x.value,b),u(v.value,T)}),E(()=>{d.value.forEach(a=>{var l;(l=a==null?void 0:a.destroy)==null||l.call(a)}),d.value=[]}),(a,l)=>{const r=$,_=F,w=q,p=A,k=G,D=I,B=L;return M(),N(B,{loading:g.loading,class:"salesCard",bordered:!1,title:"销售额类别占比",style:{height:"100%"}},{extra:e(()=>[t("div",j,[n(w,{placement:"bottomRight"},{overlay:e(()=>[n(_,null,{default:e(()=>[n(r,null,{default:e(()=>[o("操作一")]),_:1}),n(r,null,{default:e(()=>[o("操作二")]),_:1})]),_:1})]),default:e(()=>[n(i(V))]),_:1}),t("div",z,[n(k,{value:i(s),onChange:h},{default:e(()=>[n(p,{value:"all"},{default:e(()=>[o(" 全部渠道 ")]),_:1}),n(p,{value:"online"},{default:e(()=>[o(" 线上 ")]),_:1}),n(p,{value:"stores"},{default:e(()=>[o(" 门店 ")]),_:1})]),_:1},8,["value"])])])]),default:e(()=>[t("div",null,[n(D,null,{default:e(()=>[o("销售额")]),_:1}),f(t("div",{ref_key:"pieContainer1",ref:m},null,512),[[y,i(s)==="all"]]),f(t("div",{ref_key:"pieContainer2",ref:x},null,512),[[y,i(s)==="online"]]),f(t("div",{ref_key:"pieContainer3",ref:v},null,512),[[y,i(s)==="stores"]])])]),_:1},8,["loading"])}}}),Y=U(H,[["__scopeId","data-v-06bbb53c"]]);export{Y as default};
