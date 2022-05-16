module.exports = class Page {
    open = async () => await browser.url("/");

    #findElement = async (locator) => await $(locator);

    click = async (locator) => {
        const element = await this.#findElement(locator);
        await element.click();
    };

    typeText = async (locator, text) => {
        const element = await this.#findElement(locator);
        await element.setValue(text);
    };

    verifyIsDisplayed = async (locator) => {
        const element = await this.#findElement(locator);
        await expect(element).toBeDisplayed();
    };
};
