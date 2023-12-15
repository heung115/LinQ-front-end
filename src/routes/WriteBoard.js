import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import * as styledComponents from "../common/StyledComponents.js";
import useBoard from "../hooks/UseBoard.js";
import UserToken from "../component/UserToken.js";
import { API } from "../config.js";
const Spacer = styled.div`
    height: 30px;
`;

const BoardBlock = styled.div`
    width: 500px;
    height: 600px;
    border: 2px solid #0b2f3a;
    background: white;
    margin: 0 auto;
`;
const BoardTitleBlock = styled.div`
    font-weight: bold;
    margin: 10px 20px;
    font-size: 25px;
`;
const InputField = styled.input`
    width: 95%;
    height: 50px;
    margin-bottom: 20px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 2px;
    outline: none;
`;
const BoardMainTextBlock = styled.div`
    height: 300px;
    grid-template-rows: auto;
    margin: 30px;

    //border: 1px solid #000;
    position: relative;
`;
const MainTextTextArea = styled.textarea`
    width: 95%;
    height: 90%;
    border: 2px solid #eeeeee;
    resize: none;
`;
const Button = styled.button`
    margin : 10px;
    width: 80px;
    height 60px;
    border: 2px solid #eeeeee;
    border-radius: 5px;
    background-color : white;
    &:hover{
        color:  white;
        background-color : #B7DADF;
    }
`;
const BoardWrite = () => {
    const navigate = useNavigate();

    const { board, onChange } = useBoard();

    const { title, createdBy, content, boardImageList } = board;

    const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const saveBoard = async () => {
        await axios
            .post(`${API.WRITEBOARD}`, board, {
                headers,
            })
            .then((res) => {
                if (res.data.code === "SU") {
                    alert("등록되었습니다.");
                    navigate("/board");
                } else if (res.data.code === "VF") {
                    alert("Validation failed");
                } else if (res.data.code === "NU") {
                    alert("유저 정보 없음");
                }
            });
    };

    const backToList = () => {
        navigate("/board");
    };

    return (
        <styledComponents.BackgroundBlock>
            <Spacer></Spacer>
            <UserToken />
            <BoardBlock>
                <BoardTitleBlock>
                    <InputField
                        type="text"
                        name="title"
                        value={title}
                        placeholder="title"
                        onChange={onChange}
                    />
                </BoardTitleBlock>
                <BoardMainTextBlock>
                    <MainTextTextArea
                        name="content"
                        cols="30"
                        rows="10"
                        value={content}
                        onChange={onChange}
                    ></MainTextTextArea>
                </BoardMainTextBlock>
                <br />
                <Button onClick={saveBoard}>저장</Button>
                <Button onClick={backToList}>취소</Button>
            </BoardBlock>
        </styledComponents.BackgroundBlock>
    );
};

export default BoardWrite;
