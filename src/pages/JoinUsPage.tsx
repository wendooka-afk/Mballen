
import React, { useState } from 'react';
import { UserPlus, GraduationCap, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const JoinUsPage: React.FC = () => {
    const { t, showToast, lang } = useApp();
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.joinUsPage.title}</h1>
                    <p className="text-xl text-slate-600 font-medium italic">{t.joinUsPage.subtitle}</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <section className="bg-emerald-50 p-12 rounded-[3rem] border border-emerald-100">
                        <UserPlus className="text-[#064e3b] mb-6" size={48} />
                        <h2 className="text-3xl font-black text-[#064e3b] mb-6">{t.joinUsPage.volunteerTitle}</h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">{t.joinUsPage.volunteerDesc}</p>
                        <button onClick={() => setShowForm(true)} className="bg-[#064e3b] text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-900 transition-all">
                            {t.joinUsPage.cta}
                        </button>
                    </section>
                    <section className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                        <GraduationCap className="text-[#064e3b] mb-6" size={48} />
                        <h2 className="text-3xl font-black text-[#064e3b] mb-6">{t.joinUsPage.internshipTitle}</h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">{t.joinUsPage.internshipDesc}</p>
                        <button onClick={() => setShowForm(true)} className="bg-[#064e3b] text-white px-8 py-4 rounded-2xl font-black hover:bg-emerald-900 transition-all">
                            {t.joinUsPage.cta}
                        </button>
                    </section>
                </div>

                {showForm && (
                    <div className="fixed inset-0 z-[150] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-6">
                        <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative shadow-2xl animate-in zoom-in duration-300">
                            <button onClick={() => setShowForm(false)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900"><X size={32} /></button>
                            <h2 className="text-3xl font-black text-[#064e3b] mb-8">Formulaire de candidature</h2>
                            <form onSubmit={(e) => { e.preventDefault(); setShowForm(false); showToast(lang === 'fr' ? 'Candidature reçue !' : 'Application received!'); }} className="space-y-6">
                                <input required placeholder="Nom complet" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl" />
                                <input required type="email" placeholder="Email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl" />
                                <textarea required placeholder="Pourquoi souhaitez-vous nous rejoindre ?" rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl" />
                                <button className="w-full bg-[#064e3b] text-white py-5 rounded-2xl font-black text-lg">Envoyer ma candidature</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
