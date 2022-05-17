const Page = require("./page");
const { log } = require("../utilities/logger");

class ShoppingPage extends Page {
    #title = "span=Products";
    #imageLogo = ".peek";

    verifyPage = async () => {
        log.info("Verifying title is displayed");
        await this.verifyIsDisplayed(this.#title);

        log.info("Verifying image logo is displayed");
        await this.verifyIsDisplayed(this.#imageLogo);
    };
}

module.exports = new ShoppingPage();
