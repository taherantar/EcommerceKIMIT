import { useContext } from "react";

import i18n from "i18next";
import "../Styles/Styles.scss";
import { ThemeContext } from "../contaxt/ThemeContext";
import { Link } from "react-router-dom";

export default function Error() {
    const theme = useContext(ThemeContext)

    return (
        <div className={`mainContent text-center ${theme.theme === "dark" && "dark"}`}>
            <h2>Error 404 not found</h2>
            <Link to="/">Go home</Link>
        </div>
    )
}
