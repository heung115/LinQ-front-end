import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as styledComponents from "../common/StyledComponents.js";

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

    return (
        <styledComponents.BackgroundBlock>
            <AccountBlock>
                <div>
                    <label>
                        아이디
                        <input
                            type="text"
                            name="input_id"
                            value={inputId}
                            onChange={handleInputId}
                        />
                    </label>
                    <label>Email</label>
                    <input
                        type="email"
                        value={inputEmail}
                        onChange={handleInputEmail}
                    />
                    <label>Name</label>
                    <input
                        type="text"
                        value={inputName}
                        onChange={handleInputName}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={inputPw}
                        onChange={handleInputPw}
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={inputConfirmPw}
                        onChange={handleInputConfirmPw}
                    />
                    <label>
                        <input
                            type="phone"
                            name="input_Phone"
                            placeholder="--"
                            value={inputPhone}
                            onChange={handleInputPhone}
                        />
                    </label>
                </div>
            </AccountBlock>
        </styledComponents.BackgroundBlock>
    );
}

export default CreateAccount;
