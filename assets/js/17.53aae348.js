(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{492:function(_,v,e){"use strict";e.r(v);var o=e(1),r=Object(o.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("谈到"),v("code",[_._v("HTTPS")]),_._v(", 就不得不谈到与之相对的"),v("code",[_._v("HTTP")]),_._v("。"),v("code",[_._v("HTTP")]),_._v("的特性是明文传输，因此在传输的每一个环节，数据都有可能被第三方窃取或者篡改，具体来说，HTTP 数据经过 TCP 层，然后经过"),v("code",[_._v("WIFI路由器")]),_._v("、"),v("code",[_._v("运营商")]),_._v("和"),v("code",[_._v("目标服务器")]),_._v("，这些环节中都可能被中间人拿到数据并进行篡改，也就是我们常说的"),v("strong",[_._v("中间人攻击")]),_._v("。")]),_._v(" "),v("p",[_._v("为了防范这样一类攻击，我们不得已要引入新的加密方案，即 HTTPS。")]),_._v(" "),v("p",[v("code",[_._v("HTTPS")]),_._v("并不是一个新的协议, 而是一个加强版的"),v("code",[_._v("HTTP")]),_._v("。其原理是在"),v("code",[_._v("HTTP")]),_._v("和"),v("code",[_._v("TCP")]),_._v("之间建立了一个中间层，当"),v("code",[_._v("HTTP")]),_._v("和"),v("code",[_._v("TCP")]),_._v("通信时并不是像以前那样直接通信，直接经过了一个中间层进行加密，将加密后的数据包传给"),v("code",[_._v("TCP")]),_._v(", 响应的，"),v("code",[_._v("TCP")]),_._v("必须将数据包解密，才能传给上面的"),v("code",[_._v("HTTP")]),_._v("。这个中间层也叫"),v("code",[_._v("安全层")]),_._v("。"),v("code",[_._v("安全层")]),_._v("的核心就是对数据"),v("code",[_._v("加解密")]),_._v("。")]),_._v(" "),v("p",[_._v("接下来我们就来剖析一下"),v("code",[_._v("HTTPS")]),_._v("的加解密是如何实现的。")]),_._v(" "),v("h2",{attrs:{id:"对称加密和非对称加密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密和非对称加密"}},[_._v("#")]),_._v(" 对称加密和非对称加密")]),_._v(" "),v("h3",{attrs:{id:"概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[_._v("#")]),_._v(" 概念")]),_._v(" "),v("p",[_._v("首先需要理解"),v("code",[_._v("对称加密")]),_._v("和"),v("code",[_._v("非对称加密")]),_._v("的概念，然后讨论两者应用后的效果如何。")]),_._v(" "),v("p",[v("code",[_._v("对称加密")]),_._v("是最简单的方式，指的是"),v("code",[_._v("加密")]),_._v("和"),v("code",[_._v("解密")]),_._v("用的是"),v("strong",[_._v("同样的密钥")]),_._v("。")]),_._v(" "),v("p",[_._v("而对于"),v("code",[_._v("非对称加密")]),_._v("，如果有 A、 B 两把密钥，如果用 A 加密过的数据包只能用 B 解密，反之，如果用 B 加密过的数据包只能用 A 解密。")]),_._v(" "),v("h3",{attrs:{id:"加解密过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#加解密过程"}},[_._v("#")]),_._v(" 加解密过程")]),_._v(" "),v("p",[_._v("接着我们来谈谈"),v("code",[_._v("浏览器")]),_._v("和"),v("code",[_._v("服务器")]),_._v("进行协商加解密的过程。")]),_._v(" "),v("p",[_._v("首先，浏览器会给服务器发送一个随机数"),v("code",[_._v("client_random")]),_._v("\n和一个加密的方法列表。")]),_._v(" "),v("p",[_._v("服务器接收后给浏览器返回另一个随机数"),v("code",[_._v("server_random")]),_._v("和加密方法。")]),_._v(" "),v("p",[_._v("现在，两者拥有三样相同的凭证: "),v("code",[_._v("client_random")]),_._v("、"),v("code",[_._v("server_random")]),_._v("和加密方法。")]),_._v(" "),v("p",[_._v("接着用这个加密方法将两个随机数混合起来生成密钥，这个密钥就是浏览器和服务端通信的"),v("code",[_._v("暗号")]),_._v("。")]),_._v(" "),v("h3",{attrs:{id:"各自应用的效果"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各自应用的效果"}},[_._v("#")]),_._v(" 各自应用的效果")]),_._v(" "),v("p",[_._v("如果用"),v("code",[_._v("对称加密")]),_._v("的方式，那么第三方可以在中间获取到"),v("code",[_._v("client_random")]),_._v("、"),v("code",[_._v("server_random")]),_._v("和加密方法，由于这个加密方法同时可以解密，所以中间人可以成功对暗号进行解密，拿到数据，很容易就将这种加密方式破解了。")]),_._v(" "),v("p",[_._v("那能不能只用"),v("code",[_._v("非对称加密")]),_._v("呢？理论上是可以的，但实际上非对称加密需要的计算量非常大，对于稍微大一点的数据即使用最快的处理器也非常耗时。后面有机会给大家分享一下 RSA 非对称加密算法的原理，大家就会有更加直观的认识，这里我们先不深究。")]),_._v(" "),v("h2",{attrs:{id:"对称加密和非对称加密的结合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#对称加密和非对称加密的结合"}},[_._v("#")]),_._v(" 对称加密和非对称加密的结合")]),_._v(" "),v("p",[_._v("可以发现，对称加密和非对称加密，只用前者会有安全隐患，只用后者性能消耗又太大。那我们能不能把两者结合，保证性能的同时又能保证安全呢？")]),_._v(" "),v("p",[_._v("其实是可以的，演示一下整个流程：")]),_._v(" "),v("ol",[v("li",[_._v("浏览器向服务器发送"),v("code",[_._v("client_random")]),_._v("和加密方法列表。")]),_._v(" "),v("li",[_._v("服务器接收到，返回"),v("code",[_._v("server_random")]),_._v("、加密方法以及公钥。")]),_._v(" "),v("li",[_._v("浏览器接收，接着生成另一个随机数"),v("code",[_._v("pre_random")]),_._v(", 并且用公钥加密，传给服务器。(敲黑板！重点操作！)")]),_._v(" "),v("li",[_._v("服务器用公钥解密这个被加密后的"),v("code",[_._v("pre_random")]),_._v("。")])]),_._v(" "),v("p",[_._v("现在浏览器和服务器有三样相同的凭证:"),v("code",[_._v("client_random")]),_._v("、"),v("code",[_._v("server_random")]),_._v("和"),v("code",[_._v("pre_random")]),_._v("。然后两者用相同的加密方法混合这三个随机数，生成最终的"),v("code",[_._v("密钥")]),_._v("。")]),_._v(" "),v("p",[_._v("然后浏览器和服务器尽管用一样的密钥进行通信，即使用"),v("code",[_._v("对称加密")]),_._v("。")]),_._v(" "),v("p",[_._v("这个最终的密钥是很难被中间人拿到的，为什么呢? 因为中间人没有私钥，从而"),v("strong",[_._v("拿不到pre_random")]),_._v("，也就无法生成最终的密钥了。")]),_._v(" "),v("p",[_._v("回头比较一下和单纯的使用"),v("strong",[_._v("非对称加密")]),_._v(", 这种方式做了什么改进呢？本质上是"),v("strong",[_._v("防止了私钥加密的数据外传")]),_._v("。单独使用"),v("strong",[_._v("非对称加密")]),_._v("，最大的漏洞在于服务器传数据给浏览器只能用"),v("code",[_._v("私钥")]),_._v("加密，这是危险产生的根源。利用"),v("code",[_._v("对称和非对称")]),_._v("加密结合的方式，就防止了这一点，从而保证了安全。")]),_._v(" "),v("h2",{attrs:{id:"添加数字证书"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加数字证书"}},[_._v("#")]),_._v(" 添加数字证书")]),_._v(" "),v("p",[_._v("尽管通过两者加密方式的结合，能够很好地实现加密传输，但实际上还是存在一些问题。黑客如果采用 DNS 劫持，将目标地址替换成黑客服务器的地址，然后黑客自己造一份公钥和私钥，照样能进行数据传输。而对于浏览器用户而言，他是不知道自己正在访问一个危险的服务器的。")]),_._v(" "),v("p",[_._v("事实上"),v("code",[_._v("HTTPS")]),_._v("在上述"),v("code",[_._v("结合对称和非对称加密")]),_._v("的基础上，又添加了"),v("code",[_._v("数字证书认证")]),_._v("的步骤。其目的就是让服务器证明自己的身份。")]),_._v(" "),v("h3",{attrs:{id:"传输过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传输过程"}},[_._v("#")]),_._v(" 传输过程")]),_._v(" "),v("p",[_._v("为了获取这个证书，服务器运营者需要向第三方认证机构获取授权，这个第三方机构也叫"),v("code",[_._v("CA")]),_._v("("),v("code",[_._v("Certificate Authority")]),_._v("), 认证通过后 CA 会给服务器颁发"),v("strong",[_._v("数字证书")]),_._v("。")]),_._v(" "),v("p",[_._v("这个数字证书有两个作用:")]),_._v(" "),v("ol",[v("li",[_._v("服务器向浏览器证明自己的身份。")]),_._v(" "),v("li",[_._v("把公钥传给浏览器。")])]),_._v(" "),v("p",[_._v("这个验证的过程发生在什么时候呢？")]),_._v(" "),v("p",[_._v("当服务器传送"),v("code",[_._v("server_random")]),_._v("、加密方法的时候，顺便会带上"),v("code",[_._v("数字证书")]),_._v("(包含了"),v("code",[_._v("公钥")]),_._v("), 接着浏览器接收之后就会开始验证数字证书。如果验证通过，那么后面的过程照常进行，否则拒绝执行。")]),_._v(" "),v("p",[_._v("现在我们来梳理一下"),v("code",[_._v("HTTPS")]),_._v("最终的加解密过程:\n"),v("img",{attrs:{src:_.$withBase("/week12/1.jpg"),alt:"project"}})]),_._v(" "),v("h3",{attrs:{id:"认证过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#认证过程"}},[_._v("#")]),_._v(" 认证过程")]),_._v(" "),v("p",[_._v("浏览器拿到数字证书后，如何来对证书进行认证呢？")]),_._v(" "),v("p",[_._v("首先，会读取证书中的明文内容。CA 进行数字证书的签名时会保存一个 Hash 函数，来这个函数来计算明文内容得到"),v("code",[_._v("信息A")]),_._v("，然后用公钥解密明文内容得到"),v("code",[_._v("信息B")]),_._v("，两份信息做比对，一致则表示认证合法。")]),_._v(" "),v("p",[_._v("当然有时候对于浏览器而言，它不知道哪些 CA 是值得信任的，因此会继续查找 CA 的上级 CA，以同样的信息比对方式验证上级 CA 的合法性。一般根级的 CA 会内置在操作系统当中，当然如果向上找没有找到根级的 CA，那么将被视为不合法。")]),_._v(" "),v("h2",{attrs:{id:"总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[_._v("#")]),_._v(" 总结")]),_._v(" "),v("p",[_._v("HTTPS并不是一个新的协议, 它在"),v("code",[_._v("HTTP")]),_._v("和"),v("code",[_._v("TCP")]),_._v("的传输中建立了一个安全层，利用"),v("code",[_._v("对称加密")]),_._v("和"),v("code",[_._v("非对称机密")]),_._v("结合数字证书认证的方式，让传输过程的安全性大大提高。")])])}),[],!1,null,null,null);v.default=r.exports}}]);