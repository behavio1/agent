import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv';
import { dogs } from './schema';

dotenv.config({ path: '.env.local' });

if (!process.env.DATABASE_URI) {
  throw new Error('DATABASE_URI environment variable is not set');
}

const sql = neon(process.env.DATABASE_URI);
const db = drizzle(sql);

async function main() {
  console.log('Seeding database...');
  
  await db.insert(dogs).values([
    {
      name: 'Burek',
      breed: 'Mieszaniec',
      age: 3,
      description: 'Przyjazny i pełen energii pies, który uwielbia długie spacery.',
      imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=600&auto=format&fit=crop',
      isAdopted: false,
    },
    {
      name: 'Luna',
      breed: 'Owczarek Niemiecki',
      age: 5,
      description: 'Bardzo mądra, opanowana suczka. Idealna do domu z ogrodem.',
      imageUrl: 'https://images.unsplash.com/photo-1589965716319-4a041b58fa8a?q=80&w=600&auto=format&fit=crop',
      isAdopted: false,
    },
    {
      name: 'Reksio',
      breed: 'Kundelek',
      age: 1,
      description: 'Młody, wesoły psiak szukający kochającej rodziny.',
      imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop',
      isAdopted: false,
    },
    {
      name: 'Max',
      breed: 'Labrador Retriever',
      age: 7,
      description: 'Spokojny starszy pan. Uwielbia spać na kanapie i być głaskanym.',
      imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=600&auto=format&fit=crop',
      isAdopted: false,
    },
  ]);
  
  console.log('Database seeded successfully!');
}

main().catch((err) => {
  console.error('Error seeding database:', err);
  process.exit(1);
});
