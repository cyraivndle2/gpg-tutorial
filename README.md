# 非对称加密教程（GPG 教程）

## 构建

安装 [mdBook](https://rust-lang.github.io/mdBook/guide/installation.html) 后在终端（Windows 下可使用 Git Bash）运行以下命令：

```console
$ git clone --tags https://github.com/cyraivndle2/gpg-tutorial.git && cd gpg-tutorial

$ mkdir -p vendor/cjk-search
$ curl -o vendor/cjk-search/fzf.umd.js https://raw.githubusercontent.com/allfunc/docker-mdbook/refs/heads/main/mdbook-demo/assets/fzf.umd.js
$ curl -o vendor/cjk-search/elasticlunr.js https://raw.githubusercontent.com/allfunc/docker-mdbook/refs/heads/main/mdbook-demo/assets/elasticlunr.js

$ git describe --tags > src/.version

$ mdbook serve -n 127.0.0.1  # 若提示找不到命令，请使用 mdbook 的完整路径，或将其位置添加到 PATH 环境变量
```

## （可选）配置 VS Code 开发环境

使用 VS Code 的编辑者如果需要在文中粘贴（或拖拽）插入文件，可以向项目目录下的 `.vscode/settings.json` 文件写入以下内容。该配置可将插入的文件默认存放在与当前 Markdown 文件同名的目录下，以保持项目结构的一致。

```json
{
    "markdown.copyFiles.destination": {
        "*": "${documentBaseName}/"
    }
}
```

## 许可

非对称加密教程（GPG 教程）© 2022-2025 cyraivndle2 以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议发布，详见 [LICENSE](LICENSE)。