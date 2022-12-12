const CARD_DATA_KEY = "card-data";
const CARD_TITLE_ATTRIBUTE = "data-list-title";

const addForm = document.querySelector("#addModal form");
addForm.addEventListener("submit", handleAddSubmit);
window.addEventListener("load", addAllCardsToUI);

function handleAddSubmit(event) {
  event.preventDefault();
  const imageUrl = addForm.elements.imageUrl.value;
  const title = addForm.elements.title.value;
  const description = addForm.elements.description.value;
  const cardData = { imageUrl, title, description };
  const cardID = addForm.getAttribute("data-cardId"); //grab the id from the update button
  event.preventDefault(); //refresh is a default behavior

  addCardToUI(cardData);
  addCardToDB(cardData);

  //update card

    //add new card
  }

  // Clear input fields
  addForm.reset();
  addForm.removeAttribute("data-cardId");

  const closeBtn = document.querySelector('[data-bs-dismiss="modal"]');
  closeBtn.click();
}

function addCardToUI(cardData) {
  // create template with card in it
  const cardID = Date.now();
  const cardCol = document.createElement("div");
  cardCol.classList.add("col");
  cardCol.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"></p>
      <button type="button" class="btn btn-primary">
      Update
      </button>
      <button type="button" class="btn btn-danger">
      Delete
      </button>
    </div>
  </div>
</div>`;

  // Add data to image, title, and description
  cardCol.querySelector(".card-img-top").setAttribute("src", cardData.imageUrl);
  cardCol.querySelector(".card-img-top").setAttribute("alt", cardData.title);

  cardCol.querySelector(".card-title").textContent = cardData.title;
  cardCol.querySelector(".card-text").textContent = cardData.description;

  // Enable delete funtionality
  const deleteBtn = cardCol.querySelector(".btn-danger");
  deleteBtn.addEventListener("click", deleteCard);
  cardCol.setAttribute(CARD_TITLE_ATTRIBUTE, cardData.title);

  //Add cardCol to UI
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

function loadDataFromDB() {
  let data = JSON.parse(localStorage.getItem(CARD_DATA_KEY));
  if (!data) {
    data = [];
  }
  return data;
}

function saveDataToDB(data) {
  localStorage.setItem(CARD_DATA_KEY, JSON.stringify(data));
}

function deleteCard(evt) {
  // The button that gets clicked
  const deleteBtn = evt.target;

  // Select button that contains card
  const cardCol = deleteBtn.closest(".col");
  const titleToDelete = cardCol.getAttribute(CARD_TITLE_ATTRIBUTE);
  let data = loadDataFromDB();
  data = data.filter((cardData) => cardData.title !== titleToDelete);
  saveDataToDB(data);
  cardCol.remove();
}

function updateCard(evt) {
  const card = evt.target.closest(".card");
  const cardID = card.getAttribute("data-cardID");
}
