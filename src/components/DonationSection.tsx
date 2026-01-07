
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DonationSection: React.FC = () => {
    const { t, showToast, lang } = useApp();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleDonate = () => {
        showToast(lang === 'fr' ? 'Redirection vers le portail de paiement sécurisé...' : 'Redirecting to secure payment portal...');
    };

    return (
        <section
            aria-labelledby="donation-heading"
            className="max-w-7xl mx-auto px-6 mb-24"
        >
            <div className="bg-[#064e3b] text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-emerald-900/20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48" aria-hidden="true" />
                <h2 id="donation-heading" className="text-4xl md:text-5xl font-black tracking-tighter mb-8 relative z-10">{t.impactPage.donationTitle}</h2>
                <p className="text-xl text-emerald-100 font-medium leading-relaxed mb-12 max-w-3xl mx-auto relative z-10">{t.impactPage.donationMessage}</p>

                <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-10">
                    {t.impactPage.donationOptions.map((opt, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedOption(opt)}
                            className={`px-6 py-4 rounded-full font-black text-sm transition-all border ${selectedOption === opt ? 'bg-white text-[#064e3b] border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleDonate}
                    className="bg-white text-[#064e3b] px-12 py-6 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4 mx-auto relative z-10"
                >
                    <Heart className="fill-[#064e3b]" aria-hidden="true" /> {t.impactPage.donationCTA}
                </button>
            </div>
        </section>
    );
};
