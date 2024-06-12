import API_ENDPOINT from "../global/api-endpoint";
import { jwtDecode } from "jwt-decode";

const requestTransaction = () => {
  const form = document.querySelector("#registerTransactionForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const modalContainer = document.querySelector(".modal-container");
    const modalTransaction = document.querySelector(".modal-permintaan");
    const nama_penerima = document.querySelector("#namaPenerima").value;
    const tanggal_dibutuhkan = document.querySelector("#tglDibutuhkan").value;
    const lokasi = document.querySelector("#lokasiPenerima").value;
    const gol_darah_dibutuhkan =
      document.querySelector("#goldarPenerima").value;
    const jumlah_mililiter = document.querySelector(
      "#jumlahDarahDibutuhkan"
    ).value;
    const nama_rs = document.querySelector("#namaRumahSakit").value;

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

    const data = {
      id_user_pemohon: userProfile[0].id,
      nama_pemohon: userProfile[0].nama,
      nama_penerima,
      tanggal_dibutuhkan,
      lokasi,
      gol_darah_dibutuhkan,
      jumlah_mililiter,
      nama_rs,
      tanggal_dibuat: new Date().toISOString().slice(0, 10),
      nik_penerima: userProfile[0].nik,
    };

    console.log(data);

    try {
      const response = await fetch(`${API_ENDPOINT.TRANSACTIONS}`, {
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
        form.reset();
        modalTransaction.classList.remove("show");
        modalContainer.classList.remove("show");
        window.location.href = "#/donorin";
        window.location.reload();
      } else {
        console.log("failed request");
        alert(result.message);
      }
    } catch (error) {
      alert("Request Failed");
      console.error(error);
    }
  });
};

export default requestTransaction;
