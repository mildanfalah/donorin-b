import DonorinDbSource from "../../data/donorindb-source";
import { createUserItemTemplate } from "../templates/template-creator";

const Donorin = {
  async render() {
    return `
          <h1>Donorin</h1>
          <div class="donorin-list"></div>
          `;
  },

  async afterRender() {
    const users = await DonorinDbSource.donorinData();
    const usersContainer = document.querySelector(".donorin-list");
    users.forEach((user) => {
      usersContainer.innerHTML += createUserItemTemplate(user);
    });
  },
};

export default Donorin;
