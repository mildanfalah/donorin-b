import { jwtDecode } from "jwt-decode";
import DonorinDbSource from "../../data/donorindb-source";
import contributeButtonFunction from "../../utils/donorin-contribute-detail";
import selectButtonFunction from "../../utils/donorin-filter";
import registerTransactionFunction from "../../utils/donorin-register-transaction";
import searchFunction from "../../utils/donorin-search";
import submitButtonFunction from "../../utils/donorin-submit-detail";
import navButtonFunction from "../../utils/home-nav";
import logoutFunction from "../../utils/logout-function";
import requestTransaction from "../../utils/request-transaction";
import requestTransactionStatus from "../../utils/request-transaction-status";
import {
  createUserItemTemplate,
  createUserTransactionTemplate,
} from "../templates/template-creator";

const Donorin = {
  async render() {
    return `
        <div class="top-content">
          <div class="top-content-wrapper">
            <div class="top-content-wrapp-left">
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
              </div>
            </div>
            
            <div class="top-content-wrapp-right">
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
            <span class="modal-close-button hidden" >&times;</span>
            <p>Apakah anda yakin akan berkontribusi kepada user berikut?</p>
            <div class="modal-kontribusi-info"></div>
            <div class="modal-kontribusi-button">
              <button id="cancelButton">Tidak</button>
              <button id="confirmButton">Ya</button>
            </div>
          </div>
          <div class="modal-ajukan">
            <span class="modal-ajukan-close-button hidden">&times;</span>
            <p>Apakah anda yakin akan mengajukan permintaan kepada user berikut?</p>
            <div class="modal-ajukan-info"></div>
            <div class="modal-ajukan-button">
              <button id="ajukanCancelButton">Tidak</button>
              <button id="ajukanConfirmButton">Ya</button>
            </div>
            </div>
            <div class="modal-permintaan">
              <span class="modal-permintaan-close-button hidden">&times;</span>
              <form id="registerTransactionForm" class="register-transaction-form">
                <div class="form-group">
                  <label for="namaPenerima">Nama Penerima</label>
                  <input type="text" id="namaPenerima" name="namaPenerima" required>
                </div>
                <div class="form-group">
                  <label for="tglDibutuhkan">Tanggal Dibutuhkan</label>
                  <input type="date" id="tglDibutuhkan" name="tglDibutuhkan" required>
                </div>
                <div class="form-group">
                  <label for="lokasiPenerima">Lokasi</label>
                  <input type="text" id="lokasiPenerima" name="lokasiPenerima" required>
                </div>
                <div class="form-group">
                  <label for="goldarPenerima">Gol Darah Yang Dibutuhkan</label>
                  <input type="text" id="goldarPenerima" name="goldarPenerima" maxlength="3" required>
                </div>
                <div class="form-group">
                  <label for="jumlahDarahDibutuhkan">Kebutuhan Jumlah Darah (ml)</label>
                  <input type="number" id="jumlahDarahDibutuhkan" name="jumlahDarahDibutuhkan" required>
                </div>
                <div class="form-group">
                  <label for="namaRumahSakit">Nama Rumah Sakit / PMI</label>
                  <input type="text" id="namaRumahSakit" name="namaRumahSakit" required>
                </div>
                <button id="permintaanCancelButton">Batal</button>
                <button type="submit" id="submit-register-transaction-button">Ajukan</button>
              </form>
            </div>
        </div>

        <div class="donorin-list"></div>

        <div class="no-data"></div>

        <div class="floating-button">
          <button id="register-transaction-button">
            <i class="fa-solid fa-plus" style="color: #cd2c4e;"></i>
            </button>
        </div>
          `;
  },

  async afterRender() {
    const users = await DonorinDbSource.donorinData();
    console.log(users);
    const userTransactions = await DonorinDbSource.transactionData();
    const usersContainer = document.querySelector(".donorin-list");

    users.forEach((user) => {
      console.log(user.firstName);
      usersContainer.innerHTML += createUserItemTemplate(user);
    });
    userTransactions.forEach((user) => {
      usersContainer.innerHTML += createUserTransactionTemplate(user);
    });

    const userCardNames = document.querySelectorAll(".user-card-name");
    userCardNames.forEach((name) => {
      if (name.textContent) {
        name.textContent =
          name.textContent.charAt(0).toUpperCase() + name.textContent.slice(1);
      }
    });

    selectButtonFunction();
    navButtonFunction();
    searchFunction();
    contributeButtonFunction();
    submitButtonFunction();
    registerTransactionFunction();
    requestTransactionStatus();
    requestTransaction();
    logoutFunction();
  },
};

export default Donorin;
