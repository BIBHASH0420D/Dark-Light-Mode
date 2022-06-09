function dark(){
    document.body.style.background = "#111";
    document.querySelector('.container').style.background = "#111";
    document.querySelector('.container').style.boxShadow = " 5px 5px 10px  #000 , -5px -5px  10px  #3a3a3a";
    document.querySelector('#heading').style.color = "#fff";
}
function light(){
    document.body.style.background = "#E0E5EC";
    document.querySelector('.container').style.background = "#E0E5EC";
    document.querySelector('.container').style.boxShadow = " 5px 5px 10px  #fffff5 , -5px -5px  10px  #a3b1c6";
    document.querySelector('#heading').style.color = "#111";
}