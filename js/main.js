// MySky 简单交互脚本（纯原生 JS，无任何依赖）
(function () {
  "use strict";

  // 1) 移动端菜单展开/收起
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    // 点击某个菜单项后自动收起
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // 2) 卡片滚动进入时淡入
  var targets = document.querySelectorAll(".card, .about-text, .about-visual");
  targets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (el) { observer.observe(el); });
  } else {
    // 不支持时直接显示
    targets.forEach(function (el) { el.classList.add("visible"); });
  }
})();
