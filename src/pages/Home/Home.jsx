import React from 'react';
import Wallpaper from "../../components/ui/Wallpaper/Wallpaper";
import Banner from "../../components/Banner/Banner";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurServices from "../../components/OurServices/OurServices";
import OurWorks from "../../components/OurWorks/OurWorks";
import OurBenefits from "../../components/OurBenefits/OurBenefits";
import Roadmap from "../../components/Roadmap/Roadmap";

const Home = () => {
    return (
        <Wallpaper>
            <Banner/>
            <AboutUs/>
            <OurServices/>
            <OurWorks/>
            <OurBenefits/>
            <Roadmap/>
        </Wallpaper>
    );
};

export default Home;