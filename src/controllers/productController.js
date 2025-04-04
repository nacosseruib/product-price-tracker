// src/controllers/productController.js
const priceCheckService = require("../services/priceCheckService");
const notificationService = require("../services/notificationService");
const CustomError = require("../utils/CustomError");
const cronstrue = require("cronstrue");


// Setting price alert for a product
const setPriceAlert = async (req, res, next) => {
    try {
        let { productUrl, desiredPrice, scheduledTime, email } = req.body;
         // Input validation
        if (!productUrl || !desiredPrice || !scheduledTime || !email) {
            throw new CustomError("All fields are required: productUrl, desiredPrice, scheduledTime, and email.", 400);
        }
        scheduledTime  = cronstrue.toString(scheduledTime);
        res.status(200).json({
            message: "Price alert set successfully!",
            data: { productUrl, desiredPrice, scheduledTime, email }
        });

    } catch (error) {
        next(error); // Pass error to middleware
    }
};


// Checking price drop and sending notification if necessary
const checkPrice = async (req, res, next) => {
    try {
        const result = await priceCheckService.checkProductPrice();

        if (result) {
            notificationService.sendNotification(result);
            return res.status(200).json({
                message: "Notification sent!",
                data: result
            });
        }

        res.status(200).json({ message: "No price drop detected." });

    } catch (error) {
        next(error);
    }
};

module.exports = { setPriceAlert, checkPrice };
