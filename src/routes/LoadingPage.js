import React from "react";
import styled from "styled-components";

const LoadingPageBlock = styled.div`
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-size: 50px;
    text-align: center;
`;

const LoadingPage = () => {
    return <LoadingPageBlock>Loading</LoadingPageBlock>;
};

export default LoadingPage;
