# 导入公钥文本

1. 收到以 `-----BEGIN PGP PUBLIC KEY BLOCK-----` 开头的公钥文本。

    > 可以通过首行的内容辨别公钥文本和密文文本：
    >
    > 公钥文本首行的英文：BEGIN PGP **PUBLIC KEY BLOCK**  
    > 密文文本首行的英文：BEGIN PGP **MESSAGE**

2. 选择以下一种方式让 OpenKeychain 读取公钥文本。

    > **方式 1：分享公钥文本到 OpenKeychain**  
    >
    > 部分应用（如 Via 浏览器）支持分享文本到其他应用。利用此特性，分享公钥文件到 OpenKeychain 让其读取。  
    > 
    > 参考步骤： 
    >
    > 1. 选中全部公钥文本。
    > 2. 点击文本周围出现的工具栏上的分享按钮。
    > 3. 选择“OpenKeychain：导入密钥”选项和“**仅此一次**”选项（如果有该项）。
    >
    >    ![使用 OpenKeychain 处理公钥](import-public-key/use-openkeychain-to-handle-public-key.png)

    > **方式 2：自动从剪贴板读取公钥文本**  
    >
    > 1. 复制公钥文本，然后打开 OpenKeychain 进入密钥管理界面。
    > 2. 界面下方出现“在剪贴板中发现密钥数据”的提示，点击右侧的“查看”按钮。
    >
    >    ![自动检测剪贴板的公钥文本](import-public-key/check-public-key-from-clipboard.png)

    > **方式 3：手动指定从剪贴板读取公钥文本**  
    >
    > 1. 复制公钥文本，然后打开 OpenKeychain 进入密钥管理界面。
    > 2. 点击界面右下角的圆形“+”图标，然后选择“从文件导入”选项。
    >
    >    ![从文件导入](import-public-key/import-public-key-from-file.png)
    >
    > 3. 进入导入密钥界面。点击右上角的三点图标，然后选择“从剪贴板读取”选项。
    >
    >    ![从剪贴板读取](import-public-key/read-from-clipborad.png)

2. 点击“导入”按钮。

    ![导入的公钥的信息](import-public-key/info-of-imported-public-key.png)

3. 回到密钥管理界面，选择刚导入的公钥。

    ![点击导入的公钥](import-public-key/click-imported-public-key.png)

4. 进入密钥概览界面。点击右上角的三点按钮，然后选择“通过指纹确认”选项。

    ![点击通过指纹确认](import-public-key/click-confirm-through-fingerprint-button.png)

5. <a id="fingerprint"></a>将界面上显示的指纹通过 **与传输公钥时不同的渠道** 发送给对方，并等待对方校验发送的指纹与预期公钥的指纹是否一致。

    - 如果一致，则选择“密钥指纹符合”选项。
    - 如果不一致，表明收到的公钥可能被篡改，应排查操作问题并要求对方重新发送公钥。若未发现问题，说明当前通信平台可能试图进行中间人攻击（MITM），应中止流程并停止使用该平台。

    > 可以通过线下交流、电子邮件、网站公示或游戏聊天等渠道发送指纹。若充分信任当前通信平台，也可通过 [文本分享网站](../pastebin.md) 或 [一次性匿名聊天室](../communication-platform.md) 传递指纹，并通过原平台发送链接。

    ![确认指纹](import-public-key/check-fingerprint.png)

6. 在“我的密钥”下拉框中选择自己的私钥，然后点击“确认密钥”按钮。

    ![认证公钥](import-public-key/certify.png)

7. 在“密码”输入框中输入私钥密码，然后点击“解锁”按钮。

    ![输入私钥密码](shared/enter-private-key-passphrase.png)

8. 已导入的公钥会显示在 OpenKeychain 的密钥管理界面中。