// src/tests/productRoutes.test.js
const request = require("supertest");
const app = require("../app");

describe("Product Routes", () => {
    test("Set price alert", async () => {
        const res = await request(app).post("/api/v1/products/set-price-alert").send({ productUrl: "http://example.com", desiredPrice: 100, email: "user@example.com", scheduledTime: "0 8 * * *" });
        expect(res.statusCode).toBe(200);
    });

    test("Check price", async () => {
        const res = await request(app).get("/api/v1/products/check-price");
        expect(res.statusCode).toBe(200);
    });
});