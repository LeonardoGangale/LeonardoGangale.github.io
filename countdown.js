const text_element = document.getElementById("countdown_text")

// Set the date we're counting down to
var countDownDate = new Date("Oct 5, 2022 7:00:00").getTime();

var xmlHttp;
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}



// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var st = srvTime();
  var now = new Date(st);
  console.log(st, now)

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  text_element.innerHTML= days + "d " + hours + "h " + minutes + "m " + seconds + "s "

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    text_element.style.bottom = "13%"
    text_element.style.fontSize = "4vw"
    text_element.innerHTML = "<a href='https://youtu.be/8FIpDIMjSTs' >???</a>"
  }
}, 1000);