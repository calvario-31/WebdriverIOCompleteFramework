const { getCredentialsJson, getItemsJson } = require("./readExcel");
const { log } = require("../utilities/logger");

const getCredentialsMap = () => {
    const map = new Map();
    const credentialsJson = getCredentialsJson();

    log.debug("Creating credentials map");
    credentialsJson.forEach((element) => {
        map.set(element.key, element);
    });

    return map;
};

const getItemsMap = () => {
    const map = new Map();
    const itemsJson = getItemsJson();

    log.debug("Creating items map");
    itemsJson.forEach((element) => {
        map.set(element.key, element);
    });

    return map;
};

module.exports = { getCredentialsMap, getItemsMap };
