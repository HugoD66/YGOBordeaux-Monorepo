// src/fixtures/users.fixture.ts
import { define, factory } from "typeorm-seeding";
import { User } from "../users/entities/user.entity";

define(User, (faker) => {
  const user = new User();
  user.name = faker.internet.userName();
  user.email = faker.internet.email();
  return user;
});
