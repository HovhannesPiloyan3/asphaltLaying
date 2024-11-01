import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {Link as ScrollLink} from 'react-scroll';
import './BurgerMenu.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu-container">
            <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                onClick={toggleMenu}
                className="burger-icon"
                size="2x"
            />
            {isOpen && (
                <div className="burger-menu-overlay">
                    <nav className="burger-nav">
                        <ScrollLink to="about" smooth={true} duration={500} href="#" onClick={toggleMenu}>О
                            нас</ScrollLink>
                        <ScrollLink to="services1" smooth={true} duration={500} href="#"
                                    onClick={toggleMenu}>Услуги</ScrollLink>
                        <ScrollLink to="rental" smooth={true} duration={500} href="#"
                                    onClick={toggleMenu}>Аренда</ScrollLink>
                        <ScrollLink to="contacts" smooth={true} duration={500} href="#"
                                    onClick={toggleMenu}>Контакты</ScrollLink>
                        <a href="tel:+37555525563">+374 55 525 - 563</a>
                        <a href="mailto:hovo.piloyan3@mail.ru">hovo.piloyan3@mail.ru</a>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
