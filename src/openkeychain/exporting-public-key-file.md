# 导出并分享公钥文件

本节介绍 [导出公钥](#exporting-public-key) 和 [分享公钥](#sharing-public-key) 的方法。

## 导出公钥 {#exporting-public-key}

1. 进入 OpenKeychain 密钥管理界面，点击需要导出的公钥。

    ![密钥列表](exporting-public-key/certificates.png)

2. 进入密钥概览界面。点击右上角的三点按钮，然后选择“更多密钥详情”选项。

    ![更多密钥详情](exporting-public-key/key-detail-button.png)

3. 进入密钥详情界面。切换到“分享”选项卡。

    ![密钥详情界面](exporting-public-key/key-detail.png)

4. 记下界面上的指纹，在后续验证步骤使用。

    > 每个公钥都有对应且唯一的指纹，可用于验证公钥在发送过程中是否被篡改。

5. 点击下方“分享到...”右边的 **第一个图标**，选择导出方式。

## 分享公钥 {#sharing-public-key}

1. 将公钥文件发送给对方。

2. 等待对方导入公钥时通过另一平台发来指纹，并检查其与 [导出公钥](#exporting-public-key) 第 4 步的指纹是否一致。

    - 如果一致，说明公钥发送成功，告知对方校验结果。
    - 如果不一致，表明对方收到的公钥可能被篡改，应排查操作问题并重新发送公钥。若未发现问题，说明当前通信平台可能试图进行中间人攻击（MITM），应中止流程并停止使用该平台。