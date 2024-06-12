import { jwtDecode } from "jwt-decode";
import DonorinDbSource from "../data/donorindb-source";
import { populateModal } from "../views/templates/template-creator";
import API_ENDPOINT from "../global/api-endpoint";

let selectedUserIdTrx;

const contributeButtonFunction = async () => {
  const userTransactions = await DonorinDbSource.transactionData();
  const modal = document.querySelector(".modal-container");
  const modalContribute = document.querySelector(".modal-kontribusi");
  const closeButton = document.querySelector(".modal-close-button");
  const userTransactionsInfo = document.querySelector(".modal-kontribusi-info");
  const contributeButtons = document.querySelectorAll("#contributeButton");
  const cancelButton = document.querySelector("#cancelButton");
  const confirmButton = document.querySelector("#confirmButton");

  contributeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const userId = Number(event.target.dataset.userId);
      const userIdTrx = Number(event.target.dataset.userIdTrx);
      selectedUserIdTrx = userIdTrx;
      const user = userTransactions.find((u) => {
        if (u.id_user_pemohon === userId) {
          return u.id_user_pemohon;
        }
      });

      userTransactionsInfo.innerHTML = populateModal(user);
      const modal = document.querySelector(".modal-container");
      modal.classList.add("show");
      modalContribute.classList.add("show");
    });
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalContribute.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      modalContribute.classList.remove("show");
    }
  });

  cancelButton.addEventListener("click", () => {
    modal.classList.remove("show");
    modalContribute.classList.remove("show");
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

    console.log(userProfile);
    console.log(selectedUserIdTrx);

    const data = {
      id_trx: selectedUserIdTrx,
      id_user_pendonor: userProfile[0].id,
      nama_pendonor: userProfile[0].nama,
      tanggal_kontribusi: new Date().toISOString().slice(0, 10),
    };

    console.log(data);

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
      console.log(result);
      if (response.ok) {
        console.log("request-success");
        alert("request success");
        modal.classList.remove("show");
        modalContribute.classList.remove("show");
        window.location.href = "#/donorin";
        window.location.reload();
      } else {
        console.log("failed request");
        alert(result.message);
      }
    } catch (error) {
      alert("request failed");
      console.error(error);
    }
  });
};

export default contributeButtonFunction;
