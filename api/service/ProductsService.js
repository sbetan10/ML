const axios = require('axios');
const { config } = require("../config/config");

class ProductsService {

  getProductsByQuery(query) {
    const url = config.urlML + 'sites/MLA/search';
    return new Promise((resolve, reject) => {
      axios.get(url, { params: { q: query } })
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(new Error(error));
        })
    });
  }

  getProductById(id) {
    const url = config.urlML + 'items/' + id;

    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(new Error(error));
        })
    });
  }

  getCategoriesById(id) {
    const url = config.urlML + 'categories/' + id;
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(new Error(error));
        })
    });
  }

  getDescriptionProductById(id) {
    const url = config.urlML + 'items/' + id + '/description';
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(function (response) {
          resolve(response.data)
        })
        .catch(function (error) {
          reject(new Error(error));
        })
    });
  }

}

module.exports = ProductsService;
