import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { API } from "../config.js";

import * as styledComponents from "../common/StyledComponents.js";
import LoadingPage from "./LoadingPage.js";
import BoardList from "./BoardList.js";

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
    const [imgList, setImgList] = useState([]);

    const [imagePath, setImagePath] = useState("");
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const { idx } = useParams();

    const getBoarData = async () => {
        const resp = await (
            await axios.get(`${API.BOARDEDATIL}` + "/" + idx, {
                headers,
            })
        ).data;
        console.log(resp);
        setBoardData(resp);
        setImgList(boardData.boardImageList);

        //console.log(resp.data);
    };

    useEffect(() => {
        getBoarData();
        if (getBoarData.length > 0) {
            setImagePath("img/" + boardData.img);
        }
    }, []);

    useEffect(() => {
        setImgList(boardData.boardImageList);
        console.log("board :" + JSON.stringify(boardData));
    }, [boardData]);

    useEffect(() => {
        console.log("img :" + imgList);
    }, [imgList]);
    return (
        <styledComponents.BackgroundBlock>
            <Spacer></Spacer>
            {boardData != null && imgList != null ? (
                <BoardBlockGrid>
                    <BoardImageBlock>
                        {imgList.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`이미지 ${index + 1}`}
                            />
                        ))}
                    </BoardImageBlock>
                    <BoardMainTextBlock>
                        <BoardTitleBlock>{boardData.title}</BoardTitleBlock>
                        <BoardContentBlock>
                            {boardData.content}
                        </BoardContentBlock>
                        <BoardDateBlock>
                            {boardData.writeDatetime}
                        </BoardDateBlock>
                        <BoardUserIdBlock>
                            {boardData.writerId}
                        </BoardUserIdBlock>
                        <BoardUserNicknameBlock>
                            {boardData.writerNickname}
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
