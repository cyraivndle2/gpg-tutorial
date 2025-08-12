# 导入公钥文件

1. 收到文件后缀名为 `.asc` 的公钥文件。

2. 在资源管理器中双击打开公钥文件。

    或者在 Kleopatra 中点击工具栏上的“导入”按钮，然后在“选择证书文件”对话框中选择公钥文件。

    ![导入公钥按钮](import-public-key/import-public-key-file-button.png)

3. 点击“认证”按钮。

    ![开始认证公钥](import-public-key/start-certifying.png)

4. <a id="fingerprint"></a>在认证证书界面上，将显示的指纹 **通过另一信道** 发送给对方，并等待对方校验发送的指纹与预期公钥的指纹是否一致。

    - 如果一致，则进入下一步。
    - 如果不一致，表明收到的公钥可能被篡改，应排查操作问题并要求对方重新发送公钥。若未发现问题，说明当前通信平台可能试图进行中间人攻击（MITM），应中止流程并停止使用该平台。

    > 发送指纹时，可以选择线下交流、[一次性匿名聊天室](../communication-platform.md)、电子邮件或网站公示等作为另一信道。若充分信任当前通信平台，也可通过同一平台发送 [文本分享网站](../pastebin.md) 的链接。

    ![检查指纹](import-public-key/check-fingerprint.png)

5. 在“认证方式”下拉框中选择自己的私钥，然后点击“认证”按钮。

    ![认证公钥](import-public-key/certify.png)

6. 在“Passphrase”输入框中输入先前设置的私钥密码，然后点击“OK”按钮。

    ![输入私钥密码](shared/enter-private-key-passphrase.png)

7. 已导入的公钥会显示在 Kleopatra 的证书管理界面中。