import React from 'react';

export function Media() {
  return (
    <section id="media" className="py-24 bg-background border-b border-border/40 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent z-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading uppercase text-foreground inline-block relative">
            Brzmienie
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary" />
          </h2>
          <p className="mt-8 text-muted-foreground uppercase tracking-widest text-sm max-w-xl mx-auto">
            Głośniej. Mocniej. Ciemniej. Posłuchaj i zobacz, z czym masz do czynienia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="flex flex-col gap-8 w-full">
            <div>
              <h3 className="text-2xl font-heading text-primary uppercase mb-4 border-l-4 border-primary pl-4">Audio / Spotify</h3>
              <p className="text-muted-foreground mb-6 font-sans">Streamuj nasz najnowszy album i najtwardsze klasyki.</p>
            </div>
            <div className="w-full aspect-video sm:aspect-auto sm:h-[352px] bg-muted/20 border border-border/50 relative overflow-hidden">
              <iframe 
                style={{ borderRadius: '12px', border: 'none' }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZtZ8vUCzceJ?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                allowFullScreen={false} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Heavy Metal Spotify Playlist"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-8 w-full">
            <div>
              <h3 className="text-2xl font-heading text-primary uppercase mb-4 border-l-4 border-primary pl-4">Wideo / YouTube</h3>
              <p className="text-muted-foreground mb-6 font-sans">Oficjalne teledyski i zapisy z krwawych rytuałów koncertowych.</p>
            </div>
            <div className="w-full aspect-video bg-black border border-border/50 relative">
              <iframe 
                className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                src="https://www.youtube-nocookie.com/embed/videoseries?list=PL230B48679A95C148" 
                title="Heavy Metal YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                style={{ border: 'none' }}
                loading="lazy"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
