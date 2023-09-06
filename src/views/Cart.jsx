import SiteNav from "../layout/SiteNav";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { ThemeContext } from "../contaxt/ThemeContext";
import { useContext } from "react";


export default function Cart() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext)

    return (
        <div className={`text-center ${i18n.language === "ar" && "rtl"} ${theme.theme === "dark" && "dark"}`}>
            <SiteNav />
            <h2 className="text-center m-4">{t('cart')}</h2>
        </div>
    )
}
