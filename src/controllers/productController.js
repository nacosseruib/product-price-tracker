// src/controllers/productController.js
const priceCheckService = require("../services/priceCheckService");
const notificationService = require("../services/notificationService");

//Setting price alert for a product
const setPriceAlert = (req, res) => {
    const { productUrl, desiredPrice, scheduledTime, email } = req.body;
    if (!productUrl || !desiredPrice || !scheduledTime || !email) {
        return res.status(400).json({ error: "Product URL and Desired Price are required." });
    }
    res.status(200).json({ message: "Price alert set successfully!", data: req.body  });
};

//Checking price drop and sending notification if necessary
const checkPrice = async (req, res) => {
    const result = await priceCheckService.checkProductPrice();
    if (result) {
        notificationService.sendNotification(result);
        return res.json({ message: "Notification sent!", data: result });
    }
    res.json({ message: "No price drop detected." });
};

module.exports = { setPriceAlert, checkPrice };