import { db } from '@/db';
import { gigs } from '@/db/schema/gigs';
import { asc, gte } from 'drizzle-orm';
import { CalendarDays, MapPin, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';

export async function Gigs() {
  const upcomingGigs = await db
    .select()
    .from(gigs)
    .where(gte(gigs.date, new Date()))
    .orderBy(asc(gigs.date));

  return (
    <section id="gigs" className="bg-background py-24 text-foreground border-t border-border/40 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading uppercase tracking-wide m-0 leading-tight">
            Nadchodzące <span className="text-primary">Koncerty</span>
          </h2>
          <p className="max-w-[600px] text-muted-foreground mt-6 uppercase tracking-widest text-sm">
            Złap Zerwane Struny na żywo. Krew, pot i ciężki metal.
          </p>
        </div>

        {upcomingGigs.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground bg-secondary/10 border border-border/40 rounded-sm">
            <p className="text-xl font-heading uppercase tracking-widest text-foreground">Brak zaplanowanych koncertów</p>
            <p className="mt-4 text-sm font-sans">Sprawdź ponownie wkrótce lub śledź nasze media społecznościowe.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {upcomingGigs.map((gig) => {
              const dateObj = new Date(gig.date);
              const formattedDate = dateObj.toLocaleDateString('pl-PL', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });
              const formattedTime = dateObj.toLocaleTimeString('pl-PL', {
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={gig.id}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-secondary/20 border border-border/40 hover:border-primary/50 transition-colors duration-300 gap-6 rounded-sm group"
                >
                  <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
                    <div className="flex items-center gap-4 min-w-[160px]">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm group-hover:bg-primary/20 transition-colors">
                        <CalendarDays className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-heading text-xl text-foreground uppercase tracking-wider">{formattedDate}</div>
                        <div className="text-sm font-sans text-muted-foreground">{formattedTime}</div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading uppercase text-foreground mb-2 tracking-widest group-hover:text-primary transition-colors">{gig.venue}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground font-sans">
                        <MapPin className="w-4 h-4 text-primary/70" />
                        <span className="text-sm tracking-wider uppercase">{gig.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end shrink-0">
                    {gig.ticketLink ? (
                      <Button
                        asChild
                        size="lg"
                        className="w-full md:w-auto uppercase font-heading tracking-widest rounded-sm group/btn"
                      >
                        <a href={gig.ticketLink} target="_blank" rel="noopener noreferrer">
                          <Ticket className="w-5 h-5 mr-3 text-primary-foreground group-hover/btn:rotate-12 transition-transform" />
                          Bilety
                        </a>
                      </Button>
                    ) : (
                      <Button
                        disabled
                        variant="outline"
                        size="lg"
                        className="w-full md:w-auto border-border/60 text-muted-foreground uppercase font-heading tracking-widest rounded-sm"
                      >
                        Wyprzedane / TBA
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
