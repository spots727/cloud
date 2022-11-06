txtBar = document.getElementById('txtBar');
stateBar = document.getElementById('stateBar');
txts = txtBar.querySelectorAll('p.title');
states = stateBar.querySelectorAll('div.dot');

function next(){
    for(i = 0; i < states.length; i++){
        if(typeof(states[i+1]) == 'undefined' && states[i+1] == null){
            window.location.href = "https://youtube.com"
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