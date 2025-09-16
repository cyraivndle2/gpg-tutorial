# 导出并分享公钥文件

本节介绍 [导出公钥](#export-public-key) 和 [分享公钥](#share-public-key) 的方法。

## 导出公钥 {#export-public-key}

1. 进入 OpenKeychain 的密钥管理界面，选择需要导出的公钥。

    ![密钥列表](export-public-key/certificates.png)

2. 进入密钥概览界面。点击右上角的三点按钮，然后选择“更多密钥详情”选项。

    ![更多密钥详情](export-public-key/key-detail-button.png)

3. 进入密钥详情界面。切换到“分享”选项卡。

4. <a id="fingerprint"></a>通过截图等方式记录界面上的指纹，用于后续的验证。

    > 每个公钥都有 **唯一对应** 的指纹，可用于验证公钥在发送过程中是否被篡改。

    ![密钥详情界面](export-public-key/key-detail.png)

5. 点击下方“分享到...”右边的 **第一个图标**，选择导出方式。

## 分享公钥 {#share-public-key}

1. 发送公钥文件给对方。

2. 等待对方发来 [导入的公钥的指纹](import-public-key-file.md#fingerprint)，并校验其与 [实际的公钥指纹](#fingerprint) 是否一致。

    - 如果一致，说明公钥发送成功，应告知对方校验结果。
    - 如果不一致，表明对方收到的公钥可能被篡改，应排查操作问题并重新发送公钥。若未发现问题，说明当前通信平台可能试图进行中间人攻击（MITM），应中止流程并停止使用该平台。