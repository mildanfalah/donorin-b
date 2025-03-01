import API_ENDPOINT from "../global/api-endpoint";

class DonorinDbSource {
  static async donorinData() {
    const response = await fetch(API_ENDPOINT.DONORIN);
    const responseJson = await response.json();
    return responseJson.users;
  }

  static async donorinDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async transactionData() {
    const response = await fetch(API_ENDPOINT.TRANSACTIONS);
    const responseJson = await response.json();
    return responseJson.users;
  }

  static async transactionDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default DonorinDbSource;
