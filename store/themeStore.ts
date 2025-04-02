import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  darkMode: boolean
  toggleDarkMode: () => void
  setDarkMode: (isDark: boolean) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      darkMode: typeof window !== 'undefined' 
        ? localStorage.getItem('theme') === 'dark' 
        : false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setDarkMode: (isDark) => set({ darkMode: isDark }),
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => {
        return (state) => {
          if (state) {
            document.documentElement.classList.toggle('dark', state.darkMode)
          }
        }
      }
    }
  )
)