import React from 'react';
import logo1 from "../images/logo2.png"
import logo2 from "../images/parkLogo.jpg"
import logo3 from "../images/cafeLogo.PNG"
import pizzeria from "../images/pizzeria.jpg"
import caffe from "../images/caffe.jpg"
import park from "../images/park.jpg"
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { faPhone, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingPage() {
    const lokali = [
        { 
            name: "Pizzeria 7", 
            path: "/Pizzeria-7", 
            color: "#E59E1B", 
            logo: logo1, 
            previewImg: pizzeria,
            tel: "+381668171717", 
            menu: "https://guest.kono.bar/m-93g9it" 
        },
        { 
            name: "Sedmica Caffe", 
            path: "/kafeterija", 
            color: "#0992C2", 
            logo: logo3, 
            previewImg: caffe,
            tel: "+0216319755", 
            menu: null 
        },
        { 
            name: "Sedmica Park", 
            path: "/park", 
            color: "#31694E", 
            logo: logo2, 
            previewImg: park,
            tel: "+381668373777", 
            menu: "https://guest.kono.bar/m-5kc5fr" 
        }
    ];

    return (
        <>
            <Helmet><title>Sedmica | Novi Sad</title></Helmet>
            <div className="landingPageImg">
                <div className="landing-hero-content">
                    <h1>SEDMICA</h1>
                    <p>Tradicija ukusa i vrhunske usluge u Novom Sadu</p>
                </div>
            </div>

            <div className="container main">
                <div className="brand-intro">
                    <h2>Naši Lokali</h2>
                    <p>Istražite tri jedinstvena koncepta pod jednim brendom.</p>
                </div>

                <div className="brand-grid">
                    {lokali.map((lokal, index) => (
                        <div key={index} className="brand-card">
                            <Link to={lokal.path} className="brand-logo-link" style={{backgroundColor: lokal.color}}>
                                <img src={lokal.logo} alt={lokal.name} className="brand-logo-img" />
                            </Link>
                            <h3>{lokal.name}</h3>
                            <div className="brand-actions">
                                {lokal.menu && (
                                    <a href={lokal.menu} target="_blank" rel="noreferrer" className="btn-brand btn-secondary" style={{backgroundColor: lokal.color}}>
                                        <FontAwesomeIcon icon={faBookOpen} /> Digitalni Meni
                                    </a>
                                )}
                                <a href={`tel:${lokal.tel}`} className="btn-brand outline " style={{borderColor: lokal.color, color: lokal.color}}>
                                    <FontAwesomeIcon icon={faPhone} /> Pozovi
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="brand-images-preview">
                    {lokali.map((lokal, index) => (
                        <div key={index} className="preview-item">
                            <img src={lokal.previewImg} alt={`${lokal.name} ambijent`} />
                            <div className="preview-overlay">
                                <span>{lokal.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}