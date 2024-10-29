import React, { useState } from "react";
import emailjs from "emailjs-com";
import './OrderForm.css'; // Импортируем стили

export const OrderForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [formStatus, setFormStatus] = useState(""); // Для отображения результата

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Начинаем загрузку
        setFormStatus(""); // Очищаем статус

        const templateParams = {
            user_name: name,
            user_phone: phone,
            message: message,
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
        <form onSubmit={sendEmail} className="order-form">
            <label htmlFor="name"></label>
            <input
                type="text"
                id="name"
                className="form-input"
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
                className="form-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />
            <label htmlFor="message"></label>
            <textarea
                id="message"
                className="form-textarea"
                placeholder="Сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />

            {/* Сообщение о статусе отправки */}
            {formStatus && <p className="form-status">{formStatus}</p>}

            {/* Кнопка с загрузкой */}
            <button type="submit" className="form-button" disabled={loading}>
                {loading ? "Отправка..." : "Отправить заявку"}
            </button>
        </form>
    );
};
