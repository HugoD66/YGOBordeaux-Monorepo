import { define } from 'typeorm-seeding';
import { Bar } from '../bars/entities/bar.entity';

define(Bar, (faker) => {
  const bar = new Bar();
  bar.name = faker.name.findName();
  bar.adresse = faker.address.streetAddress();
  return bar;
});
