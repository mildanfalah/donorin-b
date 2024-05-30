const navButtonFunction = () => {
  const navButtons = document.querySelectorAll(".nav-button");

  function selectItem(e) {
    removeSelection();

    this.classList.add("nav-active");
  }

  function removeSelection() {
    navButtons.forEach((button) => button.classList.remove("nav-active"));
  }

  navButtons.forEach((button) => button.addEventListener("click", selectItem));
};

export default navButtonFunction;
