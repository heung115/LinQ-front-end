import React, { useState } from "react";

export default function useBoard() {
    const [board, setBoard] = useState({
        title: "",
        content: "",
        createdBy: "",
        boardImageList: ["image", "asd"],
    });

    const onChange = (event) => {
        const { value, name } = event.target; //event.target에서 name과 value만 가져오기
        setBoard({
            ...board,
            [name]: value,
        });
    };
    return {
        board,
        onChange,
    };
}
