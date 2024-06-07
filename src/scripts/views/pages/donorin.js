import DonorinDbSource from "../../data/donorindb-source";
import contributeButtonFunction from "../../utils/donorin-contribute-detail";
import selectButtonFunction from "../../utils/donorin-filter";
import searchFunction from "../../utils/donorin-search";
import navButtonFunction from "../../utils/home-nav";
import {
  createUserItemTemplate,
  createUserTransactionTemplate,
} from "../templates/template-creator";

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
                <p id="pendonorButton" class="selection-button pendonor-button button-selected">Pendonor</p>
                <p id="penerimaButton" class="selection-button penerima-button">Penerima</p>
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

        <div class="modal-container">
          <div class="modal-kontribusi">
            <span class="modal-close-button">&times;</span>
            <p>Apakah anda yakin akan berkontribusi kepada user berikut?</p>
            <div class="modal-kontribusi-info"></div>
            <div class="modal-kontribusi-button">
              <button id="cancelButton">Tidak</button>
              <button id="confirmButton">Ya</button>
            </div>
          </div>
          <div class="modal-ajukan"></div>
        </div>

        <div class="donorin-list"></div>

        <div class="no-data"></div>

        <div class="floating-button">
          <button>
            <i class="fa-solid fa-plus" style="color: #cd2c4e;"></i>
            </button>
        </div>
          `;
  },

  async afterRender() {
    const users = await DonorinDbSource.donorinData();
    const userTransactions = await DonorinDbSource.transactionData();
    const usersContainer = document.querySelector(".donorin-list");

    users.forEach((user) => {
      usersContainer.innerHTML += createUserItemTemplate(user);
    });
    userTransactions.forEach((user) => {
      usersContainer.innerHTML += createUserTransactionTemplate(user);
    });

    selectButtonFunction();
    navButtonFunction();
    searchFunction();
    contributeButtonFunction();
  },
};

export default Donorin;
