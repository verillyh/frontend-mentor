/* || Arrow functions || */
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


/* || Active functions || */
function toggleFaqActive (item) {
    /* Set faq items to active mode */
    item.parentElement.classList.toggle("parent-active");
    item.nextElementSibling.classList.toggle("desc-active");
    item.classList.toggle("title-active");
}

function listenForClicks (items) {
    /* Listen for click events -> faq-items */
    var length = items.length;

    for (let i = 0; i < length; i++) {
        addArrow(items[i]);

        items[i].addEventListener("click", function () {
            // Get which element was active before
            var activeElement = document.querySelector(".title-active");

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


/* || Media query functions || */
function mobileListener (media) {
    let mainElement = document.querySelector("main");
    let newImage = document.createElement("img");
    let imagesNode = document.querySelector(".decor-image");
    
    if (media.matches) {
        mainElement.style.flexDirection = "column";

        newImage.setAttribute("src", "./images/illustration-woman-online-mobile.svg")
        newImage.classList.add("mobile-image");
        
        imagesNode.replaceChildren(newImage);
    }
}



// When the page is loaded...
document.addEventListener("DOMContentLoaded", () => {
    // Init variables
    const faqList = document.getElementsByClassName("faq-title");
    const mobileMediaQuery = window.matchMedia("(max-width: 1185px)");
    
    listenForClicks(faqList);
    // Listen for media query events
    mobileMediaQuery.addEventListener("change", mobileListener);
    mobileListener(mobileMediaQuery);
})
