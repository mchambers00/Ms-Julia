document.addEventListener("DOMContentLoaded", function () {
    let noButton = document.querySelector(".no");
    let yesButton = document.querySelector(".yes");
    
    yesButton.addEventListener("click", function () {
        showImage("yes");
    });

    noButton.addEventListener("click", function () {
        showImage("no");
    });

    noButton.addEventListener("mouseover", function () {
        let x = Math.random() * (window.innerWidth - noButton.clientWidth);
        let y = Math.random() * (window.innerHeight - noButton.clientHeight);
        
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
});

function showImage(response) {
    let img = document.getElementById("response-img");

    if (response === "yes") {
        img.src = "../Images/sad.jpg"; 
    } 
    else {
        img.src = "../Images/good.jpg";
    }

    img.style.display = "block"; 
}