import React, {
	createContext,
	useState,
	useCallback,
	useContext,
	PropsWithChildren
} from 'react'
import { ThemeState, AppThemeContext } from './types'

const ThemeContext = createContext<AppThemeContext | null>(null)
const storageKey = (key: string) => `@ReactJSProjectTemplateTests:${key}`

export const AppThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
	const [currentTheme, setCurrentTheme] = useState<ThemeState>(() => {
		let storedTheme
		if (process.browser) {
			storedTheme = localStorage.getItem(storageKey('theme')) as ThemeState
		}
		return storedTheme ? JSON.parse(storedTheme) : 'dark'
	})

	const toggleTheme = useCallback(() => {
		setCurrentTheme(prevTheme => {
			const newTheme = prevTheme === 'light' ? 'dark' : 'light'
			localStorage.setItem(storageKey('theme'), JSON.stringify(newTheme))

			return newTheme
		})
	}, [])

	const value = React.useMemo(
		() => ({
			currentTheme,
			toggleTheme
		}),
		[currentTheme, toggleTheme]
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useAppTheme = (): AppThemeContext => {
	const context = useContext(ThemeContext)

	if (!context) {
		throw new Error(`useAppTheme must be used within an AppThemeContext`)
	}

	return context
}
