import navButtonFunction from "../templates/home-nav";
import {
  createProfileHistoryPendonor,
  createProfileHistoryPenerima,
} from "../templates/template-creator";

const Profile = {
  async render() {
    return `
          <div class="profile-container">
            <div class="profile-edit-bar">
              <p>Profile</p>
              <button>Edit</button>
            </div>
            <div class="profile-image">
              <div class="profile-image-clip">
                <img src="./images/white2.png" alt="profile image">
              </div>
            </div>
            <div class="profile-info">
              <p>Nama</p>
              <p>Alamat</p>
              <p>Telepon</p>
              <p>Gol Darah</p>
              <p>Jenis Kelamin</p>
            </div>
            <div class="history-container">
              <div class="pendonor-history">
                <div class="history-title">Orang Yang Pernah Menolong Anda</div>
                <div class="history-list-pendonor"></div>
              </div>
              <div class="penerima-history">
                <div class="history-title">Orang Yang Pernah Anda Tolong</div>
                <div class="history-list-penerima"></div>
              </div>
            </div>
          </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const historyListPendonor = document.querySelector(
      ".history-list-pendonor"
    );
    const historyListPenerima = document.querySelector(
      ".history-list-penerima"
    );

    historyListPendonor.innerHTML += createProfileHistoryPendonor();
    historyListPenerima.innerHTML += createProfileHistoryPenerima();

    navButtonFunction();
  },
};

export default Profile;
