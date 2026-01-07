
import React from 'react';
import { FileText, Download, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PressPage: React.FC = () => {
    const { t, showToast, lang } = useApp();

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
                                onClick={() => showToast(lang === 'fr' ? 'Démarrage du téléchargement...' : 'Starting download...')}
                                className="w-full bg-white text-[#064e3b] py-4 rounded-2xl font-black hover:bg-emerald-50 transition-all flex items-center justify-center gap-3"
                            >
                                <Download size={20} /> Télécharger
                            </button>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                            <h3 className="font-black text-[#064e3b] uppercase tracking-widest text-sm mb-6">{t.pressPage.contactTitle}</h3>
                            <div className="flex items-center gap-4 text-[#064e3b]">
                                <Mail className="shrink-0" />
                                <p className="font-bold">contact@mballen.org</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};
