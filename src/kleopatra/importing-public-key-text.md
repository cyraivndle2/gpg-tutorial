# 导入公钥

## 导入公钥文本

1. 收到以 `-----BEGIN PGP PUBLIC KEY BLOCK-----` 开头的公钥文本，以及该公钥的指纹截图。

2. 进入 Kleopatra 记事本界面，并切换到“记事本”选项卡。

    ![记事本](shared/notepad.png)

3. 将公钥文本复制粘贴到“记事本”选项卡下方的文本框中，然后点击“导入记事本”按钮。

    ![粘贴公钥和导入记事本](importing-public-key/pasting-and-importing.png)

4. 点击“认证”按钮。

    ![开始认证公钥](importing-public-key/starting-certifying.png)

5. 在认证证书界面上，对比显示的指纹是否与对方在截图中提供的指纹一致。

    - 如果一致，则进行下一步。
    - 如果不一致，表明收到的公钥不是对方想要发送的，应立即终止流程并要求对方重新发送公钥。如果情况依旧，说明当前通信平台存在安全风险，应考虑更换平台。

    ![检查指纹](importing-public-key/checking-fingerprint.png)

6. “认证方式”下拉框选择自己的私钥，然后点击“认证”按钮。

    ![认证公钥](importing-public-key/certifying.png)

7. 如果创建密钥对时设置了“使用密码句保护生成的密钥”，则此时需要在“Passphrase”输入框中输入先前设置的私钥密码，然后点击“OK”按钮。

    ![输入私钥密码](shared/entering-private-key-passphrase.png)

8. 完成公钥的导入与认证。