// src/services/notificationService.js
const sendNotification = (product) => {
    console.log(`Notification: Price drop detected for ${product.name}. Current price: ${product.price}`);
};
module.exports = { sendNotification };