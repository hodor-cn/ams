(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1266:function(e,t,i){"use strict";i.r(t);var n=i(390),s={unitselectField1:{type:"form",resource:{fields:{unitselectFieldA:{type:"unitselect",label:"单位选择",units:["毫米","厘米","分米","千米"]},unitselectFieldB:{type:"unitselect",label:"带默认单位",units:["毫米","厘米","分米","千米"],defaultUnit:"千米"},unitselectFieldC:{type:"unitselect",label:"带默认值",units:["毫米","厘米","分米","千米"],default:"100分米"}}},ctx:"edit"},unitselectField2:{type:"form",resource:{fields:{unitselectFieldA:{type:"unitselect",label:"单位选择",units:["毫米","厘米","分米","千米"]},unitselectFieldB:{type:"unitselect",label:"带默认单位",units:["毫米","厘米","分米","千米"],defaultUnit:"千米"},unitselectFieldC:{type:"unitselect",label:"带默认值",units:["毫米","厘米","分米","千米"],default:"100分米"}}},data:{unitselectFieldA:"10厘米",unitselectFieldB:"1000千米"},ctx:"view"},unitselectField3:{type:"form",resource:{fields:{unitselectFieldD:{type:"unitselect",label:"公司名称",units:["股份有限公司","外商独资公司"],default:"股份有限公司",props:{unitWidth:"150px"}}}},ctx:"edit"},unitselectField4:{type:"form",resource:{fields:{url:{type:"unitselect",label:"网址",defaultUnit:"http://",units:["http://","https://"],style:{width:"50%"},props:{slot:"prepend",unitWidth:"100px"}},url2:{type:"unitselect",label:"网址",defaultUnit:".com",units:[".com",".cn"],style:{width:"50%"},props:{slot:"append",unitWidth:"100px"}}}},ctx:"edit"}},l=i(402),o=i.n(l),a=i(401),c=i.n(a),u={mixins:[n.a],mounted:function(){var e=o()(s[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,s[this.blockName]),this.init=!0}},d=i(23),r=Object(d.a)(u,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=r.exports},389:function(e,t,i){"use strict";var n=i(0),s=(i(395),i(394)),l=i.n(s),o=i(392),a=i.n(o),c=i(400),u=i(396),d=i.n(u),r=(i(397),i(398)),f=i.n(r),p=i(399),m=i.n(p);n.default.use(l.a),n.default.use(a.a),console.log("ams init config"),n.default.use(f.a),n.default.use(m.a),"undefined"!=typeof window&&(window.Vue=n.default),n.default.use(c.a,{languages:{javascript:d.a}}),a.a.config({resource:{api:{withCredentials:!1}}})},390:function(e,t,i){"use strict";i(389);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);