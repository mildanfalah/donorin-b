import API_ENDPOINT from "../global/api-endpoint";
import { jwtDecode } from "jwt-decode";
import {
  createProfileHistoryPendonor,
  createProfileHistoryPenerima,
} from "../views/templates/template-creator";

const profileLoginStatus = async () => {
  const profile = document.querySelector(".profile-container");
  const noLogin = document.querySelector(".no-user-login");
  const loginButton = document.querySelector("#loginButton");
  const logoutButton = document.querySelector("#logoutButton");

  function logoutUser() {
    localStorage.removeItem("jwtToken");
    window.location.href = "/#/login";
    changeLogoutToLogin();
  }

  function changeLogoutToLogin() {
    if (!localStorage.getItem("jwtToken")) {
      loginButton.classList.remove("hidden");
      logoutButton.classList.add("hidden");
    }
  }

  logoutButton.addEventListener("click", logoutUser);

  const showProfile = (data) => {
    profile.classList.remove("hidden");
    noLogin.classList.add("hidden");
    loginButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");

    profile.innerHTML = `
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
              <form id="profile-form">
                <label for="nama" class="profile-label">Nama</label>
                <input type="text" id="nama" name="nama" class="profile-input" readonly value=${data[0].nama}>
                <label for="nik" class="profile-label">NIK</label>
                <input type="number" id="nik" name="nik" class="profile-input" readonly value=${data[0].nik}>
                <label for="email" class="profile-label">Email</label>
                <input type="email" id="email" name="email" class="profile-input" readonly value=${data[0].email}>
                <label for="kontak" class="profile-label">Kontak</label>
                <input type="number" id="kontak" name="kontak" class="profile-input" readonly value=${data[0].kontak_telp}>
                <label for="lokasi" class="profile-label">Lokasi</label>
                <input type="text" id="lokasi" name="lokasi" class="profile-input" readonly value=${data[0].lokasi}>
                <label for="goldar" class="profile-label">Golongan Darah</label>
                <input type="text" id="goldar" name="goldar" class="profile-input" readonly value=${data[0].gol_darah}>
              </form>
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
    `;
  };

  function showHistory() {
    const historyListPendonor = document.querySelector(
      ".history-list-pendonor"
    );
    const historyListPenerima = document.querySelector(
      ".history-list-penerima"
    );
    historyListPendonor.innerHTML += createProfileHistoryPendonor();
    historyListPenerima.innerHTML += createProfileHistoryPenerima();
  }

  const askToLogin = () => {
    profile.classList.add("hidden");
    noLogin.classList.remove("hidden");
    loginButton.classList.remove("hidden");
    logoutButton.classList.add("hidden");
  };

  async function getProfile() {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) throw new Error("No Token Found");
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      const response = await fetch(
        `${API_ENDPOINT.DETAIL}/${userId}`
        // ,{
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${token}`,
        //     },
        //   }
      );
      const responseJson = await response.json();
      return responseJson.data;
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch profile");
      //   }
      //   const data = await response.json();
      //   return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function getUserTransaction() {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) throw new Error("No Token Found");
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      const response = await fetch(`${API_ENDPOINT.TRANSACTIONS}/${userId}`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  try {
    if (localStorage.getItem("jwtToken")) {
      const data = await getProfile();
      if (data) {
        showProfile(data);
        showHistory(data);
      } else {
        askToLogin();
      }
    } else {
      askToLogin();
    }
  } catch (error) {
    console.error(error);
    askToLogin();
  }
};

export default profileLoginStatus;
