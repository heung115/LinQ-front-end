import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as styledComponents from "../common/StyledComponents.js";
import { API } from "../config.js";

const AccountBlock = styled.div`
    padding: 20px;
    width: 30%;
    border-radius: 10px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 50%; /* 상단을 페이지의 50% 위치에 설정 */
    left: 50%; /* 왼쪽을 페이지의 50% 위치에 설정 */
    transform: translate(-50%, -50%);
`;
const TitleField = styled.h1`
    text-align: center;
    margin-bottom: 50px;
`;
const InputTextField = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 20px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 2px;
    outline: none;
`;
const LabelText = styled.label`
    color: #212121;
    font-size: 14px;
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
const Background = styled.div`
    height: 1000px;
`;
function CreateAccount() {
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputConfirmPw, setInputConfirmPw] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");

    const handleInputId = (event) => {
        setInputId(event.target.value);
    };

    const handleInputPw = (event) => {
        setInputPw(event.target.value);
    };
    const handleInputConfirmPw = (event) => {
        setInputConfirmPw(event.target.value);
    };

    const handleInputName = (event) => {
        setInputName(event.target.value);
    };
    const handleInputEmail = (event) => {
        setInputEmail(event.target.value);
    };

    const handleInputPhone = (event) => {
        setInputPhone(event.target.value);
    };
    // TODO : 이거 수정하기
    let body = {
        id: inputId,
        email: inputEmail,
        password: inputPw,
        name: inputName,
        nickname: "test",
        birth: "11110101",
    };

    const onClickSubmit = () => {
        if (!inputName) {
            return alert("이름을 입력하세요.");
        } else if (!inputId) {
            return alert("");
        } else if (!inputPw) {
            return alert();
        } else if (!inputConfirmPw) {
            return alert("");
        } else if (!inputPhone) {
            return alert("");
        } else if (!inputEmail) {
            return alert("");
        } else if (inputPw !== inputConfirmPw) {
            return alert("불일치");
        }
        console.log(body);
        axios.post(`${API.SIGNUP}`, body).then((res) => {
            console.log("data : " + res.data);
            if (res.data.code == "SU") {
                alert("완료!");
                window.location.replace("/");
            } else {
                console.log(res);
            }
        });
    };
    return (
        <styledComponents.BackgroundBlock>
            <Background>
                <AccountBlock>
                    <TitleField>Create Account</TitleField>
                    <div>
                        <LabelText>Name</LabelText>
                        <InputTextField
                            type="text"
                            value={inputName}
                            onChange={handleInputName}
                        />
                        <LabelText>
                            아이디
                            <InputTextField
                                type="text"
                                name="input_id"
                                value={inputId}
                                onChange={handleInputId}
                            />
                        </LabelText>
                        <LabelText>Password</LabelText>
                        <InputTextField
                            type="password"
                            value={inputPw}
                            onChange={handleInputPw}
                        />
                        <LabelText>Confirm Password</LabelText>
                        <InputTextField
                            type="password"
                            value={inputConfirmPw}
                            onChange={handleInputConfirmPw}
                        />
                        <LabelText>Phone number</LabelText>
                        <InputTextField
                            type="phone"
                            name="input_Phone"
                            placeholder="--"
                            value={inputPhone}
                            onChange={handleInputPhone}
                        />
                        <LabelText>Email</LabelText>
                        <InputTextField
                            type="email"
                            value={inputEmail}
                            onChange={handleInputEmail}
                        />
                    </div>
                    <SubmitButton type="button" onClick={onClickSubmit}>
                        submit
                    </SubmitButton>
                </AccountBlock>
            </Background>
        </styledComponents.BackgroundBlock>
    );
}

export default CreateAccount;
