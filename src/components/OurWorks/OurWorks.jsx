import React from 'react';
import './OurWorks.css'
import {Link} from "react-router-dom";
import img from "../../assets/img/bg/banner-bg.jpg";

const works = [
    {id: 1, bgImage: img, title: "2024"},
    {id: 2, bgImage: img, title: "2023"},
    {id: 3, bgImage: img, title: "2022"},
    {id: 4, bgImage: img, title: "2021"},
    {id: 5, bgImage: img, title: "2020"},
    {id: 6, bgImage: img, title: "2017 - 2019"},
];


const OurWorks = () => {
    return (
        <div className="our-works">
            <div className="container our-works-container">
                <h2 className="our-works-title">Наши работы</h2>
                <div className="our-works-content">
                    {works.map(work => (
                        <div key={work.id} style={{backgroundImage: `url(${work.bgImage})`}}
                         className="our-works-content-articles">
                            <Link to="/work">
                                <h3>{work.title}</h3>
                                <button>Смотреть</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurWorks;