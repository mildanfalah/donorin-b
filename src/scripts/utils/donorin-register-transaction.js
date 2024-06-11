const registerTransactionFunction = () => {
  const floatingButton = document.querySelector("#register-transaction-button");
  const modal = document.querySelector(".modal-container");
  const modalRegister = document.querySelector(".modal-permintaan");
  const closeButton = document.querySelector(".modal-permintaan-close-button");

  floatingButton.addEventListener("click", () => {
    modal.classList.add("show");
    modalRegister.classList.add("show");
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalRegister.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalRegister.classList.remove("show");
    }
  });
};

export default registerTransactionFunction;
