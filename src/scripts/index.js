import "regenerator-runtime";
import "../styles/about.scss"
import "../styles/style.scss";
import "../styles/responsive.scss";
import "../styles/home.scss";
import "../styles/profile.scss";
import "../styles/donorin.scss";
import "../styles/login.scss";
import App from "./views/app";

const app = new App({
  content: document.querySelector("#mainContent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});
