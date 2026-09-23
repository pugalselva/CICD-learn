const request = require("supertest");
const {app, server,name } = require("../app")

describe("GET /", () => {
  it("should return a welcome message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe(`Welcome to ShopEasy ${name} software `);
  })
})

  afterAll(() => {
    server.close();
  })