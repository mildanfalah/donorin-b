import HOMECONTENT from "../../data/HOMECONTENT.json";
import { createHomeContentTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <div class="home-content-list"></div>
        `;
  },

  async afterRender() {
    const contents = await HOMECONTENT.contents;
    const contentContainer = document.querySelector(".home-content-list");
    contents.forEach((content, index) => {
      const themeClass =
        index % 2 === 0 ? "home-content-item-red" : "home-content-item-white";
      contentContainer.innerHTML += createHomeContentTemplate(
        content,
        themeClass
      );
    });
  },
};

export default Home;
