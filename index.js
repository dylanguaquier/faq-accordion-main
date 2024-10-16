document.querySelectorAll(".title-faq").forEach(function (titleFaq) {
  titleFaq.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    if (answer) {
      answer.classList.toggle("show");
      const toggleIcon = this.querySelector(".toggle");
      if (answer.classList.contains("show")) {
        toggleIcon.src = "/assets/images/icon-minus.svg";
      } else {
        toggleIcon.src = "/assets/images/icon-plus.svg";
      }
    }
  });
});
