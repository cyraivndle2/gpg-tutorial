# 非对称加密教程（GPG 教程）

## 构建

安装 [mdBook](https://rust-lang.github.io/mdBook/guide/installation.html) 后在终端运行以下命令。

Windows 用户可以使用 Git Bash。

```console
$ git clone --tags https://github.com/cyraivndle2/gpg-tutorial.git && cd gpg-tutorial

$ mkdir -p vendor/cjk-search
$ curl -o vendor/cjk-search/fzf.umd.js https://raw.githubusercontent.com/allfunc/docker-mdbook/refs/heads/main/mdbook-demo/assets/fzf.umd.js
$ curl -o vendor/cjk-search/elasticlunr.js https://raw.githubusercontent.com/allfunc/docker-mdbook/refs/heads/main/mdbook-demo/assets/elasticlunr.js

$ git describe --tags > src/.version

$ mdbook serve -n 127.0.0.1
```

## （可选）配置 VS Code 开发环境

使用 VS Code 进行开发的用户可以在项目根目录下创建 `.vscode/settings.json` 文件，并写入以下内容以统一项目风格：

```json
{
    "markdown.copyFiles.destination": {
        "*": "${documentBaseName}/"
    }
}
```

配置项说明：

`markdown.copyFiles.destination`

- 指定 Markdown 在复制/粘贴或拖拽插入文件时的存放路径和文件名。
- 默认存放在与 Markdown 文件同名的目录下。
- 此设置为可选项，也可根据需要让多个 Markdown 文件共享同一目录。

## 许可

非对称加密教程（GPG 教程）© 2022-2025 cyraivndle2 以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议发布，详见 [LICENSE](LICENSE)。