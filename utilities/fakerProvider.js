const faker = require("@faker-js/faker");
const { log } = require("../utilities/logger");

const getPerson = () => {
    log.debug("Getting fake info with faker on Persona");
    return {
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        email: faker.internet.email(),
        telefono: faker.phone.phoneNumber(),
    };
};

module.exports = { getPerson };
