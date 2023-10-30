import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create();
const mock = new MockAdapter(axiosInstance);

// 가짜 응답 설정
mock.onPost("/login").reply(200, {
    code: 200,
    message: "success",
});

// 실제 요청 대신 가짜 응답을 반환하는 함수
async function loginWithMockedResponse(body) {
    try {
        const response = await axiosInstance.post("/login", body);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export { loginWithMockedResponse };
