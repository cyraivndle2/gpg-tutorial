# 解密消息

## 解密密文文本

1. 收到以 `-----BEGIN PGP MESSAGE-----` 开头的密文文本。

2. 选择以下一种方法让 OpenKeychain 读取密文文本。

    > **方式 1：分享密文文本到 OpenKeychain**
    >
    > 部分应用（如 Via浏览器）支持分享文本到其他应用。利用此特性，分享密文文本到 OpenKeychain 让其读取。  
    > 
    > 参考步骤： 
    >
    > 1. 选中密文文本。
    > 2. 点击文本周围出现的工具栏上的分享按钮。
    > 3. 点击“OpenKeychain：解密”和“**仅此一次**”（如果有该项）。
    >
    >    ![使用 OpenKeychain 处理消息或密文](shared/using-openkeychain-to-handle-message.png)

    > **方式 2：手动指定从剪贴板读取**
    >
    > 1. 打开 OpenKeychain，从屏幕左侧向右滑动拉出侧边菜单。
    > 2. 点击“加密/解密”。
    >
    >    ![加密/解密”](shared/encrypting-and-decrypting.png)
    >
    > 3. 点击“从剪贴板导入”。

3. 进行解密操作时，如果创建密钥对时设置了私钥密码，则此时需要在“密码”输入框中输入先前设置的密码，然后点击“解锁”按钮。

    ![输入私钥密码](shared/entering-private-key-passphrase.png)

4. 解密完成后会跳转到独立的页面显示解密得到的原始文本。