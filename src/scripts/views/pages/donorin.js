import DonorinDbSource from "../../data/donorindb-source";
import selectButtonFunction from "../../utils/donorin-filter";
import searchFunction from "../../utils/donorin-search";
import navButtonFunction from "../../utils/home-nav";
import { createUserItemTemplate } from "../templates/template-creator";

const Donorin = {
  async render() {
    return `       
        <div class="top-content">
          <div class="top-content-wrapper">
              <div class="search-bar">
                <input id="searchElement" type="text" placeholder="Cari kota...">
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
                <p id="pendonorButton" class="selection-button pendonor-button">Pendonor</p>
                <p id="penerimaButton" class="selection-button penerima-button button-selected">Penerima</p>
              </div>
              <div id="pendonorButtonDescription" class="description-bar show">
                <p>Halaman pendonor untuk menampilkan penerima donor</p>
              </div>
              <div id="penerimaButtonDescription" class="description-bar">
                <p>Halaman penerima donor untuk menampilkan pendonor</p>
              </div>
            </div>
          </div>
        </div>

        <div class="donorin-list"></div>
        <div class="no-data"><div>
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
    searchFunction();
  },
};

export default Donorin;
