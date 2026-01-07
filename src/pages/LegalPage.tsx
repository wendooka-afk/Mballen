
import React from 'react';

export const LegalPage: React.FC<{ type: 'privacy' | 'terms' }> = ({ type }) => {
    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black text-[#064e3b] mb-12">{type === 'privacy' ? 'Politique de Confidentialité' : 'Conditions Générales'}</h1>
                <div className="prose prose-emerald max-w-none text-slate-600 space-y-8 font-medium">
                    <p>Dernière mise à jour : 24 Mai 2024</p>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-800">1. Collecte des données</h2>
                        <p>L'ONG MBALLEN s'engage à ce que la collecte et le traitement de vos données, effectués à partir du site mballen.cm, soient conformes au règlement général sur la protection des données (RGPD) et à la Loi Informatique et Libertés.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-800">2. Utilisation des formulaires</h2>
                        <p>Les informations recueillies via nos formulaires sont enregistrées dans un fichier informatisé par l'ONG MBALLEN pour la gestion des dons, des bénévolats et de l'information via newsletter.</p>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-slate-800">3. Sécurité</h2>
                        <p>Toutes les transactions financières effectuées sur notre site sont sécurisées via des protocoles de chiffrement standard de l'industrie (SSL/TLS).</p>
                    </section>
                </div>
            </div>
        </div>
    );
};
