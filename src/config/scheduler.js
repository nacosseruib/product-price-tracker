// src/config/scheduler.js
const cron = require("node-cron");
const priceCheckService = require("../services/priceCheckService");
const notificationService = require("../services/notificationService");

cron.schedule("0 * * * *", async () => {
    const result = await priceCheckService.checkProductPrice();
    if (result) {
        notificationService.sendNotification(result);
    }
});