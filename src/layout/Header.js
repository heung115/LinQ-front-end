// import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import logout from "../Logout";
const HeaderBlock = styled.div`
    position: fixed; //화면을 움직여도 고정되어 있음.
    z-index: 10;
    width: 100%;
    padding: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    background: #85c7cd;
    margin: 00px;
`;

const Wrapper = styled(Responsive)`
    height: 2rem;
    display: flex;
    //align-items: center;
    justify-content: space-between; /* 중앙 정렬을 해제하고 공간을 동일하게 분배 */
    .logo {
        position: fixed;
        font-size: 3.125rem;
        font-weight: 800;
        letter-spacing: 2px;
        left: 50%;
        transform: translate(-50%);
    }
    .right {
        display: flex;
        align-items: center;
    }
`;
const Spacer = styled.div`
    height: 2rem;
`;

const Header = () => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <div className="logo"></div>
                    <div className="right">
                        <Link to="/">홈</Link>&nbsp;
                        <Link to="/search">검색</Link>&nbsp;
                        <Link to="/login">로그인</Link>&nbsp;
                    </div>
                    <div>아이디 : {localStorage.getItem("id")}</div>
                    <button onClick={() => logout()}>로그아웃</button>
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default Header;
