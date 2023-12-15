const LoginInfo = () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("id");

    return (
        <div>
            {token ? (
                <div>
                    <p>user: {userId}</p>
                </div>
            ) : (
                <p>로그인이 필요합니다.</p>
            )}
        </div>
    );
};

export default LoginInfo;
