const About = {
  async render() {
    return `
          <div class="wrapper-about-us">
          <div class="wrapper-header">
          <h1>About Us</h1>
          </div>
          <div class="main-about-us">
          <div class="profile">
          <div class="card card-right">
          <div id="card-content">

          <img src="./images/avatar-3.jpg">

            <div class="desc">
            <h3>Yudi Ari Nugroho</h3>
            <p>Back End</p>
            </div>

          </div>
          </div>
          <div class="card card-left">
          <div id="card-content">

            <img src="./images/avatar-3.jpg">

            <div class="desc">
            <h3>Andreas Alex</h3>
            <p>UI/Front End</p>
            </div>

          </div>
          </div>
          <div class="card card-right">
          <div id="card-content">

          <img src="./images/avatar-3.jpg">

            <div class="desc">
            <h3>Mildan Falah</h3>
            <p>UI/Front End</p>
            </div>

          </div>
          </div>
          </div>
          </div>

          </div>

          <div class="wrapper-faq">
          <div class="wrapper-header">
          <h1>FAQ</h1>
          </div>
          
          <div class="main-faq">

          <div class="faq">
          
          <div class="ask">
          <ul>
          <li>Apa itu Donorin?</li>
          </ul>
          </div>

          <div class="answer">
          <p>Aplikasi yang membantu antara pendonor dan penerima donor untuk bisa saling berbagi informasi.</p>
          </div>

          </div>

          <div class="faq">
          
          <div class="ask">
          <ul>
          <li>apakah aplikasi ini berdampak?</li>
          </ul>
          </div>

          <div class="answer">
          <p>iya, dengan adanya aplikasi donorin kita dapat saling membantu dalam hal pendonoran darah</p>
          </div>

          </div>

          <div class="faq">
          
          <div class="ask">
          <ul>
          <li>bagaimana cara registrasi?</li>
          </ul>
          </div>

          <div class="answer">
          <p>pengguna dapat mendaftarkan diri menggunakan alamat email dan NIK</p>
          </div>

          </div>

          <div class="faq">

          <div class="ask">
          <ul>
          <li>etika penggunaan aplikasi?</li>
          </ul>
          </div>

          <div class="answer">
          <p>tidak diperkenankan untuk menyebarkan informasi pribadi pengguna lain dalam bentuk apapun, </p>
          </div>

          </div>

          </div>

          </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default About;
