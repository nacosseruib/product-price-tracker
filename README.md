# Product Price Tracker with Custom Alerts

--## 📌 Project Description
The **Product Price Tracker API** allows users to enter a product URL and set a price drop alert. The system simulates product price tracking by fetching static JSON data and notifying users when their desired price condition is met. Users can also schedule periodic price checks based on their preferred time intervals

--
-- ## 🚀 Features
- **Set Price Alerts**: Users can enter a product URL and a target price to get notified when the price drops.
- **Simulated Price Tracking**: Fetches product prices from a static JSON file.
- **Time-Based Price Checks**: Users can schedule price checks at specific times (e.g., every 24 hours, morning, midnight, etc.).
- **Notifications**: Sends alerts when the price condition is met.
- **RESTful API**: Follows REST principles with structured responses.
- **Test-Driven Development (TDD)**: Ensures code reliability with unit tests.

--
-- ## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Is not required. So, i did not use database)
- **Scheduler**: node-cron (for periodic checks)
- **Testing**: Jest, Supertest

--
-- ## 📂 Project Structure
--```
product-price-tracker/
│── src/
│   ├── data/
│   │   ├── products.json            # Static product price data
│   ├── routes/
│   │   ├── productRoutes.js         # Routes for API requests
│   ├── controllers/
│   │   ├── productController.js     # Handles price tracking logic
│   ├── services/
│   │   ├── priceCheckService.js     # Handles price checking
│   │   ├── notificationService.js   # Handles user notifications
│   ├── middleware/
│   │   ├── validation.js            # Input validation middleware
│   ├── config/
│   │   ├── scheduler.js             # Schedules price checks
│   ├── tests/
│   │   ├── productRoutes.test.js    # Unit tests
│   ├── app.js                       # Express app setup
│── server.js                         # Starts the server
│── package.json                      # Project dependencies
│── README.md                         # Documentation
--```

## 🏗️ Installation and Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/product-price-tracker.git
cd product-price-tracker
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and configure your environment variables:
```env
PORT=5001
DATABASE_URL=mongodb://localhost:27017/price-tracker
```

### **4️⃣ Start the Server**
```sh
nodemon server.js
```
The API will be running at: `http://localhost:5001`

### **5️⃣ Run Tests**
```sh
npm test
```

## 📡 API Endpoints
### **🔹 Set a Price Alert**
**POST** `/api/v1/products/set-price-alert`
```json
{
    "productUrl": "http://example.com/laptop",
    "desiredPrice": 100,
    "email": "user@example.com",
    "scheduledTime": "0 8 * * *"
}
```
_Response:_
```json
{
    "message": "Price alert set successfully!",
    "data": {
        "productUrl": "https://www.amazon.co.uk/Sonos-Ace-Cancelling-Bluetooth-Headphones-White/dp/B0D37R7X6Z/?_encoding=UTF8&pd_rd_w=LcyPT&content-id=amzn1.sym.cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_p=cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_r=S8GVS2TK03XFSZCQRY6S&pd_rd_wg=btCy2&pd_rd_r=0bd373bc-fe3a-4e54-a522-b575ade7787f&ref_=pd_hp_d_atf_dealz_cs&th=1",
        "desiredPrice": 100,
        "email": "user@example.com",
        "scheduledTime": "0 8 * * *"
    }
}
```

### **🔹 GET a Check Price **
**GET** `/api/v1/products/check-price`
_Response:_
```json
{
    "message": "Notification sent!",
    "data": {
        "desiredPrice": 265,
        "price": 259.99,
        "name": "HP EliteBook 840 G6 - i7-8565U (4 Cores, 4.6GHz), 16GB DDR4, 1TB NVMe, UHD Graphics, Fingerprint, SD & Smart Card reader, WIFI 5 & BT 4.2, UK keyboard Layout, Windows 11 Pro - 14” Ultrabook (Renewed)",
        "product": "https://www.amazon.co.uk/HP-EliteBook-840-Fingerprint-Ultrabook/dp/B0C1KMLT83/?_encoding=UTF8&pd_rd_w=CwV1E&content-id=amzn1.sym.a4ac6c4d-6ae7-4d95-b5e0-812c9dcfc72e%3Aamzn1.symc.fc11ad14-99c1-406b-aa77-051d0ba1aade&pf_rd_p=a4ac6c4d-6ae7-4d95-b5e0-812c9dcfc72e&pf_rd_r=S8GVS2TK03XFSZCQRY6S&pd_rd_wg=btCy2&pd_rd_r=0bd373bc-fe3a-4e54-a522-b575ade7787f&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d"
    }
}
```


## 🏆 Best Practices Followed
✅ **RESTful API Design**  
✅ **Modular and Scalable Architecture**  
✅ **Environment Variables for Configuration**  
✅ **Test-Driven Development (TDD)**  
✅ **Proper Error Handling and Validation**  

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

🎉 **Now you’re ready to track product prices like a pro!** 🚀

---
