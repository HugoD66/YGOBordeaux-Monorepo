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

export function createRandomUsers(count: number): InterfaceUser[] {
  return Array.from({ length: count }, createRandomUser);
}
