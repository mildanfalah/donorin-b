import API_ENDPOINT from "../global/api-endpoint";
import { jwtDecode } from "jwt-decode";
import {
  createProfileHistoryPendonor,
  createProfileHistoryPenerima,
  historyPendonor,
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
              <button id="editButton">Edit</button>
            </div>
            <div class="profile-image">
              <div class="profile-image-clip">
                <img src="./images/white2.png" alt="profile image">
                </div>
                <h2 class="profile-name">${data[0].nama}</h2>
                <p class="profile-email">${data[0].email}</p>
            </div>
            <div class="profile-info">
              <form id="profile-form">
                <label for="kontak" class="profile-label">Kontak</label>
                <input type="text" id="kontak" name="kontak" class="profile-input" readonly value=${
                  data[0].kontak_telp
                }>
                <label for="lokasi" class="profile-label">lokasi</label>
                <input type="text" id="lokasi" name="lokasi" class="profile-input" readonly value=${
                  data[0].lokasi
                }>
                <label for="goldar" class="profile-label">Golongan Darah</label>
                <input type="text" id="goldar" name="goldar" class="profile-input" readonly value=${
                  data[0].gol_darah
                }>
                <label for="usia" class="profile-label">Usia</label>
                <input type="number" id="usia" name="usia" class="profile-input" readonly value=${
                  data[0].usia
                }>

                <div class="radio-container">
                  <p class="sex">Jenis Kelamin Anda</p>
                  <input type="radio" id="laki-laki" name="jenisKelamin" disabled value="laki-laki" ${
                    data[0].jenis_kelamin === "laki-laki" ? "checked" : ""
                  }>
                  <label for="laki-laki"> Laki-laki</label><br>
                  <input type="radio" id="perempuan" name="jenisKelamin" disabled value="perempuan" ${
                    data[0].jenis_kelamin === "perempuan" ? "checked" : ""
                  }>
                  <label for="perempuan"> Perempuan</label>
                </div>

                <label class="status-donor">
                  Apakah sekarang anda dalam keadaan siap mendonor? <br>
                  <input type="checkbox" id="status" name="status" disabled value="active" ${
                    data[0].status_donor === "active" ? "checked" : ""
                  }> Saya yakin sekarang saya siap mendonor
                  <span class="slider round"></span>
                </label>

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

    // const statusCheckbox = document.getElementById("status");

    // statusCheckbox.addEventListener("change", function () {
    //   if (this.checked) {
    //     return "active";
    //   } else {
    //     return "inactive";
    //   }
    // });

    const editButton = document.querySelector("#editButton");

    editButton.addEventListener("click", async () => {
      const editForm = document.querySelector("#profile-form");
      const editInputs = editForm.querySelectorAll("input");
      editInputs.forEach((input) => {
        input.removeAttribute("readonly");
        input.removeAttribute("disabled");
      });
      editButton.classList.add("hidden");
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.classList.add("save-button");
      editForm.appendChild(saveButton);

      saveButton.addEventListener("click", async (event) => {
        event.preventDefault();

        const token = localStorage.getItem("jwtToken");
        const decoded = jwtDecode(token);
        const userId = decoded.id;
        const formData = new FormData(editForm);
        console.log(formData.get("goldar"));
        const data = {
          kontak_telp: formData.get("kontak"),
          lokasi: formData.get("lokasi"),
          gol_darah: formData.get("goldar"),
          usia: formData.get("usia"),
          jenis_kelamin: formData.get("jenisKelamin"),
          status_donor: formData.get("status") || "inactive",
          berat_badan: null,
          tinggi_badan: null,
        };
        console.log(data);

        try {
          const response = await fetch(`${API_ENDPOINT.DETAIL}/${userId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            id_user: userId,
            body: JSON.stringify(data),
          });
          const responseJson = await response.json();
          if (response.ok) {
            alert("Profile updated successfully");
            const updatedData = await getProfile();
            showProfile(updatedData);
            window.location.reload();
          } else {
            throw new Error(responseJson.message);
          }
        } catch (error) {
          console.error(error);
          alert("Failed to update profile");
        }
      });
    });
  };

  function showHistory(dataHistory) {
    const historyListPendonor = document.querySelector(
      ".history-list-pendonor"
    );
    // const historyListPenerima = document.querySelector(
    //   ".history-list-penerima"
    // );
    console.log(dataHistory);
    historyListPendonor.innerHTML += createProfileHistoryPendonor(dataHistory);
    // historyListPenerima.innerHTML += createProfileHistoryPenerima(dataHistory);
  }

  async function showListPendonorHistory() {
    const historyCardWrapper = document.querySelector(
      ".history-card-body-container-wrapper"
    );
    const historyData = await getHistory();

    historyData.forEach((item) => {
      item.detail.forEach((item) => {
        historyCardWrapper.innerHTML += historyPendonor(item);
        console.log(item);
      });
    });
  }

  async function historySubmittedData() {
    const container = document.querySelector(".history-list-penerima");
    const historyData = await getSubmittedHistory();

    historyData.forEach((item) => {
      container.innerHTML += createProfileHistoryPenerima(item);
    });
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

  async function getSubmittedHistory() {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) throw new Error("No Token Found");
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      const response = await fetch(`${API_ENDPOINT.HISTORY2}/${userId}`);
      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error(response.message || "Failed to fetch profile");
      }
      return responseJson.data;
    } catch (error) {
      console.log("No data found");
      return null;
    }
  }

  async function getHistory() {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) throw new Error("No Token Found");
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      const response = await fetch(`${API_ENDPOINT.HISTORY}/${userId}`);
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
      const dataHistory = await getHistory();
      const dataSubmitted = await getSubmittedHistory();
      if (data) {
        showProfile(data);
        if (dataHistory) {
          showHistory(dataHistory);
          showListPendonorHistory(dataHistory);
        } else if (dataSubmitted) {
          historySubmittedData(dataSubmitted);
        } else {
          console.log("No data found");
        }
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
