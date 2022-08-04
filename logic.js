function first_btn_click(){
    btn_click();
    timer_start = setInterval(start_timer, 10);
    var button = document.getElementById("main_button");
    button.onclick = btn_click
    button.innerHTML = "click me!";
    
}

function btn_click(){
    var current_value = parseInt(document.getElementById("clicks").innerText);
    var counter = document.getElementById("clicks");
    current_value ++;
    counter.innerHTML = current_value.toString();

    calculate_cps();
    
}
var new_time_value = 0;

function start_timer(){
    var timer = document.getElementById("timer");
    var main_button = document.getElementById("main_button");
    new_time_value += 0.01;
    if (new_time_value < 5){
        timer.innerHTML = new_time_value.toFixed(2);
    } else{
        clearInterval(timer_start);
        main_button.disabled = true;
    }
}

function calculate_cps(){
    cps = document.getElementById("cps");
    clicks = parseInt(document.getElementById("clicks").innerHTML);
    time =  parseFloat(document.getElementById("timer").innerHTML);
    cps_value = clicks / time;
    cps.innerHTML = cps_value.toFixed(2);
}
function change_icon(){
    var icon = document.getElementById("ciro")
    var icon_href = icon.href.substring(24);
    if (icon_href == "logo.png"){
        icon.href = "logo_black.png";
    } else {
        icon.href = "logo.png";
    }
}
blinking_icon = setInterval(change_icon, 1000);




function restart(){
    // enables the clicks button
    var button  = document.getElementById("main_button");
    button.disabled = false
    button.onclick = first_btn_click

    // resets the rimer
    var timer = document.getElementById("timer");
    new_time_value = 0;
    timer.innerHTML = "0";

    // resets the cps
    var cps = document.getElementById("cps");
    cps_value = 0;
    cps.innerHTML = "0";

    // resets the clicks counter
    var clicks_counter = document.getElementById("clicks");
    clicks_counter.innerHTML = "0";
    current_value = 0;
}



//  STYLE

function change_theme(){
    var body = document.body;
    var click_button = document.getElementById("main_button");

    body.classList.toggle("body_light_mode");
    click_button.classList.toggle("main_button_light_mode")
}

function change_text(){
    var cps_text = document.getElementById("cps_text");
    var header_text = document.getElementsByClassName("header_text");
    var width = parseInt(window.innerWidth)
    if (width > 1000){
        cps_text.innerHTML = "average cps";
    } else {
        cps_text.innerHTML = "cps";
    }
    if (width < 600){
        header_text[0].innerHTML = "&nbsp&nbspCPS test by G.L."
    }
}

window.addEventListener("resize", change_text);
    