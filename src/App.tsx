
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DonationSection } from './components/DonationSection';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ActionsPage } from './pages/ActionsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ImpactPage } from './pages/ImpactPage';
import { ContactPage } from './pages/ContactPage';
import { JoinUsPage } from './pages/JoinUsPage';
import { PressPage } from './pages/PressPage';
import { ReportsPage } from './pages/ReportsPage';
import { LegalPage } from './pages/LegalPage';
import { ActivityDetailPage } from './pages/ActivityDetailPage';

export default function App() {
    const { t } = useApp();

    return (
        <div className="min-h-screen bg-white font-['Inter'] selection:bg-emerald-100 selection:text-[#064e3b]">
            <ScrollToTop />
            <Navbar />

            <main id="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/actions" element={<ActionsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/partners" element={<PartnersPage />} />
                    <Route path="/impact" element={<ImpactPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/join-us" element={<JoinUsPage />} />
                    <Route path="/press" element={<PressPage />} />
                    <Route path="/reports" element={<ReportsPage />} />
                    <Route path="/privacy" element={<LegalPage type="privacy" />} />
                    <Route path="/terms" element={<LegalPage type="terms" />} />
                    <Route path="/activities/:slug" element={<ActivityDetailPage />} />
                </Routes>
            </main>

            <DonationSection />
            <Footer />

            {/* Fixed Donation CTA */}
            <div className="fixed bottom-8 right-8 z-[40]">
                <Link
                    to="/impact"
                    aria-label="Faire un don"
                    className="flex items-center gap-3 bg-[#064e3b] text-white p-4 pr-6 rounded-full shadow-2xl shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all group overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#064e3b]"
                >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Heart size={20} className="fill-white" aria-hidden="true" />
                    </div>
                    <span className="font-bold tracking-tight">{t.nav.cta}</span>
                </Link>
            </div>
        </div>
    );
}
