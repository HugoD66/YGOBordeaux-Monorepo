"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_seeding_1 = require("typeorm-seeding");
const bar_entity_1 = require("../bars/entities/bar.entity");
(0, typeorm_seeding_1.define)(bar_entity_1.Bar, (faker) => {
    const bar = new bar_entity_1.Bar();
    bar.name = faker.name.findName();
    bar.adresse = faker.address.streetAddress();
    return bar;
});
//# sourceMappingURL=BarFactory.js.map