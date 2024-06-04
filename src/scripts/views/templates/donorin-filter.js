const selectButtonFunction = () => {
  const selectionButton = document.querySelectorAll(".selection-button");
  const descriptionBars = document.querySelectorAll(".description-bar");

  function selectItem(e) {
    removeSelection();
    removeDescription();

    this.classList.add("button-selected");
    const descriptionBar = document.querySelector(`#${this.id}Description`);
    descriptionBar.classList.add("show");
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

  selectionButton.forEach((button) =>
    button.addEventListener("click", selectItem)
  );
};

export default selectButtonFunction;
