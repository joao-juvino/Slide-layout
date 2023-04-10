const rightButton = document.getElementById("right-button");

var slideCtt = 0;
const cards = [...document.getElementsByClassName("card")];
const maxRight = cards.length - 1;

rightButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    let move;
    if(Math.abs(slideCtt) == maxRight){
        move = Math.abs(slideCtt) - 2;
        slideCtt = 0;
    } else {
        move = --slideCtt;
    }

    cards.forEach(card => {
        card.style.transform = `translateX(${move * 100}%)`;
    })
});
