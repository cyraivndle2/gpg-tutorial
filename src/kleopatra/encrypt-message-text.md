# 加密消息文本并发送

1. 完成对方公钥的导入。

2. 进入 Kleopatra 记事本界面，并切换到“记事本”选项卡。

    ![记事本](shared/notepad.png)

3. 在选项卡下方的文本框中输入要发送给对方的文本。

4. 切换到“收件人”选项卡。

    ![收件人](encrypt-message/text-recipients.png)

5. 在“签名身份”下拉框中选择自己的私钥，用于标识发件人的身份。

6. 点击"为他人加密"输入框右侧的 ![选择证书按钮](encrypt-message/select-certificates-button.png) 按钮选择对方的公钥（收件人），可以多选。选择的公钥用于加密消息，以及决定谁能解密。可以通过清空输入框内容来取消选择收件人。

7. 点击“签名/加密记事本内容”按钮。

8. 在“Passphrase”输入框中输入先前设置的私钥密码，然后点击“OK”按钮。

    ![输入私钥密码](shared/enter-private-key-passphrase.png)

9. 加密完成得到密文文本。密文文本会取代原来的消息文本出现在“记事本”选项卡下的输入框中。

    ![密文](encrypt-message/cipertext.png)

10. 复制密文文本粘贴到 [文本分享网站](../pastebin.md) 上为其创建分享链接，然后把链接发送给对方。