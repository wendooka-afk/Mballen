
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HomePage: React.FC = () => {
    const { t } = useApp();
    return (
        <div className="animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/Mballen%20hero%20.png"
                        alt="Mballen Community Support"
                        className="w-full h-full object-cover scale-105 animate-pulse-slow object-[center_25%]"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent lg:from-white/90 lg:via-white/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-4xl">
                        {t.hero.badge && (
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#064e3b] text-white text-xs font-black uppercase tracking-widest mb-6">
                                {t.hero.badge}
                            </div>
                        )}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#064e3b] leading-[0.95] tracking-tighter mb-8 drop-shadow-sm">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl text-slate-900 mb-6 max-w-2xl font-semibold leading-relaxed drop-shadow-sm">
                            {t.hero.subtitle}
                        </p>
                        {t.hero.tagline && (
                            <p className="text-lg text-[#064e3b] font-bold mb-10">
                                {t.hero.tagline}
                            </p>
                        )}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                            <a
                                href="https://wzkyncjg.mychariow.shop/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#064e3b] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-emerald-900 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-emerald-900/30"
                            >
                                {t.hero.ctaDon}
                            </a>
                            {t.hero.ctaPartner && (
                                <Link
                                    to="/contact"
                                    className="bg-white/90 backdrop-blur-sm text-[#064e3b] px-8 py-4 rounded-full font-bold text-base border-2 border-[#064e3b] hover:bg-[#064e3b] hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg"
                                >
                                    {t.hero.ctaPartner}
                                </Link>
                            )}
                            {t.hero.ctaContact && (
                                <Link
                                    to="/contact"
                                    className="bg-white/80 backdrop-blur-sm text-[#064e3b] px-8 py-4 rounded-full font-bold text-base border border-slate-200 hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg"
                                >
                                    {t.hero.ctaContact}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
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

            {/* Domains Section */}
            <section id="domains" className="py-32 bg-slate-50 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-6">{t.domains.title}</h2>
                        {t.domains.subtitle && <p className="text-lg text-slate-600 font-medium">{t.domains.subtitle}</p>}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {t.domains.items.map((item, idx) => (
                            <article key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
                                <h3 className="text-xl font-black text-[#064e3b] mb-4">{item.title}</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </article>
                        ))}
                    </div>
                    {t.domains.cta && (
                        <div className="text-center">
                            <Link
                                to="/actions"
                                className="bg-[#064e3b] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-900 transition-all inline-flex items-center gap-3 shadow-xl"
                            >
                                {t.domains.cta}
                                <ArrowRight size={20} aria-hidden="true" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Field Actions Section */}
            {t.fieldActions && (
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-16 text-center">{t.fieldActions.title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {t.fieldActions.items.map((action, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                    <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={24} aria-hidden="true" />
                                    <span className="font-bold text-[#064e3b] text-lg">{action}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-xl text-slate-600 font-medium italic">{t.fieldActions.conclusion}</p>
                    </div>
                </section>
            )}


        </div>
    );
};
