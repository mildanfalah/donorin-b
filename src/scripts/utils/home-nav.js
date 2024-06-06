import UrlParser from "../routes/url-parser";

const navButtonFunction = () => {
  const navButtons = document.querySelectorAll(".nav-button");

  function removeSelection() {
    navButtons.forEach((button) => {
      button.classList.remove("nav-active");
    });
  }

  function addActiveClassToCurrentPage() {
    const { resource } = UrlParser.parseActiveUrlWithoutCombiner();
    const currentPage = resource || "home";

    removeSelection();

    navButtons.forEach((button) => {
      const page = button.getAttribute("data-page");
      if (page === currentPage) {
        button.classList.add("nav-active");
      }
    });
  }

  function handleNavButtonClick() {
    removeSelection();
    this.classList.add("nav-active");
  }

  navButtons.forEach((button) =>
    button.addEventListener("click", handleNavButtonClick)
  );

  addActiveClassToCurrentPage();
};

export default navButtonFunction;
