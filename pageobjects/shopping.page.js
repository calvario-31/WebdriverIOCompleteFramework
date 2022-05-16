const Page = require("./page");

class ShoppingPage extends Page {
    #title = "span=Products";
    #imageLogo = ".peek";

    verifyPage = async () => {
        await this.verifyIsDisplayed(this.#title);
        await this.verifyIsDisplayed(this.#imageLogo);
    };
}

module.exports = new ShoppingPage();
