
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const DonationSection: React.FC = () => {
    const { t } = useApp();

    // Check if callToAction exists in translations
    if (!t.callToAction) return null;

    return (
        <section
            aria-labelledby="cta-heading"
            className="max-w-7xl mx-auto px-6 mb-24"
        >
            <div className="bg-gradient-to-br from-[#064e3b] to-emerald-900 text-white rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-emerald-900/30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-[150px] opacity-20 -mr-48 -mt-48" aria-hidden="true" />

                <div className="text-center mb-16 relative z-10">
                    <h2 id="cta-heading" className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-6">
                        {t.callToAction.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-medium max-w-4xl mx-auto opacity-90">
                        {t.callToAction.heading}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {t.callToAction.options.map((option, idx) => (
                        <div
                            key={idx}
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-all group"
                        >
                            <div className="text-5xl mb-6">{option.icon}</div>
                            <h3 className="text-2xl font-black mb-4">{option.title}</h3>
                            <p className="text-white/90 mb-8 leading-relaxed font-medium">
                                {option.desc}
                            </p>
                            <a
                                href={option.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-[#064e3b] px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-lg group-hover:shadow-xl"
                            >
                                {option.cta}
                                <ArrowRight size={18} aria-hidden="true" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
