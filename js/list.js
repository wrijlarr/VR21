const CARD_DATA_KEY = "card-data";
const CARD_TITLE_ATTRIBUTE = "data-card-details";

const addForm = document.querySelector("#addModal form");
addForm.addEventListener("submit", handleAddSubmit);
window.addEventListener("load", addAllCardsToUI);

// delete button
const deleteBtn = document.querySelector("#deleteModal .btn-danger");

const deleteModal = document.querySelector("#deleteModal");
deleteBtn.addEventListener("click", deleteCard);
deleteModal.addEventListener("show.bs.modal", setIdAttribute);

// update button
const updateBtn = document.querySelector("#saveChanges");
const updateModal = document.querySelector("#updateModal");
updateModal.addEventListener("show.bs.modal", setIdAttribute);
updateBtn.addEventListener("click", updateCard);

function setIdAttribute(e) {
  let modalTrigger = e.relatedTarget
    .closest(".col")
    .getAttribute(CARD_TITLE_ATTRIBUTE);
  e.target.dataset.cardId = modalTrigger;
}

function handleAddSubmit(event) {
  event.preventDefault();
  const imageUrl = addForm.elements.imageUrl.value;
  const title = addForm.elements.title.value;
  const description = addForm.elements.description.value;
  const cardData = { imageUrl, title, description };
  cardData.id = Date.now();

  addCardToUI(cardData);
  addCardToDB(cardData);

  //update card

  // Clear input fields
  addForm.reset();
  addForm.removeAttribute("data-cardId");

  const closeBtn = document.querySelector('[data-bs-dismiss="modal"]');
  closeBtn.click();
}

function addCardToUI(cardData) {
  // create template with card in it
  const cardCol = document.createElement("div");
  cardCol.classList.add("col");
  cardCol.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text"></p>
      <button id="saveChanges" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
      Update
      </button>
      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
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

  cardCol.setAttribute(CARD_TITLE_ATTRIBUTE, cardData.id);

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
  const idToDelete = Number(evt.target.closest("#deleteModal").dataset.cardId);
  console.log(idToDelete);

  let cardToDelete = document.querySelector(
    `#cardContainer [data-card-details="${idToDelete}"]`
  );
  console.log(cardToDelete);

  let data = loadDataFromDB();
  data = data.filter((cardData) => cardData.id !== idToDelete);
  saveDataToDB(data);
  cardToDelete.remove();
}

function updateCard(event) {
  let data = loadDataFromDB();
  const idToUpdate = Number(
    document.querySelector("#updateModal").getAttribute("data-card-id")
  );
  let cardToUpdate = document.querySelector(
    `#cardContainer [data-card-details="${idToUpdate}"]`
  );

  const findCard = data.find((cardData) => cardData.id === idToUpdate);
  // update on the page, not on the DB
  const uImageUrl = document.getElementById("updateImgUrl").value;
  const uTitle = document.getElementById("updateTitle").value;
  const uDesc = document.getElementById("updateDesc").value;

  cardToUpdate.querySelector(".card-title").textContent = uTitle;
  cardToUpdate.querySelector(".card-text").textContent = uDesc;
  cardToUpdate.querySelector(".card-img-top").setAttribute("src", uImageUrl);

  findCard.title = uTitle;
  findCard.imageUrl = uImageUrl;
  findCard.description = uDesc;
  saveDataToDB(data);
}
