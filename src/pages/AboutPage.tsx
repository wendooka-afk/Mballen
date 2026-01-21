
import React from 'react';
import { Users2, Target, Heart, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutPage: React.FC = () => {
    const { t } = useApp();
    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-10">{t.about.title}</h1>
                </header>

                {/* Identity Section */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
                    <div className="relative">
                        <img
                            src="/Oumarou%20Sanda%20Aboubakar.jpeg"
                            className="rounded-[3rem] shadow-2xl relative z-10 w-full object-contain bg-slate-50"
                            alt="Fondateur - M. Oumarou Sanda Aboubakar"
                            loading="lazy"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-50">
                            <span className="font-black text-[#064e3b] uppercase tracking-tighter text-sm block mb-1">{t.about.founderRole || 'Fondateur'}</span>
                            <p className="text-slate-700 font-bold text-lg">M. Oumarou Sanda Aboubakar</p>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-black text-[#064e3b] flex items-center gap-3 mb-6">
                                <Users2 className="text-emerald-600" aria-hidden="true" />
                                {t.about.identityTitle}
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium whitespace-pre-line">{t.about.identityDesc}</p>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="p-10 bg-[#064e3b] rounded-[2.5rem] text-white">
                        <h2 className="text-3xl font-black flex items-center gap-3 mb-6"><Target aria-hidden="true" /> {t.about.visionTitle}</h2>
                        <p className="text-xl font-medium leading-relaxed">{t.about.visionDesc}</p>
                    </div>
                    {t.about.missionTitle && t.about.missionDesc && (
                        <div className="p-10 bg-emerald-50 rounded-[2.5rem] border border-emerald-100">
                            <h2 className="text-3xl font-black text-[#064e3b] flex items-center gap-3 mb-6"><Heart className="text-emerald-600" aria-hidden="true" /> {t.about.missionTitle}</h2>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed">{t.about.missionDesc}</p>
                        </div>
                    )}
                </section>

                {/* Values Section */}
                <section aria-labelledby="values-heading" className="bg-slate-50 rounded-[4rem] p-12 md:p-24 mb-16">
                    <h2 id="values-heading" className="text-4xl font-black text-[#064e3b] mb-12 text-center">{t.about.valuesTitle}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.about.values.map((val, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
                                <CheckCircle2 size={24} className="text-emerald-500 shrink-0 mt-1" aria-hidden="true" />
                                <span className="font-bold text-[#064e3b] text-lg">{val}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Motto Section */}
                {t.about.motto && (
                    <section className="text-center">
                        {t.about.mottoTitle && (
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-4">{t.about.mottoTitle}</h3>
                        )}
                        <p className="text-3xl md:text-4xl font-black text-[#064e3b] tracking-tight">{t.about.motto}</p>
                    </section>
                )}
            </div>
        </div>
    );
};
