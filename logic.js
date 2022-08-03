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
    cps_value = clicks / time
    cps.innerHTML = cps_value.toFixed(2)
}