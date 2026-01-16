
import React from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ImpactPage: React.FC = () => {
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
                    <h1 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.impactPage.title}</h1>
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
