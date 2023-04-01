import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Work from "./components/Work";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import data from "./components/data";
import Services from "./components/Services";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLocation } from "react-router-dom";

export default function Home() {
    const [darkMode, setDarkMode] = React.useState(true);
    const location = useLocation();

    function toggleDarkMode() {
        setDarkMode((prevMode) => !prevMode);
    }

    function toggleBodyClass() {
        document.getElementById("app").classList.toggle("dark");
    }

    const cards = data.map((item) => {
        return (
            <Cards
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                coverImg={item.coverImg}
            />
        );
    });

    useEffect(() => {
        AOS.init({
            once: true,
            offset: 200,
            duration: 600,
            easing: "ease-in-out",
            delay: 100,
            mirror: false,
        });
    }, []);

    useEffect(() => {
        if (location.pathname === "/Portfolio") {
            setDarkMode(true);
        }
    }, [location]);

    return (
        <div className={darkMode ? "Appdark" : ""}>
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                toggleBodyClass={toggleBodyClass}
            />
            <About darkMode={darkMode} />
            <Work darkMode={darkMode} />
            <Services darkMode={darkMode} />
            <div className="cards-list" data-aos="fade-up">
                {cards}
            </div>
            <Contact darkMode={darkMode} />
        </div>
    );
}