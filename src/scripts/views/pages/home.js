import HOMECONTENT from "../../data/HOMECONTENT.json";
import navButtonFunction from "../../utils/home-nav";
import { createHomeContentTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <div class="home-content-list"></div>
        <div class ="bottom-content-container">
          <div class ="bottom-content-1">
            <h2>Donorin</h2>
            <p>Setetes Darah, Sejuta Harapan</p>
          </div>
          <div class ="bottom-content-2">
            <h2>Tech Stack</h2>
            <a href="#/">Javascript</a>
            <a href="#/">Sass</a>
            <a href="#/">Express.JS</a>
            <a href="#/">MySQL</a>
          </div>
          <div class ="bottom-content-3">
            <h2>Kontak</h2>
            <a href="#/">Andreas Alex</a>
            <a href="#/">Yudi Ari Nugroho</a>
            <a href="#/">Mildan Falah</a>
          </div>
        </div>
        `;
  },

  async afterRender() {
    const contents = await HOMECONTENT.contents;
    const contentContainer = document.querySelector(".home-content-list");
    contents.forEach((content, index) => {
      const themeClass =
        index % 2 === 0 ? "home-content-item-red" : "home-content-item-white";
      const linkId = index % 2 === 0 ? "about" : "donorin";
      contentContainer.innerHTML += createHomeContentTemplate(
        content,
        themeClass,
        linkId
      );
    });

    navButtonFunction();
  },
};

export default Home;
