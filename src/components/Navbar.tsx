
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
    const { t, lang } = useApp();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
    }, [lang]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.actions, path: '/actions' },
        { name: t.nav.projects || 'Nos projets', path: '/projects' },
        { name: t.nav.partners || 'Partenariats', path: '/partners' },
        { name: t.nav.impact, path: '/impact' },
        { name: t.nav.contact, path: '/contact' },
    ];

    const currentPath = location.pathname;

    return (
        <nav
            aria-label="Navigation principale"
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-white/30 backdrop-blur-[2px] py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link
                    className="flex items-center gap-2 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#064e3b] rounded-lg"
                    to="/"
                >
                    <img src="/Logo%20Mballen.png" alt="MBALLEN Logo" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
                </Link>

                <div className="hidden lg:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            aria-current={currentPath === link.path ? 'page' : undefined}
                            className={`text-sm font-semibold tracking-wide transition-all hover:text-[#064e3b] relative py-1 focus:outline-none focus:ring-2 focus:ring-[#064e3b] rounded ${currentPath === link.path ? 'text-[#064e3b]' : 'text-slate-600'}`}
                        >
                            {link.name}
                            {currentPath === link.path && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#064e3b] rounded-full" aria-hidden="true" />
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <Link
                        to="/impact"
                        className="hidden sm:block bg-[#064e3b] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-900/20 hover:bg-emerald-900 transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#064e3b]"
                    >
                        {t.nav.cta}
                    </Link>
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
                        <img src="/Logo%20Mballen.png" alt="MBALLEN" className="h-10 w-auto object-contain" />
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
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-4xl font-black text-slate-900 text-left hover:text-[#064e3b] focus:text-[#064e3b]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto pt-10 border-t border-slate-100">
                        <Link
                            onClick={() => setMobileMenuOpen(false)}
                            to="/impact"
                            className="block w-full text-center bg-[#064e3b] text-white py-4 rounded-2xl font-bold text-lg"
                        >
                            {t.nav.cta}
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
