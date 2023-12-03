"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const user_entity_1 = require("../users/entities/user.entity");
(0, typeorm_seeding_1.define)(user_entity_1.User, (faker) => {
    const user = new user_entity_1.User();
    user.name = faker.internet.userName();
    user.email = faker.internet.email();
    return user;
});
//# sourceMappingURL=user.fixture.js.map