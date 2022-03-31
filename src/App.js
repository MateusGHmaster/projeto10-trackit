import Login from "./Login";
import Register from "./Register";
import Menu from "./Menu";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App () {
    return (
        
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/habits" element={<Habits />} />
                <Route path="/today" element={<Today />} />
                <Route path="/history" element={<History />} />
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>

    );
}
