function one(){
    document.getElementById("cute").src = "cute4.gif";
    var n = new Audio("button.mp3");
    n.play();
}

function two(){
    document.getElementById("cute").src = "cute3.gif";
    var n = new Audio("button.mp3");
    n.play();
}

function three(){
    document.getElementById("cute").src = "cute2.gif";
    var n = new Audio("button.mp3");
    n.play();
}

function four(){
    document.getElementById("cute").src = "cute1.gif";
    var n = new Audio("button.mp3");
    n.play();
}

function lock(){
    document.getElementById('lock').style.display = 'none';
    document.getElementById('font').style.display = 'block';
    document.getElementById('font').style.animationPlayState = "running";
    var s = new Audio("here.mp3");
    s.play();
    var p = new Audio("magic.mp3");
    p.play();
}
