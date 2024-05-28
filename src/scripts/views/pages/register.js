const Register = {
  async render() {
    return `
          <div class="login-form-container">
              <h1>Donor<span>in</span></h1>
              <h2>Buat Akun</h2>
  
            <form class="login-form">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
  
              <label for="nik">NIK:</label>
              <input type="number" id="nik" name="nik" required>
              
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" required>

              <label for="tanggal lahir">Tanggal Lahir:</label>
              <input type="date" id="tanggalLahir" name="tanggal lahir" required>


              <label for="syaratKetentuan" class="checkbox-container">
                <input type="checkbox" id="syaratKetentuan">
                <span>Saya telah membaca dan menyetujui <a href="#/about">syarat dan ketentuan</a></span>
              </label>
  
              <button type="submit">Daftar</button>
              <p>Sudah punya akun? <a href="/#/login">Masuk</a></p>
            </form>
          </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Register;
