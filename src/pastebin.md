# 文本分享网站（Pastebin）

发送大段的文本（如公钥、密文等）时，推荐的方式是复制文本到文本分享网站为其创建分享链接，再将链接发给对方。

这样做的好处有：

- 避免因文本过长导致消息发送失败，或刷屏影响观感。
- 降低消息内容在聊天平台被记录、审查或篡改的风险。

以下推荐一些免登录的文本分享网站：

- **[Pastebin](https://pastebin.com/)**：支持长期保存、阅后即焚与设置过期时间，删除需要登录；每天创建分享的数量有限制。
- **[Paste2](https://paste2.org/)**：不支持删除。
- **[Paste.ee](https://pastee.dev/)**：支持长期保存、阅后即焚与设置过期时间；不支持删除。
- **[uPaste](https://upaste.de/)**：固定 1 小时过期；不支持删除。
- **[Hastebin](https://hastebin.ianhon.com/)**：不支持删除。
- **[OneTimeSceret](https://onetimesecret.com/)**：仅支持阅后即焚。
- **[Pastebin Worker](https://shz.al/)**：支持文本与文件；支持设置过期时间，支持更新与删除。若查看分享内容时出现错误，可尝试升级或更换浏览器[^response-bytes]。

[^response-bytes]: 由于网站使用了 [`Response.bytes()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/bytes#browser_compatibility) API，浏览器（或其内核）版本需不低于 Chromium 132 或 Firefox 128 等。