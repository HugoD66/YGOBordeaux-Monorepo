"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
const user_fixture_1 = require("./user.fixture");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
async function seedDatabase() {
    let connection;
    try {
        const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
        connection = await (0, typeorm_1.createConnection)(connectionOptions);
        const usersToCreate = Array(10).fill(null).map(() => (0, user_fixture_1.createRandomUser)());
        const userRepository = connection.getRepository(user_entity_1.User);
        await userRepository.save(usersToCreate);
        console.log('Users inserted successfully.');
    }
    catch (error) {
        console.error('Error inserting users:', error);
    }
    finally {
        if (connection) {
            await connection.close();
        }
    }
}
exports.seedDatabase = seedDatabase;
seedDatabase();
//# sourceMappingURL=seedDatabase.js.map