(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1260:function(e,n,t){"use strict";t.r(n);var i=t(388),o={inputnumberField1:{type:"form",resource:{fields:{inputnumberFieldA:{type:"inputnumber",label:"计数器"},inputnumberFieldB:{type:"inputnumber",label:"带默认值",default:10},inputnumberFieldC:{type:"inputnumber",label:"纯展示",default:10,ctx:"view"}}},ctx:"edit"}},a=t(400),s=t.n(a),l=t(399),c=t.n(l),r={mixins:[i.a],mounted:function(){var e=s()(o[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,o[this.blockName]),this.init=!0}},u=t(23),d=Object(u.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);n.default=d.exports},387:function(e,n,t){"use strict";var i=t(0),o=(t(393),t(392)),a=t.n(o),s=t(390),l=t.n(s),c=t(398),r=t(394),u=t.n(r),d=(t(395),t(396)),m=t.n(d),f=t(397),p=t.n(f);i.default.use(a.a),i.default.use(l.a),console.log("ams init config"),i.default.use(m.a),i.default.use(p.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(c.a,{languages:{javascript:u.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},388:function(e,n,t){"use strict";t(387);n.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);