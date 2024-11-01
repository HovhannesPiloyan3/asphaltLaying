import React from 'react';
import { useParams } from "react-router-dom";
import { servicesData } from "../../assets/data/servicesData";
import Wallpaper from "../../components/ui/Wallpaper/Wallpaper";
import OurBenefits from "../../components/OurBenefits/OurBenefits";
import Roadmap from "../../components/Roadmap/Roadmap";
import "./Service.css";

const Service = () => {
    const { id } = useParams();
    const data = servicesData.filter(service => service.id === +id);

    return (
        <Wallpaper>
            <div className="service">
                <div className="container">
                    {data.map((item) => (
                        <div className="service-content" key={item.id}>
                            <img className="service-img" src={item.bgImage} alt={item.title} />
                            <div className="service-text">
                                <h2>{item.title}</h2>
                                <p>
                                    {item.text.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <OurBenefits />
            <Roadmap />
        </Wallpaper>
    );
};

export default Service;
