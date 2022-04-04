import Login from "./Login";
import Register from "./Register";
import Menu from "./Menu";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import { AuthContextProvider } from "./providers/AuthContext";
import { ProgressContextProvider } from "./providers/ProgressContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css';
import React from "react";




export default function App () {
    
    return (
        
        <AuthContextProvider>
            <ProgressContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login setToken={(() => {})}/>} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/menu" element={<Menu token={''}/>} />
                        <Route path="/habits" element={<Habits token={''}/>} />
                        <Route path="/today" element={<Today token={''}/>} />
                        <Route path="/history" element={<History token={''}/>} />
                    </Routes>
                </BrowserRouter>
            </ProgressContextProvider>
        </AuthContextProvider>

    );
}
