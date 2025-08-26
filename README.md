# 非对称加密教程（GPG 教程）

## 构建

安装 [mdBook](https://rust-lang.github.io/mdBook/guide/installation.html) 后在终端运行：

```console
$ git clone --tags https://github.com/cyraivndle2/gpg-tutorial.git && cd gpg-tutorial
$ mkdir -p vendor/cjk-search
$ curl -o vendor/cjk-search/fzf.umd.js https://raw.githubusercontent.com/allfunc/docker-mdbook/refs/heads/main/mdbook-demo/assets/fzf.umd.js
$ curl -o vendor/cjk-search/elasticlunr.js https://raw.githubusercontent.com/allfunc/docker-mdbook/refs/heads/main/mdbook-demo/assets/elasticlunr.js
$ git describe --tags > src/.version
$ mdbook serve -n 127.0.0.1
```

Windows 用户可以使用 Git Bash。

## 许可

非对称加密教程（GPG 教程）© 2022-2025 cyraivndle2 以 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议发布，详见 [LICENSE](LICENSE)。