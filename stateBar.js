txtBar = document.getElementById('txtBar');
stateBar = document.getElementById('stateBar');
txts = txtBar.querySelectorAll('p.title');
states = stateBar.querySelectorAll('div.dot');

function next(){
    for(i = 0; i < states.length; i++){
        if(typeof(states[i+1]) == 'undefined' && states[i+1] == null){
            if(checkCookie()){
                window.location.href = "/cloud/home.html"
            } else{
                window.location.href = "/cloud/login.html"
            }
            break
        };
        if(states[i].classList.contains("active") && typeof(states[i+1]) != 'undefined'){
            states[i].classList.remove('active');
            txts[i].classList.remove('active');
            states[i+1].classList.add('active');
            txts[i+1].classList.add('active');
            break
        };
    };
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function checkCookie() {
    let username = getCookie("username");
    let password = getCookie("password");
    return (username != "" && password != "")
}