const searchFunction = () => {
  const search = document.querySelector("#searchElement");
  const userCards = document.querySelectorAll(".user-card-container");
  const noData = document.querySelector(".no-data");
  const selectionButton = document.querySelectorAll(".selection-button");
  const penerimaButton = document.querySelector("#penerimaButton");
  const pendonorButton = document.querySelector("#pendonorButton");

  search.addEventListener("input", (e) => searchData(e.target.value));

  function searchData(searchValue) {
    const isPenerimaSelected =
      penerimaButton.classList.contains("button-selected");
    const isPendonorSelected =
      pendonorButton.classList.contains("button-selected");

    let hasData = false;

    userCards.forEach((card) => {
      const userLocation = card.querySelector(".user-card-address").textContent;
      const userStatus = card
        .querySelector("#userStatus")
        .textContent.toLowerCase();
      const isMatch = userLocation
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      if (
        isMatch &&
        ((isPenerimaSelected && userStatus === "pendonor") ||
          (isPendonorSelected && userStatus === "penerima"))
      ) {
        card.classList.remove("hidden");
        hasData = true;
      } else {
        card.classList.add("hidden");
      }
    });

    if (searchValue === "") {
      // Jika kolom pencarian kosong, tampilkan data sesuai dengan tombol yang dipilih
      userCards.forEach((card) => {
        const userStatus = card
          .querySelector("#userStatus")
          .textContent.toLowerCase();

        if (
          (isPenerimaSelected && userStatus === "pendonor") ||
          (isPendonorSelected && userStatus === "penerima")
        ) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    }

    noData.innerHTML = hasData
      ? ""
      : "<p>Ups... Maaf, belum ada user terdaftar di kota yang anda maksud, coba cari di kota lain ya :)</p>";
  }

  // Fungsi untuk memperbarui tampilan kartu saat tombol seleksi diklik
  function updateCardVisibility() {
    const isPenerimaSelected =
      penerimaButton.classList.contains("button-selected");
    const isPendonorSelected =
      pendonorButton.classList.contains("button-selected");

    userCards.forEach((card) => {
      const userStatus = card
        .querySelector("#userStatus")
        .textContent.toLowerCase();

      if (
        (isPenerimaSelected && userStatus === "pendonor") ||
        (isPendonorSelected && userStatus === "penerima")
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  // Tambahkan event listener ke tombol seleksi untuk memperbarui tampilan kartu saat tombol diklik
  selectionButton.forEach((button) => {
    button.addEventListener("click", updateCardVisibility);
  });

  // Panggil updateCardVisibility saat halaman pertama kali dimuat untuk menyesuaikan tampilan awal
  updateCardVisibility();
};

export default searchFunction;
