import React, { useContext } from "react";

const Theme = React.createContext({
    themeMode: "light",
    lightTheme: () => {},
    darkTheme: () => {}
});

export const useTheme = () => useContext(Theme);
export const ThemeProvider = Theme.Provider;
