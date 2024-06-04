import API_ENDPOINT from "../global/api-endpoint";

class DonorinDbSource {
  static async donorinData() {
    const response = await fetch(API_ENDPOINT.DONORIN);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async donorinDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default DonorinDbSource;
