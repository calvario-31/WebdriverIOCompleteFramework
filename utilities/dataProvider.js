const { getCredentialsMap } = require("./mapParser");

const getValidCredentials = () => {
    const credentialsMap = getCredentialsMap();
    return credentialsMap.get("valid");
};

module.exports = { getValidCredentials };
