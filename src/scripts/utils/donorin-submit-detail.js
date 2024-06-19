import { jwtDecode } from "jwt-decode";
import DonorinDbSource from "../data/donorindb-source";
import { populateModalSubmit } from "../views/templates/template-creator";
import API_ENDPOINT from "../global/api-endpoint";

let submitSelectedUserIdTrx;
let submitSelectedUserNameTrx;

const submitButtonFunction = async () => {
  const users = await DonorinDbSource.donorinData();
  const request = await DonorinDbSource.transactionData();
  const modal = document.querySelector(".modal-container");
  const modalSubmit = document.querySelector(".modal-ajukan");
  const closeButton = document.querySelector(".modal-ajukan-close-button");
  const userTransactionsInfo = document.querySelector(".modal-ajukan-info");
  const submitButtons = document.querySelectorAll("#submitButton");
  const cancelButton = document.querySelector("#ajukanCancelButton");
  const confirmButton = document.querySelector("#ajukanConfirmButton");

  submitButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = Number(event.target.dataset.userId);
      const userContributorName = String(event.target.dataset.submitUserIdTrx);
      submitSelectedUserIdTrx = userId;
      submitSelectedUserNameTrx = userContributorName;
      const user = users.find((u) => {
        if (u.id === userId) {
          return u.id;
        }
      });

      userTransactionsInfo.innerHTML = populateModalSubmit(user);
      const modal = document.querySelector(".modal-container");
      modal.classList.add("show");
      modalSubmit.classList.add("show");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalSubmit.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalSubmit.classList.remove("show");
    }
  });

  cancelButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalSubmit.classList.remove("show");
  });

  confirmButton.addEventListener("click", async () => {
    async function getProfile() {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) throw new Error("No Token Found");
        const decoded = jwtDecode(token);
        const userId = decoded.id;

        const response = await fetch(`${API_ENDPOINT.DETAIL}/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const responseJson = await response.json();
        if (!response.ok) {
          throw new Error(response.message || "Failed to fetch profile");
        }
        return responseJson.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

    const userProfile = await getProfile();
    if (!userProfile) {
      alert("Failed to fetch user profile");
      return;
    }

    const findRequest = request.find((r) => {
      if (
        r.id_user_pemohon === userProfile[0].id &&
        r.tanggal_dibutuhkan > new Date().toISOString().slice(0, 10)
      ) {
        return r;
      } else {
        console.log("no request found");
        return null;
      }
    });

    const data = {
      id_trx: findRequest?.id || "unknown",
      id_user_pendonor: submitSelectedUserIdTrx,
      nama_pendonor: submitSelectedUserNameTrx,
      tanggal_kontribusi: new Date().toISOString().slice(0, 10),
    };

    try {
      const response = await fetch(`${API_ENDPOINT.TRANSACTIONSDETAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("request-success");
        alert("request success");
        modal.classList.remove("show");
        modalSubmit.classList.remove("show");
        window.location.href = "#/donorin";
        window.location.reload();
      } else {
        console.log("failed request");
        alert("Anda belum melakukan permintaan");
      }
    } catch (error) {
      alert("request failed");
      console.error(error);
    }
  });
};

export default submitButtonFunction;
