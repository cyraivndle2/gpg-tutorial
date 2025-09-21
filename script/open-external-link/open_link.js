/**
 * 外部链接批量调整为在新窗口打开
 */
document.addEventListener("DOMContentLoaded", function () {
  const origin = window.location.origin;
  const externalLinkMark = "点击前往外部站点";

  document.querySelectorAll("a[href]").forEach(function (el) {
    // 只处理非本站或手动标记的链接
    // @ts-ignore: el instanceof HTMLAnchorElement 
    if (!el.href.startsWith(origin) || externalLinkMark === el.title) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
      el.setAttribute("title", externalLinkMark);
    }
  });
});