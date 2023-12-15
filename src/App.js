import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Login from "./routes/Login";
import ForgetPassword from "./routes/ForgetPassword";
import CreateAccount from "./routes/CreateAccount";
import BoardList from "./routes/BoardList";
import BoardDetail from "./routes/BoardDetail";
import BoardWrite from "./routes/WriteBoard";
import mock from "./monk/mockAdapter";

mock.onAny().passThrough();

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgetPassword" element={<ForgetPassword />} />
                <Route path="/createAccount" element={<CreateAccount />} />
                <Route path="/board" element={<BoardList />} />
                <Route path="/board/:idx" element={<BoardDetail />} />
                <Route path="/boardWrite" element={<BoardWrite />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </div>
    );
}

export default App;
