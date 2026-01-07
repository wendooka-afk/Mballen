
import React from 'react';
import { HelpingHand, Heart, Zap, Leaf, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

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
                    <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-10">{t.actionsPage.title}</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">{t.actionsPage.intro}</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
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
            </div>
        </div>
    );
};
