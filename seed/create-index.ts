import { SchemaFieldTypes } from 'redis';
import { initializeRedisClient } from '../utils/client.js';
import { restaurantIndexKey, getKeyName } from '../utils/keys.js';

async function createIndex() {
  const client = await initializeRedisClient();

  try {
    await client.ft.dropIndex(restaurantIndexKey);
  } catch (error) {
    console.log('No existing index to delete');
  }

  await client.ft.create(
    restaurantIndexKey,
    {
      id: {
        type: SchemaFieldTypes.TEXT,
        AS: 'id',
      },
      name: {
        type: SchemaFieldTypes.TEXT,
        AS: 'name',
      },
      avgStars: {
        type: SchemaFieldTypes.NUMERIC,
        AS: 'avgStars',
        SORTABLE: true,
      },
    },
    {
      ON: 'HASH',
      PREFIX: getKeyName('restaurants'),
    }
  );
}

await createIndex();
process.exit(0);
