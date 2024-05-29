import DonorinDbSource from "../../data/donorindb-source";
import { createUserItemTemplate } from "../templates/template-creator";

const Donorin = {
  async render() {
    return `       
        <div class="top-content">
        <div class="search-bar">
          <input type="text" placeholder="Cari kota...">
          <button type="submit">Cari</button>
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
          <div class="selection-button">
            <a class="pendonor-button" href="#">Pendonor</a>
            <a class="penerima-button" href="#">Penerima</a>
          </div>
          <div class="description-bar">
            <p>Halaman pendonor untuk menampilkan penerima donor</p>
          </div>
        <div class="description-bar">
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
  },
};

export default Donorin;
