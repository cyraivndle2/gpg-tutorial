document.addEventListener("DOMContentLoaded", function () {
  const origin = window.location.origin;

  document.querySelectorAll("a[href]").forEach(function (el) {
    // 只处理非本站链接
    // @ts-ignore: el instanceof HTMLAnchorElement 
    if (!el.href.startsWith(origin)) {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener noreferrer");
    }
  });
});