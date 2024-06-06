import CONFIG from "../../global/config";

const createUserItemTemplate = (user) => `
    <div class="user-card-container ${
      user.status_donor === "inactive" ? "hidden" : ""
    }">
        <div class="user-card">
            <div class="user-card-status">
                <p id="userStatus">${
                  user.status_donor === "active" ? "Pendonor" : "inactive"
                }</p>
            </div>
            <img class="user-card-image" src="${CONFIG.BASE_IMAGE_URL}?img=${
  user.id
}" alt="${user.nama}"/>
            <div class="user-card-content">
                <h2 class="user-card-name">${user.nama}</h2>
                <div class="user-card-info">
                    <p class="user-card-blood"><i class="fa-solid fa-droplet" style="color: #cd2c4e;"></i> ${
                      user.gol_darah
                    }</p>
                    <p class="user-card-address"><i class="fa-solid fa-location-dot" style="color: #cd2c4e;"></i> ${
                      user.lokasi
                    }</p>
                </div>
                <button type="submit">Ajukan</button>
            </div>
        </div>
    </div>
`;

const createUserTransactionTemplate = (user) => `
    <div class="user-card-container">
        <div class="user-card">
            <div class="user-card-status">
                <p id="userStatus">Penerima</p>
            </div>
            <img class="user-card-image" src="${CONFIG.BASE_IMAGE_URL}?img=${
  user.id
}" alt="${user.nama_pemohon}"/>
            <div class="user-card-content">
                <h2 class="user-card-name">${user.nama_pemohon}</h2>
                <div class="user-card-info-2">
                    <p class="user-card-date"><i class="fa-solid fa-calendar" style="color: #cd2c4e;"></i> ${new Date(
                      user.tanggal_dibutuhkan
                    ).toLocaleDateString("en-us", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}</p>
                    <p class="user-card-address"><i class="fa-solid fa-location-dot" style="color: #cd2c4e;"></i> ${
                      user.lokasi
                    }</p>
                </div>
                <div class="user-card-info">
                    <p class="user-card-blood"><i class="fa-solid fa-droplet" style="color: #cd2c4e;"></i> ${
                      user.gol_darah_dibutuhkan
                    }</p>
                    <p class="user-card-blood-needed"><i class="fa-solid fa-syringe" style="color: #cd2c4e;"></i> ${
                      user.jumlah_mililiter
                    }ml</p>
                </div>
                <button type="submit">Kontribusi</button>
            </div>
        </div>
    </div>
`;

const createHomeContentTemplate = (content, themeClass, linkId) => `
    <div class="${themeClass}">
        <div class="home-content-body">
            <h2>${content.title}</h2>
            <p>${content.description}</p>
            <div class="home-content-button-container">
                <a href="#/${linkId}" class="home-button"><p>${content.button}</p></a>
                <img src="${content.image}"/>
            </div>        
        </div>
    </div>
`;

const createProfileHistoryPendonor = () => `
    <div class="history-card">
        <div class="history-card-head">
            <div class="history-id">
                <p>Riwayat ID</p>
                <p>ID 03049</p>
            </div>
            <div class="history-date">
                <p>Tanggal Permintaan</p>
                <p>30 Mei 2024</p>
            </div>
        </div>
        <div class="history-card-body-container">
            <p>Yudi Ari Nugroho</p>
            <div class="history-card-body-content">
                <p><i class="fa-solid fa-droplet" style="color: #cd2c4e;"></i> AB-</p>
                <p>Tanggal Donor: 23-03-2024</p>
            </div>
            <div class="history-card-body-content">
                <p><i class="fa-brands fa-whatsapp" style="color: #cd2c4e;"></i> 08123456789</p>
                <p><i class="fa-solid fa-house-medical" style="color: #cd2c4e;"></i> RS ANANDA</p>
            </div>
        </div>
        <div class="history-card-body-container">
            <p>Yudi Ari Nugroho</p>
            <div class="history-card-body-content">
                <p><i class="fa-solid fa-droplet" style="color: #cd2c4e;"></i> AB-</p>
                <p>Tanggal Donor: 23-03-2024</p>
            </div>
            <div class="history-card-body-content">
                <p><i class="fa-brands fa-whatsapp" style="color: #cd2c4e;"></i> 08123456789</p>
                <p><i class="fa-solid fa-house-medical" style="color: #cd2c4e;"></i> RS ANANDA</p>
            </div>
        </div>
        
    </div>
`;

const createProfileHistoryPenerima = () => `
    <div class="history-card-penerima-container">
        <div class="history-card-penerima-wrapper">
            <div class="history-card-head">
                <p>Riwayat ID Penerima</p>
                <p>ID 039050</p>
            </div>
            <div class="history-card-body">
                <p>Budi Herdi</p>
                <div class="history-card-body-content">
                    <p><i class="fa-solid fa-droplet" style="color: #cd2c4e;"></i> A-</p>
                    <p>Tanggal Donor: 25-03-2024</p>
                </div>
                <div class="history-card-body-content">
                    <p><i class="fa-brands fa-whatsapp" style="color: #cd2c4e;"></i> 08123456789</p>
                    <p><i class="fa-solid fa-house-medical" style="color: #cd2c4e;"></i> RS ANANDA</p>
                </div>
            </div>
        </div>
    </div>`;

export {
  createUserItemTemplate,
  createUserTransactionTemplate,
  createHomeContentTemplate,
  createProfileHistoryPendonor,
  createProfileHistoryPenerima,
};
