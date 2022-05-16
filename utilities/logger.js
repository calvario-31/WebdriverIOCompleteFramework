const { default: logger } = require("@wdio/logger");

const log = logger("AUTOMATION");

const printSeparator = () => {
    log.info(
        "------------------------------------------------------------------------------------------"
    );
};

const printNewLine = () => {
    log.info("");
};

const startTest = (testName) => {
    printSeparator();
    log.info(`Test: ${testName}`);
    printSeparator();
};

const endTest = (status) => {
    printSeparator();
    log.info(status);
    printSeparator();
    printNewLine();
    printNewLine();
};

const startSuite = (suiteName) => {
    printNewLine();
    printSeparator();
    printSeparator();
    log.info(`Beginning: ${suiteName}`);
    printSeparator();
    printSeparator();
    printNewLine();
};

module.exports = { log, startTest, endTest, startSuite };
