import API_ENDPOINT from "../global/api-endpoint";

const registerFunction = () => {
  const form = document.querySelector("#registerForm");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nama = document.querySelector("#nama").value;
    const email = document.querySelector("#email").value;
    const nik = document.querySelector("#nik").value;
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    const termsCheckbox = document.querySelector("#syaratKetentuan");

    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }

    if (!termsCheckbox) {
      alert("Please agree to the terms");
      return;
    }

    const data = {
      nama,
      email,
      nik,
      password,
      status: "active",
    };

    try {
      const response = await fetch(`${API_ENDPOINT.DONORIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        console.log("register-success");
        window.location.href = "#/login";
        alert("Register Success");
      } else {
        console.log("failed register");
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  });
};

export default registerFunction;
