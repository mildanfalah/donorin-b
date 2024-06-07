import DonorinDbSource from "../data/donorindb-source";
import { populateModal } from "../views/templates/template-creator";

const contributeButtonFunction = async () => {
  const userTransactions = await DonorinDbSource.transactionData();
  const modal = document.querySelector(".modal-container");
  const modalContribute = document.querySelector(".modal-kontribusi");
  const closeButton = document.querySelector(".modal-close-button");
  const userTransactionsInfo = document.querySelector(".modal-kontribusi-info");
  const contributeButtons = document.querySelectorAll("#contributeButton");
  const cancelButton = document.querySelector("#cancelButton");

  contributeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = Number(event.target.dataset.userId);
      const user = userTransactions.find((u) => {
        if (u.id_user_pemohon === userId) {
          return u.id_user_pemohon;
        }
      });

      userTransactionsInfo.innerHTML = populateModal(user);
      const modal = document.querySelector(".modal-container");
      modal.classList.add("show");
      modalContribute.classList.add("show");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalContribute.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalContribute.classList.remove("show");
    }
  });

  cancelButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalContribute.classList.remove("show");
  });
};

export default contributeButtonFunction;
