document.addEventListener("DOMContentLoaded", () => {
    var reviews = document.getElementsByClassName("rating-item");
    var starNumber = 5;
    var stars = new Array(starNumber);

    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i];
        let parent = review.parentNode;
        for (let j = 0; j < starNumber; j++) {
            stars[j] = document.createElement("div");
            stars[j].classList.add("star");

            parent.insertBefore(stars[j], review);
        }
    }
})
