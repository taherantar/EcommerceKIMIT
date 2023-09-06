import { createContext, useState } from "react";

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    let [theme, setTheme] = useState("light");

    let ToggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


    return (
        <ThemeContext.Provider value={{ theme, setTheme, ToggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );

}

export default ThemeProvider; 