var cross_or_circle = "X";
var player_1 = [];
var player_2 = [];
const winning_combinations = [
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,2,3],
    [4,5,6], 
    [7,8,9],
    [1,5,9],
    [3,5,7]
]

function input(btn_number){
    var btn = document.getElementById(`btn_${btn_number}`);
    var player_turn_text = document.getElementById("which_player");

    if (cross_or_circle === "X" && btn.innerHTML === ""){
        btn.innerHTML = "&times";
        btn.style.color = "red";
        btn.style.fontSize = "110px"
        btn.style.fontWeight = "400"
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

    var winning_combination = []
    var winner = ""

    player_1_wins = winning_combinations.forEach(function(combo){
        combo_check = combo.every(function(num){
            return player_1.includes(num)
        })
        if (combo_check == true){
            winner = "player1"
            winning_combination = combo
        }
    })
    


    player_2_wins = winning_combinations.forEach(function(combo){
        combo_check = combo.every(function(num){
            return player_2.includes(num)
        })
        if (combo_check == true){
            winner = "player2"
            winning_combination = combo
        }
    })

    winning_combination =  winning_combination.join("")
    console.log(winning_combination)

    // WIN MESSAGE AND WIN LINE
    var canvas = document.getElementById("win_lines");
    var win_line = canvas.getContext("2d");
    win_line.lineWidth = 2;

    var win_feedback = document.getElementById("win_feedback");
    var win_feedback_box = document.getElementById("win_feedback_box");

    if (winner === "player1"){
        win_feedback_box.classList.add("active");
        win_feedback.innerHTML = "Vince giocatore 1!"
        win_line.strokeStyle = "#FF0000";
        switch(winning_combination){
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
    } else if (winner === "player2"){
        win_feedback_box.classList.add("active");
        win_feedback.innerHTML = "Vince giocatore 2!"
        win_line.strokeStyle = "#0000FF";
        switch(winning_combination){
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