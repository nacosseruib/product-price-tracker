// src/services/priceCheckService.js
const products = require("../data/products.json");
const checkProductPrice = async () => {
    return products.find(product => product.price <= product.desiredPrice) || null;
};
module.exports = { checkProductPrice };