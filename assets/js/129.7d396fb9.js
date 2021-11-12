(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1381:function(t,a,s){"use strict";s.r(a);var e=s(23),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"table-表格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-表格"}},[t._v("#")]),t._v(" Table 表格")]),t._v(" "),s("p",[t._v("大部分功能同list一致，增加了"),s("code",[t._v("展开行/子表")]),t._v("、"),s("code",[t._v("合并行")]),t._v("、"),s("code",[t._v("表头配置")]),t._v("等功能")]),t._v(" "),s("h3",{attrs:{id:"基础用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础用法"}},[t._v("#")]),t._v(" 基础用法")]),t._v(" "),s("ClientOnly",[s("block-table-demo",{attrs:{blockName:"defaultTable",onlineDemo:"https://codepen.io/w3cmark/pen/VwZBEQP"}})],1),t._v(" "),s("h3",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormBlock")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    resource"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    ctx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edit'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'view'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pageSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      multiple"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      remote"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fields"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    sorts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    style"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    events"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" any "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    operations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("field"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    render"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" boolean "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" string\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("blockquote",[s("p",[t._v("补充：如果需要实现固定列需求，请参见："),s("a",{attrs:{href:"https://github.com/vipshop/ams/issues/101",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置固定列"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("可用配置项表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("是否必填")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("block类型，固定值为"),s("code",[t._v("table")])])]),t._v(" "),s("tr",[s("td",[t._v("resource")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("指定resource")])]),t._v(" "),s("tr",[s("td",[t._v("ctx")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("表单的显示类型")])]),t._v(" "),s("tr",[s("td",[t._v("style")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("block添加样式")])]),t._v(" "),s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("block为table时，参考list的data数据要求，详见"),s("RouterLink",{attrs:{to:"/block/api.html#data"}},[s("code",[t._v("data")])])],1)]),t._v(" "),s("tr",[s("td",[t._v("events")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("事件定义")])]),t._v(" "),s("tr",[s("td",[t._v("actions")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("自定义actions，可被events中使用")])]),t._v(" "),s("tr",[s("td",[t._v("fields")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("block级别作用域的fields，重置resource中的默认配置")])]),t._v(" "),s("tr",[s("td",[t._v("options")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("table配置,内有"),s("code",[t._v("span-merge")]),t._v("、"),s("code",[t._v("expand-row")]),t._v("、"),s("code",[t._v("table-column")]),t._v("配置")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("expand-row")])]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("展开行/子表配置")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("span-merge")])]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("合并行配置，设置对应的行的field为"),s("code",[t._v("true")]),t._v(", 自动合并相同行表格")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("table-column")])]),t._v(" "),s("td",[t._v("array")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("表头配置, 数组格式，多级表头用children嵌套")])]),t._v(" "),s("tr",[s("td",[t._v("operations")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("操作项配置")])]),t._v(" "),s("tr",[s("td",[t._v("blocks")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("嵌套的blocks")])]),t._v(" "),s("tr",[s("td",[t._v("render")]),t._v(" "),s("td",[t._v("boolean")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("指定渲染方式")])]),t._v(" "),s("tr",[s("td",[t._v("filters")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("过滤条件 同"),s("code",[t._v("列表")])])]),t._v(" "),s("tr",[s("td",[t._v("sorts")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("列表排序设置 同"),s("code",[t._v("列表")])])]),t._v(" "),s("tr",[s("td",[t._v("searchs")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("列表搜索设置 同"),s("code",[t._v("列表")])])]),t._v(" "),s("tr",[s("td",[t._v("searchsOptions")]),t._v(" "),s("td",[t._v("object")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("列表的搜索栏操作项设置 同"),s("code",[t._v("列表")])])]),t._v(" "),s("tr",[s("td",[t._v("pageSize")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("设置分页每页的条数 同"),s("code",[t._v("列表")])])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);