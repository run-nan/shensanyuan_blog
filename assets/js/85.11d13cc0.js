(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{560:function(_,v,e){"use strict";e.r(v);var r=e(1),t=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("之前谈到了 HTTP 是明文传输的协议，传输保文对外完全透明，非常不安全，那如何进一步保证安全性呢？")]),_._v(" "),v("p",[_._v("由此产生了 "),v("code",[_._v("HTTPS")]),_._v("，其实它并不是一个新的协议，而是在 HTTP 下面增加了一层 SSL/TLS 协议，简单的讲，"),v("strong",[_._v("HTTPS = HTTP + SSL/TLS")]),_._v("。")]),_._v(" "),v("p",[_._v("那什么是 SSL/TLS 呢？")]),_._v(" "),v("p",[_._v("SSL 即安全套接层（Secure Sockets Layer），在 OSI 七层模型中处于会话层(第 5 层)。之前 SSL 出过三个大版本，当它发展到第三个大版本的时候才被标准化，成为 TLS（传输层安全，Transport Layer Security），并被当做 TLS1.0 的版本，准确地说，"),v("strong",[_._v("TLS1.0 = SSL3.1")]),_._v("。")]),_._v(" "),v("p",[_._v("现在主流的版本是 TLS/1.2, 之前的 TLS1.0、TLS1.1 都被认为是不安全的，在不久的将来会被完全淘汰。因此我们接下来主要讨论的是 TLS1.2, 当然在 2018 年推出了更加优秀的 TLS1.3，大大优化了 TLS 握手过程，这个我们放在下一节再去说。")]),_._v(" "),v("p",[_._v("TLS 握手的过程比较复杂，写文章之前我查阅了大量的资料，发现对 TLS 初学者非常不友好，也有很多知识点说的含糊不清，可以说这个整理的过程是相当痛苦了。希望我下面的拆解能够帮你理解得更顺畅些吧 : ）")]),_._v(" "),v("h2",{attrs:{id:"传统-rsa-握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传统-rsa-握手"}},[_._v("#")]),_._v(" 传统 RSA 握手")]),_._v(" "),v("p",[_._v("先来说说传统的 TLS 握手，也是大家在网上经常看到的。我之前也写过这样的文章，"),v("RouterLink",{attrs:{to:"/blogs/browser/browser-security/003.html"}},[_._v("(传统RSA版本)HTTPS为什么让数据传输更安全")]),_._v("，其中也介绍到了"),v("code",[_._v("对称加密")]),_._v("和"),v("code",[_._v("非对称加密")]),_._v("的概念，建议大家去读一读，不再赘述。之所以称它为 RSA 版本，是因为它在加解密"),v("code",[_._v("pre_random")]),_._v("的时候采用的是 RSA 算法。")],1),_._v(" "),v("h2",{attrs:{id:"tls-1-2-握手过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tls-1-2-握手过程"}},[_._v("#")]),_._v(" TLS 1.2 握手过程")]),_._v(" "),v("p",[_._v("现在我们来讲讲主流的 TLS 1.2 版本所采用的方式。")]),_._v(" "),v("p",[v("img",{attrs:{src:_.$withBase("/http/010.jpg")}})]),_._v(" "),v("p",[_._v("刚开始你可能会比较懵，先别着急，过一遍下面的流程再来看会豁然开朗。")]),_._v(" "),v("h3",{attrs:{id:"step-1-client-hello"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#step-1-client-hello"}},[_._v("#")]),_._v(" step 1: Client Hello")]),_._v(" "),v("p",[_._v("首先，浏览器发送 client_random、TLS版本、加密套件列表。")]),_._v(" "),v("p",[_._v("client_random 是什么？用来最终 secret 的一个参数。")]),_._v(" "),v("p",[_._v("加密套件列表是什么？我举个例子，加密套件列表一般张这样:")]),_._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("TLS_ECDHE_WITH_AES_128_GCM_SHA256\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br")])]),v("p",[_._v("意思是"),v("code",[_._v("TLS")]),_._v("握手过程中，使用"),v("code",[_._v("ECDHE")]),_._v("算法生成"),v("code",[_._v("pre_random")]),_._v("(这个数后面会介绍)，128位的"),v("code",[_._v("AES")]),_._v("算法进行对称加密，在对称加密的过程中使用主流的"),v("code",[_._v("GCM")]),_._v("分组模式，因为对称加密中很重要的一个问题就是如何分组。最后一个是哈希摘要算法，采用"),v("code",[_._v("SHA256")]),_._v("算法。")]),_._v(" "),v("p",[_._v("其中值得解释一下的是这个哈希摘要算法，试想一个这样的场景，服务端现在给客户端发消息来了，客户端并不知道此时的消息到底是服务端发的，还是中间人伪造的消息呢？现在引入这个哈希摘要算法，将服务端的证书信息通过"),v("strong",[_._v("这个算法")]),_._v("生成一个摘要(可以理解为"),v("code",[_._v("比较短的字符串")]),_._v(")，用来"),v("strong",[_._v("标识")]),_._v("这个服务端的身份，用私钥加密后把"),v("strong",[_._v("加密后的标识")]),_._v("和"),v("strong",[_._v("自己的公钥")]),_._v("传给客户端。客户端拿到"),v("strong",[_._v("这个公钥")]),_._v("来解密，生成另外一份摘要。两个摘要进行对比，如果相同则能确认服务端的身份。这也就是所谓"),v("strong",[_._v("数字签名")]),_._v("的原理。其中除了哈希算法，最重要的过程是"),v("strong",[_._v("私钥加密，公钥解密")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"step-2-server-hello"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#step-2-server-hello"}},[_._v("#")]),_._v(" step 2: Server Hello")]),_._v(" "),v("p",[_._v("可以看到服务器一口气给客户端回复了非常多的内容。")]),_._v(" "),v("p",[v("code",[_._v("server_random")]),_._v("也是最后生成"),v("code",[_._v("secret")]),_._v("的一个参数, 同时确认 TLS 版本、需要使用的加密套件和自己的证书，这都不难理解。那剩下的"),v("code",[_._v("server_params")]),_._v("是干嘛的呢？")]),_._v(" "),v("p",[_._v("我们先埋个伏笔，现在你只需要知道，"),v("code",[_._v("server_random")]),_._v("到达了客户端。")]),_._v(" "),v("h3",{attrs:{id:"step-3-client-验证证书-生成secret"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#step-3-client-验证证书-生成secret"}},[_._v("#")]),_._v(" step 3: Client 验证证书，生成secret")]),_._v(" "),v("p",[_._v("客户端验证服务端传来的"),v("code",[_._v("证书")]),_._v("和"),v("code",[_._v("签名")]),_._v("是否通过，如果验证通过，则传递"),v("code",[_._v("client_params")]),_._v("这个参数给服务器。")]),_._v(" "),v("p",[_._v("接着客户端通过"),v("code",[_._v("ECDHE")]),_._v("算法计算出"),v("code",[_._v("pre_random")]),_._v("，其中传入两个参数:"),v("strong",[_._v("server_params")]),_._v("和"),v("strong",[_._v("client_params")]),_._v("。现在你应该清楚这个两个参数的作用了吧，由于"),v("code",[_._v("ECDHE")]),_._v("基于"),v("code",[_._v("椭圆曲线离散对数")]),_._v("，这两个参数也称作"),v("code",[_._v("椭圆曲线的公钥")]),_._v("。")]),_._v(" "),v("p",[_._v("客户端现在拥有了"),v("code",[_._v("client_random")]),_._v("、"),v("code",[_._v("server_random")]),_._v("和"),v("code",[_._v("pre_random")]),_._v("，接下来将这三个数通过一个伪随机数函数来计算出最终的"),v("code",[_._v("secret")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"step4-server-生成-secret"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#step4-server-生成-secret"}},[_._v("#")]),_._v(" step4: Server 生成 secret")]),_._v(" "),v("p",[_._v("刚刚客户端不是传了"),v("code",[_._v("client_params")]),_._v("过来了吗？")]),_._v(" "),v("p",[_._v("现在服务端开始用"),v("code",[_._v("ECDHE")]),_._v("算法生成"),v("code",[_._v("pre_random")]),_._v("，接着用和客户端同样的伪随机数函数生成最后的"),v("code",[_._v("secret")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[_._v("#")]),_._v(" 注意事项")]),_._v(" "),v("p",[_._v("TLS的过程基本上讲完了，但还有两点需要注意。")]),_._v(" "),v("p",[v("strong",[_._v("第一")]),_._v("、实际上 TLS 握手是一个"),v("strong",[_._v("双向认证")]),_._v("的过程，从 step1 中可以看到，客户端有能力验证服务器的身份，那服务器能不能验证客户端的身份呢？")]),_._v(" "),v("p",[_._v("当然是可以的。具体来说，在 "),v("code",[_._v("step3")]),_._v("中，客户端传送"),v("code",[_._v("client_params")]),_._v("，实际上给服务器传一个验证消息，让服务器将相同的验证流程(哈希摘要 + 私钥加密 + 公钥解密)走一遍，确认客户端的身份。")]),_._v(" "),v("p",[v("strong",[_._v("第二")]),_._v("、当客户端生成"),v("code",[_._v("secret")]),_._v("后，会给服务端发送一个收尾的消息，告诉服务器之后的都用对称加密，对称加密的算法就用第一次约定的。服务器生成完"),v("code",[_._v("secret")]),_._v("也会向客户端发送一个收尾的消息，告诉客户端以后就直接用对称加密来通信。")]),_._v(" "),v("p",[_._v("这个收尾的消息包括两部分，一部分是"),v("code",[_._v("Change Cipher Spec")]),_._v("，意味着后面加密传输了，另一个是"),v("code",[_._v("Finished")]),_._v("消息，这个消息是对之前所有发送的数据做的"),v("strong",[_._v("摘要")]),_._v("，对摘要进行加密，让对方验证一下。")]),_._v(" "),v("p",[_._v("当双方都验证通过之后，握手才正式结束。后面的 HTTP 正式开始传输加密报文。")]),_._v(" "),v("h3",{attrs:{id:"rsa-和-ecdhe-握手过程的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rsa-和-ecdhe-握手过程的区别"}},[_._v("#")]),_._v(" RSA 和 ECDHE 握手过程的区别")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("ECDHE 握手，也就是主流的 TLS1.2 握手中，使用"),v("code",[_._v("ECDHE")]),_._v("实现"),v("code",[_._v("pre_random")]),_._v("的加密解密，没有用到 RSA。")])]),_._v(" "),v("li",[v("p",[_._v("使用 ECDHE 还有一个特点，就是客户端发送完收尾消息后可以提前"),v("code",[_._v("抢跑")]),_._v("，直接发送 HTTP 报文，节省了一个 RTT，不必等到收尾消息到达服务器，然后等服务器返回收尾消息给自己，直接开始发请求。这也叫"),v("code",[_._v("TLS False Start")]),_._v("。")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);