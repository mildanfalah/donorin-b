import CONFIG from "./config";

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}home`,
  DONORIN: `${CONFIG.BASE_URL}users`,
  PROFILE: `${CONFIG.BASE_URL}profile`,
  DETAIL: (id) => `${CONFIG.BASE_URL}users/${id}`,
  ABOUT: `${CONFIG.BASE_URL}about`,
};

export default API_ENDPOINT;
