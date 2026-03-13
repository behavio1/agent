import { db } from '../db';
import { gigs } from '../db/schema/gigs';

async function main() {
  console.log('Seeding upcoming gigs...');

  const upcomingGigs = [
    {
      venue: 'Hades Club',
      location: 'Warsaw, Poland',
      date: new Date('2026-06-15T20:00:00Z'),
      ticketLink: 'https://example.com/tickets/1',
    },
    {
      venue: 'Bloodstained Arena',
      location: 'Kraków, Poland',
      date: new Date('2026-07-22T19:30:00Z'),
      ticketLink: 'https://example.com/tickets/2',
    },
    {
      venue: 'Iron Forge Festival',
      location: 'Berlin, Germany',
      date: new Date('2026-08-10T14:00:00Z'),
      ticketLink: 'https://example.com/tickets/3',
    },
    {
      venue: 'The Abyss',
      location: 'Prague, Czech Republic',
      date: new Date('2026-09-05T21:00:00Z'),
      ticketLink: null,
    },
    {
      venue: 'Hellfire Stage',
      location: 'Wrocław, Poland',
      date: new Date('2026-10-31T22:00:00Z'),
      ticketLink: 'https://example.com/tickets/5',
    },
  ];

  try {
    // We can just insert these directly.
    // If we wanted to avoid duplicates we could truncate or delete first, but for a simple seed script this is fine.
    await db.insert(gigs).values(upcomingGigs);
    console.log('Successfully seeded 5 gigs!');
  } catch (error) {
    console.error('Error seeding gigs:', error);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
