const LoginPage = require("../pageobjects/login.page");
const ShoppingPage = require("../pageobjects/shopping.page");

describe("My Login application", () => {
    before();

    it("should login with valid credentials", async () => {
        await LoginPage.open();
        await LoginPage.login("standard_user", "secret_sauce");
        await ShoppingPage.verifyPage();
    });
});
