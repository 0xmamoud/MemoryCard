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


let dataAttribute = [];

function compareCard(e) {
    dataAttribute.unshift(e.target.getAttribute("data-attr"));
    
    if (dataAttribute.length === 1) {
        return;
    } else if (dataAttribute.length === 2) {
        if (dataAttribute[0] !== dataAttribute[1]) {
            console.log(dataAttribute);
            setTimeout(() => {
                const activeElements = document.querySelectorAll(".active");
                for (let i = activeElements.length; i > 0; i--) {
                    console.log(i);
                    activeElements[activeElements.length - 1].classList.remove("active");
                    activeElements[activeElements.length -2].classList.remove("active");
                }
            }, 1000);
        }
        dataAttribute = [];
    }
}


