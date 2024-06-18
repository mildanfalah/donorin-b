const selectButtonFunction = async () => {
  const selectionButton = document.querySelectorAll(".selection-button");
  const descriptionBars = document.querySelectorAll(".description-bar");
  const userCards = document.querySelectorAll(".user-card-container");

  function selectItem(e) {
    removeSelection();
    removeDescription();

    this.classList.add("button-selected");
    const descriptionBar = document.querySelector(`#${this.id}Description`);
    descriptionBar.classList.add("show");

    if (this.id === "penerimaButton") {
      showActiveDonors();
    } else if (this.id === "pendonorButton") {
      hidePendonorUsers();
    }
  }

  function removeSelection() {
    selectionButton.forEach((button) =>
      button.classList.remove("button-selected")
    );
  }

  function removeDescription() {
    descriptionBars.forEach((description) =>
      description.classList.remove("show")
    );
  }

  function showActiveDonors() {
    userCards.forEach((card) => {
      const userStatus = card.querySelector("#userStatus").textContent;
      if (userStatus === "Pendonor") {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  function hidePendonorUsers() {
    userCards.forEach((card) => {
      const userStatus = card.querySelector("#userStatus").textContent;

      if (userStatus === "Penerima") {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  selectionButton.forEach((button) =>
    button.addEventListener("click", selectItem)
  );
};

export default selectButtonFunction;
