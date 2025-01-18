import React, { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import unity from "../assets/img/tecnologias/Unity_img.png";
import flutter from "../assets/img/tecnologias/Flutter_img.png";
import react from "../assets/img/tecnologias/React_img.png";
import python from "../assets/img/tecnologias/Python_img.png";
import laravel from "../assets/img/tecnologias/Laravel_img.png";
import spring from "../assets/img/tecnologias/Spring_img.png";
import boostrap from "../assets/img/tecnologias/Boostrap_img.png";
import tailwind from "../assets/img/tecnologias/Tailwind_img.png";


export const Technologies = () => {
    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
        },
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
        }
    };

    return (
        <section className="technologie" id="technologies">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                            <h2>Tecnologías</h2>
                            <p>Herramientas con las que tengo experiencia</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={unity} alt="Unity" />
                                    <h5>Unity</h5>
                                </div>
                                <div className="item">
                                    <img src={flutter} alt="Flutter" />
                                    <h5>Flutter</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Python" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={laravel} alt="Laravel" />
                                    <h5>Laravel</h5>
                                </div>
                                <div className="item">
                                    <img src={spring} alt="Spring" />
                                    <h5>Spring Boot</h5>
                                </div>
                                <div className="item">
                                    <img src={boostrap} alt="boostrap" />
                                    <h5>Boostrap</h5>
                                </div>
                                <div className="item">
                                    <img src={tailwind} alt="Tailwins" />
                                    <h5>Tailwind</h5>
                                </div>
                            </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}