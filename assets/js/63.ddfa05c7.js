(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1304:function(e,o,a){"use strict";a.r(o);var t=a(390),i={radioField1:{type:"form",resource:{fields:{radioFieldA:{type:"radio",label:"单选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},radioFieldB:{type:"radio",label:"带默认值",default:"a",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},radioFieldC:{type:"radio",label:"纯展示",default:"b",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}},ctx:"view"},radioBorder:{type:"radio",label:"边框单选",props:{type:"border",size:"small",options:[{label:"黄金糕",value:"a"},{label:"双皮奶",value:"b"},{label:"蚵仔煎",value:"c",disabled:!0}]},on:{change:function(e){console.log("radio-change",e)}}},radioButtonA:{type:"radio",label:"单选按钮",default:"a",props:{type:"button",options:[{label:"黄金糕",value:"a"},{label:"双皮奶",value:"b"},{label:"蚵仔煎",value:"c"}]},on:{change:function(e){console.log("radiobutton-change",e)}}},radioButtonB:{type:"radio",label:"自定义颜色",default:"a",props:{type:"button",size:"mini",textColor:"#F5F6F8",fill:"#f60",options:[{label:"黄金糕",value:"a"},{label:"双皮奶",value:"b"},{label:"蚵仔煎",value:"c"}]},on:{change:function(e){console.log("radiobutton-change",e)}}}}},ctx:"edit"}},n=a(402),l=a.n(n),s=a(401),c=a.n(s),d={mixins:[t.a],mounted:function(){var e=l()(i[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,i[this.blockName]),this.init=!0}},r=a(23),u=Object(r.a)(d,(function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?a("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),a("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[a("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),a("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[a("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?a("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);o.default=u.exports},389:function(e,o,a){"use strict";var t=a(0),i=(a(395),a(394)),n=a.n(i),l=a(392),s=a.n(l),c=a(400),d=a(396),r=a.n(d),u=(a(397),a(398)),p=a.n(u),f=a(399),b=a.n(f);t.default.use(n.a),t.default.use(s.a),console.log("ams init config"),t.default.use(p.a),t.default.use(b.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(c.a,{languages:{javascript:r.a}}),s.a.config({resource:{api:{withCredentials:!1}}})},390:function(e,o,a){"use strict";a(389);o.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);