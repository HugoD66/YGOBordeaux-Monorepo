"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomUser = void 0;
const faker_1 = require("@faker-js/faker");
function createRandomUser() {
    return {
        id: faker_1.faker.string.uuid(),
        name: faker_1.faker.person.firstName(),
        email: faker_1.faker.internet.email(),
        password: faker_1.faker.internet.password(),
    };
}
exports.createRandomUser = createRandomUser;
const users = [];
for (let i = 0; i < 10; i++) {
    users.push(createRandomUser());
}
//# sourceMappingURL=user.fixture.js.map