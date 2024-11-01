import React from 'react';
import Bg from '../../assets/img/bg/banner-bg.jpg'
import {MiniOrder} from "../MiniOrder/MiniOrder";
import './Banner.css'


const Banner = () => {
    return (
        <div style={{
            backgroundImage: `linear-gradient(to top, rgba(9, 47, 51, 0.6), rgba(8, 29, 31, 0.5)), url(${Bg})`,
        }} className="banner">
            <div className="container banner-container">
                <div className="banner-list-container">
                    <ul>
                        <li>АРЕНДА СПЕЦТЕХНИКИ,</li>
                        <li>РАБОТЫ ПО АСФАЛЬТИРОВАНИЮ,</li>
                        <li>РЕМОНТ АСФАЛЬТНОГО ПОКРЫТИЯ,</li>
                        <li>БЛАГОУСТРОЙСТВО ТЕРРИТОРИЙ,</li>
                        <li>УСТРОЙСТВО ИНЖЕНЕРНЫХ СЕТЕЙ</li>
                    </ul>
                </div>
                <div className="banner-form-container">
                    <MiniOrder/>
                </div>
            </div>
        </div>
    );
};

export default Banner;