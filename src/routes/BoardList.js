import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import LoadingPage from "./LoadingPage.js";
import * as styledComponents from "../common/StyledComponents.js";

import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Components = styled.div`
    display: grid;

    grid-template-areas:
        "myPage data "
        "myPage data ";
    grid-template-columns: 500px 100px;

    grid-gap: 20px;
    gap: 20px;

    padding-top: 30px;
    padding-left: 30px;
`;
//my page component
const MiniMyPage = styled.div`
    grid-area: myPage;
    background: white;
    border: 1px solid #000;
    padding: 5px;
    margin: 80px;
    box-shadow: 5px 5px #333;
`;
const MyPageImage = styled.div`
    height: 250px;
    width: 250px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
`;
const MyPageTextGrid = styled.div`
    display: grid;
    // place-items: center;
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 60px);

    gap: 10px 20px;

    margin-top: 20px;
    width: 280px;

    margin-left: auto;
    margin-right: auto;
`;
const MyPageTextBlock = styled.div`
    //margin: auto;
    grid-template-rows: auto;
    border: 1px solid #000;
    position: relative;
`;
const MyPageNameBlock = styled(MyPageTextBlock)`
    grid-column: 1 / 4;
    font-size: xx-large;
`;
const MyPageCenterText = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;
//board component
const BoardBlockUl = styled.ul`
    grid-area: data;

    display: grid;
    grid-template-columns: repeat(3, 240px);
    grid-template-rows: 370px 370px;

    list-style-type: none;
    margin-right: 100px;
`;
const BoardBlock = styled.li`
    border: 1px solid #000;

    display: grid;

    margin: 10px;
    background: white;
    border-radius: 10px;
    box-shadow: 5px 5px #333;
`;
const ImageBlock = styled.img`
    width: 100%;
    height: auto%;
    display: block;
    overflow: hidden;
    border-radius: 10px;
`;
const NoneImage = styled(ImageBlock)`
    content: url(img/none.png);
`;
const BoardTextBlock = styled.div`
    margin-left: 10px;
    margin-top: 5px;
`;
const BoardTitleBlock = styled(BoardTextBlock)`
    font-weight: bold;
`;
const BoardMainBlock = styled(BoardTextBlock)``;
const Size = styled.div`
    height: 900px;
`;

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    const [curPage, setCurPage] = useState(0);
    const getBoardList = async () => {
        try {
            const resp = await (await axios.get("/boardList")).data;
            setBoardList(resp.data);
        } catch (err) {
            console.log("Register err : ", err.response);
            const statusCode = err.response.status;
            const statusText = err.response.statusText;
            console.log(`${statusCode} - ${statusText}`);
        }
    };

    useEffect(() => {
        getBoardList(); // 1) 게시글 목록 조회 함수 호출
    }, []);

    return (
        <styledComponents.BackgroundBlock>
            <Size>
                {boardList.length > 0 ? (
                    <Components>
                        <MiniMyPage>
                            <MyPageImage>
                                <NoneImage></NoneImage>
                            </MyPageImage>
                            <MyPageTextGrid>
                                <MyPageNameBlock>
                                    <MyPageCenterText>이름</MyPageCenterText>
                                </MyPageNameBlock>
                                <MyPageTextBlock>
                                    <MyPageCenterText>test</MyPageCenterText>
                                </MyPageTextBlock>
                                <MyPageTextBlock>
                                    <MyPageCenterText>test</MyPageCenterText>
                                </MyPageTextBlock>
                                <MyPageTextBlock>
                                    <MyPageCenterText>test</MyPageCenterText>
                                </MyPageTextBlock>
                                <MyPageTextBlock>
                                    <MyPageCenterText>test</MyPageCenterText>
                                </MyPageTextBlock>
                                <MyPageTextBlock>
                                    <MyPageCenterText>test</MyPageCenterText>
                                </MyPageTextBlock>
                                <MyPageTextBlock>
                                    <MyPageCenterText>test</MyPageCenterText>
                                </MyPageTextBlock>
                            </MyPageTextGrid>
                        </MiniMyPage>
                        <BoardBlockUl>
                            {boardList.map((board) => (
                                <BoardBlock key={board.idx}>
                                    <Link
                                        to={`/board/${board.idx}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        <div>
                                            <NoneImage></NoneImage>
                                            <CiHeart size="40" />
                                            <FaRegCommentDots size="40" />
                                            <BoardTitleBlock>
                                                {board.title}
                                            </BoardTitleBlock>
                                            <BoardMainBlock>123</BoardMainBlock>
                                        </div>
                                    </Link>
                                </BoardBlock>
                            ))}
                        </BoardBlockUl>
                        <button>
                            <MdNavigateBefore />
                        </button>
                        <button>
                            <MdNavigateNext />
                        </button>
                    </Components>
                ) : (
                    <LoadingPage />
                )}
            </Size>
        </styledComponents.BackgroundBlock>
    );
};

export default BoardList;
