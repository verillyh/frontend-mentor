// When the page is loaded...
document.addEventListener("DOMContentLoaded", () => {
    faqList = document.getElementsByClassName("faq-title");

    for (let i = 0; i < faqList.length; i++) {
        faqList[i].addEventListener("click", function () {
            // Apply active state when clicked
            this.classList.toggle("title-active");
            this.nextElementSibling.classList.toggle("desc-active");
            this.parentElement.classList.toggle("parent-active");
        });
    }
})
