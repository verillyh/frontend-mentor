/* || Arrow functions */
function addArrow (element) {
    /* Give arrow svg */
    var arrow = document.createElement("img");
    arrow.classList.add("arrow");
    arrow.setAttribute("src", "./images/icon-arrow-down.svg");

    element.append(arrow);
}

function transfromArrow (arrow) {
    arrow.classList.toggle("rotate");
}

/* || Active functions  */
function toggleFaqActive (item) {
    /* Set faq items to active mode */
    item.parentElement.classList.toggle("parent-active");
    item.nextElementSibling.classList.toggle("desc-active");
    item.classList.toggle("title-active");
}

function listenForClicks (items) {
    /* Listen for click events -> faq-items */
    length = items.length;

    for (let i = 0; i < length; i++) {
        addArrow(items[i]);

        items[i].addEventListener("click", function () {
            // Get which element was active before
            activeElement = document.querySelector(".title-active");

            // If no element was clicked before..
            if (activeElement == null) {
                toggleFaqActive(this);
                transfromArrow(this.lastChild);
            }
            else {
                // Inactive the element before
                toggleFaqActive(activeElement);
                transfromArrow(activeElement.lastChild);

                // To simultaneously toggle new active element when new element is clicked
                if (activeElement != this) {
                    toggleFaqActive(this);
                    transfromArrow(this.lastChild);
                }
            }
        });
    }
}


// When the page is loaded...
document.addEventListener("DOMContentLoaded", () => {
    faqList = document.getElementsByClassName("faq-title");
    
    listenForClicks(faqList);

})
