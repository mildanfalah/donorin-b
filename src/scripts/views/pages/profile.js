import navButtonFunction from "../templates/home-nav";

const Profile = {
  async render() {
    return `
          <h1>Profile</h1>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    navButtonFunction();
  },
};

export default Profile;
