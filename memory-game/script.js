let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".gameCards .card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("clicked");

    if (counter === 0) {
      firstSelection = card.getAttribute("object");
      counter++;
    } else {
      secondSelection = card.getAttribute("object");
      counter = 0;

      if(firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[object='" + firstSelection + "']"
        );

        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
      } else {
        const wrongCards = document.querySelectorAll(".card.clicked");

        wrongCards[0].classList.add("wrong");
        wrongCards[1].classList.add("wrong");

        setTimeout(() => {
          wrongCards[0].classList.remove("wrong");
          wrongCards[0].classList.remove("clicked");
          wrongCards[1].classList.remove("wrong");
          wrongCards[1].classList.remove("clicked");
        }, 400);
      }
    }
  });
});