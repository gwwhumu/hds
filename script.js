// JavaScript 处理模态框关闭
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const close = document.querySelector(".close");

  close.onclick = function () {
    modal.style.display = "none";
  };
});
