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
            <h2>Wah kamu belum Login, yuk Login dulu</h2>
          </div>
          `;
  },

  async afterRender() {
    navButtonFunction();
    profileLoginStatus();
  },
};

export default Profile;
