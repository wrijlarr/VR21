const CARD_DATA_KEY = "card-data";
const CARD_TITLE_ATTRIBUTE = "data-meme-title";


const addForm = document.querySelector("#addModal form");
addForm.addEventListener("submit", handleAddSubmit);
window.addEventListener("load", addAllCardsToUI)

function handleAddSubmit(event){
    event.preventDefault();
    const imageUrl = addForm.elements.imageUrl.value;
    const topText = addForm.elements.title.value;
    const bottomText = addForm.elements.description.value;

    const cardData = {imageUrl,title, description}
    addCardToUI(cardData);
    addCardToDB(cardData);
    
    // Clear input fields
    addForm.reset();

    const closeBtn = document.querySelector('[data-bs-dismiss="modal"]');
    closeBtn.click();
}

function addCardToUI(cardData){
    // create template with card in it
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

cardCol.querySelector(".card-title").textContent = cardData.topText;
cardCol.querySelector(".card-text").textContent = cardData.bottomText;

// Enable delete funtionality
const deleteBtn = cardCol.querySelector(".btn-danger");
deleteBtn.addEventListener("click", deleteCard);
cardCol.setAttribute(CARD_TITLE_ATTRIBUTE, cardData.topText)


//Add Cardcol to UI
document.getElementById("cardContainer");
cardContainer.append(cardCol);
}

function addCardToDB(cardData) {
    let data = loadDataFromDB();
    data.push(cardData);

saveDataToDB(data);
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

function deleteCard(evt){
    // The button that gets clicked
    const deleteBtn = evt.target;
    
    // Select button that contains card
    const cardCol = deleteBtn.closest(".col");
    const topTextToDelete = CardCol.getAttribute(CARD_TITLE_ATTRIBUTE)
    let data = loadDataFromDB();
    data.filter((cardData) => cardData.topText !== topTextToDelete);
    saveDataToDB(data);
    cardCol.remove();
}

function saveDataToDB(data){
    // save back to local storage
    localStorage.setItem(CARD_DATA_KEY, jason.stringify(data));
}