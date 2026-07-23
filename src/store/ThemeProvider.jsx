import { useState, useMemo } from 'react'
import { ThemeContext } from './theme'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}
