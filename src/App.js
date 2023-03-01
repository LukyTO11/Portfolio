import React from "react";
import Navbar from "./Navbar";
import About from "./About"
import Work from "./Work";
import Cards from "./Cards";
import Contact from "./Contact";
import data from "./data";
import Services from "./Services";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function App() {

    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    function toggleBodyClass() {
        document.body.classList.toggle("dark")
    }

    const cards = data.map(item => {
        return (
            <Cards
                key={item.id}
                {...item}
            />
        )
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleBodyClass={toggleBodyClass}/>
            <About darkMode={darkMode}/>
            <Work darkMode={darkMode}/>
            <Services darkMode={darkMode}/>
            <Carousel
                responsive={responsive}
                draggable={false}
                autoPlay={true}
                infinite={true}
                showDots={true}
                autoPlaySpeed={6000}
                className="card-list">
                {cards}
            </Carousel>
            <Contact darkMode={darkMode}/>
        </div>
    )
}