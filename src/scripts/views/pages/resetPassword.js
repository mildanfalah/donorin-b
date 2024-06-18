const ResetPassword = {
  async render() {
    return `
        <div class="login-wrapp">
          <div class="login-form-container">
              <h1>Donor<span>in</span></h1>
              <h2>Reset Password</h2>
  
            <form class="login-form">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
  
              <button type="submit">Reset</button>
              <p>Belum punya akun? <a href="/#/register">Daftar</a></p>
            </form>
          </div>
        </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ResetPassword;
