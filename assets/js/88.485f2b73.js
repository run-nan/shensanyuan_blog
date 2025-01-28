(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{562:function(_,v,t){"use strict";t.r(v);var e=t(1),o=Object(e.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"帧结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#帧结构"}},[_._v("#")]),_._v(" 帧结构")]),_._v(" "),v("p",[_._v("HTTP/2 中传输的帧结构如下图所示:")]),_._v(" "),v("p",[v("img",{attrs:{src:_.$withBase("/http/010.png")}})]),_._v(" "),v("p",[_._v("每个帧分为"),v("code",[_._v("帧头")]),_._v("和"),v("code",[_._v("帧体")]),_._v("。先是三个字节的帧长度，这个长度表示的是"),v("code",[_._v("帧体")]),_._v("的长度。")]),_._v(" "),v("p",[_._v("然后是帧类型，大概可以分为"),v("strong",[_._v("数据帧")]),_._v("和"),v("strong",[_._v("控制帧")]),_._v("两种。数据帧用来存放 HTTP 报文，控制帧用来管理"),v("code",[_._v("流")]),_._v("的传输。")]),_._v(" "),v("p",[_._v("接下来的一个字节是"),v("strong",[_._v("帧标志")]),_._v("，里面一共有 8 个标志位，常用的有 "),v("strong",[_._v("END_HEADERS")]),_._v("表示头数据结束，"),v("strong",[_._v("END_STREAM")]),_._v("表示单方向数据发送结束。")]),_._v(" "),v("p",[_._v("后 4 个字节是"),v("code",[_._v("Stream ID")]),_._v(", 也就是"),v("code",[_._v("流标识符")]),_._v("，有了它，接收方就能从乱序的二进制帧中选择出 ID 相同的帧，按顺序组装成请求/响应报文。")]),_._v(" "),v("h2",{attrs:{id:"流的状态变化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流的状态变化"}},[_._v("#")]),_._v(" 流的状态变化")]),_._v(" "),v("p",[_._v("从前面可以知道，在 HTTP/2 中，所谓的"),v("code",[_._v("流")]),_._v("，其实就是二进制帧的"),v("strong",[_._v("双向传输的序列")]),_._v("。那么在 HTTP/2 请求和响应的过程中，流的状态是如何变化的呢？")]),_._v(" "),v("p",[_._v("HTTP/2 其实也是借鉴了 TCP 状态变化的思想，根据帧的标志位来实现具体的状态改变。这里我们以一个普通的"),v("code",[_._v("请求-响应")]),_._v("过程为例来说明：\n"),v("img",{attrs:{src:_.$withBase("/http/012.jpg")}})]),_._v(" "),v("p",[_._v("最开始两者都是空闲状态，当客户端发送"),v("code",[_._v("Headers帧")]),_._v("后，开始分配"),v("code",[_._v("Stream ID")]),_._v(", 此时客户端的"),v("code",[_._v("流")]),_._v("打开, 服务端接收之后服务端的"),v("code",[_._v("流")]),_._v("也打开，两端的"),v("code",[_._v("流")]),_._v("都打开之后，就可以互相传递数据帧和控制帧了。")]),_._v(" "),v("p",[_._v("当客户端要关闭时，向服务端发送"),v("code",[_._v("END_STREAM")]),_._v("帧，进入"),v("code",[_._v("半关闭状态")]),_._v(", 这个时候客户端只能接收数据，而不能发送数据。")]),_._v(" "),v("p",[_._v("服务端收到这个"),v("code",[_._v("END_STREAM")]),_._v("帧后也进入"),v("code",[_._v("半关闭状态")]),_._v("，不过此时服务端的情况是只能发送数据，而不能接收数据。随后服务端也向客户端发送"),v("code",[_._v("END_STREAM")]),_._v("帧，表示数据发送完毕，双方进入"),v("code",[_._v("关闭状态")]),_._v("。")]),_._v(" "),v("p",[_._v("如果下次要开启新的"),v("code",[_._v("流")]),_._v("，流 ID 需要自增，直到上限为止，到达上限后开一个新的 TCP 连接重头开始计数。由于流 ID 字段长度为 4 个字节，最高位又被保留，因此范围是 0 ~ 2的 31 次方，大约 21 亿个。")]),_._v(" "),v("h2",{attrs:{id:"流的特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流的特性"}},[_._v("#")]),_._v(" 流的特性")]),_._v(" "),v("p",[_._v("刚刚谈到了流的状态变化过程，这里顺便就来总结一下"),v("code",[_._v("流")]),_._v("传输的特性:")]),_._v(" "),v("ul",[v("li",[_._v("并发性。一个 HTTP/2 连接上可以同时发多个帧，这一点和 HTTP/1 不同。这也是实现"),v("strong",[_._v("多路")]),_._v("复用的基础。")]),_._v(" "),v("li",[_._v("自增性。流 ID 是不可重用的，而是会按顺序递增，达到上限之后又新开 TCP 连接从头开始。")]),_._v(" "),v("li",[_._v("双向性。客户端和服务端都可以创建流，互不干扰，双方都可以作为"),v("code",[_._v("发送方")]),_._v("或者"),v("code",[_._v("接收方")]),_._v("。")]),_._v(" "),v("li",[_._v("可设置优先级。可以设置数据帧的优先级，让服务端先处理重要资源，优化用户体验。")])]),_._v(" "),v("p",[_._v("以上就是对 HTTP/2 中二进制帧的介绍，希望对你有所启发。")])])}),[],!1,null,null,null);v.default=o.exports}}]);