(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1270:function(t,e,s){"use strict";s.r(e);var i,l=s(390),a=s(486),o=s(413),p={text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}},n={defaultList:{type:"list",resource:{fields:p},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]}},emptyList:{type:"list",resource:{fields:p},data:{list:[]},props:{"empty-text":"没有找到对应的应用，请尝试其他条件"}},indexList:{type:"list",resource:{fields:p},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]},props:{type:"index"}},pagesList:{type:"list",resource:{api:{prefix:o.b,list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:50}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"},testSwitch:{type:"switch",label:"开关"}}},events:{init:"@list"}},simulatePagesList:{type:"list",resource:{api:{prefix:o.b,list:"list-pagination"},fields:{id:{type:"text",label:"ID"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"}}},events:{init:"@list"},pageSize:10,props:{pagination:"simulate"}},filtersList:{type:"list",resource:{api:{prefix:o.b,list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:100}},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"}}},filters:{testSelect:{multiple:!0,remote:!0}},sorts:{id:!0},events:{init:"@list"}},searchsList:{type:"list",resource:{api:{prefix:o.b,list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}]},operations:{testText:{slot:"searchs",type:"field",label:"名称"},testSelect:{slot:"searchs",type:"field",label:"类型"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"}}},multipleSelectList:{type:"list",resource:{fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}],total:100},options:{multipleSelect:!0},operations:{selectMulti:{slot:"multipleSelect",type:"field",field:"testSelect"},buttonMulti:{slot:"multipleSelect",type:"button",label:"删除",event:"multi"}},actions:{multi:function(t){this.$message("你点击了删除按钮！"),console.log("multipleSelect action",t.$prevReturn)}}},slotBlocksList:{type:"list",resource:{fields:{id:{type:"text",label:"ID"},testSelect:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}},testText:{type:"text",label:"名称",props:{placeholder:"请输入名词"}}}},data:{list:[{id:3,testText:"双11活动",testSelect:"a,b,c"},{id:4,testText:"双11活动2",testSelect:"b,c"},{id:5,testText:"双11活动3",testSelect:"a,b,c"},{id:6,testText:"双11活动4",testSelect:"c"}],total:100},operations:{testText:{slot:"searchs",type:"field"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list:1"}},blocks:{listTop:{type:"component",options:{is:"div",text:"我是列表区块最顶部的插槽内容！！"},style:{padding:"20px",marginBottom:"20px",border:"1px solid #3eaf7c"},slot:"top"},listTableTop:{type:"component",options:{is:"div",text:"我是列表区块表格顶部的插槽内容！！"},style:{padding:"20px",border:"1px solid #f60"},slot:"tableTop"}}},operationsList:{type:"list",resource:{fields:{text:{label:"文本",type:"text"},inputnumber:{type:"inputnumber",label:"数字输入"},select:{type:"select",label:"select多选",props:{options:{a:"黄金糕",b:"双皮奶",c:"蚵仔煎",d:"龙须面",e:"北京烤鸭"}}}}},props:{"operations-width":200},data:{list:[{text:"双11活动",inputnumber:3,select:"a,b,c"},{text:"双11活动2",inputnumber:4,select:"b,c"},{text:"双11活动3",inputnumber:5,select:"a,b,c"},{text:"双11活动4",inputnumber:6,select:"c"}]},operations:(i={testNewInput:{slot:"searchs",type:"field",field:{type:"text",props:{placeholder:"折"},style:{width:"100px"}}},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"}},Object(a.a)(i,"search",{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"}),Object(a.a)(i,"reset",{slot:"searchs",type:"reset",label:"重置"}),Object(a.a)(i,"addItem",{type:"button",label:"新建",props:{type:"primary"},slot:"searchs"}),Object(a.a)(i,"editItem",{type:"button",label:"编辑",props:{type:"primary",icon:"el-icon-edit"}}),Object(a.a)(i,"removeItem",{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}),i),actions:{addItem:function(){this.$message("这是”新建“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},editItem:function(){this.$message("这是”编辑“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},removeItem:function(){this.$message("这是”删除“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")},reset:function(){this.$message("这是”重置“按钮事件响应Demo效果，可在区块配置的“actions”里修改～")}}},suffixInfoList:{type:"list",resource:{api:{prefix:o.b,list:"list-pagination"},fields:{id:{type:"text",label:"ID"},title:{type:"text",label:"标题",props:{},changeConfig:function(t,e){return e&&(2===e.id?t.props["suffix-info-warning"]="我是提示warning":3===e.id?t.props["suffix-info-danger"]="我是提示danger":t.props["suffix-info"]="我是提示"),t}},content:{type:"textarea",label:"内容"}}},events:{init:"@list"},pageSize:10,props:{pagination:"simulate"}},editList:{type:"list",ctx:"edit",props:{type:"index"},resource:{fields:{quota:{type:"text",label:"指标",props:{width:"170px"}},times:{type:"text",label:"连续次数"},period:{type:"unitselect",label:"时间段",units:["分钟","小时"],defaultUnit:"分钟"},compared:{type:"select",label:"对比",props:{multiple:!1,options:{0:"昨天",5:"不对比"}}},condition:{type:"select",label:"条件",props:{multiple:!1,options:{0:"同比下降",1:"同比上升"}},changeConfig:function(t,e){return e&&"5"===e.compared&&(t.props.options={">":">",">=":">=","<":"<","<=":"<=","==":"=="}),t.props.options&&!t.props.options[e.condition]&&(e.condition=""),t}}}},data:{list:[{quota:"大促指标",times:"12",period:"12",compared:"0",condition:"0"}]},operations:{removeItem:{type:"button",label:"删除",props:{type:"danger",icon:"el-icon-delete"}},addItem1:{type:"button",label:"新增规则",props:{type:"primary"},slot:"searchs",event:"addItem"},addItem2:{type:"button",label:"右上",props:{type:"primary"},slot:"rightTop",event:"addItem"},addItem3:{type:"button",label:"左下",props:{type:"primary"},slot:"leftBottom",event:"addItem"},addItem4:{type:"button",label:"右下1",props:{type:"primary"},slot:"rightBottom",event:"addItem"},addItem5:{type:"button",label:"右下2",props:{type:"primary"},slot:"rightBottom",event:"addItem"},saveItem:{type:"button",label:"保存",props:{type:"primary"},slot:"searchs"}},actions:{addItem:function(){this.data.list.push({quota:"",times:"",period:"",compared:"",condition:""})},saveItem:function(){alert("你点击了保存按钮")}}},editList2:{type:"list",ctx:"view",resource:{fields:{quota:{type:"text",label:"指标",props:{width:"170px"}},times:{type:"text",label:"连续次数",changeConfig:function(t,e){return e&&e.edit?t.ctx="edit":t.ctx="view",t}},period:{type:"unitselect",label:"时间段",units:["分钟","小时"],defaultUnit:"分钟"},compared:{type:"select",label:"对比",props:{multiple:!1,options:{0:"昨天",5:"不对比"}}},condition:{type:"select",label:"条件",ctx:"view",props:{multiple:!1,options:{0:"同比下降",1:"同比上升"}},changeConfig:function(t,e){return e&&e.edit?t.ctx="edit":t.ctx="view",t}}}},data:{list:[{quota:"大促指标1",times:"12",period:"12",compared:"0",condition:"0",edit:!1},{quota:"大促指标2",times:"12",period:"12",compared:"0",condition:"0",edit:!1}]},operations:{removeItem:{type:"button",label:"删除",props:{type:"danger",size:"small"}},editItem:{type:"button",label:"编辑",props:{type:"primary",size:"small"},show:function(t){return!t.edit}},saveItem:{type:"button",label:"保存",props:{type:"primary",size:"small"},show:function(t){return t.edit}}},actions:{editItem:function(t){t.$prevReturn.edit=!t.$prevReturn.edit},saveItem:function(t){t.$prevReturn.edit=!t.$prevReturn.edit,this.$message.success("保存成功")}}},expandList:{type:"list",resource:{api:{prefix:o.b,list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:50}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"},testSwitch:{type:"switch",label:"开关"}}},expand:{id:!0,testText:!0,testTextarea:!0,testDate:!0,testSwitch:!0},events:{init:"@list"}},dragList:{type:"list",resource:{api:{prefix:o.b,list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:50}},testText:{type:"text",label:"名称",props:{"class-name":"drag-column"}},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"},testSwitch:{type:"switch",label:"开关"}}},options:{drag:!0},on:{"drag-start":function(t){var e=t.oldIndex;console.log("drag-start",e)},"drag-end":function(t){var e=t.oldIndex,s=t.newIndex;console.log("drag-end",e,s)}},events:{init:"@list"}},opearationsList:{type:"list",resource:{api:{prefix:o.b,list:"smallList",successCode:0},fields:{id:{type:"text",label:"ID",props:{width:50}},testText:{type:"text",label:"名称"},testTextarea:{type:"textarea",label:"文本框"},testDate:{type:"datetime",label:"创建时间"}}},operations:{edit:{type:"button",label:"编辑",props:{size:"mini",type:"primary"},badge:{max:3,value:function(t){return t.id}}},add:{type:"button",label:"添加",props:{size:"mini"},tooltip:{effect:"dark",content:"Top Left 提示文字",placement:"top-start"},badge:{"is-dot":!0,type:"primary",value:function(t){return(!0===t.testSwitch||1===t.testSwitch)&&"1"}}},del:{type:"button",label:"删除",props:{size:"mini",type:"danger"},show:{name:"testSwitch",value:"1"}}},events:{init:"@list"}}},r=s(402),c=s.n(r),d=s(401),u=s.n(d),m={mixins:[l.a],mounted:function(){var t=c()(n[this.blockName]);this.configCode=u()(t,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]||ams.block(this.blockName,n[this.blockName]),this.init=!0}},b=s(23),y=Object(b.a)(m,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[t.init?s("ams-block",{staticClass:"demo-card-preview",attrs:{name:t.blockName}}):t._e(),t._v(" "),s("div",{class:"demo-card-config "+(t.showConfig?"open":"")},[s("highlight-code",{attrs:{lang:"javascript"}},[t._v("\n            "+t._s(t.configCode)+"\n        ")])],1),t._v(" "),s("div",{staticClass:"demo-card-config-btn",on:{click:t.toggleDemoCofig}},[s("i",{class:"el-icon-caret-"+(t.showConfig?"top":"bottom")}),t._v("\n         "+t._s(t.showConfig?"隐藏":"显示")+"配置\n        "),t.onlineDemo?s("el-link",{attrs:{href:t.onlineDemo,target:"_blank",type:"success"}},[t._v("在线运行")]):t._e()],1)],1)}),[],!1,null,null,null);e.default=y.exports},389:function(t,e,s){"use strict";var i=s(0),l=(s(395),s(394)),a=s.n(l),o=s(392),p=s.n(o),n=s(400),r=s(396),c=s.n(r),d=(s(397),s(398)),u=s.n(d),m=s(399),b=s.n(m);i.default.use(a.a),i.default.use(p.a),console.log("ams init config"),i.default.use(u.a),i.default.use(b.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(n.a,{languages:{javascript:c.a}}),p.a.config({resource:{api:{withCredentials:!1}}})},390:function(t,e,s){"use strict";s(389);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(t){"el-link--inner"!==t.target.className&&(this.showConfig=!this.showConfig)}}}},413:function(t,e,s){"use strict";function i(t,e,s){var i='<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <title>首页</title>\n    <script src="https://h5rsc.vipstatic.com/ams/babel-polyfill/7.4.0/polyfill.min.js"><\/script>\n</head>\n<body>\n    <script>\n        var amsConfigJson = '.concat(s,';\n    <\/script>\n\n    <link rel="stylesheet" href="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/theme-chalk/index.css" />\n    <script src="https://h5rsc.vipstatic.com/ams/vue@2.6.10.js"><\/script>\n    <script src="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/index.js"><\/script>\n    <script src="https://unpkg.com/@ams-team/ams/lib/ams.js"><\/script>\n    <script id="ams-config" src="http://h5rsc.vipstatic.com/ams/ams-init@0.1.5.js"><\/script>\n</body>\n</html>');t.download=e,t.href="data:text/plain,".concat(i)}s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return l}));var l="https://www.yournana.club/vipshop/"},486:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));s(222);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}}}]);