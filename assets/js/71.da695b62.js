(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{546:function(s,t,a){"use strict";a.r(t);var v=a(1),_=Object(v.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("对于 TCP 而言，在传输的时候分为两个部分:"),t("strong",[s._v("TCP头")]),s._v("和"),t("strong",[s._v("数据部分")]),s._v("。")]),s._v(" "),t("p",[s._v("而 HTTP 类似，也是"),t("code",[s._v("header + body")]),s._v("的结构，具体而言:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("起始行 + 头部 + 空行 + 实体\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("由于 http "),t("code",[s._v("请求报文")]),s._v("和"),t("code",[s._v("响应报文")]),s._v("是有一定区别，因此我们分开介绍。")]),s._v(" "),t("h2",{attrs:{id:"起始行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起始行"}},[s._v("#")]),s._v(" 起始行")]),s._v(" "),t("p",[s._v("对于请求报文来说，起始行类似下面这样:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("也就是"),t("strong",[s._v("方法 + 路径 + http版本")]),s._v("。")]),s._v(" "),t("p",[s._v("对于响应报文来说，起始行一般张这个样:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HTTP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OK")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("响应报文的起始行也叫做"),t("code",[s._v("状态行")]),s._v("。由"),t("strong",[s._v("http版本、状态码和原因")]),s._v("三部分组成。")]),s._v(" "),t("p",[s._v("值得注意的是，在起始行中，每两个部分之间用"),t("strong",[s._v("空格")]),s._v("隔开，最后一个部分后面应该接一个"),t("strong",[s._v("换行")]),s._v("，严格遵循"),t("code",[s._v("ABNF")]),s._v("语法规范。")]),s._v(" "),t("h2",{attrs:{id:"头部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#头部"}},[s._v("#")]),s._v(" 头部")]),s._v(" "),t("p",[s._v("展示一下请求头和响应头在报文中的位置:")]),s._v(" "),t("p",[t("img",{attrs:{src:s.$withBase("/http/001.png")}}),s._v(" "),t("img",{attrs:{src:s.$withBase("/http/002.png")}})]),s._v(" "),t("p",[s._v("不管是请求头还是响应头，其中的字段是相当多的，而且牵扯到"),t("code",[s._v("http")]),s._v("非常多的特性，这里就不一一列举的，重点看看这些头部字段的格式：")]),s._v(" "),t("ul",[t("li",[t("ol",[t("li",[s._v("字段名不区分大小写")])])]),s._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[s._v("字段名不允许出现空格，不可以出现下划线"),t("code",[s._v("_")])])])]),s._v(" "),t("li",[t("ol",{attrs:{start:"3"}},[t("li",[s._v("字段名后面必须"),t("strong",[s._v("紧接着"),t("code",[s._v(":")])])])])])]),s._v(" "),t("h2",{attrs:{id:"空行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空行"}},[s._v("#")]),s._v(" 空行")]),s._v(" "),t("p",[s._v("很重要，用来区分开"),t("code",[s._v("头部")]),s._v("和"),t("code",[s._v("实体")]),s._v("。")]),s._v(" "),t("p",[s._v("问: 如果说在头部中间故意加一个空行会怎么样？")]),s._v(" "),t("p",[s._v("那么空行后的内容全部被视为实体。")]),s._v(" "),t("h2",{attrs:{id:"实体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实体"}},[s._v("#")]),s._v(" 实体")]),s._v(" "),t("p",[s._v("就是具体的数据了，也就是"),t("code",[s._v("body")]),s._v("部分。请求报文对应"),t("code",[s._v("请求体")]),s._v(", 响应报文对应"),t("code",[s._v("响应体")]),s._v("。")])])}),[],!1,null,null,null);t.default=_.exports}}]);