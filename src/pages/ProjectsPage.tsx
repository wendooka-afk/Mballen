
import React from 'react';
import { Heart, TrendingUp, Building2, Leaf, CheckCircle2, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const ProjectsPage: React.FC = () => {
    const { t } = useApp();

    if (!t.projectsPage) return null;

    const icons = [
        <Heart className="text-emerald-600" size={32} key="1" />,
        <TrendingUp className="text-emerald-600" size={32} key="2" />,
        <Building2 className="text-emerald-600" size={32} key="3" />,
        <Leaf className="text-emerald-600" size={32} key="4" />
    ];

    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-20 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-10">{t.projectsPage.title}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">{t.projectsPage.intro}</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {t.projectsPage.categories.map((category, i) => (
                        <article key={i} className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-8">
                                {icons[i] || icons[0]}
                            </div>
                            <h2 className="text-2xl font-black text-[#064e3b] mb-6">{category.title}</h2>
                            <ul className="space-y-3">
                                {category.items.map((item, j) => (
                                    <li key={j} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={18} />
                                        <span className="text-slate-600 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-xl text-[#064e3b] font-bold mb-8">{t.projectsPage.cta}</p>
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
