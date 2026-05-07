// import React from 'react';
import { useTheme } from '@/shared/theme/useTheme';
import { type ThemeName } from '@/shared/theme/types';
import { themeRegistry } from './shared/theme';

function TestCard() {
    const { setTheme, themeName } = useTheme();
    // const availableThemes1: ThemeName[] = ['light', 'dark'];
    const { availableThemes } = useTheme();
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary space-y-4 p-4">
            <div className="flex gap-2">
                {availableThemes.map((theme) => {
                    const t = themeRegistry[theme];
                    return (
                        <button
                            key={theme}
                            onClick={() => setTheme(theme)}
                            className="border px-3 py-1 rounded-md"
                            disabled={!t.isProductionReady}
                        >
                            {theme}
                        </button>
                    )
                })}
            </div>

            <div className="bg-bg-primary text-text-primary border-border border-border-secondary rounded-md shadow-md p-4">
                Current theme: {themeName}
            </div>

            <div className="bg-bg-primary text-text-primary border-border border-border-secondary rounded-md shadow-md p-4">
                Test Theme
            </div>

            <div className="bg-bg-primary text-text-primary border-border border-border-secondary rounded-md shadow-md p-4">
                Full token test
            </div>
        </div>
    );
}
export default TestCard;