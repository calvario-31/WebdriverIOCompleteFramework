const Page = require("./page");

class LoginPage extends Page {
    #userNameInput = "#user-name";
    #passwordInput = "#password";
    #loginButton = "#login-button";

    login = async (username, password) => {
        await this.typeText(this.#userNameInput, username);
        await this.typeText(this.#passwordInput, password);
        await this.click(this.#loginButton);
    };
}

module.exports = new LoginPage();
