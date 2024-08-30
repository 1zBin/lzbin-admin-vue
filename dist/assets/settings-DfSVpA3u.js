import{af as J,X as L,Y as Q,u as X,v as Y,ag as E,H as $,Q as W,a9 as T,c as Z,ah as tt,aa as z,a8 as w,a2 as U,x as A,y as q,ai as et,aj as at,ak as nt,w as st,M as ot}from"./antd-DmgnH5Vs.js";import{d as x,aq as N,f as B,r as R,c as C,a4 as l,ab as i,ac as a,k as n,u as e,G as k,af as g,a7 as v,J as ct,ag as h,H as lt}from"./vue-fN1Vr7K9.js";import{_ as V}from"./index-B5vk6X0H.js";const it={class:"flex flex-col items-center"},ut=v("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",alt:""},null,-1),rt=x({__name:"basic-setting",setup(O){const{t}=N(),c=B(),y={span:0},p={span:13},o=R({eamil:"AntdvPro@abc.com",name:"AntdvPro",region:void 0,desc:"",address:"",phoneNumber:""}),r=C(()=>({name:[{required:!0,message:t("account.settings.form-rule-name"),trigger:"change"}],phoneNumber:[{required:!0,message:t("account.settings.form-rule-phoneNumber"),trigger:"change"}],address:[{required:!0,message:t("account.settings.form-rule-address"),trigger:"change"}],region:[{required:!0,message:t("account.settings.form-rule-region"),trigger:"change"}],eamil:[{required:!0,message:t("account.settings.form-rule-email"),trigger:"change"}],desc:[{required:!0,message:t("account.settings.form-rule-desc"),trigger:"blur"}]}));function m(){c.value.validate().then(()=>{console.log("values",o,ct(o))}).catch(d=>{console.log("error",d)})}function _(){console.log("change")}return(d,s)=>{const f=L,b=Q,D=X,K=Y,M=E,I=$,F=W,S=T,j=Z,H=tt,P=z,G=w;return l(),i(G,{title:e(t)("account.settings.basic-setting"),bordered:!1},{default:a(()=>[n(P,null,{default:a(()=>[n(S,{span:12},{default:a(()=>[n(F,{ref_key:"formRef",ref:c,model:e(o),rules:e(r),"label-col":y,"wrapper-col":p},{default:a(()=>[n(b,{"label-col":{span:24},label:e(t)("account.settings.form-email"),name:"eamil"},{default:a(()=>[n(f,{value:e(o).eamil,"onUpdate:value":s[0]||(s[0]=u=>e(o).eamil=u),placeholder:e(t)("account.settings.form-input-plac"),style:{width:"320px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(b,{"label-col":{span:24},label:e(t)("account.settings.form-name"),name:"name"},{default:a(()=>[n(f,{value:e(o).name,"onUpdate:value":s[1]||(s[1]=u=>e(o).name=u),placeholder:e(t)("account.settings.form-input-plac"),style:{width:"320px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(b,{label:e(t)("account.settings.form-region"),"label-col":{span:24},name:"region"},{default:a(()=>[n(K,{value:e(o).region,"onUpdate:value":s[2]||(s[2]=u=>e(o).region=u),placeholder:e(t)("account.settings.form-select-plac")},{default:a(()=>[n(D,{value:"China"},{default:a(()=>[k(g(e(t)("account.settings.form-region-China")),1)]),_:1})]),_:1},8,["value","placeholder"])]),_:1},8,["label"]),n(b,{"label-col":{span:24},label:e(t)("account.settings.form-address"),name:"address"},{default:a(()=>[n(f,{value:e(o).address,"onUpdate:value":s[3]||(s[3]=u=>e(o).address=u),placeholder:e(t)("account.settings.form-input-plac"),style:{width:"320px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(b,{"label-col":{span:24},label:e(t)("account.settings.form-phoneNumber"),name:"phoneNumber"},{default:a(()=>[n(f,{value:e(o).phoneNumber,"onUpdate:value":s[4]||(s[4]=u=>e(o).phoneNumber=u),placeholder:e(t)("account.settings.form-input-plac")},null,8,["value","placeholder"])]),_:1},8,["label"]),n(b,{name:"desc",label:e(t)("account.settings.form-desc"),"label-col":{span:24}},{default:a(()=>[n(M,{value:e(o).desc,"onUpdate:value":s[5]||(s[5]=u=>e(o).desc=u),placeholder:e(t)("account.settings.form-input-plac")},null,8,["value","placeholder"])]),_:1},8,["label"]),n(b,null,{default:a(()=>[n(I,{type:"primary",onClick:m},{default:a(()=>[k(g(e(t)("account.settings.form-submit")),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),n(S,{span:4},{default:a(()=>[v("p",null,g(e(t)("account.settings.basic-avatar")),1),v("div",it,[n(j,{size:100},{icon:a(()=>[ut]),_:1}),n(H,{name:"file","file-list":[],onChange:_},{default:a(()=>[n(I,{class:"mt-4"},{default:a(()=>[n(e(J)),k(" "+g(e(t)("account.settings.basic-avatar.upload")),1)]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1},8,["title"])}}}),_t={href:"https://www.antdv.com/"},dt=x({__name:"security-setting",setup(O){const{t}=N(),c=C(()=>[{title:t("account.settings.security.account-password"),desc:t("account.settings.security.account-password-desc")},{title:t("account.settings.security.phone"),desc:t("account.settings.security.phone-desc")},{title:t("account.settings.security-problem"),desc:t("account.settings.security-problem-desc")},{title:t("account.settings.security.email"),desc:t("account.settings.security.email-desc")},{title:t("account.settings.security.MFA"),desc:t("account.settings.security.MFA-desc")}]);return(y,p)=>{const o=U,r=$,m=A,_=q,d=w;return l(),i(d,{title:e(t)("account.settings.security-setting"),bordered:!1},{default:a(()=>[n(_,{"item-layout":"horizontal","data-source":e(c)},{renderItem:a(({item:s})=>[n(m,null,{actions:a(()=>[n(r,{type:"link"},{default:a(()=>[k(g(e(t)("account.settings.modify")),1)]),_:1})]),default:a(()=>[n(o,{description:s.desc},{title:a(()=>[v("a",_t,g(s.title),1)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1},8,["title"])}}}),pt=V(dt,[["__scopeId","data-v-834e3c93"]]),mt={href:"https://www.antdv.com/"},gt=x({__name:"account-setting",setup(O){const{t}=N(),c=C(()=>[{title:t("account.settings.account.taobao"),avatar:"TaobaoOutlined"},{title:t("account.settings.account.alipay"),avatar:"AlipayOutlined"},{title:t("account.settings.account.dingding"),avatar:"DingdingOutlined"}]);return(y,p)=>{const o=U,r=$,m=A,_=q,d=w;return l(),i(d,{title:e(t)("account.settings.account-setting"),bordered:!1},{default:a(()=>[n(_,{"item-layout":"horizontal","data-source":e(c)},{renderItem:a(({item:s})=>[n(m,null,{actions:a(()=>[n(r,{type:"link"},{default:a(()=>[k(g(e(t)("account.settings.account.bind")),1)]),_:1})]),default:a(()=>[n(o,{description:e(t)("account.settings.account.not.bind")},{title:a(()=>[v("a",mt,g(s.title),1)]),avatar:a(()=>[s.avatar==="TaobaoOutlined"?(l(),i(e(et),{key:0,style:{color:"#ff4000"},class:"account-setting-avatar"})):h("",!0),s.avatar==="AlipayOutlined"?(l(),i(e(at),{key:1,style:{color:"#2eabff"},class:"account-setting-avatar"})):h("",!0),s.avatar==="DingdingOutlined"?(l(),i(e(nt),{key:2,style:{color:"#fff","background-color":"#2eabff"},class:"account-setting-avatar"})):h("",!0)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1},8,["title"])}}}),ft=V(gt,[["__scopeId","data-v-4f063671"]]),bt={href:"https://www.antdv.com/"},ht=x({__name:"message-setting",setup(O){const{t}=N(),c=R([{title:t("account.settings.message.title1"),desc:t("account.settings.message.desc1"),checked:!0},{title:t("account.settings.message.title2"),desc:t("account.settings.message.desc2"),checked:!0},{title:t("account.settings.message.title3"),desc:t("account.settings.message.desc3"),checked:!0}]);return(y,p)=>{const o=U,r=st,m=A,_=q,d=w;return l(),i(d,{title:e(t)("account.settings.message-setting"),bordered:!1},{default:a(()=>[n(_,{"item-layout":"horizontal","data-source":e(c)},{renderItem:a(({item:s})=>[n(m,null,{actions:a(()=>[n(r,{checked:s.checked,"onUpdate:checked":f=>s.checked=f},null,8,["checked","onUpdate:checked"])]),default:a(()=>[n(o,{description:s.desc},{title:a(()=>[v("a",bt,g(s.title),1)]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])]),_:1},8,["title"])}}}),wt=x({__name:"settings",setup(O){const{t}=N(),c=B(["1"]),y=C(()=>[{key:"1",label:p("1"),title:"Navigation One"},{key:"2",label:p("2"),title:"Navigation Two"},{key:"3",label:p("3"),title:"Navigation Two"},{key:"4",label:p("4"),title:"Navigation Two"}]);function p(o){switch(o){case"1":return t("account.settings.basic-setting");case"2":return t("account.settings.security-setting");case"3":return t("account.settings.account-setting");case"4":return t("account.settings.message-setting")}}return(o,r)=>{const m=ot,_=T,d=z,s=w;return l(),i(s,null,{default:a(()=>[n(d,{gutter:24},{default:a(()=>[n(_,{span:4,style:{"padding-left":"0"}},{default:a(()=>[n(m,{selectedKeys:e(c),"onUpdate:selectedKeys":r[0]||(r[0]=f=>lt(c)?c.value=f:null),style:{width:"250px"},mode:"inline",items:e(y)},null,8,["selectedKeys","items"])]),_:1}),n(_,{span:20},{default:a(()=>[e(c)[0]==="1"?(l(),i(rt,{key:0})):h("",!0),e(c)[0]==="2"?(l(),i(pt,{key:1})):h("",!0),e(c)[0]==="3"?(l(),i(ft,{key:2})):h("",!0),e(c)[0]==="4"?(l(),i(ht,{key:3})):h("",!0)]),_:1})]),_:1})]),_:1})}}});export{wt as default};
