
window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.visibility = "visible";
      btn.style.opacity = "1";
    } else {
      btn.style.visibility = "hidden";
      btn.style.opacity = "0";
    }
  }

  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



