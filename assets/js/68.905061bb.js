(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1231:function(e,t,i){"use strict";i.r(t);var o=i(388),s={switchField1:{type:"form",resource:{fields:{switchFieldA:{type:"switch",label:"开关",default:1},switchFieldB:{type:"switch",label:"禁用",props:{disabled:!0}}}},ctx:"edit"},switchField2:{type:"form",resource:{fields:{switchFieldB:{type:"switch",labelWidth:"0",props:{"active-text":"按月付费","inactive-text":"按年付费"}}}},ctx:"edit"},switchField3:{type:"form",resource:{fields:{switchFieldB:{type:"switch",labelWidth:"0",props:{"active-color":"#13ce66","inactive-color":"#ff4949","active-value":"100","inactive-value":"0"}}}},ctx:"edit"}},a=i(400),c=i.n(a),n=i(399),l=i.n(n),d={mixins:[o.a],mounted:function(){var e=c()(s[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,s[this.blockName]),this.init=!0}},r=i(23),f=Object(r.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=f.exports},387:function(e,t,i){"use strict";var o=i(0),s=(i(393),i(392)),a=i.n(s),c=i(390),n=i.n(c),l=i(398),d=i(394),r=i.n(d),f=(i(395),i(396)),u=i.n(f),h=i(397),m=i.n(h);o.default.use(a.a),o.default.use(n.a),console.log("ams init config"),o.default.use(u.a),o.default.use(m.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(l.a,{languages:{javascript:r.a}}),n.a.config({resource:{api:{withCredentials:!1}}})},388:function(e,t,i){"use strict";i(387);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);