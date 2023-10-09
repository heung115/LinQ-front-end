import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Login from "./routes/Login";
import ForgetPassword from "./routes/ForgetPassword";
import CreateAccount from "./routes/CreateAccount";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/createAccount" element={<CreateAccount />} />
            </Routes>
        </div>
    );
}

export default App;
