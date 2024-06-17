import CONFIG from "../../global/config";

const createUserItemTemplate = (user) => `
    <div class="user-card-container ${
      user.status_donor === "inactive" ? "hidden" : ""
    }">
        <div class="user-card">
            <div class="user-card-status" style="display:flex;">
                <p id="userStatus">${
                  user.status_donor === "active" ? "Pendonor" : "inactive"
                }</p>
                <div class="user-card-id" style="color:#cd2c4e;">${
                  user.id
                }</div>
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
                <button id="submitButton" data-submit-user-id-trx="${
                  user.nama
                }" data-user-id="${user.id}">Ajukan</button>
            </div>
        </div>
    </div>
`;

const createUserTransactionTemplate = (user) => `
    <div class="user-card-container">
        <div class="user-card">
            <div class="user-card-status" style="display:flex;">
                <p id="userStatus">Penerima</p>
                <div class="user-card-id" style="color:#cd2c4e;">${
                  user.id_user_pemohon
                }</div>
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
                <button id="contributeButton" data-user-id-trx="${
                  user.id
                }"  data-user-id="${user.id_user_pemohon}">Kontribusi</button>
            </div>
        </div>
    </div>
`;

const populateModal = (user) => `
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
            </div>
        </div>
    </div>
`;
const populateModalSubmit = (user) => `
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

const createProfileHistoryPendonor = (dataHistory) => `
    <div class="history-card">
        <div class="history-card-head">
        <div class="history-head-left">
            <p>Penerima: ${dataHistory[0].nama_penerima}</p>
            <p>RS: ${dataHistory[0].nama_rs}</p>
        </div>
            <div class="history-head-right">
                <p>ID ${dataHistory[0].transaction_id}</p>
                <p>Dibutuhkan: ${dataHistory[0].tanggal_dibutuhkan.slice(
                  0,
                  10
                )}</p>
            </div>
        </div>
        <div class="history-card-body-container-wrapper"></div>
    </div>
`;

const historyPendonor = (dataHistory) => `
        <div class="history-card-body-container">
            <p>${dataHistory.nama_pendonor}</p>
            <div class="history-card-body-content">
                <p><i class="fa-solid fa-droplet" style="color: #cd2c4e;"></i> ${
                  dataHistory.gol_darah
                }</p>
                <p>Tgl Kontribusi: ${dataHistory.tanggal_kontribusi.slice(
                  0,
                  10
                )}</p>
            </div>
            <div class="history-card-body-content">
                <p><i class="fa-brands fa-whatsapp" style="color: #cd2c4e;"></i> <a href="https://wa.me/62${dataHistory.kontak_telp.slice(
                  1
                )}?text=Halo,%20saya%20adalah%20pemohon%20donor%20di%20aplikasi%20donorin" target="_blank">${
  dataHistory.kontak_telp
}</a></p>
                <p><i class="fa-solid fa-location-dot" style="color: #cd2c4e;"></i> ${
                  dataHistory.lokasi_user
                }</p>
            </div>
        </div>   
`;

const createProfileHistoryPenerima = (dataHistory) => `
    <div class="history-card-penerima-container">
        <div class="history-card-penerima-wrapper">
            <div class="history-card-head">
                <p>ID Penerima</p>
                <p>${dataHistory.transaction_id}</p>
            </div>
            <div class="history-card-body">
                <p>${dataHistory.nama_penerima}</p>
                <div class="history-card-body-content">
                    <p><i class="fa-solid fa-droplet" style="color: #cd2c4e;"></i> ${
                      dataHistory.gol_darah_dibutuhkan
                    }</p>
                    <p>Tgl Kontribusi: ${dataHistory.tanggal_kontribusi.slice(
                      0,
                      10
                    )}</p>
                </div>
                <div class="history-card-body-content">
                    <p><i class="fa-solid fa-location-dot" style="color: #cd2c4e;"></i> ${
                      dataHistory.lokasi
                    }</p>
                    <p><i class="fa-solid fa-house-medical" style="color: #cd2c4e;"></i> ${
                      dataHistory.nama_rs
                    }</p>
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
  populateModal,
  populateModalSubmit,
  historyPendonor,
};
