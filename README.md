# Product Price Tracker with Custom Alerts

## 📌 Project Description
The **Product Price Tracker API** allows users to enter a product URL and set a price drop alert. The system simulates product price tracking by fetching static JSON data and notifying users when their desired price condition is met. Users can also schedule periodic price checks based on their preferred time intervals


## 🚀 Features
- **Set Price Alerts**: Users can enter a product URL and a target price to get notified when the price drops.
- **Simulated Price Tracking**: Fetches product prices from a static JSON file.
- **Time-Based Price Checks**: Users can schedule price checks at specific times (e.g., every 24 hours, morning, midnight, etc.).
- **Notifications**: Sends alerts when the price condition is met.
- **RESTful API**: Follows REST principles with structured responses.
- **Test-Driven Development (TDD)**: Ensures code reliability with unit tests.


## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Is not required. So, i did not use database)
- **Scheduler**: node-cron (for periodic checks)
- **Testing**: Jest, Supertest


## 📂 Project Structure
```sh
product-price-tracker/
│── src/
│   ├── config/
│   │   └── scheduler.js             # Schedules price checks
│   ├── controllers/
│   │   └── productController.js     # Handles price tracking logic
│   ├── data/
│   │   └── products.json            # Static product price data
│   ├── middleware/
│   │   ├── validation.js            # Input validation middleware
│   │   └── errorHandler.js          # Centralized error handling middleware
│   ├── routes/
│   │   └── productRoutes.js         # Routes for API requests
│   ├── services/
│   │   ├── notificationService.js   # Handles user notifications
│   │   └── priceCheckService.js     # Handles price checking
│   ├── tests/
│   │   └── productRoutes.test.js    # Unit tests for endpoints
│   ├── utils/
│   │   └── CustomError.js           # Custom error class for handling app-specific errors
│   └── app.js                       # Express app setup
│
├── server.js                        # Starts the server
├── package.json                     # Project dependencies and scripts
├── README.md                        # Project documentation
```

## 🏗️ Installation and Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/nacosseruib/product-price-tracker.git
cd product-price-tracker
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and configure your environment variables:
```env
PORT=
NODE_ENV="development"
SECRET_KEY=""
DEV_HOST="127.0.0.1"
KEEPDEFAULTTIMEZONE=""
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
    "productUrl": "https://www.amazon.co.uk/Sonos-Ace-Cancelling-Bluetooth-Headphones-White/dp/B0D37R7X6Z/?_encoding=UTF8&pd_rd_w=LcyPT&content-id=amzn1.sym.cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_p=cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_r=S8GVS2TK03XFSZCQRY6S&pd_rd_wg=btCy2&pd_rd_r=0bd373bc-fe3a-4e54-a522-b575ade7787f&ref_=pd_hp_d_atf_dealz_cs&th=1",
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
        "scheduledTime": "At 08:00 AM",
        "email": "user@example.com"
    }
}
```

### **🔹 Get a Check Price **
**GET** `/api/v1/products/check-price`
_Response:_
```json
{
    "message": "Notification sent!",
    "data": [
        {
            "id": 0,
            "desiredPrice": 305,
            "price": 259.99,
            "name": "HP EliteBook 840 G6 - i7-8565U (4 Cores, 4.6GHz), 16GB DDR4, 1TB NVMe, UHD Graphics, Fingerprint, SD & Smart Card reader, WIFI 5 & BT 4.2, UK keyboard Layout, Windows 11 Pro - 14” Ultrabook (Renewed)",
            "productUrl": "https://www.amazon.co.uk/HP-EliteBook-840-Fingerprint-Ultrabook/dp/B0C1KMLT83/?_encoding=UTF8&pd_rd_w=CwV1E&content-id=amzn1.sym.a4ac6c4d-6ae7-4d95-b5e0-812c9dcfc72e%3Aamzn1.symc.fc11ad14-99c1-406b-aa77-051d0ba1aade&pf_rd_p=a4ac6c4d-6ae7-4d95-b5e0-812c9dcfc72e&pf_rd_r=S8GVS2TK03XFSZCQRY6S&pd_rd_wg=btCy2&pd_rd_r=0bd373bc-fe3a-4e54-a522-b575ade7787f&ref_=pd_hp_d_atf_ci_mcx_mr_ca_hp_atf_d"
        },
        {
            "id": 1,
            "desiredPrice": 30,
            "price": 21.19,
            "name": "OtterBox Commuter Series MagSafe Case for iPhone 16 Pro Max, Shockproof, Drop proof, Rugged, Protective Case, 3x Tested to Military Standard, Black",
            "productUrl": "https://www.amazon.co.uk/OtterBox-Commuter-Shockproof-Protective-Military/dp/B0DF7FM3GF/?_encoding=UTF8&pd_rd_w=LcyPT&content-id=amzn1.sym.cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_p=cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_r=S8GVS2TK03XFSZCQRY6S&pd_rd_wg=btCy2&pd_rd_r=0bd373bc-fe3a-4e54-a522-b575ade7787f&ref_=pd_hp_d_atf_dealz_cs&th=1"
        },
        {
            "id": 2,
            "desiredPrice": 45,
            "price": 40,
            "name": "CC-Los Men's Hiking Boots for Men Ankle Dress Chukka Boots Size 7.5-14",
            "productUrl": "https://www.amazon.co.uk/CC-Los-Hiking-Boots-Chukka-7-5-14/dp/B0DGG1LMX2/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.60e0c5c0-1616-4d23-82b9-c7fb816f571e&dib=eyJ2IjoiMSJ9.oY1qhHI5q_oTyV_KbDjqgCa7EbgvgU_nKOcKx_JpxFk-PvTJWu5q_FEAG4Ofhox0KwcQbEczN28DnhxdJ-4d-ZS_7ibVrE2_QXrmLE-SkA3JOs98Sqr0wi4EFIELCas9g0iTVubZERhfJdtFUiIvefcQuJLYsEGtn4VD_6bQUdYcaQda7lF8f4QnIwjwBHPYdar5H5iUpX6R47Zp55ZqwL6t6MZF-br5VfmEAZ83gfvoS2YTZjrJxQfQBBIwkxeqIzMHN2u_qQWU8Kmv05cYBxp0g8arXJYYGmT34LSbLiI.O3K8webV3d86hu8xz65th0doUr_EOWPRMyte8RmQp98&dib_tag=se&keywords=men%2Bboots&pd_rd_r=96a48e66-04f3-4a72-8cd9-d67b24dfa520&pd_rd_w=vqav1&pd_rd_wg=QgycR&qid=1743684752&refinements=p_n_deal_type%3A26901100031&s=apparel&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1"
        },
        {
            "id": 3,
            "desiredPrice": 100,
            "price": 90,
            "name": "Pink Bags for ladies",
            "productUrl": "https://www.amazon.co.uk/Sonos-Ace-Cancelling-Bluetooth-Headphones-White/dp/B0D37R7X6Z/?_encoding=UTF8&pd_rd_w=LcyPT&content-id=amzn1.sym.cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_p=cac358f1-91b6-4ef5-baf3-9844c55779e6&pf_rd_r=S8GVS2TK03XFSZCQRY6S&pd_rd_wg=btCy2&pd_rd_r=0bd373bc-fe3a-4e54-a522-b575ade7787f&ref_=pd_hp_d_atf_dealz_cs&th=1"
        }
    ]
}
```


## 🏆 Best Practices Followed
✅ **RESTful API Design**  
✅ **Modular and Scalable Architecture**  
✅ **Environment Variables for Configuration**  
✅ **Test-Driven Development (TDD)**  
✅ **Proper Error Handling and Validation**  

--
