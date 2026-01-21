
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
    const { t, showToast, lang } = useApp();

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        showToast(lang === 'fr' ? 'Merci pour votre inscription !' : 'Thank you for subscribing!');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <footer className="bg-white border-t border-slate-100 pt-32 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            <img src="/Logo%20Mballen.png" alt="MBALLEN Logo" className="h-14 w-auto object-contain" />
                        </div>
                        <p className="text-slate-500 font-medium leading-relaxed">{t.footer.description}</p>
                        <div className="flex gap-4 mt-8">
                            {[<Facebook size={20} key="fb" />, <Twitter size={20} key="tw" />, <Instagram size={20} key="ig" />, <Linkedin size={20} key="li" />].map((icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-[#064e3b] hover:text-white transition-all">
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>
                    <nav aria-label="Liens secondaires">
                        <h4 className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-8">{t.footer.navigation}</h4>
                        <ul className="space-y-4 text-slate-500 font-bold text-sm">
                            <li><a href="https://wzkyncjg.mychariow.shop/" target="_blank" rel="noopener noreferrer" className="text-[#064e3b] font-black hover:underline">Faire un don</a></li>
                            <li><Link to="/join-us" className="hover:text-[#064e3b] focus:underline">{t.footer.links.join}</Link></li>
                            <li><Link to="/press" className="hover:text-[#064e3b] focus:underline">{t.footer.links.press}</Link></li>
                            <li><Link to="/reports" className="hover:text-[#064e3b] focus:underline">{t.footer.links.reports}</Link></li>
                            <li><Link to="/privacy" className="hover:text-[#064e3b] focus:underline">{t.footer.privacy}</Link></li>
                        </ul>
                    </nav>
                    <section aria-labelledby="footer-contact">
                        <h4 id="footer-contact" className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-8">{t.footer.contact}</h4>
                        <ul className="space-y-4 text-slate-500 font-bold text-sm">
                            <li>{t.footer.address}</li>
                            <li><a href="mailto:contact@mballen.org" className="hover:underline">contact@mballen.org</a></li>
                        </ul>
                    </section>
                    <section aria-labelledby="footer-newsletter">
                        <h4 id="footer-newsletter" className="font-black text-[#064e3b] text-sm uppercase tracking-widest mb-8">{t.footer.newsletter}</h4>
                        <form className="relative" onSubmit={handleNewsletter}>
                            <label htmlFor="newsletter-email" className="sr-only">{t.footer.emailLabel}</label>
                            <input
                                id="newsletter-email"
                                type="email"
                                required
                                placeholder={t.footer.emailPlaceholder}
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
                <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest border-t border-slate-50 pt-12">
                    {t.footer.rights}
                    <br />
                    <span style={{ fontFamily: "'Inter', sans-serif", textTransform: 'none', marginTop: '10px', display: 'inline-block' }}>
                        Conçu avec <span style={{ color: 'red' }}>&#10084;</span> par <a href="https://wendooka.com" target="_blank" rel="noopener noreferrer" style={{ color: '#064e3b', textDecoration: 'none' }}>wendooka</a>
                    </span>
                </p>
            </div>
        </footer>
    );
};
