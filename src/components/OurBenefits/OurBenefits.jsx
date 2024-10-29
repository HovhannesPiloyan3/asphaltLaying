import React from 'react';
import './OurBenefits.css'

const benefits = [
    {id: 1,  title: "Гарантии", text: "Несем ответственность за комплекс работ",},
    {id: 2,  title: "Сроки", text: "Работы выполняются по согласованному графику производства",},
    {id: 3,  title: "Качество", text: "Объекты проходят проверки экспертиз и Технадзора",},
    {id: 4,  title: "Опыт", text: "Работаем на рынке дорожного строительства более 15 лет",},
    {id: 5,  title: "Цены", text: "Договариваемся о ценах на берегу и не меняем их в процессе",},
    {id: 5,  title: null, text: null,},

];


const OurBenefits = () => {
    return (
        <div className="benefits">
            <div className="container benefits-container">
                <h2 className="benefits-title">Наши преимущества</h2>
                <div className="benefits-content">
                    {benefits.map(benefit => (
                        <div className="benefits-list" key={benefit.id}>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBenefits;