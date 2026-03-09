const slider = document.getElementById("slider");
const emoji = document.getElementById("emoji");
const message = document.getElementById("message");

slider.oninput = function() {

    let value = this.value;

    if(value == 1){
        emoji.innerHTML = "୧(#Φ益Φ#)୨";
        message.innerHTML = "ANGRYYYYYYYYY.";
    }

    if(value == 2){
        emoji.innerHTML = "(╥_╥)";
        message.innerHTML = "Dont be sad.";
    }

    if(value == 3){
        emoji.innerHTML = "(＞﹏＜)";
        message.innerHTML = "Good enough sigh.";
    }

    if(value == 4){
        emoji.innerHTML = "(￣ω￣)";
        message.innerHTML = "Chillingggggg.";
    }

    if(value == 5){
        emoji.innerHTML = "(*^ω^)";
        message.innerHTML = "Yipppeee happyyyy!";
    }

}