import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../assets/img/bg/banner-bg.jpg';
import './OurServices.css';

const services = [
    {id: 1, bgImage: img, title: "Асфальтирование дворов"},
    {id: 2, bgImage: img, title: "Асфальтирование тротуаров"},
    {id: 3, bgImage: img, title: "Асфальтирование велодорожек"},
    {id: 4, bgImage: img, title: "Асфальтирование парковок"},
    {id: 5, bgImage: img, title: "Асфальтирование территорий"},
    {id: 6, bgImage: img, title: "Асфальтирование гаражей"},
    {id: 7, bgImage: img, title: "Стабилизация грунтов"},
    {id: 8, bgImage: img, title: "Ямочный ремонт"},
];

const OurServices = () => {
    return (
        <div id="services1" className="our-services">
            <div className="container our-services-container">
                <h2 className="our-services-title">Наши услуги</h2>
                <div className="our-services-content">
                    {services.map(service => (
                        <div key={service.id} style={{backgroundImage: `url(${service.bgImage})`}}
                             className="our-services-content-articles">
                            <Link  to={`/services/${service.id}`} key={service.id}>
                                <h3>{service.title}</h3>
                                <button>Подробнее</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
