import SiteNav from "../layout/SiteNav";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useContext } from "react";
import { ThemeContext } from "../contaxt/ThemeContext";
import Slider from "../components/Slider";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../components/Card";
import Footer from "../layout/Footer";

export default function Home() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext)
    const countState = useSelector((state) => state.count)

    return (
        <div className={`mainContent text-center ${i18n.language === "ar" && "rtl"} ${theme.theme === "dark" && "dark"}`}>
            <SiteNav />
            <h2 className="text-center m-4">{t('home')}</h2>
            <div>
                {countState}
                <Slider />
            </div>
            <h1 className="is-ff-sans-bold">sneakers lounge — the new shoe space</h1>
            <h1 className="is-ff-sans-bold">what's happening</h1>
            <p>This summer, Samaritaine introduces its new "Sneakers Lounge", dedicated entirely to sneakers and city shoes.
            </p>
            <Card />
            <Footer />
        </div>
    )
}
