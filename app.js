const cards = document.querySelectorAll('.card');

function getRandomCard () {
    cards.forEach((card) => {
            const random = Math.trunc(Math.random() * 12)
            // console.log(random);
            card.style.order = random;
        })
}

window.addEventListener("load", getRandomCard);
window.addEventListener("keypress", function () {
    if ("space") {
        getRandomCard()
    }
});

cards.forEach((card, index) => {
    card.addEventListener("click", function() {
        const dataAttribute = card.getAttribute("data-attr");
        console.log(dataAttribute);

    })
})




