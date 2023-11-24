import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/boardList").reply(200, {
    data: [
        { pagination: "1", title: "test_page1", idx: "1" },
        { pagination: "1", title: "test_page2", idx: "2" },
        { pagination: "1", title: "test_page3", idx: "3" },
        { pagination: "1", title: "test_page4", idx: "4" },
        { pagination: "1", title: "test_page5", idx: "5" },
        { pagination: "1", title: "test_page6", idx: "6" },
    ],
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
        },
    ],
    code: 200,
});

mock.onPost("/login").reply(200, {
    code: 200,
    message: "success",
    id: "test_user",
});

export default mock;
