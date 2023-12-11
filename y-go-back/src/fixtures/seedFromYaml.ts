const fs = require('fs');
const yaml = require('js-yaml');
const faker = require('@faker-js/faker');
const { DataSource } = require('typeorm');
const { User } = require('./path/to/user.entity'); // Chemin vers votre entité User

const dataSource = new DataSource(/* vos options de connexion TypeORM */);


//A CONFIG :
// "seed": "typeorm-fixtures-cli load ./path/to/fixtures.yml -f ./ormconfig.json",
//     "start:with-seed": "yarn seed && yarn start"
async function seedFromYaml() {
  try {
    const fileContents = fs.readFileSync('./path/to/User.yml', 'utf8');
    const data = yaml.load(fileContents);

    await dataSource.initialize();

    for (const key in data.items) {
      if (data.items.hasOwnProperty(key)) {
        const userItem = data.items[key];

        const user = new User();
        user.name = faker.name.firstName();
        user.email = faker.internet.email();
        user.setPassword(userItem.__call.setPassword[0]); // Assurez-vous que cette méthode existe sur votre entité

        await dataSource.getRepository(User).save(user);
      }
    }

    console.log('Users inserted successfully.');
  } catch (e) {
    console.error('Error inserting users:', e);
  } finally {
    await dataSource.destroy();
  }
}

seedFromYaml();
