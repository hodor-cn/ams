(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1240:function(e,t,o){"use strict";o.r(t);var n=o(388),i={buttonField1:{ctx:"edit",type:"form",resource:{fields:{text:{type:"text",label:"输入",props:{inline:!0}},buttonA:{type:"button",labelWidth:"0",tooltip:"点击触发事件",props:{text:"点击",inline:!0,type:"primary"},event:"pop:xxx"}}},actions:{pop:function(e){var t=e.$arg;this.$alert("你输入了："+t)}}}},a=o(400),s=o.n(a),c=o(399),l=o.n(c),r={mixins:[n.a],mounted:function(){var e=s()(i[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,i[this.blockName]),this.init=!0}},d=o(23),u=Object(d.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?o("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),o("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?o("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=u.exports},387:function(e,t,o){"use strict";var n=o(0),i=(o(393),o(392)),a=o.n(i),s=o(390),c=o.n(s),l=o(398),r=o(394),d=o.n(r),u=(o(395),o(396)),f=o.n(u),p=o(397),m=o.n(p);n.default.use(a.a),n.default.use(c.a),console.log("ams init config"),n.default.use(f.a),n.default.use(m.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(l.a,{languages:{javascript:d.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},388:function(e,t,o){"use strict";o(387);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);