import registerFunction from "../../utils/register-function";

const Register = {
  async render() {
    return `
        <div class="register-wrapp">
        <img src="./images/BG1.png">
        
          <div class="login-form-container">
              <h1>Donor<span>in</span></h1>
              <h2>Buat Akun</h2>
  
            <form id="registerForm" class="login-form">
              <label for="nama">Nama:</label>
              <input type="text" id="nama" name="nama" required>

              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
  
              <label for="nik">NIK:</label>
              <input type="number" id="nik" name="nik" required>
              
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>

              <label for="confirm-password">Confirm Password:</label>
              <input type="password" id="confirmPassword" name="confirm-password" required>


              <label for="syaratKetentuan" class="checkbox-container">
                <input type="checkbox" id="syaratKetentuan" required>
                <span>Saya telah membaca dan menyetujui <a href="#/about">syarat dan ketentuan</a></span>
              </label>
  
              <button type="submit">Daftar</button>
              <p>Sudah punya akun? <a href="/#/login">Masuk</a></p>
            </form>
          </div>
        </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    registerFunction();
  },
};

export default Register;
