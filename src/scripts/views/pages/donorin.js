import DonorinDbSource from "../../data/donorindb-source";
import selectButtonFunction from "../templates/donorin-filter";
import navButtonFunction from "../templates/home-nav";
navButtonFunction;
import { createUserItemTemplate } from "../templates/template-creator";

const Donorin = {
  async render() {
    return `       
        <div class="top-content">
        <div class="search-bar">
          <input type="text" placeholder="Cari kota...">
          <button type="submit"><i class="fa-solid fa-magnifying-glass" style="color: #ffffff;"></i></button>
        </div>
        <div class="selection-content">
          <div class="tagline-content">
            <div class="tagline-clip">
              <div class="tagline-image">
                <div class="background-image"></div>
                <img src="./images/white1.png" />
              </div>
            </div>
            <div class="tagline-text">
              <p>Setetes Darah, Sejuta Harapan</p>
            </div>
          </div>
          <p class="selection-question">Apakah anda?</p>
          <div class="selection-button-container">
            <p id="pendonor" class="selection-button pendonor-button button-selected">Pendonor</p>
            <p id="penerima" class="selection-button penerima-button">Penerima</p>
          </div>
          <div id="pendonorDescription" class="description-bar show">
            <p>Halaman pendonor untuk menampilkan penerima donor</p>
          </div>
        <div id="penerimaDescription" class="description-bar">
          <p>Halaman penerima donor untuk menampilkan pendonor</p>
        </div>
      </div>
    </div>

        <div class="donorin-list"></div>
          `;
  },

  async afterRender() {
    const users = await DonorinDbSource.donorinData();
    const usersContainer = document.querySelector(".donorin-list");
    users.forEach((user) => {
      usersContainer.innerHTML += createUserItemTemplate(user);
    });

    selectButtonFunction();
    navButtonFunction();
  },
};

export default Donorin;
