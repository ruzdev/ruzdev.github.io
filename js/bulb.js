function bulb_switch(n) {
    let bulb=document.getElementById('bulb_image')
    if (n == 1) {
        bulb.src = 'img/pic_bulbon.gif'
        document.getElementById('btn_on').style.backgroundColor='green'
        document.getElementById('btn_off').style.backgroundColor='#bbb'
    }
    else {
        bulb.src = "img/pic_bulboff.gif";
        document.getElementById("btn_off").style.backgroundColor = "green";
        document.getElementById("btn_on").style.backgroundColor = "#bbb";
    }
}
