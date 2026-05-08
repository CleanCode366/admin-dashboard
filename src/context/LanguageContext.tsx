// eslint-disable react-refresh/only-export-components

import React, { createContext, useState, useEffect } from 'react'
import { LanguageContextType } from '../types/language'

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext<LanguageContextType | null>(null)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<string>(() => sessionStorage.getItem('lang') || 'en')

  // Save language on change
  useEffect(() => {
    sessionStorage.setItem('lang', lang)
  }, [lang])

  const changeLanguage = (code: string) => {
    setLang(code)
  }

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>{children}</LanguageContext.Provider>
  )
}
