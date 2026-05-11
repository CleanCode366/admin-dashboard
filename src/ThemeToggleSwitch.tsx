import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/shared/theme/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import type { ThemeName } from './shared/theme';

function ThemeToggleSwitch() {
    const { themeName, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (theme: string) => {
        if (theme === 'digital' || theme === 'monochrome') return; // placeholder
        setTheme(theme as ThemeName);
        setOpen(false);
    };

    return (
        <div className="relative inline-block absolute top-4 left-4" ref={ref}>
            {/* Toggle Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-md 
                   bg-bg-secondary border border-border-secondary 
                   text-text-secondary hover:bg-bg-tertiary 
                   transition"
            >
                {themeName === 'dark' ?
                    <MoonIcon className="size-6" />
                    :
                    <SunIcon className="size-6" />
                }
            </button>

            {/* Dropdown */}
            {open && (
                <div
                    className="absolute right-0 mt-2 w-44 rounded-lg 
                     bg-bg-secondary border border-border-primary 
                     shadow-md p-1 space-y-1 z-50"
                >
                    {/* Light */}
                    <button
                        onClick={() => handleSelect('light')}
                        className="cursor-pointer w-full text-left px-3 py-2 rounded-md text-sm 
                       text-text-primary hover:bg-bg-tertiary transition"
                    >
                        Light
                    </button>

                    {/* Dark */}
                    <button
                        onClick={() => handleSelect('dark')}
                        className="cursor-pointer w-full text-left px-3 py-2 rounded-md text-sm 
                       text-text-primary hover:bg-bg-tertiary transition"
                    >
                        Dark
                    </button>

                    {/* Divider */}
                    <div className="h-px bg-border-tertiary my-1" />

                    {/* Digital (disabled) */}
                    <button
                        disabled
                        className="cursor-pointer w-full text-left px-3 py-2 rounded-md text-sm 
                       text-text-tertiary cursor-not-allowed"
                    >
                        Digital (coming soon)
                    </button>

                    {/* Monochrome (disabled) */}
                    <button
                        disabled
                        className="cursor-pointer w-full text-left px-3 py-2 rounded-md text-sm 
                       text-text-tertiary cursor-not-allowed"
                    >
                        Monochrome (coming soon)
                    </button>
                </div>
            )}
        </div>
    );
}

export default ThemeToggleSwitch;