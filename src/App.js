import React from "react";
import Home from "./Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeeMyWorks from "./components/SeeMyWorks";

export default function App() { 

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/Portfolio" element={<Home />} />
                    <Route path="/see-my-works" element={<SeeMyWorks/>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}