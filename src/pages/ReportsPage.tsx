
import React from 'react';
import { Award, FileText, Download } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ReportsPage: React.FC = () => {
    const { t, showToast, lang } = useApp();

    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.reportsPage.title}</h1>
                    <p className="text-xl text-slate-600 font-medium italic">{t.reportsPage.subtitle}</p>
                </header>

                <section className="bg-slate-50 p-12 md:p-20 rounded-[4rem] border border-slate-100 mb-24 text-center">
                    <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-emerald-600 shadow-sm mx-auto mb-10">
                        <Award size={48} />
                    </div>
                    <h2 className="text-3xl font-black text-[#064e3b] mb-8">{t.reportsPage.transparencyTitle}</h2>
                    <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-12 italic">
                        "{t.reportsPage.transparencyDesc}"
                    </p>
                </section>

                <h2 className="text-3xl font-black text-[#064e3b] mb-12 text-center">{t.reportsPage.annualReportsTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {t.reportsPage.reports.map((report, i) => (
                        <article key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#064e3b] mb-8 group-hover:scale-110 transition-transform">
                                <FileText size={32} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">{report.year}</span>
                            <h3 className="text-2xl font-black text-[#064e3b] mb-8">{report.title}</h3>
                            <button
                                onClick={() => showToast(lang === 'fr' ? 'Préparation du document...' : 'Preparing document...')}
                                className="mt-auto bg-slate-50 text-[#064e3b] px-8 py-4 rounded-2xl font-black hover:bg-[#064e3b] hover:text-white transition-all flex items-center gap-3"
                            >
                                <Download size={20} /> Consulter le rapport
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
