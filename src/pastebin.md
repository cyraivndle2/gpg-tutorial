# 文本分享网站（Pastebin）

发送大段的文本（如公钥、密文等）时，推荐的方式是将文本复制到文本分享网站上为其创建分享链接，然后把分享链接发送给对方。

这样做的好处有：

- 避免因为文本过长而发送失败，或者刷屏影响观感。
- 降低消息内容被平台（如聊天软件等）记录审查，或者窃取篡改的可能。

以下推荐一些免登录的文本分享网站：

- **[Pastebin](https://pastebin.com/ "点击前往外部站点")**：支持长期保存、阅后即焚和定时删除（立即删除需要登录），但一天里创建的分享有数量限制。
- **[Paste2](https://paste2.org/ "点击前往外部站点")**：不支持删除。
- **[Paste.ee](https://pastee.dev/ "点击前往外部站点")**：支持长期保存、设置过期时间和阅后即焚，但不支持删除。
- **[uPaste](https://upaste.de/ "点击前往外部站点")**：过期时间固定为 1 小时，但不支持删除。
- **[Hastebin](https://hastebin.ianhon.com/ "点击前往外部站点")**：不支持删除。
- **[OneTimeSceret](https://onetimesecret.com/ "点击前往外部站点")**：仅支持阅后即焚。
- **[Pastebin Worker](https://shz.al/ "点击前往外部站点")**：支持分享文本和文件。支持设置内容过期时间（最长 30 天），支持更新和删除内容。如果在查看分享内容时出现错误，可尝试升级或更换浏览器[^response-bytes]。

[^response-bytes]: 由于网站使用了 [`Response.bytes()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/bytes#browser_compatibility "点击前往外部站点") API，因此要求浏览器（或其内核）版本不低于 Chromium 132 或 Firefox 128 等。