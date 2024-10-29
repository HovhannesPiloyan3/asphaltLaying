import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div id="about" className="about-us">
            <div className="container about-us-container">
                <div className="about-us-left">
                    <h2 className="about-us-title">
                        О нашей компании
                    </h2>
                </div>
                <div className="about-us-right">
                    <p className="about-us-text">
                        Работая с 2007 года, мы зарекомендовали себя, как надежная и ответственная компания, которая
                        всегда открыта для успешного и взаимовыгодного сотрудничества.
                        Отсутствие посредников гарантирует минимальные цены и высокое качество предоставляемых услуг.
                        Мы располагаем собственной ремонтно-производственной базой, всем перечнем необходимой
                        строительной дорожной спецтехники и штатом высококвалифицированных рабочих, что позволяет делать
                        процесс производства работ по укладке асфальта практически круглосуточным.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;