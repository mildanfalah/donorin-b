import loginFunction from "../../utils/login-function";

const Login = {
  async render() {
    return `
        <div class="login-wrapp">
        <img src="./images/BG1.png">
          <div class="login-form-container">
              <h1>Donor<span>in</span></h1>
              <h2>Masuk</h2>

            <form class="login-form">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>

              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>
              <a href="/#/reset-password">Lupa Password?</a>

              <button type="submit">Masuk</button>
              <p>Belum punya akun? <a href="/#/register">Daftar</a></p>
            </form>
          </div>
        </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    loginFunction();
  },
};

export default Login;
