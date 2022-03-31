import Login from "./Login";
import Register from "./Register";
import Menu from "./Menu";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import React/* , { useState } */ from "react";


export default function App () {
    
    /* const [token, setToken] = useState(''); */
    
    return (
        
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Login setToken={(() => {})}/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu token={''}/>} />
                <Route path="/habits" element={<Habits token={''}/>} />
                <Route path="/today" element={<Today token={''}/>} />
                <Route path="/history" element={<History token={''}/>} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>

    );
}
