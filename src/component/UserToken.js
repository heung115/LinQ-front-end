import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserToken = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            window.alert("로그인이 필요합니다");

            navigate("/login");
        }
    }, [token, navigate]);

    return <div>{}</div>;
};

export default UserToken;
