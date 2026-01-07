
import React, { useState } from 'react';
import { Loader2, Send, MapPin, Mail, Phone } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactPage: React.FC = () => {
    const { t, showToast, lang } = useApp();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            showToast(lang === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-7xl mx-auto px-6">
                <header className="text-center mb-24 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-[#064e3b] tracking-tighter leading-none mb-8">{t.contactPage.title}</h1>
                    <p className="text-xl text-slate-600 font-medium italic whitespace-pre-line">{t.contactPage.subtitle}</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Nom complet</label>
                                <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email</label>
                                <input required type="email" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-500">Sujet</label>
                            <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-500">Message</label>
                            <textarea required rows={5} className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-[#064e3b]" />
                        </div>
                        <button
                            disabled={loading}
                            className="w-full bg-[#064e3b] text-white py-6 rounded-2xl font-black text-xl hover:bg-emerald-900 transition-all flex items-center justify-center gap-3"
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <Send size={24} />}
                            Envoyer le message
                        </button>
                    </form>

                    <aside className="space-y-8">
                        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-start gap-6">
                            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#064e3b] shrink-0"><MapPin /></div>
                            <div>
                                <h3 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-1">{t.contactPage.addressLabel}</h3>
                                <address className="not-italic text-lg font-bold text-[#064e3b]">{t.contactPage.addressValue}</address>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <a href={`mailto:${t.contactPage.emailValue}`} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all block">
                                <Mail className="text-[#064e3b] mb-4" />
                                <h3 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-1">{t.contactPage.emailLabel}</h3>
                                <p className="font-bold text-[#064e3b] break-all">{t.contactPage.emailValue}</p>
                            </a>
                            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all block">
                                <Phone className="text-[#064e3b] mb-4" />
                                <h3 className="font-black text-xs uppercase tracking-widest text-slate-500 mb-1">{t.contactPage.phoneLabel}</h3>
                                <div className="flex flex-col gap-1">
                                    {t.contactPage.phoneValues.map((phone, i) => (
                                        <a key={i} href={`tel:${phone}`} className="font-bold text-[#064e3b] hover:underline block">{phone}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {t.contactPage.tagline && (
                            <div className="text-center pt-8">
                                <p className="text-2xl font-black text-[#064e3b] italic">"{t.contactPage.tagline}"</p>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </div>
    );
};
