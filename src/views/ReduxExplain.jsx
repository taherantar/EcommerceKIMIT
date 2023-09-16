import SiteNav from "../layout/SiteNav";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useContext } from "react";
import { ThemeContext } from "../contaxt/ThemeContext";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { INCRAMENT, DECRAMENT } from "../redux/action/types";
import "../Styles/Styles.scss";

export default function ReduxExplain() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);


    // const [counter, setCounter] = useState(0)

    const countState = useSelector((state) => state.count)
    const dispatch = useDispatch();

    console.log(countState)

    let handleIncrease = () => {
        // setCounter(counter + 1)
        dispatch({ type: INCRAMENT })
    }

    let handleDecrease = () => {
        // setCounter(counter - 1)
        dispatch({ type: DECRAMENT })
    }

    return (
        <div className={`text-center mainContent${i18n.language === "ar" && "rtl"} ${theme.theme === "dark" && "dark"}`}>
            <SiteNav />
            <h1>{t('redux')}</h1>
            {/* <div>{counter}</div> */}
            <div>{countState}</div>
            <div className="d-flex justify-content-between">
                <Button variant="primary" onClick={handleIncrease}>+</Button>
                <Button variant="info" onClick={handleDecrease}>-</Button>
            </div>
        </div>
    )
}
