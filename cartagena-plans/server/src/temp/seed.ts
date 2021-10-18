// import * as dotenv from 'dotenv'
// dotenv.config({ path: __dirname + '../src/.env' })

import { ObjectId } from 'mongodb'
import { connectDatabase } from '../database'
import { Plan } from '../lib/types'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const seedDatabase = async () => {
  try {
    const db = await connectDatabase()
    const plans: Plan[] = [
      {
        _id: new ObjectId(),
        title: 'Pasadía Isla Agua Azul',
        description:
          'Sint labore molestiae earum minus. Corrupti saepe quis sed aut animi recusandae. Qui ipsam assumenda earum delectus ut voluptatem.',
        features: [
          'Nihil qui consequatur tenetur omnis quia praesentium sit cum qui.',
          'Alias suscipit accusantium quis aut est.',
          'Nisi debitis qui perspiciatis.',
          'Qui sequi aut.',
          'Est vitae atque quasi eos vel repudiandae placeat.'
        ],
        price: 55000,
        duration: 7,
        imageUrl: 'https://picsum.photos/id/1/400/300',
        rating: 4.0
      },
      {
        _id: new ObjectId(),
        title: 'Pasadía Isla Cocotera Beach',
        description:
          'Laudantium tempora aut sed rem. Voluptates impedit minus laborum saepe sed animi sed soluta et. Et veritatis explicabo qui non deleniti quia.',
        features: [
          'Dolores maxime impedit quis.',
          'Distinctio quia rerum vel repudiandae.',
          'Mollitia perspiciatis voluptas corrupti iste.',
          'Natus sed aut suscipit temporibus dolore minima eum.',
          'Non atque debitis incidunt dicta autem aut laborum.'
        ],
        price: 55000,
        duration: 7,
        imageUrl: 'https://picsum.photos/id/1/400/300',
        rating: 4.0
      },
      {
        _id: new ObjectId(),
        title: 'Segway Tour Premium',
        description:
          'Temporibus rerum eos dolore ut odio sint voluptatem eum dolores. Culpa aut expedita temporibus id praesentium magnam sit dolor. Rem doloribus qui repellendus iste placeat dignissimos voluptatem dignissimos. Fugiat non itaque consequatur voluptas quo quo corporis. Provident corporis aspernatur vel ea nobis ad et eveniet molestiae. Nesciunt laboriosam et eaque et dignissimos aspernatur mollitia voluptatem.',
        features: [
          'Dolorem ullam non.',
          'Quia facilis harum voluptas.',
          'Possimus quas reprehenderit sed voluptatem aperiam et quasi quia earum.',
          'Impedit quo dolorem eveniet.',
          'Sed asperiores in.'
        ],
        price: 55000,
        duration: 7,
        imageUrl: 'https://picsum.photos/id/1/400/300',
        rating: 4.0
      }
    ]

    for (const plan of plans) {
      await db.plans.insertOne(plan)
    }

    console.log('[seed-database]: success')
  } catch (error) {
    console.log(error)
    throw new Error('Failed to seed database')
  }
}
