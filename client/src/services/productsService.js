import { baseUrl } from '../config/baseUrl'

export const fetchProducts = (query) => {
  return fetchBase(`${baseUrl}items?q=${query}`);
}

export const fetchProduct = (id) => {
  return fetchBase(`${baseUrl}items/${id}`);
}

export const fetchDescriptionProduct = (id) => {
  return fetchBase(`${baseUrl}items/${id}/description`);
}

export const fetchCategoriesProduct = (idCategory) => {
  return fetchBase(`${baseUrl}items/categories/${idCategory}`);
}

// Fetch base
const fetchBase = (url) => {
  return fetch(url)
    .then(response => {
      return response;
    })
    .then(response => response.json())
    .catch(error => {
      return { error: true, message: error.message };
    })
}
