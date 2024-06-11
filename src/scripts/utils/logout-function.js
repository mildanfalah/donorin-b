const logoutFunction = () => {
  const loginButton = document.querySelector("#loginButton");
  const logoutButton = document.querySelector("#logoutButton");

  function logoutUser() {
    localStorage.removeItem("jwtToken");
    window.location.href = "/#/login";
    changeLogoutToLogin();
  }

  function changeLoginToLogout() {
    if (localStorage.getItem("jwtToken")) {
      loginButton.classList.add("hidden");
      logoutButton.classList.remove("hidden");
    }
  }

  function changeLogoutToLogin() {
    if (!localStorage.getItem("jwtToken")) {
      loginButton.classList.remove("hidden");
      logoutButton.classList.add("hidden");
    }
  }

  changeLoginToLogout();
  changeLogoutToLogin();

  logoutButton.addEventListener("click", logoutUser);
};

export default logoutFunction;
