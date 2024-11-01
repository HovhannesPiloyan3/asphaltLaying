import React from 'react';
import Logo from '../../../assets/img/logo/logo.png';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <ScrollLink to="about" smooth={true} duration={500} href="#">О нас</ScrollLink>
                <ScrollLink to="services1" smooth={true} duration={500} href="#">Услуги</ScrollLink>
                <ScrollLink to="work1" smooth={true} duration={500} href="#">Работы</ScrollLink>
                <ScrollLink to="footer1" smooth={true} duration={500} href="#">Контакты</ScrollLink>
            </div>
            <div className="header-middle">
                <a href="/">
                    <img src={Logo} alt="logo"/>
                </a>
            </div>
            <div className="header-right">
                <a href="tel:+37555525563">+374 55 525 - 563</a>
                <a href="mailto:hovo.piloyan3@mail.ru">hovo.piloyan3@mail.ru</a>
            </div>
            <BurgerMenu />
        </header>
    );
};

export default Header;
