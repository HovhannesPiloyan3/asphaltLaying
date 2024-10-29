import React, { useState } from "react";
import emailjs from "emailjs-com";
import './MiniOrder.css'; // Импортируем стили

export const MiniOrder = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState(""); // Для отображения результата

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Начинаем загрузку
        setFormStatus(""); // Очищаем статус

        const templateParams = {
            user_name: name,
            user_phone: phone,
            message: "Консултация по поводу асфальта",
        };

        emailjs
            .send(
                'service_43kl8dm', // Замени на твой Service ID
                'template_7oeoj76', // Замени на твой Template ID
                templateParams,
                'pbDElcrEzx5qhWPQz' // Замени на твой Public Key
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setLoading(false); // Останавливаем загрузку
                    setFormStatus("Заявка успешно отправлена!"); // Успешное сообщение
                },
                (error) => {
                    console.log("FAILED...", error);
                    setLoading(false); // Останавливаем загрузку
                    setFormStatus("Произошла ошибка при отправке. Попробуйте ещё раз."); // Ошибка
                }
            );
    };

    return (
        <form onSubmit={sendEmail} className="mini-order-form">
            <h3 className="mini-order-form-title">Закажите бесплатную консультацию</h3>
            <label htmlFor="name"></label>
            <input
                type="text"
                id="name"
                className="form-input mini-order-form-input"
                value={name}
                placeholder="Имя"
                onChange={(e) => setName(e.target.value)}
                required
            />
            <label htmlFor="phone"></label>
            <input
                type="tel"
                id="phone"
                placeholder="Телефон"
                className="form-input mini-order-form-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            {/* Сообщение о статусе отправки */}
            {formStatus && <p className="form-status">{formStatus}</p>}

            {/* Кнопка с загрузкой */}

            <button type="submit" className="mini-order-form-button form-button" disabled={loading}>
                {loading ? "Отправка..." : "Отправить заявку"}
            </button>
            <p className="mini-order-form-text">
                Нажимая на кнопку «Отправить», Вы соглашаетесь с обработкой персональных данных в соответствии с законодательством РФ и политикой конфиденциальности
            </p>
        </form>
    );
};
