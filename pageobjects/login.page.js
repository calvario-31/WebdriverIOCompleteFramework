const Page = require("./page");
const { log } = require("../utilities/logger");

class LoginPage extends Page {
    #userNameInput = "#user-name";
    #passwordInput = "#password";
    #loginButton = "#login-button";

    login = async (username, password) => {
        log.info("Entering username");
        await this.typeText(this.#userNameInput, username);

        log.info("Entering password");
        await this.typeText(this.#passwordInput, password);

        log.info("Clicking on login button");
        await this.click(this.#loginButton);
    };
}

module.exports = new LoginPage();
