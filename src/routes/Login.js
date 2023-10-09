import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as styledComponents from "../common/StyledComponents.js";
import { BsPeopleFill } from "react-icons/bs";

const LoginBlock = styled.div`
    padding: 20px;
    width: 20%;
    border-radius: 10px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const TitleField = styled.h1`
    text-align: center;
    margin-bottom: 50px;
`;
const inputField = styled.input`
    width: 95%;
    height: 30px;
    margin-bottom: 20px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 2px;
    outline: none;
`;
const IdField = styled(inputField)`
    margin-top: 50px;
    margin-bottom: 20px;
`;
const PwField = styled(inputField)`
    width: 95%;
    margin-bottom: 70px;
`;
const SubmitButton = styled.button`
    width: 100%;
    padding: 10px 80px;
    margin-top: 5px;
    border-radius: 5px;
    background-color: #85c7cd;
    border: 0px;

    &:active {
        background-color: #0056b3;
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    }
`;
const LoginAlert = styled.div`
    visibility: hidden;
`;
const LinkText = styled(Link)`
    box-sizing: border-box;
    display: block;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    color: #85c7cd;
`;

function Login() {
    // useState를 사용할때 : [원소의 현재 상태, setter함수]
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    //inputId를 초기값 ""으로 설정하고 자바스크립트 변수로 사용가능
    const handleInputId = (event) => {
        setInputId(event.target.value);
    };

    const handleInputPw = (event) => {
        setInputPw(event.target.value);
    };
    // login 버튼 클릭 이벤트
    let body = {
        email: inputId,
        password: inputPw,
    };

    const onClickLogin = () => {
        axios.post("https://reqres.in/api/login", body).then((res) => {
            console.log(res.data);
            if (res.data.code === 200) {
                console.log("로그인 완료");
            }
            if (res.data.code === 400) {
                console.log("ID, Password가 비어있습니다.");
            }
            if (res.data.code === 401) {
                console.log("존재하지 않는 ID입니다.");
            }
            if (res.data.code === 402) {
                console.log("Password가 틀립니다.");
            }
        });
    };

    return (
        <styledComponents.BackgroundBlock>
            <LoginBlock>
                <TitleField>Login</TitleField>
                <div>
                    <label htmlFor="input_id">
                        {/* <BsPeopleFill /> */}
                        <IdField
                            type="text"
                            name="input_id"
                            placeholder="Type your username"
                            value={inputId}
                            onChange={handleInputId}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="input_pw">
                        <PwField
                            type="password"
                            name="input_pw"
                            placeholder="Type your password"
                            value={inputPw}
                            onChange={handleInputPw}
                        />
                    </label>
                </div>
                <LinkText to="/forgetPassword">Forget password?</LinkText>
                <LinkText to="/createAccount">Create Account?</LinkText>
                <div>
                    <SubmitButton type="button" onClick={onClickLogin}>
                        Login
                    </SubmitButton>
                </div>
            </LoginBlock>
        </styledComponents.BackgroundBlock>
    );
}

export default Login;