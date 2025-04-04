const products = require("../data/products.json");

// Function to check all products for price drops
const checkProductPrice = async () => {
    // Filter out products whose price is less than or equal to the desired price
    const priceDrops = products.filter(product => product.price <= product.desiredPrice);
    
    // If price drops are found, return them, otherwise return null
    return priceDrops.length > 0 ? priceDrops : null;
};

module.exports = { checkProductPrice };
