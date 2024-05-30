import navButtonFunction from "../templates/home-nav";

const About = {
  async render() {
    return `
          <h1>About Us</h1>
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    navButtonFunction();
  },
};

export default About;
