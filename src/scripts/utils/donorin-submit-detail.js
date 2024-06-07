import DonorinDbSource from "../data/donorindb-source";
import {
  populateModal,
  populateModalSubmit,
} from "../views/templates/template-creator";

const submitButtonFunction = async () => {
  const users = await DonorinDbSource.donorinData();
  const modal = document.querySelector(".modal-container");
  const modalSubmit = document.querySelector(".modal-ajukan");
  const closeButton = document.querySelector(".modal-ajukan-close-button");
  const userTransactionsInfo = document.querySelector(".modal-ajukan-info");
  const submitButtons = document.querySelectorAll("#submitButton");
  const cancelButton = document.querySelector("#ajukanCancelButton");

  submitButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = Number(event.target.dataset.userId);
      const user = users.find((u) => {
        if (u.id === userId) {
          return u.id;
        }
      });

      userTransactionsInfo.innerHTML = populateModalSubmit(user);
      const modal = document.querySelector(".modal-container");
      modal.classList.add("show");
      modalSubmit.classList.add("show");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalSubmit.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalSubmit.classList.remove("show");
    }
  });

  cancelButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalSubmit.classList.remove("show");
  });
};

export default submitButtonFunction;
