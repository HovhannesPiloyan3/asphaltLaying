import React from 'react';
import Logo from '../../../assets/img/logo/logo.png'
import { Link as ScrollLink } from 'react-scroll';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="header-left">
                <ScrollLink  to="about" smooth={true} duration={500} href="#">О нас</ScrollLink >
                <ScrollLink  to="section1" smooth={true} duration={500} href="#">Услуги</ScrollLink >
                <ScrollLink  to="section1" smooth={true} duration={500} href="#">Работы</ScrollLink >
                <ScrollLink  to="section1" smooth={true} duration={500} href="#">Новости</ScrollLink >
                <ScrollLink  to="footer1" smooth={true} duration={500} href="#">Контакты</ScrollLink >
            </nav>
            <div className="header-middle">
                <img src={Logo} alt="logo"/>
            </div>
            <div className="header-right">
                <a href="tel:+37555525563">+374 55 525 - 563</a>
                <a href="mailto:hovo.piloyan3@mail.ru">hovo.piloyan3@mail.ru</a>
            </div>
        </header>
    );
};

export default Header;