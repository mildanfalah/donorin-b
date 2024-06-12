import CONFIG from "./config";

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}home`,
  DONORIN: `${CONFIG.BASE_URL}users`,
  LOGIN: `${CONFIG.BASE_URL}login`,
  TRANSACTIONS: `${CONFIG.BASE_URL}transactions`,
  TRANSACTIONSDETAIL: `${CONFIG.BASE_URL}transaction-details`,
  PROFILE: `${CONFIG.BASE_URL}profile`,
  DETAIL: `${CONFIG.BASE_URL}user-details`,
  ABOUT: `${CONFIG.BASE_URL}about`,
};

export default API_ENDPOINT;
