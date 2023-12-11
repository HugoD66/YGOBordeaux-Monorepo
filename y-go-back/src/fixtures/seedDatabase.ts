import { createRandomUser } from './user.fixture';
import {createConnection, DataSource, getConnectionOptions} from 'typeorm';
import { User } from '../users/entities/user.entity';

export async function seedDatabase() {
  let connection: DataSource;
  try {
    const connectionOptions = await getConnectionOptions();
    connection = await createConnection(connectionOptions);

    const usersToCreate = Array(10).fill(null).map(() => createRandomUser());
    const userRepository = connection.getRepository(User);

    await userRepository.save(usersToCreate);
    console.log('Users inserted successfully.');
  } catch (error) {
    console.error('Error inserting users:', error);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

seedDatabase();
