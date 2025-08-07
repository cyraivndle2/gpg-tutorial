# 解密消息文件

1. 收到文件后缀名为 `.gpg` 或 `.pgp` 的密文文件。

2. 选择以下一种方式让 OpenKeychain 读取密文文件。

    > **方式 1：直接打开密文文件**
    >
    > 点击打开密文文件，然后选择“OpenKeychain：解密”选项和“**仅此一次**”选项（如果有该项）。
    >
    >    ![使用 OpenKeychain 处理消息或密文](shared/using-openkeychain-to-handle-message.png)

    > **方式 2：手动指定读取的文件**
    >
    > 1. 打开 OpenKeychain，从屏幕左侧向右滑动拉出侧边菜单。
    > 2. 选择“加密/解密”选项。
    >
    >    ![加密/解密”](shared/encrypting-and-decrypting.png)
    >
    > 3. 选择“从文件导入”选项。
    > 4. 选择需要解密的密文文件。

3. 在“密码”输入框中输入先前设置的密码，然后点击“解锁”按钮。

    ![输入私钥密码](shared/entering-private-key-passphrase.png)

4. 解密完成后会跳转到独立的页面显示解密得到的原始文件。可以另存到指定位置。