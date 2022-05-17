const excelToJson = require("convert-excel-to-json");
const { log } = require("../utilities/logger");

const excelPath = "./resources/testData/testData.xlsx";

const getCredentialsJson = () => {
    log.debug("Reading credentials from excel");

    const json = excelToJson({
        sourceFile: excelPath,
        header: { rows: 1 },
        sheets: ["credentials"],
        columnToKey: {
            "*": "{{columnHeader}}",
        },
    });

    return json.credentials;
};

const getItemsJson = () => {
    log.debug("Reading items from excel");

    const json = excelToJson({
        sourceFile: excelPath,
        header: { rows: 1 },
        sheets: ["itemData"],
        columnToKey: {
            "*": "{{columnHeader}}",
        },
    });

    return json.itemData;
};

module.exports = { getCredentialsJson, getItemsJson };
