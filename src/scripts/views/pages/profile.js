const Profile = {
  async render() {
    return `
          <div class="wrapper-profile">

          <div class="profile-header">
          <div class="wrapper-header">
          <h1>Profil</h1>
          </div>
          <button type="button" id="profile-edit">Edit</button>
          </div>

          <div class="profile-img">
          <img src="./images/avatar-3.jpg">
          </div>

          </div>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Profile;
