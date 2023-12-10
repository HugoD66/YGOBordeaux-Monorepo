import { InterfaceUser } from "./interface.user";
import {faker} from "@faker-js/faker";

export function createRandomUser(): InterfaceUser {
  return {
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

const users: InterfaceUser[] = [];
for (let i = 0; i < 10; i++) {
  users.push(createRandomUser());
}
