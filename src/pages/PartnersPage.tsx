
import React from 'react';
import { Target, CheckCircle2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const PartnersPage: React.FC = () => {
    const { t } = useApp();

    if (!t.partnersPage) return null;

    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-10">{t.partnersPage.title}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">{t.partnersPage.intro}</p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100">
                            <h2 className="text-3xl font-black text-[#064e3b] flex items-center gap-3 mb-8"><Target className="text-emerald-600" /> {t.partnersPage.whyTitle}</h2>
                            <ul className="space-y-4">
                                {t.partnersPage.whyItems.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                                        <span className="text-lg font-bold text-[#064e3b]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img src="/mballen%20action.jpg" alt="Partenariat" className="rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700" loading="lazy" />
                    </div>
                </section>

                <section className="bg-[#064e3b] rounded-[3rem] p-12 md:p-20 text-white text-center mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48 pointer-events-none" />
                    <h2 className="text-4xl font-black mb-16 relative z-10">{t.partnersPage.potentialTitle}</h2>
                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        {t.partnersPage.potentialItems.map((item, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 font-bold text-lg hover:bg-white hover:text-[#064e3b] transition-all cursor-default">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <div className="text-center">
                    <p className="text-xl text-[#064e3b] font-bold mb-8">{t.partnersPage.cta}</p>
                    <Link
                        to="/contact"
                        className="bg-[#064e3b] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-emerald-900 transition-all inline-flex items-center gap-3 shadow-xl"
                    >
                        <Handshake size={20} />
                        Nous contacter
                    </Link>
                </div>
            </div>
        </div>
    );
};
