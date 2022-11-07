function login(){
    setCookie("username", username, 186)
    setCookie("password", password, 186)
    if(checkCookie()){
        window.location.href = "/cloud/home.html"
    } else{
        window.location.reload()
    }
}