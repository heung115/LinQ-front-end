import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/boardlist").reply((config) => {
    // config.params에는 요청의 쿼리 매개변수가 포함됩니다.
    const page = parseInt(config.params.page) || 1; // 기본값은 1로 설정

    // 가짜 응답 데이터 생성
    const responseData = Array.from({ length: 14 }, (_, index) => ({
        pagination: "1",
        title: `test_page${index + 1}`, // 7부터 13까지
        idx: `${index + 1}`,
    }));

    // 실제 데이터를 6개씩 페이지에 맞춰 반환
    const startIndex = (page - 1) * 6;
    const slicedData = responseData.slice(startIndex, startIndex + 6);

    // 200 상태 코드와 함께 응답 데이터 반환
    return [200, { data: slicedData }];
});

mock.onGet("/boardDetail").reply(200, {
    data: [
        {
            pagination: "1",
            title: "test_page",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            writeDatetime: "2023.08.18. 00:54:27",
            idx: "1",
            writerId: "test id",
            writerNickname: "안녕하세요나는주코야키",
            writerProfileImage: null,
            img: "123",
        },
    ],
    code: 200,
});

mock.onPost("/auth/sign-in").reply(200, {
    code: "SU",
    id: "test_user",
    token: "123",
});

export default mock;
