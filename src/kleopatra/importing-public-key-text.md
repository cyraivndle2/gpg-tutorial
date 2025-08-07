# 导入公钥文本

1. 收到以 `-----BEGIN PGP PUBLIC KEY BLOCK-----` 开头的公钥文本。

2. 进入 Kleopatra 记事本界面，并切换到“记事本”选项卡。

    ![记事本](shared/notepad.png)

3. 将公钥文本复制到“记事本”选项卡下方的文本框中，然后点击“导入记事本”按钮。

    ![粘贴公钥和导入记事本](importing-public-key/pasting-and-importing.png)

4. 点击“认证”按钮。

    ![开始认证公钥](importing-public-key/starting-certifying.png)

5. 在认证证书界面上，将显示的指纹 **通过另一信道** 发送给对方，并等待对方校验发送的指纹与预期公钥的指纹是否一致。

    - 如果一致，进入下一步。
    - 如果不一致，表明收到的公钥可能被篡改，应排查操作问题并要求对方重新发送公钥。若未发现问题，说明当前通信平台可能试图进行中间人攻击（MITM），应中止流程并停止使用该平台。

    > 发送指纹时，可以选择线下交流、[一次性匿名聊天室](../communication-platform.md)、电子邮件或网站公示等作为另一信道。若充分信任当前通信平台，也可通过同一平台发送 [文本分享网站](../pastebin.md) 的链接。

    ![检查指纹](importing-public-key/checking-fingerprint.png)

6. 在“认证方式”下拉框中选择自己的私钥，然后点击“认证”按钮。

    ![认证公钥](importing-public-key/certifying.png)

7. 在“Passphrase”输入框中输入先前设置的私钥密码，然后点击“OK”按钮。

    ![输入私钥密码](shared/entering-private-key-passphrase.png)

8. 完成公钥的导入与认证。