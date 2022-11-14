function login(username, password, email){
    setCookie("username", username, 186);
    setCookie("password", password, 186);
    setCookie("email", email, 186);
    if(checkCookie()){
        window.location.href = "/cloud/home.html";
    } else{
        window.location.reload();
    }
};

funtion setLogin(){
    password = document.getElementById("loginEmail");
    email = document.getElementById("loginPassword");
    username = document.getElementById("loginName");
    login(username, password, email);
};

funtion setRegister(){
    password = document.getElementById("registerEmail");
    email = document.getElementById("registerPassword");
    username = document.getElementById("registerName");
    login(username, password, email);
};