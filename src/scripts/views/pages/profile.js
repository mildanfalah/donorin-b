import navButtonFunction from "../../utils/home-nav";
import profileLoginStatus from "../../utils/profile-login-status";
import {
  createProfileHistoryPendonor,
  createProfileHistoryPenerima,
} from "../templates/template-creator";

const Profile = {
  async render() {
    return `
    <div class="profile-container"></div>
          <div class="no-user-login">
            <h2>Wah kamu belum Login, yuk <a href="#/login">Login</a> dulu</h2>
            <h2>Belum punya akun? yuk <a href="#/register">Daftar</a></h2>
            <img src="./images/B+.png" alt="blood icon B+" />
          </div>
          `;
  },

  async afterRender() {
    navButtonFunction();
    profileLoginStatus();
  },
};

export default Profile;
