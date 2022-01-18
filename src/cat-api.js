const https = require('https');

const options = {
  hostname: 'https://api.thecatapi.com/v1/images/search',
  method: 'GET',
};

class CatAPI {
  static getCatImage() {
    https.request(options, (res) => {
      console.log(res);
    });
  }
}

const catAPI = new CatAPI();
module.exports = catAPI;
