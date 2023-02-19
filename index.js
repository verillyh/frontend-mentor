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


document.addEventListener("DOMContentLoaded", () => {
    var stars = document.getElementsByClassName("stars");
    addStars(stars);
})