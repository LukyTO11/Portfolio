import React from "react";
import Home from "./Home"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeeMyWorks from "./components/SeeMyWorks";

export default function App() {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/Home" element={<Home />}></Route>
                    <Route path="/see-my-works" element={<SeeMyWorks />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}