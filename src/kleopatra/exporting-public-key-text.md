# 导出公钥文本

本节介绍 [导出公钥](#exporting-public-key) 和 [分享公钥](#sharing-public-key) 的方法。

## 导出公钥 {#exporting-public-key}

1. 进入 Kleopatra 证书管理界面，**双击** 需要导出的公钥。

    ![证书列表](exporting-public-key/certificates.png)

2. 进入证书细节界面，通过截图等方式记录指纹，用于后续的验证。

    > 每个公钥都有对应且唯一的指纹，可用于验证公钥在发送过程中是否被篡改。

    ![证书细节](exporting-public-key/certificate-detail.png)

3. 点击“导出”按钮，公钥会显示在文本框中。

    ![公钥文本](exporting-public-key/public-key-text.png)

## 分享公钥 {#sharing-public-key}

1. 将公钥复制到 [文本分享网站](../pastebin.md) 上为其生成分享链接，然后将链接发送给对方。

2. 等待对方导入公钥时通过另一信道发来指纹，并检查其与 [导出公钥](#exporting-public-key) 第 2 步的指纹是否一致。

    - 如果一致，说明公钥发送成功，应告知对方校验结果。
    - 如果不一致，表明对方收到的公钥可能被篡改，应排查操作问题并重新发送公钥。若未发现问题，说明当前通信平台可能试图进行中间人攻击（MITM），应中止流程并停止使用该平台。