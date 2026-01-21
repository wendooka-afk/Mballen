import React from 'react';
import { HelpingHand, Heart, Zap, Leaf, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

export const ActionsPage: React.FC = () => {
    const { t } = useApp();
    const icons = [
        <HelpingHand className="text-emerald-600" size={40} key="1" />,
        <Heart className="text-emerald-600" size={40} key="2" />,
        <Zap className="text-emerald-600" size={40} key="3" />,
        <Leaf className="text-emerald-600" size={40} key="4" />
    ];

    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-20 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-10 text-balance">{t.actionsPage.title}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">{t.actionsPage.intro}</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    {t.actionsPage.items.map((item, i) => (
                        <article key={i} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                                {icons[i] || icons[0]}
                            </div>
                            <h2 className="text-2xl font-black text-[#064e3b] mb-4 leading-tight">{item.title}</h2>
                            {item.desc && <p className="text-lg text-slate-500 font-medium mb-6">{item.desc}</p>}
                            {item.subItems && item.subItems.length > 0 && (
                                <ul className="space-y-3">
                                    {item.subItems.map((subItem, j) => (
                                        <li key={j} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                                            <span className="text-slate-600 font-medium">{subItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>

                {/* News & Activities Section */}
                {t.actionsPage.activities && t.actionsPage.activities.length > 0 && (
                    <section className="mt-20">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black text-[#064e3b] tracking-tighter">Actualités & Activités</h2>
                                <p className="text-xl text-slate-500 font-medium mt-4 max-w-2xl">Découvrez nos interventions récentes sur le terrain et l'impact de nos actions.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {t.actionsPage.activities.map((activity, i) => (
                                <Link
                                    to={`/activities/${activity.slug}`}
                                    key={activity.slug}
                                    className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative h-80 overflow-hidden">
                                        <img
                                            src={activity.images[0]}
                                            alt={activity.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest text-emerald-900 shadow-sm">
                                            {activity.date}
                                        </div>
                                    </div>
                                    <div className="p-10 flex flex-col flex-grow">
                                        <h3 className="text-2xl md:text-3xl font-black text-[#064e3b] leading-[1.1] mb-6 group-hover:text-emerald-600 transition-colors">
                                            {activity.title}
                                        </h3>
                                        <p className="text-slate-500 font-medium line-clamp-3 mb-8 text-lg">
                                            {activity.content[0]}
                                        </p>
                                        <div className="mt-auto flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-sm">
                                            <span>Lire la suite</span>
                                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
