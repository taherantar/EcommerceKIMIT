import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faGlobe, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from "../contaxt/ThemeContext";

function SiteNav() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext)


    let changeLanguage = () => {
        i18n.language === "en" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
        localStorage.setItem("languge", i18n.language)
    }
    useEffect(() => {
        i18n.changeLanguage(localStorage.setItem("languge", i18n.language))
    }, [])
    return (
        <Navbar expand="md" className="bg-light">
            <Container>
                <NavLink className='nav-link fs-4' to="/">{t('home')}</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className='nav-link fs-4' to="/todo">{t('todo')}</NavLink>
                        <NavLink className='nav-link fs-4' to="/redux">{t('redux')}</NavLink>
                        <NavLink className='nav-link fs-4' to="/products">{t('products')}</NavLink>
                    </Nav>
                    <NavLink className='nav-link fs-4 m-3' to="/cart">{t('cart')}<FontAwesomeIcon icon={faCartShopping} /></NavLink>
                    {/* <button className='btnlang' varint="" >{t('change_lang')}</button> */}
                    <div>
                        <FontAwesomeIcon icon={faGlobe} onClick={changeLanguage} className='m-2' />
                        {/* {t('lang')} */}
                        <FontAwesomeIcon icon={faSun} onClick={theme.ToggleTheme} className='m-2' />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;