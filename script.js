
function show_menu(){
    var menu = document.getElementById("menu");
    var menu_btn = document.getElementsByClassName("header_menu_btn")[0];
    window.menu_btn_svg = menu_btn.innerHTML;

    menu.style.transform = "translate(0%, 0%)"
    menu_btn.onclick = close_menu

    menu_btn.classList.add("animate")

    menu_btn.innerHTML = `<svg style="fill: white; height: 70px; width: 35px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>`

    setTimeout(function()   {
        menu_btn.classList.remove("animate")
    }, 1000)
}

function close_menu(){
    var menu = document.getElementById("menu");
    var menu_btn = document.getElementsByClassName("header_menu_btn")[0];


    menu.style.transform = "translate(0%, -100%)"

    menu_btn.innerHTML = menu_btn_svg


    menu_btn.onclick = show_menu

}


function on_resize(){
    var width = window.innerWidth
    var ig_link = document.getElementById("instagram_link")
    var twitter_link = document.getElementById("twitter_link")
    var icons_container = document.getElementsByClassName("header_icons")[0]

    if (width < 450){
        ig_link.style.display = "none"
        twitter_link.style.display = "none"
        icons_container.style.width = "70px"
    } else{
        ig_link.style.display = "flex"
        twitter_link.style.display = "flex"
        icons_container.style.width = "200px"
        icons_removed = false
    }
}

setTimeout(on_resize, 100)

window.addEventListener("resize", on_resize)

var ciro = 54

function auto_height(form_input){
    form_input.style.height = "46px"
    form_input.style.height =   (form_input.scrollHeight )+"px"
    if(parseInt(form_input.style.height) > ciro ){
        window.scrollBy(0, 40)
    }

}

function input_form_focus(value){
    window.form_description = document.getElementById(`description_${value}`)

    form_description.style.color = "rgb(94, 218, 255)"
}

function  input_form_focusout(ciro){
    form_description.style.color = "#fafafa"
}

