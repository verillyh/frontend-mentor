function toggleActive (element) {
    element.parentElement.classList.toggle("parent-active");
    element.nextElementSibling.classList.toggle("desc-active");
    element.classList.toggle("title-active");
}


// When the page is loaded...
document.addEventListener("DOMContentLoaded", () => {
    faqList = document.getElementsByClassName("faq-title");
    length = faqList.length;

    for (let i = 0; i < length; i++) {
        faqList[i].addEventListener("click", function () {
            // Get which element was active before
            activeElement = document.querySelector(".title-active");

            // If no element was clicked before..
            if (activeElement == null) {
                toggleActive(this);
            }
            else {
                // Inactive the element before
                toggleActive(activeElement);

                // To simultaneously toggle new active element when new element is clicked
                if (activeElement != this) {
                    toggleActive(this);
                }
            }
        });
    }
})
