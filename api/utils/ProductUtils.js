const getCategories = (data) => {
  let categories = []
  if (data === undefined || data === null) return []
  for (var filter of data.filters) {
    if (filter.id === 'category') {
      for (var category of filter.values[0].path_from_root) {
        categories.push(category.name)
      }
    }
  }
  return categories
}

const getItems = (data) => {
  let items = []
  if (data === undefined || data === null || data.results == null) return []
  for (var result of data.results) {
    items.push(getItem(result))
  }
  return items
}

const getItem = (item) => {
  return {
    'id': item.id,
    'title': item.title,
    'price': getPrice(item),
    'picture': item.thumbnail,
    'condition': item.condition,
    'free_shipping': item.shipping.free_shipping,
    'sold_quantity': item.sold_quantity ? item.sold_quantity : undefined,
    'description': item.descriptions ? item.descriptions[0].id : undefined,
    'state_name': item.address && item.address.state_name ? item.address.state_name:undefined,
    'category_id': item.category_id
  }
}

const getPrice = (item) => {
  if (item && item.prices && item.prices.prices) {
    return {
      'currency': item.prices.prices[0].amount,
      'amount': item.prices.prices[0].currency_id,
      'decimals': item.prices.prices[0].amount
    }
  } else {
    return {
      'currency': item.price,
      'amount': '',
      'decimals': ''
    }
  }
}

const getCategoriesById = (data) => {
  let categories = []
  if(data && data.path_from_root){
    for (var category of data.path_from_root) {
      categories.push(category.name)
    }
  }
  return categories
}

const getDescriptionProduct = (data) => {
  if (data && data.plain_text) {
    return data.plain_text
  }
  return null
}

module.exports = { getCategories, getItems, getItem, getDescriptionProduct, getCategoriesById };
