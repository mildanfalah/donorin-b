import API_ENDPOINT from "../global/api-endpoint";

const loginFunction = () => {
  async function loginUser(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const loginData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    try {
      const response = await fetch(`${API_ENDPOINT.LOGIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        localStorage.setItem("jwtToken", token);
        window.location.href = "/#/profile";
        // changeLoginToLogout();
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const loginButton = document.querySelector("#loginButton");
  const logoutButton = document.querySelector("#logoutButton");

  function changeLoginToLogout() {
    if (localStorage.getItem("jwtToken")) {
      loginButton.classList.add("hidden");
      logoutButton.classList.remove("hidden");
    }
  }

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

  document.querySelector(".login-form").addEventListener("submit", loginUser);
  logoutButton.addEventListener("click", logoutUser);
};

export default loginFunction;
