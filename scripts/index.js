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

function getCardElement(data) {
  let cardTemplate = document.querySelector("#cards").content.cloneNode(true);
  const cardElement = cardTemplate.querySelector(".card");
  let cardImage = cardElement.querySelector(".card__image");
  let cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = data.link;
  cardTitle.textContent = data.name;
  cardImage.alt = data.name;
  return cardElement;
}

const modal = document.querySelector(".modal");
const modalContainer = modal.querySelector(".modal__container");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = modalContainer.querySelector(".modal__close");
const profileTitle = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__subtitle");
const saveProfileButton = document.querySelector(
  "#edit-profile-modal .form__button"
);
const cardGallery = document.querySelector(".gallery__cards");
const nameInput = modal.querySelector("#name-input");
const descriptionInput = modal.querySelector("#description-input");

modal.addEventListener("submit", (event) => {
  event.preventDefault();
  profileDescription.textContent = descriptionInput.value;
  profileTitle.textContent = nameInput.value;
  closeModal(modal);
});

function closeModal(modal) {
  modal.classList.remove("modal__opened");
}
function modalOpened(modal) {
  modal.classlist.add("modal_opened");
}

editButton.addEventListener("click", function () {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
  modal.classList.add("modal__opened");
});
closeButton.addEventListener("click", function () {
  modal.classList.remove("modal__opened");
});

for (let i = 0; i < initialCards.length; i++) {
  const card = getCardElement(initialCards[i]);
  cardGallery.append(card);
}
