import React from "react";
import Navbar from "./Navbar";
import About from "./About"
import Work from "./Work";
import Cards from "./Cards";
import Contact from "./Contact";
import data from "./data";
import Services from "./Services";

export default function App() {

    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

    function toggleBodyClass() {
        document.body.classList.toggle("dark")
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
        )
    })



    return (
        <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleBodyClass={toggleBodyClass} />
            <About darkMode={darkMode} />
            <Work darkMode={darkMode} />
            <Services darkMode={darkMode} />
            <div className="cards-list">{cards}</div>
            <Contact darkMode={darkMode} />
        </div>
    )
}