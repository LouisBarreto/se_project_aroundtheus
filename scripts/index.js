const initialCards = [
  {
    name: "L'Eau",
    link: "https://images.unsplash.com/photo-1583325033548-1eeacdb0b16e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80",
  },
  {
    name: "Palace of Versailles painting",
    link: "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    name: "Layers of wheatpasted posters on a wall",
    link: "https://images.unsplash.com/photo-1583407723467-9b2d22504831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Abandoned bike",
    link: "https://images.unsplash.com/photo-1585644198527-05519fdeaf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Rabbit man",
    link: "https://images.unsplash.com/photo-1624930266067-dc3aa6a7fd5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "mental health matters",
    link: "https://images.unsplash.com/photo-1634424332312-13da1be082a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const modal = document.querySelector(".modal");
const modalContainer = modal.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = modalContainer.querySelector(".close");
const profileTitle = document.querySelector(".profile__name");
const profiledescription = document.querySelector(".profile__subtitle");
const saveProfileButton = document.querySelector(
  "#edit-profile-modal .form__button"
);
const cardGallery = document.querySelector(".gallery__cards");
const nameInput = modal.querySelector("#name-input");
const descriptionInput = modal.querySelector("#description-input");

editButton.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profiledescription.textContent;
  modal.classList.add("modal__container_opened");
});
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal__container_opened");
});

modal.addEventListener("submit", (event) => {
  event.preventDefault();
  profiledescription.textContent = descriptionInput.value;
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  modalClosed(modal);
});

for (let i = 0; i < initialCards.length; i++) {
  const card = getCardElement(initialCards[i]);
  cardGallery.append(card);
}

function getCardElement(data) {
  let cardTemplate = document.querySelector("#cards").content.cloneNode(true);
  let cardElement = cardTemplate.querySelector(".card");
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = data.link;
  cardTitle.textContent = data.name;
  cardImage.alt = data.name;
  return cardElement;
}
function modalClosed(modal) {
  modal.classList.remove("modal__container_opened");
}
function modalOpened(modal) {
  modal.classlist.add("modal_container_opened");
}
