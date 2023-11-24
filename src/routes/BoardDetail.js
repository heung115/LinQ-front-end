import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import * as styledComponents from "../common/StyledComponents.js";
import LoadingPage from "./LoadingPage.js";

const BoardBlockGrid = styled.div`
    display: grid;
    grid-template-columns: 500px 350px;
    grid-template-rows: 400px 400px;

    width: 850px;
    height: 800px;

    border: 3px solid #0b2f3a;
    background: white;
    margin: 0 auto;
`;
const BoardImageBlock = styled.div`
    grid-row: 1 / 3;

    border: 1px solid #000;
`;
const BoardMainTextBlock = styled.div`
    grid-template-rows: auto;
    border: 1px solid #000;
    position: relative;
`;
const BoardTitleBlock = styled.div`
    font-weight: bold;
    margin: 10px;
    font-size: 25px;
`;
const BoardContentBlock = styled.div`
    margin: 10px;
    font-size: 20px;
`;
const BoardDateBlock = styled.div`
    margin: 10px;
    font-size: 20px;
`;
const BoardUserIdBlock = styled.div`
    margin: 10px;
    font-size: 20px;
`;
const BoardUserNicknameBlock = styled.div`
    margin: 10px;
    font-size: 20px;
`;
const MyPageTextBlock = styled.div`
    //margin: auto;
    grid-template-rows: auto;
    border: 1px solid #000;
    position: relative;
`;
const Spacer = styled.div`
    height: 30px;
`;

const BoardDetail = () => {
    const [boardData, setBoardData] = useState([]);

    const getBoarData = async () => {
        const resp = await (await axios.get("/boardDetail")).data;
        setBoardData(resp.data);
        //console.log(resp.data);
    };

    useEffect(() => {
        getBoarData();
    }, []);
    return (
        <styledComponents.BackgroundBlock>
            <Spacer></Spacer>
            {boardData.length > 0 ? (
                <BoardBlockGrid>
                    <BoardImageBlock>img</BoardImageBlock>
                    <BoardMainTextBlock>
                        <BoardTitleBlock>{boardData[0].title}</BoardTitleBlock>
                        <BoardContentBlock>
                            {boardData[0].content}
                        </BoardContentBlock>
                        <BoardDateBlock>
                            {boardData[0].writeDatetime}
                        </BoardDateBlock>
                        <BoardUserIdBlock>
                            {boardData[0].writerId}
                        </BoardUserIdBlock>
                        <BoardUserNicknameBlock>
                            {boardData[0].writerNickname}
                        </BoardUserNicknameBlock>
                    </BoardMainTextBlock>

                    <MyPageTextBlock>comment area</MyPageTextBlock>
                </BoardBlockGrid>
            ) : (
                <LoadingPage />
            )}
        </styledComponents.BackgroundBlock>
    );
};

export default BoardDetail;
