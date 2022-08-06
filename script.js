var cross_or_circle = "X";
var player_1 = [];
var player_2 = [];
const winning_combination = [
    "147",
    "258",
    "369",
    "123",
    "456", 
    "789",
    "159",
    "357"
]

function input(btn_number){
    var btn = document.getElementById(`btn_${btn_number}`);
    var player_turn_text = document.getElementById("which_player");

    if (cross_or_circle === "X" && btn.innerHTML === ""){
        btn.innerHTML = "&times";
        btn.style.color = "red";
        btn.style.fontSize = "110px"
        player_turn_text.innerHTML = "2";
        cross_or_circle = "O";
        player_1.push(btn_number);
    } else if (btn.innerHTML === "") {
        btn.innerHTML = "&#11096";
        btn.style.color = "blue";
        btn.style.fontSize = "75px"
        btn.style.fontWeight = "900"
        player_turn_text.innerHTML = "1";
        cross_or_circle = "X";
        player_2.push(btn_number);
    }

    // CHECKS IF PLAYER WINS

    // SORT
    player_1_sorted = player_1.sort();
    player_1_string = player_1_sorted.join("")

    player_2_sorted = player_2.sort();
    player_2_string = player_2_sorted.join("")

    var player_1_winning_combination = ""
    
    player_1_wins = winning_combination.some(function(combination){
        if (player_1_string.includes(combination)){
            player_1_winning_combination = combination;
            return true;
        }
        return false;
    });
    var  player_2_winning_combination = ""

    player_2_wins = winning_combination.some(function(combination){
        if(player_2_string.includes(combination)){
            player_2_winning_combination = combination;
            return true;
        }
        return false;
    })

    // WIN MESSAGE AND WIN LINE
    var canvas = document.getElementById("win_lines");
    var win_line = canvas.getContext("2d");
    win_line.lineWidth = 2;

    var win_feedback = document.getElementById("win_feedback");
    var win_feedback_box = document.getElementById("win_feedback_box");

    if (player_1_wins){
        win_feedback_box.classList.add("active");
        win_feedback.innerHTML = "Vince giocatore 1!"
        win_line.strokeStyle = "#FF0000";
        switch(player_1_winning_combination){
            // VERTICAL LINES
            case "123":
                win_line.beginPath();
                win_line.moveTo(48, 0);
                win_line.lineTo(48, 500);
                win_line.stroke();
                break;
            case "456":
                win_line.beginPath();
                win_line.moveTo(147, 0);
                win_line.lineTo(147, 500);
                win_line.stroke();
                break;
            case "789":
                win_line.beginPath();
                win_line.moveTo(247, 0);
                win_line.lineTo(247, 500);
                win_line.stroke();
                break;

            // HORIZONTAL LINES
            case "147":
                win_line.beginPath();
                win_line.moveTo(0, 23);
                win_line.lineTo(500, 23 );
                win_line.stroke();
                break;
            case "258":
                win_line.beginPath();
                win_line.moveTo(0, 73);
                win_line.lineTo(500, 73 );
                win_line.stroke();
                break;
            case "369":
                win_line.beginPath();
                win_line.moveTo(0, 123);
                win_line.lineTo(500, 123 );
                win_line.stroke();
                break;

            //  CROSS LINES
            case "159":
                win_line.beginPath();
                win_line.moveTo(0, 0);
                win_line.lineTo(300, 150 );
                win_line.stroke();
                break;
            case "357":
                win_line.beginPath();
                win_line.moveTo(300, 0 );
                win_line.lineTo(0, 145);
                win_line.stroke();
                break;
        }
    } else if (player_2_wins){
        win_feedback_box.classList.add("active");
        win_feedback.innerHTML = "Vince giocatore 2!"
        win_line.strokeStyle = "#0000FF";
        switch(player_2_winning_combination){
            // VERTICAL LINES
            case "123":
                win_line.beginPath();
                win_line.moveTo(48, 0);
                win_line.lineTo(48, 500);
                win_line.stroke();
                break;
            case "456":
                win_line.beginPath();
                win_line.moveTo(147, 0);
                win_line.lineTo(147, 500);
                win_line.stroke();
                break;
            case "789":
                win_line.beginPath();
                win_line.moveTo(247, 0);
                win_line.lineTo(247, 500);
                win_line.stroke();
                break;

            // HORIZONTAL LINES
            case "147":
                win_line.beginPath();
                win_line.moveTo(0, 23);
                win_line.lineTo(500, 23 );
                win_line.stroke();
                break;
            case "258":
                win_line.beginPath();
                win_line.moveTo(0, 73);
                win_line.lineTo(500, 73 );
                win_line.stroke();
                break;
            case "369":
                win_line.beginPath();
                win_line.moveTo(0, 123);
                win_line.lineTo(500, 123 );
                win_line.stroke();
                break;

            //  CROSS LINES
            case "159":
                win_line.beginPath();
                win_line.moveTo(0, 0);
                win_line.lineTo(300, 150 );
                win_line.stroke();
                break;
            case "357":
                win_line.beginPath();
                win_line.moveTo(300, 0 );
                win_line.lineTo(0, 145);
                win_line.stroke();
                break;
        }
    } else if(player_1.length + player_2.length === 9){
        win_feedback_box.classList.add("active");
        win_feedback.innerHTML = "Pareggio !"
    }
}

function start_new_match(){
    // CLEARS ALL BUTTONS
    for(i = 1; i < 10; i++){
        var button = document.getElementById(`btn_${i}`);
        button.innerHTML = ""
    }
    var canvas = document.getElementById("win_lines");
    var win_line = canvas.getContext("2d");
    win_line.clearRect(0, 0, 500, 500)
    
    player_1 = [];
    player_2 = [];

    var feedback_box = document.getElementById("win_feedback_box");
    feedback_box.classList.remove("active")
}