const LoginPage = require("../pageobjects/login.page");
const ShoppingPage = require("../pageobjects/shopping.page");
const { getValidCredentials } = require("../utilities/dataProvider");

describe("My Login application", () => {
    it("should login with valid credentials", async () => {
        const credentials = getValidCredentials();
        await LoginPage.login(credentials.username, credentials.password);
        await ShoppingPage.verifyPage();
    });

    it.skip("fail test to test screenshot", async () => {
        //unskip to test screenshot
        await ShoppingPage.verifyPage();
    });
});
