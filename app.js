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
let secondCard = null;
let count = 0;
const score = document.querySelector(".score");
const advice = document.querySelector(".advice");
function compareCard(e) {
    const clickedCard = e.target;
    count += 0.5;
    score.textContent = `Nombre de coups : ${Math.floor(count) }`
    if (!firstCard) {
      firstCard = clickedCard;
    } else if (!secondCard) {
      secondCard = clickedCard;
      if (firstCard.dataset.attr === secondCard.dataset.attr) {
        
        firstCard = null;
        secondCard = null;
        const allCards = Array.from(cardList);
        if (allCards.every((card) => card.children[0].children[1].classList.contains("active"))) {
            cardList.forEach((card) => {
            card.removeEventListener("click", flipACard);

            advice.textContent = `Bravo ! Appuyez sur "espace" pour relancer une partie.`;

            score.textContent = `Votre score final : ${count}`;
          });
        }
      } else {
        setTimeout(() => {
          firstCard.children[0].children[1].classList.remove("active");
          secondCard.children[0].children[1].classList.remove("active");
          firstCard = null;
          secondCard = null;
        }, 1000);
      }
      delay()
    }
  }
  

  function delay() {
    cardList.forEach(card => {
      card.removeEventListener("click", flipACard);
    });
    
    setTimeout(() => {
      cardList.forEach(card => {
          card.addEventListener("click", flipACard);
      });
    }, 1000);
  }
  







