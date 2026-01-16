
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Calendar, ChevronLeft } from 'lucide-react';
import { Gallery } from '../components/Gallery';

export const ActivityDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t } = useApp();

    const activity = t.actionsPage.activities?.find(a => a.slug === slug);

    if (!activity) {
        return <Navigate to="/actions" replace />;
    }

    return (
        <div className="pt-32 pb-20 animate-in fade-in duration-1000">
            <div className="max-w-4xl mx-auto px-6">
                <Link
                    to="/actions"
                    className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-sm mb-12 hover:translate-x-[-4px] transition-transform"
                >
                    <ChevronLeft size={20} />
                    <span>Retour aux actions</span>
                </Link>

                <h1 className="text-3xl md:text-5xl font-black text-[#064e3b] mb-12 tracking-tighter leading-none text-center">
                    {activity.title}
                </h1>

                <div className="mb-16 rounded-[3rem] overflow-hidden shadow-2xl">
                    <img
                        src={activity.images[0]}
                        alt={activity.title}
                        className="w-full aspect-video object-cover"
                    />
                </div>

                <div className="space-y-8 mb-16">
                    {activity.content.map((p, i) => (
                        <p key={i} className="text-xl text-slate-600 leading-relaxed font-medium">
                            {p}
                        </p>
                    ))}
                </div>

                {activity.tagline && (
                    <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 mb-20">
                        <p className="text-2xl font-black text-[#064e3b] leading-tight text-center">
                            {activity.tagline}
                        </p>
                    </div>
                )}

                <div className="space-y-8">
                    <h2 className="text-2xl font-black text-[#064e3b] uppercase tracking-tighter">Galerie de l'activité</h2>
                    <Gallery images={activity.images} />
                </div>
            </div>
        </div>
    );
};
