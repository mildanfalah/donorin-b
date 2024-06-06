const searchFunction = () => {
  const search = document.querySelector("#searchElement");
  const userCards = document.querySelectorAll(".user-card-container");
  const noData = document.querySelector(".no-data");
  const selectionButton = document.querySelectorAll(".selection-button");
  const penerimaButton = document.querySelector("#penerimaButton");

  search.addEventListener("input", (e) => searchData(e.target.value));

  function searchData(search) {
    userCards.forEach((card) => {
      const userLocation = card.querySelector(".user-card-address").textContent;
      const isMatch = userLocation.toLowerCase().includes(search.toLowerCase());

      if (isMatch) {
        const userStatus = card.querySelector("#userStatus").textContent;
        if (userStatus === "Pendonor") {
          card.classList.remove("hidden");
        }
        noData.innerHTML = "";
        selectionButton.forEach((button) => {
          button.classList.remove("button-selected");
        });
        // penerimaButton.classList.add("button-selected");
      } else {
        card.classList.add("hidden");
        noData.innerHTML =
          "<p>Ups... Maaf, belum ada user terdaftar di kota yang anda maksud, coba cari di kota lain ya :)</p>";
      }
    });
  }
};

export default searchFunction;
