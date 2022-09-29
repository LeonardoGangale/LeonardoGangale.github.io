const text_element = document.getElementById("countdown_text")

// Set the date we're counting down to
var countDownDate = new Date("Oct 5, 2022 7:00:00").getTime();


/* function httpGet(theUrl) {
  let xmlHttpReq = new XMLHttpRequest();
  let ciro = new Headers()
  xmlHttpReq.open("GET", theUrl, true); 
  xmlHttpReq.send();
  console.log(xmlHttpReq.responseText)
  return xmlHttpReq.responseText;
}
 */
let url = "https://currentmillis.com/time/minutes-since-unix-epoch.php"

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
/*   let syncTime = httpGet(url);
  var now= new Date(syncTime*60*1000); 
  console.log(syncTime) */
  fetch(url, {  
    method: "GET",
    cache: "no-store"
    }).then( (response) => {response.json().then(function(data) {
      sync_time = data;
      })})

  let now = new Date(sync_time * 60 * 1000)
  console.log(now)
      
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  console.log(distance)

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  text_element.innerHTML= days + "d " + hours + "h " + minutes + "m "

  // If the count down is over, write some text
  if (distance <= 0) {
    clearInterval(x);
    text_element.innerHTML = "<a href='https://youtu.be/8FIpDIMjSTs' >???</a>"
  }
}, 1000);