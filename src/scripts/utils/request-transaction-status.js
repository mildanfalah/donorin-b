import API_ENDPOINT from "../global/api-endpoint";
import { jwtDecode } from "jwt-decode";

const requestTransactionStatus = async () => {
  const floatingButton = document.querySelector("#register-transaction-button");
  const modalContainer = document.querySelector(".modal-container");
  const modalPermintaan = document.querySelector(".modal-permintaan");

  const showModal = (data) => {
    modalContainer.classList.add("show");
    modalPermintaan.classList.add("show");
  };

  const showAskToLogin = () => {
    modalContainer.classList.add("show");
    modalContainer.innerHTML = `
            <div class="modal-status-no-login">
                <span class="modal-request-close-button">&times;</span>
                <h2>Ups... Anda harus login untuk membuat permintaan</h2>
                <a href="#/login">Ke Halaman Login</a>
            </div>
        `;

    const closeButton = document.querySelector(".modal-request-close-button");

    closeButton.addEventListener("click", () => {
      modalContainer.classList.remove("show");
      modalPermintaan.classList.remove("show");
    });
  };

  async function getLoginSession() {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        showAskToLogin();
        return;
      }
      const decoded = jwtDecode(token);
      const userId = decoded.id;

      const response = await fetch(`${API_ENDPOINT.DETAIL}/${userId}`);
      const responseJson = await response.json();
      return responseJson.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  floatingButton.addEventListener("click", () => {
    getLoginSession().then((data) => {
      if (data) {
        showModal(data);
      } else {
        showAskToLogin();
      }
    });
  });
};

export default requestTransactionStatus;
