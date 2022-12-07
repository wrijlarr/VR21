{
}
const CARD_DATA_KEY = "card-data";

const addForm = document.querySelector("#addModal form");

addForm.addEventListener("submit", handleAddSubmit);
window.addEventListener("load", addAllCardsToUI)

function handleAddSubmit(event){
    event.preventDefault();
    const imageUrl = addForm.elements.imageUrl.value;
    const topText = addForm.elements.topText.value;
    const bottomText = addForm.elements.bottomText.value;

    const cardData = {imageUrl,topText, bottomText}
    addCardToUI(cardData);
    addCardToDB(cardData);
    
    // Clear input fields
    addForm.reset();

    const closeBtn = document.querySelector('[data-bs-dismiss="modal"]');
    closeBtn.click();
}

function addCardToUI(cardData){
    const cardCol = document.createElement('div')
    cardCol.classList.add("col");
    cardCol.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"></p>
      <button type="button" class="btn btn-danger">
      Delete
      </button>
    </div>
  </div>
</div>`;

// Add data to image, title, and description
cardCol.querySelector(".card-img-top").setAttribute("src", cardData.imageUrl);
cardCol.querySelector(".card-img-top").setAttribute("alt", cardData.topText);  


// add cardCol to the UI
cardCol.querySelector(".card-title").textContent = cardData.topText;
cardCol.querySelector(".card-text").textContent = cardData.bottomText;

document.getElementById("cardContainer");
cardContainer.append(cardCol);
}

function addCardToDB(cardData) {
    let data = loadDataFromDB();
    data.push(cardData);

    //save to local storage
    localStorage.setItem(CARD_DATA_KEY, JSON.stringify(data))

}
function addAllCardsToUI(evt) {
    let data = loadDataFromDB();
    data.forEach((cardData) => addCardToUI(cardData));
}

function loadDataFromDB(){
    let data = JSON.parse(localStorage.getItem(CARD_DATA_KEY));
    if (!data) {
        data = [];
    }
    return data;
}