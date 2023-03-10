import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Work from "./components/Work";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import data from "./components/data";
import Services from "./components/Services";


export default function Home() {

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
            <Navbar
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                toggleBodyClass={toggleBodyClass}
            />
            <About darkMode={darkMode} />
            <Work darkMode={darkMode} />
            <Services darkMode={darkMode} />
            <div className="cards-list">{cards}</div>
            <Contact darkMode={darkMode} />
        </div>
    )
}