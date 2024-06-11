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
              <h2>${data[0].nama}</h2>
              <p>Email: ${data[0].email}</p>
              <p>Lokasi: ${data[0].gol_darah}</p>
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
