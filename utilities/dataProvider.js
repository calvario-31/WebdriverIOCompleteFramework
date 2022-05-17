const { getCredentialsMap } = require("./mapParser");
const { log } = require("../utilities/logger");

const getValidCredentials = () => {
    const credentialsMap = getCredentialsMap();
    const validCredentials = credentialsMap.get("valid");
    log.debug(`Getting valid credentials: ${JSON.stringify(validCredentials)}`);
    return validCredentials;
};

module.exports = { getValidCredentials };
