const logout = () => {
    let token = localStorage.getItem("token");
    alert("로그아웃 되었습니다");
    localStorage.clear();
    window.location.replace("/");
    //alert("logout");
    //window.location.replace("http://localhost:3000/");
};

export default logout;
