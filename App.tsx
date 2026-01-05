
import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import { 
  Heart, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter,
  Youtube,
  Award, 
  HelpingHand, 
  GraduationCap, 
  Building2, 
  Leaf, 
  CheckCircle2, 
  Handshake, 
  Users2, 
  Target, 
  LifeBuoy, 
  TrendingUp, 
  Calendar,
  Sparkles,
  CreditCard,
  Smartphone,
  Banknote,
  Facebook,
  Send,
  FileText,
  Download,
  UserPlus,
  Loader2,
  AlertCircle,
  Zap
} from 'lucide-react';
import { Language } from './types';
import { translations } from './translations';

// --- Context for i18n & Global State ---
const AppContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations.fr;
  showToast: (msg: string, type?: 'success' | 'error') => void;
}>({
  lang: 'fr',
  setLang: () => {},
  t: translations.fr,
  showToast: () => {}
});

const useApp = () => useContext(AppContext);

// --- Utilities ---
const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// --- Components ---

const Toast: React.FC<{ message: string; type: 'success' | 'error'; onClose: () => void }> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed top-24 right-6 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl animate-in slide-in-from-right duration-300 ${type === 'success' ? 'bg-[#064e3b] text-white' : 'bg-red-600 text-white'}`}>
      {type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
      <p className="font-bold text-sm">{message}</p>
      <button onClick={onClose} className="ml-2 hover:opacity-70"><X size={16} /></button>
    </div>
  );
};

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#064e3b]"
      >
        <span aria-hidden="true">{languages.find(l => l.code === lang)?.flag}</span>
        <span className="uppercase">{lang}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div 
          role="listbox"
          className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={lang === l.code}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${lang === l.code ? 'text-[#064e3b] font-bold' : 'text-slate-600'}`}
            >
              <span aria-hidden="true" className="mr-2">{l.flag}</span> {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar: React.FC<{ currentPath: string; setPath: (p: string) => void }> = ({ currentPath, setPath }) => {
  const { t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: t.nav.home, path: 'home' },
    { name: t.nav.about, path: 'about' },
    { name: t.nav.actions, path: 'actions' },
    { name: t.nav.impact, path: 'impact' },
    { name: t.nav.contact, path: 'contact' },
  ];

  return (
    <nav 
      aria-label="Navigation principale"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button 
          className="flex items-center gap-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#064e3b] rounded-lg" 
          onClick={() => setPath('home')}
        >
          <div className="w-10 h-10 bg-[#064e3b] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6">
            <Heart className="text-white w-6 h-6 fill-white" aria-hidden="true" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-[#064e3b]">MBALLEN</span>
        </button>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => setPath(link.path)}
              aria-current={currentPath === link.path ? 'page' : undefined}
              className={`text-sm font-semibold tracking-wide transition-all hover:text-[#064e3b] relative py-1 focus:outline-none focus:ring-2 focus:ring-[#064e3b] rounded ${currentPath === link.path ? 'text-[#064e3b]' : 'text-slate-600'}`}
            >
              {link.name}
              {currentPath === link.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#064e3b] rounded-full" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            onClick={() => setPath('impact')}
            className="hidden sm:block bg-[#064e3b] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-900/20 hover:bg-emerald-900 transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#064e3b]"
          >
            {t.nav.cta}
          </button>
          <button 
            className="lg:hidden p-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#064e3b] rounded" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu mobile"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-white z-[100] p-8 flex flex-col animate-in slide-in-from-right duration-300"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-2xl font-black text-[#064e3b]">MBALLEN</span>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              className="p-2 focus:outline-none focus:ring-2 focus:ring-[#064e3b] rounded"
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-8">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => { setPath(link.path); setMobileMenuOpen(false); }}
                className="text-4xl font-black text-slate-900 text-left hover:text-[#064e3b] focus:text-[#064e3b]"
              >
                {link.name}
              </button>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-slate-100">
            <button 
              onClick={() => { setPath('impact'); setMobileMenuOpen(false); }}
              className="w-full bg-[#064e3b] text-white py-4 rounded-2xl font-bold text-lg"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const DonationSection: React.FC = () => {
  const { t, showToast } = useApp();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleDonate = () => {
    showToast(t.lang === 'fr' ? 'Redirection vers le portail de paiement sécurisé...' : 'Redirecting to secure payment portal...');
  };

  return (
    <section 
      aria-labelledby="donation-heading" 
      className="max-w-7xl mx-auto px-6 mb-24"
    >
      <div className="bg-[#064e3b] text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48" aria-hidden="true" />
        <h2 id="donation-heading" className="text-4xl md:text-5xl font-black tracking-tighter mb-8 relative z-10">{t.impactPage.donationTitle}</h2>
        <p className="text-xl text-emerald-100 font-medium leading-relaxed mb-12 max-w-3xl mx-auto relative z-10">{t.impactPage.donationMessage}</p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
          {t.impactPage.donationOptions.map((opt, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedOption(opt)}
              className={`px-6 py-4 rounded-full font-black text-sm transition-all border ${selectedOption === opt ? 'bg-white text-[#064e3b] border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
            >
              {opt}
            </button>
          ))}
        </div>
        
        <button 
          onClick={handleDonate}
          className="bg-white text-[#064e3b] px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto relative z-10"
        >
           <Heart className="fill-[#064e3b]" aria-hidden="true" /> {t.impactPage.donationCTA}
        </button>
      </div>
    </section>
  );
};

// --- Pages ---

const HomePage: React.FC<{ setPath: (p: string) => void }> = ({ setPath }) => {
  const { t } = useApp();
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Mballen%20hero%20.png" 
            alt="Mballen Community Support" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent lg:from-white/90 lg:via-white/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#064e3b] leading-[0.95] tracking-tighter mb-8 drop-shadow-sm">
              {t.hero.title}
            </h1>
            <p className="text-xl text-slate-900 mb-10 max-w-2xl font-semibold leading-relaxed drop-shadow-sm">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPath('impact')}
                className="bg-[#064e3b] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-900 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-emerald-900/30"
              >
                <Heart className="fill-white" size={20} aria-hidden="true" />
                {t.hero.ctaDon}
              </button>
              <button 
                onClick={() => scrollToId('mission')}
                className="bg-white/80 backdrop-blur-sm text-[#064e3b] px-10 py-5 rounded-full font-bold text-lg border border-white hover:bg-white transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                {t.hero.ctaActions}
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
               <img src="/mballen%20action.jpg" className="rounded-[3rem] shadow-2xl" alt="Mission Work" loading="lazy" />
               <div className="absolute -bottom-10 -right-10 bg-[#064e3b] p-10 rounded-[2.5rem] text-white shadow-2xl max-w-xs hidden sm:block">
                 <p className="text-lg font-medium italic">"{t.mission.approach}"</p>
               </div>
             </div>
             <div>
               <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-black uppercase tracking-widest mb-6">
                 {t.mission.badge}
               </div>
               <h2 className="text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.mission.title}</h2>
               <p className="text-xl text-slate-600 mb-10 leading-relaxed">{t.mission.desc}</p>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {t.mission.targets.map((target, idx) => (
                   <li key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                     <CheckCircle2 className="text-emerald-600 shrink-0" size={20} aria-hidden="true" />
                     <span className="font-bold text-[#064e3b] text-sm">{target}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>
      </section>

      <section id="domains" className="py-32 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-6">{t.domains.title}</h2>
            <p className="text-lg text-slate-600 font-medium">{t.domains.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.domains.items.map((item, idx) => {
              const icons = [<HelpingHand />, <Heart />, <GraduationCap />, <Zap size={32} />, <Building2 />, <Leaf />];
              return (
                <article key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                   <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8 text-[#064e3b] group-hover:scale-110 transition-transform">
                     {React.cloneElement(icons[idx] as React.ReactElement, { size: 32 })}
                   </div>
                   <h3 className="text-2xl font-black text-[#064e3b] mb-4">{item.title}</h3>
                   <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage: React.FC = () => {
  const { t } = useApp();
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#064e3b] tracking-tighter leading-none mb-10">{t.about.title}</h1>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="relative">
            <img 
              src="/mballen%20founder.jpg" 
              className="rounded-[3rem] shadow-2xl relative z-10 aspect-video object-cover" 
              alt="Founding Team" 
              loading="lazy"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-50">
               <span className="font-black text-[#064e3b] uppercase tracking-tighter text-sm block mb-1">Fondateur</span>
               <p className="text-slate-700 font-bold text-lg">M. Oumarou Sanda Aboubakar</p>
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#064e3b] flex items-center gap-3 mb-6">
                <Users2 className="text-emerald-600" aria-hidden="true" />
                {t.about.identityTitle}
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">{t.about.identityDesc}</p>
            </div>
            <div className="p-10 bg-[#064e3b] rounded-[2.5rem] text-white">
              <h2 className="text-3xl font-black flex items-center gap-3 mb-6"><Target aria-hidden="true" /> {t.about.visionTitle}</h2>
              <p className="text-xl font-medium leading-relaxed italic">{t.about.visionDesc}</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="values-heading" className="bg-slate-50 rounded-[4rem] p-12 md:p-24 text-center">
          <h2 id="values-heading" className="text-4xl font-black text-[#064e3b] mb-16">{t.about.valuesTitle}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {t.about.values.map((val, i) => (
              <div key={i} className="bg-white px-8 py-5 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-3 font-black text-[#064e3b]">
                <CheckCircle2 size={20} className="text-emerald-500" aria-hidden="true" /> {val}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const ActionsPage: React.FC = () => {
  const { t } = useApp();
  const icons = [
    <Target className="text-emerald-600" size={40} />,
    <LifeBuoy className="text-emerald-600" size={40} />,
    <TrendingUp className="text-emerald-600" size={40} />,
    <Building2 className="text-emerald-600" size={40} />,
    <Leaf className="text-emerald-600" size={40} />,
    <Handshake className="text-emerald-600" size={40} />
  ];
  
  const images = [
    "/mballen%20action.jpg",
    "/mballen%20about.jpg",
    "/mballen%20founder.jpg",
    "/mballen%20action.jpg",
    "/mballen%20about.jpg",
    "/Mballen%20hero%20.png"
  ];

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-10">{t.actionsPage.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">{t.actionsPage.intro}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {t.actionsPage.items.map((item, i) => (
            <article key={i} className="group relative bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
              <div className="h-64 overflow-hidden relative">
                <img src={images[i]} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute bottom-6 left-8 bg-white p-4 rounded-2xl shadow-xl">{icons[i]}</div>
              </div>
              <div className="p-12">
                <h2 className="text-2xl font-black text-[#064e3b] mb-6 leading-tight">{item.title}</h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImpactPage: React.FC = () => {
  const { t } = useApp();
  const newsImages = [
    "/mballen%20action.jpg",
    "/mballen%20about.jpg",
    "/Mballen%20hero%20.png"
  ];

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.impactPage.title}</h1>
          <p className="text-xl text-slate-600 font-medium leading-relaxed">{t.impactPage.subtitle}</p>
        </header>

        <section aria-label="Dernières actualités" className="mb-24">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.impactPage.news.map((item, i) => (
              <li key={i}>
                <article className="group h-full flex flex-col">
                  <div className="relative h-64 rounded-[2.5rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all">
                    <img src={newsImages[i]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" loading="lazy" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#064e3b]">
                       {item.tag}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs font-black uppercase tracking-widest mb-3">
                    <Calendar size={14} aria-hidden="true" /> 
                    <time dateTime={item.date}>{item.date}</time>
                  </div>
                  <h3 className="text-xl font-black text-[#064e3b] leading-tight group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section role="status" className="bg-emerald-50 p-10 rounded-[3rem] mb-32 flex flex-col md:flex-row items-center gap-8 border border-emerald-100">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#064e3b] shadow-sm shrink-0">
             <Sparkles size={32} aria-hidden="true" />
          </div>
          <p className="text-lg font-bold text-[#064e3b] leading-relaxed italic">
            {t.impactPage.note}
          </p>
        </section>
      </div>
    </div>
  );
};

const ContactPage: React.FC<{ setPath: (p: string) => void }> = ({ setPath }) => {
  const { t, showToast } = useApp();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast(t.lang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.contactPage.title}</h1>
          <p className="text-xl text-slate-600 font-medium italic">{t.contactPage.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Nom complet</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Sujet</label>
              <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
              <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
            </div>
            <button 
              disabled={loading}
              className="w-full bg-[#064e3b] text-white py-6 rounded-2xl font-black text-xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-3"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Send size={24} />}
              Envoyer le message
            </button>
          </form>

          <aside className="space-y-10">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-start gap-6">
               <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#064e3b] shrink-0"><MapPin /></div>
               <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-1">{t.contactPage.addressLabel}</h3>
                  <address className="not-italic text-lg font-bold text-[#064e3b]">{t.contactPage.addressValue}</address>
               </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <a href={`mailto:${t.contactPage.emailValue}`} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all block">
                  <Mail className="text-[#064e3b] mb-4" />
                  <h3 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-1">{t.contactPage.emailLabel}</h3>
                  <p className="font-bold text-[#064e3b] break-all">{t.contactPage.emailValue}</p>
               </a>
               <a href={`tel:${t.contactPage.phoneValue}`} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all block">
                  <Phone className="text-[#064e3b] mb-4" />
                  <h3 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-1">{t.contactPage.phoneLabel}</h3>
                  <p className="font-bold text-[#064e3b]">{t.contactPage.phoneValue}</p>
               </a>
            </div>
            <section className="bg-[#064e3b] rounded-[4rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[120px] opacity-20 -mr-32 -mt-32" aria-hidden="true" />
               <h3 className="text-sm font-black uppercase tracking-widest text-emerald-400 mb-4">{t.contactPage.whySubtitle}</h3>
               <h2 className="text-4xl font-black tracking-tighter mb-12">{t.contactPage.whyTitle}</h2>
               <ul className="space-y-8">
                  {t.contactPage.reasons.map((reason, i) => (
                    <li key={i} className="flex items-center gap-6 group">
                      <CheckCircle2 className="text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <p className="text-xl font-bold">{reason}</p>
                    </li>
                  ))}
               </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

// --- Press & Reports Pages ---

const PressPage: React.FC = () => {
  const { t, showToast } = useApp();
  
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.pressPage.title}</h1>
          <p className="text-xl text-slate-600 font-medium italic">{t.pressPage.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <section className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-black text-[#064e3b] flex items-center gap-4 mb-10">
              <FileText className="text-emerald-600" />
              Communiqués de Presse
            </h2>
            {t.pressPage.releases.map((release, i) => (
              <article key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center gap-6 group">
                <time className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-600 transition-colors w-32 shrink-0">{release.date}</time>
                <h3 className="text-xl font-bold text-[#064e3b] group-hover:translate-x-1 transition-transform">{release.title}</h3>
                <button className="ml-auto p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-[#064e3b] hover:text-white transition-all">
                  <Download size={20} />
                </button>
              </article>
            ))}
          </section>

          <aside className="space-y-8">
            <div className="bg-[#064e3b] text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
               <Download className="mb-6 opacity-40" size={48} />
               <h3 className="text-2xl font-black mb-4">{t.pressPage.kitTitle}</h3>
               <p className="text-emerald-100 mb-8 font-medium leading-relaxed">{t.pressPage.kitDesc}</p>
               <button 
                onClick={() => showToast(t.lang === 'fr' ? 'Démarrage du téléchargement...' : 'Starting download...')}
                className="w-full bg-white text-[#064e3b] py-4 rounded-2xl font-black hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
               >
                 <Download size={20} /> Télécharger
               </button>
            </div>
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
               <h3 className="font-black text-[#064e3b] uppercase tracking-widest text-sm mb-6">{t.pressPage.contactTitle}</h3>
               <div className="flex items-center gap-4 text-[#064e3b]">
                 <Mail className="shrink-0" />
                 <p className="font-bold">presse@mballen.cm</p>
               </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const ReportsPage: React.FC = () => {
  const { t, showToast } = useApp();
  
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.reportsPage.title}</h1>
          <p className="text-xl text-slate-600 font-medium italic">{t.reportsPage.subtitle}</p>
        </header>

        <section className="bg-slate-50 p-12 md:p-20 rounded-[4rem] border border-slate-100 mb-24 text-center">
           <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-sm mx-auto mb-10">
             <Award size={48} />
           </div>
           <h2 className="text-3xl font-black text-[#064e3b] mb-8">{t.reportsPage.transparencyTitle}</h2>
           <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-12 italic">
             "{t.reportsPage.transparencyDesc}"
           </p>
        </section>

        <h2 className="text-3xl font-black text-[#064e3b] mb-12 text-center">{t.reportsPage.annualReportsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {t.reportsPage.reports.map((report, i) => (
            <article key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
               <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#064e3b] mb-8 group-hover:scale-110 transition-transform">
                 <FileText size={32} />
               </div>
               <span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">{report.year}</span>
               <h3 className="text-2xl font-black text-[#064e3b] mb-8">{report.title}</h3>
               <button 
                 onClick={() => showToast(t.lang === 'fr' ? 'Préparation du document...' : 'Preparing document...')}
                 className="mt-auto bg-slate-50 text-[#064e3b] px-8 py-4 rounded-2xl font-black hover:bg-[#064e3b] hover:text-white transition-all flex items-center gap-3"
               >
                 <Download size={20} /> Consulter le rapport
               </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const JoinUsPage: React.FC = () => {
  const { t, showToast } = useApp();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-24 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.joinUsPage.title}</h1>
          <p className="text-xl text-slate-600 font-medium italic">{t.joinUsPage.subtitle}</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="bg-emerald-50 p-12 rounded-[3rem] border border-emerald-100">
            <UserPlus className="text-[#064e3b] mb-6" size={48} />
            <h2 className="text-3xl font-black text-[#064e3b] mb-6">{t.joinUsPage.volunteerTitle}</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">{t.joinUsPage.volunteerDesc}</p>
            <button onClick={() => setShowForm(true)} className="bg-[#064e3b] text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-900 transition-all">
              {t.joinUsPage.cta}
            </button>
          </section>
          <section className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
            <GraduationCap className="text-[#064e3b] mb-6" size={48} />
            <h2 className="text-3xl font-black text-[#064e3b] mb-6">{t.joinUsPage.internshipTitle}</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">{t.joinUsPage.internshipDesc}</p>
            <button onClick={() => setShowForm(true)} className="bg-[#064e3b] text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-900 transition-all">
              {t.joinUsPage.cta}
            </button>
          </section>
        </div>

        {showForm && (
          <div className="fixed inset-0 z-[150] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative shadow-2xl animate-in zoom-in duration-300">
               <button onClick={() => setShowForm(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={32} /></button>
               <h2 className="text-3xl font-black text-[#064e3b] mb-8">Formulaire de candidature</h2>
               <form onSubmit={(e) => { e.preventDefault(); setShowForm(false); showToast(t.lang === 'fr' ? 'Candidature reçue !' : 'Application received!'); }} className="space-y-6">
                  <input required placeholder="Nom complet" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl" />
                  <input required type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl" />
                  <textarea required placeholder="Pourquoi souhaitez-vous nous rejoindre ?" rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl" />
                  <button className="w-full bg-[#064e3b] text-white py-5 rounded-2xl font-black text-lg">Envoyer ma candidature</button>
               </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const LegalPage: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
  return (
    <div className="pt-32 pb-20 animate-in fade-in duration-1000">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-black text-[#064e3b] mb-12">{type === 'privacy' ? 'Politique de Confidentialité' : 'Conditions Générales'}</h1>
        <div className="prose prose-emerald max-w-none text-slate-600 space-y-8 font-medium">
          <p>Dernière mise à jour : 24 Mai 2024</p>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">1. Collecte des données</h2>
            <p>L'ONG MBALLEN s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site mballen.cm, soient conformes au règlement général sur la protection des données (RGPD) et à la Loi Informatique et Libertés.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">2. Utilisation des formulaires</h2>
            <p>Les informations recueillies via nos formulaires sont enregistrées dans un fichier informatisé par l'ONG MBALLEN pour la gestion des dons, des bénévolats et de l'information via newsletter.</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-800">3. Sécurité</h2>
            <p>Toutes les transactions financières effectuées sur notre site sont sécurisées via des protocoles de chiffrement standard de l'industrie (SSL/TLS).</p>
          </section>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC<{ setPath: (p: string) => void }> = ({ setPath }) => {
  const { t, showToast } = useApp();
  
  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(t.lang === 'fr' ? 'Merci pour votre inscription !' : 'Thank you for subscribing!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-[#064e3b] rounded-xl flex items-center justify-center">
                <Heart className="text-white fill-white" size={20} aria-hidden="true" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-[#064e3b]">MBALLEN</span>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">Restaurer la dignité pour un avenir plein d'espoir. Ensemble, cultivons la solidarité.</p>
            <div className="flex gap-4 mt-8">
              {[<Facebook size={20}/>, <Twitter size={20}/>, <Instagram size={20}/>, <Linkedin size={20}/>].map((icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-[#064e3b] hover:text-white transition-all">
                  {icon}
                </button>
              ))}
            </div>
          </div>
          <nav aria-label="Liens secondaires">
             <h4 className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-8">Navigation</h4>
             <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li><button onClick={() => setPath('join-us')} className="hover:text-[#064e3b] focus:underline">{t.footer.links.join}</button></li>
                <li><button onClick={() => setPath('press')} className="hover:text-[#064e3b] focus:underline">{t.footer.links.press}</button></li>
                <li><button onClick={() => setPath('reports')} className="hover:text-[#064e3b] focus:underline">{t.footer.links.reports}</button></li>
                <li><button onClick={() => setPath('privacy')} className="hover:text-[#064e3b] focus:underline">Confidentialité</button></li>
             </ul>
          </nav>
          <section aria-labelledby="footer-contact">
             <h4 id="footer-contact" className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-8">Contact</h4>
             <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li>Yaoundé, Cameroun</li>
                <li><a href="mailto:contact@mballen.cm" className="hover:underline">contact@mballen.cm</a></li>
             </ul>
          </section>
          <section aria-labelledby="footer-newsletter">
            <h4 id="footer-newsletter" className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-8">{t.footer.newsletter}</h4>
            <form className="relative" onSubmit={handleNewsletter}>
              <label htmlFor="newsletter-email" className="sr-only">Votre adresse e-mail</label>
              <input 
                id="newsletter-email"
                type="email" 
                required
                placeholder="Votre email" 
                className="w-full bg-slate-50 border border-slate-200 py-4 px-6 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#064e3b]" 
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 bottom-2 bg-[#064e3b] text-white px-4 rounded-xl text-xs font-bold"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </section>
        </div>
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest border-t border-slate-50 pt-12">{t.footer.rights}</p>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [path, setPath] = useState('home');
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [path]);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
  };

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, t, showToast }}>
      <div className="min-h-screen bg-white font-['Inter'] selection:bg-emerald-100 selection:text-[#064e3b]">
        {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
        
        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-slate-100">
           <div className="h-full bg-[#064e3b] transition-all duration-300" style={{ width: '0%' }} id="scroll-bar" />
        </div>
        <script dangerouslySetInnerHTML={{ __html: `
          window.onscroll = function() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-bar").style.width = scrolled + "%";
          };
        `}} />

        <Navbar currentPath={path} setPath={setPath} />
        <main id="main-content">
          {path === 'home' && <HomePage setPath={setPath} />}
          {path === 'about' && <AboutPage />}
          {path === 'actions' && <ActionsPage />}
          {path === 'impact' && <ImpactPage />}
          {path === 'contact' && <ContactPage setPath={setPath} />}
          {path === 'join-us' && <JoinUsPage />}
          {path === 'press' && <PressPage />}
          {path === 'reports' && <ReportsPage />}
          {path === 'privacy' && <LegalPage type="privacy" />}
          {path === 'terms' && <LegalPage type="terms" />}
        </main>
        
        {/* Global Donation CTA added to all pages */}
        <DonationSection />
        
        <Footer setPath={setPath} />
        <div className="fixed bottom-8 right-8 z-[40]">
          <button 
            onClick={() => setPath('impact')}
            aria-label="Faire un don"
            className="flex items-center gap-3 bg-[#064e3b] text-white p-4 pr-6 rounded-full shadow-2xl shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all group overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#064e3b]"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <Heart size={20} className="fill-white" aria-hidden="true" />
            </div>
            <span className="font-bold tracking-tight">{t.nav.cta}</span>
          </button>
        </div>
      </div>
    </AppContext.Provider>
  );
}
