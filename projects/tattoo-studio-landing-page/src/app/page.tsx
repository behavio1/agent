import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronDown, CheckCircle2, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-rose-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter uppercase text-white">INK<span className="text-rose-600">STUDIO</span></div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors">O nas</a>
            <a href="#artists" className="text-zinc-400 hover:text-white transition-colors">Artyści</a>
            <a href="#portfolio" className="text-zinc-400 hover:text-white transition-colors">Galeria</a>
            <a href="#services" className="text-zinc-400 hover:text-white transition-colors">Usługi</a>
            <a href="#faq" className="text-zinc-400 hover:text-white transition-colors">FAQ</a>
            <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">Kontakt</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Umów się
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900">
          {/* Placeholder for background image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598371839696-5e5bb00b059a?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/80 to-zinc-950"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Twoje ciało, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Nasze płótno.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10">
            Tworzymy unikalne, autorskie tatuaże z dbałością o każdy detal. 
            Wyraź siebie z najlepszymi artystami w mieście.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Umów się na sesję
            </a>
            <a href="#portfolio" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors border border-zinc-700">
              Zobacz galerię
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">O naszym studiu</h2>
              <div className="space-y-4 text-zinc-400 text-lg">
                <p>
                  INKSTUDIO to więcej niż salon tatuażu. To miejsce, gdzie sztuka spotyka się z pasją, a Twoje pomysły stają się rzeczywistością. Działamy na rynku od ponad 10 lat, zrzeszając najbardziej utalentowanych artystów.
                </p>
                <p>
                  Kładziemy ogromny nacisk na najwyższe standardy higieny. Używamy tylko jednorazowych, sterylnych narzędzi oraz wegańskich, bezpiecznych tuszy. W naszym studiu możesz czuć się w 100% bezpiecznie i komfortowo.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {['Sterylne warunki pracy', 'Najlepsi specjaliści w branży', 'Autorskie projekty', 'Przyjazna atmosfera'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-zinc-800">
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611501275019-9b5c11bc4022?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasi artyści</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Poznaj zespół naszych kreatywnych twórców. Każdy z nich specjalizuje się w innym stylu, co pozwala nam sprostać każdym oczekiwaniom.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Max "Czarny"', style: 'Realizm / Black & Grey', img: 'https://images.unsplash.com/photo-1598371839696-5e5bb00b059a?w=400&q=80' },
              { name: 'Lena "Igła"', style: 'Dotwork / Linework', img: 'https://images.unsplash.com/photo-1574344583842-878f0d84384b?w=400&q=80' },
              { name: 'Kamil "Barwa"', style: 'Neo-Traditional / Kolor', img: 'https://images.unsplash.com/photo-1620000617482-821324eb9a14?w=400&q=80' }
            ].map((artist, idx) => (
              <div key={idx} className="bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 group">
                <div className="h-64 bg-zinc-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${artist.img}')` }}></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{artist.name}</h3>
                  <p className="text-rose-500 mb-4">{artist.style}</p>
                  <a href="#" className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors">
                    <Instagram className="w-4 h-4 mr-2" />
                    Zobacz portfolio
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section id="portfolio" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria</h2>
            <p className="text-zinc-400">Zobacz nasze najnowsze realizacje.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80',
              'https://images.unsplash.com/photo-1598371839696-5e5bb00b059a?w=600&q=80',
              'https://images.unsplash.com/photo-1574344583842-878f0d84384b?w=600&q=80',
              'https://images.unsplash.com/photo-1611501275019-9b5c11bc4022?w=600&q=80',
              'https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=600&q=80',
              'https://images.unsplash.com/photo-1550537687-c91072c4792d?w=600&q=80',
            ].map((src, idx) => (
              <div key={idx} className="aspect-square bg-zinc-800 rounded-xl overflow-hidden relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Tatuaż realizacja ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasze usługi</h2>
            <p className="text-zinc-400">Kompleksowa obsługa od wizji po idealny tatuaż na Twojej skórze.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tatuaż Autorski', desc: 'Unikalne projekty dopasowane w 100% do Twojej wizji i anatomii.' },
              { title: 'Flash Tattoo', desc: 'Gotowe, autorskie wzory naszych artystów czekające na realizację.' },
              { title: 'Cover-Up', desc: 'Skuteczne i estetyczne zakrywanie starych lub nieudanych tatuaży.' },
              { title: 'Konsultacje', desc: 'Darmowe spotkania, na których omawiamy projekt, wycenę i szczegóły.' }
            ].map((service, idx) => (
              <div key={idx} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 hover:border-rose-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Co mówią nasi klienci</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Katarzyna L.', text: 'Świetna atmosfera i pełen profesjonalizm. Mój pierwszy tatuaż wyszedł lepiej niż mogłam to sobie wyobrazić!' },
              { name: 'Michał P.', text: 'Zrobili mi świetny cover-up starego błędu młodości. Pełna dbałość o detale i sterylność na najwyższym poziomie.' },
              { name: 'Anna W.', text: 'Lena to artystka przez duże A. Jej dotwork to mistrzostwo świata. Na pewno tu wrócę po kolejną dziarę.' }
            ].map((review, idx) => (
              <div key={idx} className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
                <div className="flex text-rose-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-zinc-300 mb-6">&quot;{review.text}&quot;</p>
                <p className="font-bold">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Częste pytania</h2>
          <div className="space-y-4">
            {[
              { q: 'Jak przygotować się do sesji?', a: 'Wyśpij się, zjedz sycący posiłek przed wizytą i nie pij alkoholu minimum 24 godziny przed sesją. Zadbaj o nawilżenie skóry w miejscu tatuowania kilka dni wcześniej.' },
              { q: 'Czy tatuowanie bardzo boli?', a: 'Odczucia są subiektywne i zależą od miejsca na ciele. Używamy najwyższej klasy sprzętu, co minimalizuje dyskomfort. Dla większości osób ból jest całkowicie do zniesienia.' },
              { q: 'Jak dbać o świeży tatuaż?', a: 'Po sesji otrzymasz od nas szczegółową instrukcję pielęgnacji oraz polecimy odpowiednie kosmetyki. Najważniejsze to utrzymywać tatuaż w czystości i odpowiednio go nawilżać.' },
              { q: 'Jak wyceniany jest tatuaż?', a: 'Cena zależy od wielkości, stopnia skomplikowania wzoru i czasu potrzebnego na wykonanie. Dokładną wycenę otrzymasz na darmowej konsultacji.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-zinc-950 rounded-xl border border-zinc-800 overflow-hidden">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                  <span className="text-lg font-bold">{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-zinc-400" />
                  </span>
                </summary>
                <div className="text-zinc-400 p-6 pt-0 leading-relaxed border-t border-zinc-800/50 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Skontaktuj się z nami</h2>
              <p className="text-zinc-400 mb-10">Masz pomysł na tatuaż? A może po prostu chcesz o coś zapytać? Napisz do nas, a my odezwiemy się tak szybko, jak to możliwe.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-rose-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Adres Studia</h4>
                    <p className="text-zinc-400">ul. Przykładowa 12/3<br />00-001 Warszawa</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-rose-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">Telefon</h4>
                    <p className="text-zinc-400">+48 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-rose-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold">E-mail</h4>
                    <p className="text-zinc-400">kontakt@inkstudio.pl</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-6">Napisz wiadomość</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Imię i nazwisko</label>
                  <input type="text" id="name" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors" placeholder="Jan Kowalski" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">E-mail</label>
                  <input type="email" id="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors" placeholder="jan@example.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Wiadomość / Pomysł na tatuaż</label>
                  <textarea id="message" rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors" placeholder="Opisz swój pomysł, wielkość oraz preferowane miejsce na ciele..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 rounded-lg transition-colors mt-2">
                  Wyślij zapytanie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 py-12 border-t border-zinc-900 text-zinc-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-xl font-bold tracking-tighter uppercase text-white mb-2">INK<span className="text-rose-600">STUDIO</span></div>
              <p className="text-sm">© {new Date().getFullYear()} INKSTUDIO. Wszelkie prawa zastrzeżone.</p>
            </div>
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">Polityka Prywatności</a>
              <a href="#" className="hover:text-white transition-colors">Regulamin Studia</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
