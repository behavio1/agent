"use client";

import { useState } from "react";
import { 
  Menu, X, MapPin, Phone, Mail, Clock, 
  ChevronRight, Star, Heart, Activity, User, Leaf
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-teal-200">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <Leaf className="h-8 w-8 text-teal-600" />
              <span className="font-serif text-2xl font-bold text-teal-800 tracking-tight">Oaza Spokoju</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <a href="#uslugi" className="text-stone-600 hover:text-teal-600 transition-colors font-medium">Usługi</a>
              <a href="#cennik" className="text-stone-600 hover:text-teal-600 transition-colors font-medium">Cennik</a>
              <a href="#o-nas" className="text-stone-600 hover:text-teal-600 transition-colors font-medium">O nas</a>
              <a href="#opinie" className="text-stone-600 hover:text-teal-600 transition-colors font-medium">Opinie</a>
              <a href="#kontakt" className="text-stone-600 hover:text-teal-600 transition-colors font-medium">Kontakt</a>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <a 
                href="tel:+48123456789" 
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all hover:shadow-md"
              >
                Umów wizytę
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-stone-500 hover:bg-stone-100 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Otwórz menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 shadow-lg absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#uslugi" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-teal-600 hover:bg-stone-50">Usługi</a>
              <a href="#cennik" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-teal-600 hover:bg-stone-50">Cennik</a>
              <a href="#o-nas" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-teal-600 hover:bg-stone-50">O nas</a>
              <a href="#opinie" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-teal-600 hover:bg-stone-50">Opinie</a>
              <a href="#kontakt" onClick={toggleMenu} className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-teal-600 hover:bg-stone-50">Kontakt</a>
              <a 
                href="tel:+48123456789"
                className="mt-4 block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
              >
                Umów wizytę (Zadzwoń)
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-stone-100 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-stone-900/40 z-10" />
          {/* Placeholder for hero background image */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-lg">
            Odnajdź harmonię ciała i umysłu
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-stone-100 drop-shadow-md">
            W naszym salonie poczujesz głęboki relaks, pozbędziesz się stresu i zregenerujesz siły witalne. Profesjonalne masaże dostosowane do Twoich potrzeb.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+48123456789" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-teal-900 bg-teal-100 hover:bg-white shadow-lg transition-all hover:scale-105"
            >
              Zarezerwuj teraz
              <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a 
              href="#uslugi" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white/10 transition-all"
            >
              Odkryj nasze usługi
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-stone-800 sm:text-4xl">Nasze Usługi</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-600">
              Wybierz masaż idealny dla siebie. Pomożemy Ci się odprężyć, zredukować napięcie mięśniowe i poprawić samopoczucie.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Masaż Relaksacyjny</h3>
              <p className="text-stone-600 mb-4">
                Delikatny i uspokajający masaż całego ciała, który redukuje stres, poprawia krążenie i przywraca równowagę emocjonalną.
              </p>
              <div className="flex items-center text-sm font-medium text-stone-500">
                <Clock className="w-4 h-4 mr-1.5" /> 60 / 90 min
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Masaż Klasyczny / Leczniczy</h3>
              <p className="text-stone-600 mb-4">
                Intensywniejsza technika skupiająca się na napiętych partiach mięśni. Pomaga przy bólach kręgosłupa i przemęczeniu.
              </p>
              <div className="flex items-center text-sm font-medium text-stone-500">
                <Clock className="w-4 h-4 mr-1.5" /> 45 / 60 min
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-stone-50 rounded-2xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Masaż Sportowy</h3>
              <p className="text-stone-600 mb-4">
                Dedykowany osobom aktywnym fizycznie. Zapobiega kontuzjom, przyspiesza regenerację mięśni po wysiłku i zwiększa elastyczność.
              </p>
              <div className="flex items-center text-sm font-medium text-stone-500">
                <Clock className="w-4 h-4 mr-1.5" /> 45 / 60 min
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-800 sm:text-4xl">Cennik</h2>
            <p className="mt-4 text-lg text-stone-600">
              Przejrzyste ceny dla Twojego pełnego komfortu.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            <div className="divide-y divide-stone-100">
              {/* Price Item */}
              <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-stone-50 transition-colors">
                <div>
                  <h4 className="text-lg font-bold text-stone-800">Masaż Relaksacyjny</h4>
                  <p className="text-sm text-stone-500 mt-1">60 min / 90 min</p>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                  <span className="text-xl font-bold text-teal-700">180 zł / 250 zł</span>
                </div>
              </div>

              {/* Price Item */}
              <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-stone-50 transition-colors">
                <div>
                  <h4 className="text-lg font-bold text-stone-800">Masaż Klasyczny</h4>
                  <p className="text-sm text-stone-500 mt-1">45 min / 60 min</p>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                  <span className="text-xl font-bold text-teal-700">150 zł / 200 zł</span>
                </div>
              </div>

              {/* Price Item */}
              <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-stone-50 transition-colors">
                <div>
                  <h4 className="text-lg font-bold text-stone-800">Masaż Sportowy</h4>
                  <p className="text-sm text-stone-500 mt-1">45 min / 60 min</p>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                  <span className="text-xl font-bold text-teal-700">160 zł / 220 zł</span>
                </div>
              </div>

              {/* Price Item */}
              <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:bg-stone-50 transition-colors">
                <div>
                  <h4 className="text-lg font-bold text-stone-800">Masaż Twarzy Kobido</h4>
                  <p className="text-sm text-stone-500 mt-1">60 min</p>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                  <span className="text-xl font-bold text-teal-700">200 zł</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
             <p className="text-sm text-stone-500">* Płatność gotówką, kartą, BLIK na miejscu.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg mb-10 lg:mb-0">
              <Image 
                src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Wnętrze salonu masażu" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-stone-800 sm:text-4xl mb-6">
                Zadbaj o swoje ciało w rękach ekspertów
              </h2>
              <div className="space-y-4 text-lg text-stone-600">
                <p>
                  Naszą misją jest zapewnienie Ci chwili wytchnienia w pędzącym świecie. Wierzymy, że zdrowy dotyk potrafi czynić cuda, poprawiając nie tylko stan fizyczny, ale i samopoczucie psychiczne.
                </p>
                <p>
                  Nasz zespół składa się z certyfikowanych fizjoterapeutów i masażystów z wieloletnim doświadczeniem. Każdy zabieg poprzedzamy krótkim wywiadem, aby idealnie dobrać technikę i siłę ucisku do Twoich indywidualnych potrzeb.
                </p>
                <p>
                  Używamy wyłącznie w 100% naturalnych, tłoczonych na zimno olejków aromaterapeutycznych, które pielęgnują skórę i potęgują uczucie relaksu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="opinie" className="py-20 bg-teal-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">Co mówią nasi klienci</h2>
            <p className="mt-4 text-teal-100/80">
              Zaufanie budujemy z każdą wizytą.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Review 1 */}
            <div className="bg-teal-800 p-8 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
              <p className="text-teal-50 mb-6 italic">&quot;Niesamowity relaks po ciężkim tygodniu w pracy. Bóle pleców ustąpiły już po pierwszej wizycie, a klimat w salonie jest po prostu wspaniały.&quot;</p>
              <div className="font-medium text-white">- Anna K.</div>
            </div>

            {/* Review 2 */}
            <div className="bg-teal-800 p-8 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
              <p className="text-teal-50 mb-6 italic">&quot;Regularnie korzystam z masażu sportowego przed i po zawodach. Bardzo profesjonalne podejście i ogromna wiedza masażystów.&quot;</p>
              <div className="font-medium text-white">- Michał P.</div>
            </div>

            {/* Review 3 */}
            <div className="bg-teal-800 p-8 rounded-2xl">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
              <p className="text-teal-50 mb-6 italic">&quot;Miejsce, do którego chce się wracać. Piękne wnętrze, relaksująca muzyka i przede wszystkim magiczne dłonie terapeutek. Polecam masaż relaksacyjny.&quot;</p>
              <div className="font-medium text-white">- Katarzyna W.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-stone-800 sm:text-4xl">Kontakt i Rezerwacja</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-600">
              Skontaktuj się z nami, aby umówić się na wizytę lub zadać pytanie.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 mb-8">
                <h3 className="text-xl font-bold text-stone-800 mb-6">Informacje kontaktowe</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-medium text-stone-800">Adres salonu</p>
                      <p className="text-stone-600 mt-1">ul. Relaksowa 12/4<br />00-123 Warszawa</p>
                      <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-teal-600 hover:text-teal-700 text-sm font-medium mt-2 inline-block">Zobacz na mapie &rarr;</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-medium text-stone-800">Telefon</p>
                      <a href="tel:+48123456789" className="text-stone-600 hover:text-teal-600 mt-1 inline-block">+48 123 456 789</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-medium text-stone-800">E-mail</p>
                      <a href="mailto:kontakt@oazaspokoju.pl" className="text-stone-600 hover:text-teal-600 mt-1 inline-block">kontakt@oazaspokoju.pl</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <p className="font-medium text-stone-800">Godziny otwarcia</p>
                      <div className="text-stone-600 mt-1 space-y-1">
                        <p className="flex justify-between w-48"><span>Pon - Pt:</span> <span>10:00 - 20:00</span></p>
                        <p className="flex justify-between w-48"><span>Sobota:</span> <span>09:00 - 16:00</span></p>
                        <p className="flex justify-between w-48"><span>Niedziela:</span> <span className="text-stone-400">Zamknięte</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-xl font-bold text-stone-800 mb-6">Napisz do nas</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700">Imię i nazwisko</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm px-4 py-3 border bg-stone-50" placeholder="Jan Kowalski" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700">Adres e-mail</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm px-4 py-3 border bg-stone-50" placeholder="jan@example.com" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700">Wiadomość</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-stone-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm px-4 py-3 border bg-stone-50" placeholder="Chciał(a)bym zapytać o..."></textarea>
                </div>

                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors">
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 text-stone-300">
            <Leaf className="h-6 w-6 text-teal-500" />
            <span className="font-serif text-xl font-bold tracking-tight text-white">Oaza Spokoju</span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Instagram</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-stone-400">
            <a href="#" className="hover:text-white transition-colors">Regulamin</a>
            <a href="#" className="hover:text-white transition-colors">Polityka prywatności</a>
          </div>

          <p className="mt-8 text-sm text-stone-500 text-center">
            &copy; {new Date().getFullYear()} Oaza Spokoju - Salon Masażu. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
}
