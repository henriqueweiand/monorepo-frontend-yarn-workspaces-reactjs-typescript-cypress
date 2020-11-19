export type ThemeState = "light" | "dark";

export type AppThemeContext = {
  currentTheme: ThemeState;
  toggleTheme(): void;
};
