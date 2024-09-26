let main = document.querySelector(".main");
let body = document.querySelector(".body");
console.log(body);

function change_phone (phone){
 main.src = phone;
}

function change_background (color){
    body.style.background = color;
}