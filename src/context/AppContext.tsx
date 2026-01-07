
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { Toast } from '../components/Toast';

const AppContext = createContext<{
    lang: Language;
    setLang: (l: Language) => void;
    t: typeof translations.fr;
    showToast: (msg: string, type?: 'success' | 'error') => void;
}>({
    lang: 'fr',
    setLang: () => { },
    t: translations.fr,
    showToast: () => { }
});

export const useApp = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Language>('fr');
    const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);

    const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
        setToast({ msg, type });
    };

    const t = translations[lang];

    return (
        <AppContext.Provider value={{ lang, setLang, t, showToast }}>
            {toast && <Toast message={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
            {children}
        </AppContext.Provider>
    );
};
