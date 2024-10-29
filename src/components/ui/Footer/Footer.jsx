import React from 'react';
import {OrderForm} from "../../OrderForm/OrderForm";
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer1" className="footer">
            <div className="footer-top">
                <h2 className="footer-title">
                    Оформить заявку
                </h2>
                <p className="footer-text">
                    Укажите поля и данные, которые необходимо заполнить клиенту для заказа услуги или связи с вами.
                </p>
            </div>
            <div className="footer-middle">
                <OrderForm/>
            </div>
            <div className="footer-bottom">
                    <div className="footer-bottom-links">
                        <a className="phone-link" href="tel:+37555525563">+374 55 525 - 563</a>&nbsp; | &nbsp;
                        <a className="phone-link" href="tel:+37555525563">921-11-71</a>
                    </div>
                    <a className="footer-bottom-links mail-link" href="mailto:hovo.piloyan3@mail.ru">hovo.piloyan3@mail.ru</a>
                    <p className="copyright">г. Санкт-Петербург</p>
            </div>
        </footer>
    );
};

export default Footer;