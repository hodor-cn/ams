(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1237:function(e,o,t){"use strict";t.r(o);var i=t(388),l={colorField1:{type:"form",resource:{fields:{colorFieldA:{type:"color",label:"颜色"},colorFieldB:{type:"color",default:"#f60",label:"带默认值"},colorFieldC:{type:"color",default:"#f90",label:"纯展示",ctx:"view"}}},ctx:"edit"},colorField2:{type:"form",resource:{fields:{colorFieldA:{type:"color",label:"颜色",input:!0},colorFieldB:{type:"color",default:"#f60",label:"带默认值",input:!0},colorFieldC:{type:"color",default:"#f90",label:"纯展示",ctx:"view",input:!0}}},ctx:"edit"}},a=t(400),n=t.n(a),s=t(399),c=t.n(s),r={mixins:[i.a],mounted:function(){var e=n()(l[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,l[this.blockName]),this.init=!0}},d=t(23),f=Object(d.a)(r,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),t("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?t("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=f.exports},387:function(e,o,t){"use strict";var i=t(0),l=(t(393),t(392)),a=t.n(l),n=t(390),s=t.n(n),c=t(398),r=t(394),d=t.n(r),f=(t(395),t(396)),u=t.n(f),m=t(397),p=t.n(m);i.default.use(a.a),i.default.use(s.a),console.log("ams init config"),i.default.use(u.a),i.default.use(p.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(c.a,{languages:{javascript:d.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},388:function(e,o,t){"use strict";t(387);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);