import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Wallpaper.css"

const Wallpaper = ({children}) => {
    return (
        <div className="wallpaper">
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Wallpaper;