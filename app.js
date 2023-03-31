const cardList = document.querySelectorAll('.card');
window.addEventListener("load", getRandomCard);

function getRandomCard() {
    
    const cardArray = Array.from(cardList);
    cardArray.sort(() => Math.random() - 0.5);

    const grid = document.querySelector('.grid');
    cardArray.forEach(card => {
      grid.appendChild(card);
    });
}


window.addEventListener("keypress", reloadCard);
const backs = document.querySelectorAll(".back");

function reloadCard() {

    if("space") {
        backs.forEach((back) => {
           if(back.classList.contains("active")) {
                back.classList.remove("active")
           };
        })

        getRandomCard();
    }
};


cardList.forEach((card) => {
    card.addEventListener("click", flipACard);
})

function flipACard(e) {
    const active = e.target.children[0].children[1];
    active.classList.add("active")
    // console.log(active);
    compareCard(e);
}

let firstCard = null;
let secondCard = null
function compareCard(e) {
    const clickedCard = e.target;
  
    if (!firstCard) {
      firstCard = clickedCard;
    } else if (!secondCard) {
      secondCard = clickedCard;
      if (firstCard.dataset.attr === secondCard.dataset.attr) {
       
        firstCard = null;
        secondCard = null;
  
        const allCards = Array.from(cardList);
        if (allCards.every((card) => card.children[0].children[1].classList.contains("active"))) {
          // Arrêter le jeu
            cardList.forEach((card) => {
            card.removeEventListener("click", flipACard);
          });
        }
      } else {
        // les cartes ne sont pas identiques
        setTimeout(() => {
          firstCard.children[0].children[1].classList.remove("active");
          secondCard.children[0].children[1].classList.remove("active");
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
    }
  }
  








