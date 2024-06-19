import navButtonFunction from "../../utils/home-nav";
import logoutFunction from "../../utils/logout-function";

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

                    <img src="./images/profile_ari.png">

                    <div class="desc">
                      <div class="desc-sosmed">
                        <a href="https://github.com/sambalmatah" target="_blank">
                          <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/yudi-ari-nugroho-439727178/" target="_blank">
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/yudi_nug/" target="_blank">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                      <div class="desc-title">
                        <h3>Yudi Ari Nugroho</h3>
                        <p>Back End</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="card card-left">
                  <div id="card-content">

                    <img src="./images/profile_andre.png">

                    <div class="desc">
                      <div class="desc-sosmed">
                        <a href="https://github.com/andreasalex27" target="_blank">
                          <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/andreas-alex27/" target="_blank">
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/albertmuntheee/" target="_blank">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                      <div class="desc-title">
                        <h3>Andreas Alex</h3>
                        <p>UI UX Design</p>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="card card-right">
                  <div id="card-content">

                    <img src="./images/profile_mildan.png">

                    <div class="desc">
                      <div class="desc-sosmed">
                        <a href="https://github.com/mildanfalah" target="_blank">
                          <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/mildan-falah/" target="_blank">
                          <i class="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/mildan_falah/" target="_blank">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                      </div>
                      <div class="desc-title">
                        <h3>Mildan Falah</h3>
                        <p>Front End</p>
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
                    <li>Apakah aplikasi ini berdampak?</li>
                    </ul>
                  </div>

                  <div class="answer">
                    <p>Iya, dengan adanya aplikasi donorin kita dapat saling membantu dalam hal pendonoran darah</p>
                  </div>

                </div>

                <div class="faq">
                
                  <div class="ask">
                    <ul>
                    <li>Bagaimana cara registrasi?</li>
                    </ul>
                  </div>

                  <div class="answer">
                    <p>Pengguna dapat mendaftarkan diri menggunakan alamat email dan NIK</p>
                  </div>

                </div>

                <div class="faq">

                  <div class="ask">
                    <ul>
                    <li>Etika penggunaan aplikasi?</li>
                    </ul>
                  </div>

                  <div class="answer">
                    <p>Tidak diperkenankan untuk menyebarkan informasi pribadi pengguna lain dalam bentuk apapun, </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    navButtonFunction();
    logoutFunction();
  },
};

export default About;
