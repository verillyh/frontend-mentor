function addStars(stars) {
    var length = stars.length;
    let starNumber = 5;
    
    for (let i = 0; i < length; i++)
    {        
        for (let j = 0; j < starNumber; j++)
        {
            let star = document.createElement("div");
            star.classList.add("star");
            stars[i].appendChild(star);
        }
    }
}

function offsideCard(card) {
    offsideValue = 15;
    length = card.length;

    for (let i = 0; i < length; i++) 
    {
        console.log(card);
        card[i].style.marginTop = offsideValue * i + "px";
    }
}

function offsideReview(reviews) {
    let offsideValue = 50;
    let length = reviews.length;

    for (let i = 0; i < length; i++)
    {
        reviews[i].style.marginLeft = offsideValue * i + "px";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var stars = document.getElementsByClassName("stars");
    var reviews = document.getElementsByClassName("rating-item");
    var card = document.getElementsByTagName("article");

    addStars(stars);
    offsideReview(reviews);
    offsideCard(card);
})