
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Language } from '../types';

export const LanguageSwitcher: React.FC = () => {
    const { lang, setLang } = useApp();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
        { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    ];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="listbox"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#064e3b]"
            >
                <span aria-hidden="true">{languages.find(l => l.code === lang)?.flag}</span>
                <span className="uppercase">{lang}</span>
                <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''} rtl:mr-1`} />
            </button>
            {isOpen && (
                <div
                    role="listbox"
                    className="absolute top-full right-0 mt-2 w-32 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200 rtl:left-0 rtl:right-auto"
                >
                    {languages.map((l) => (
                        <button
                            key={l.code}
                            role="option"
                            aria-selected={lang === l.code}
                            onClick={() => {
                                setLang(l.code);
                                setIsOpen(false);
                            }}
                            className={`w-full text-start px-4 py-2 text-sm hover:bg-slate-50 transition-colors ${lang === l.code ? 'text-[#064e3b] font-bold' : 'text-slate-600'}`}
                        >
                            <span aria-hidden="true" className="mr-2 rtl:ml-2 rtl:mr-0">{l.flag}</span> {l.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
