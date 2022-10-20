
hours()
days()
minutes()
seconds()

function days(){
    let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("days-num").innerHTML = days;

 
}, 1000);
}


function hours() {
    let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("hours-num").innerHTML = hours   ;

 
}, 1000);
    

}


function minutes() {
    let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("min-num").innerHTML = minutes ;

 
}, 1000);
}

function seconds() {
    let countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

    let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("sec-num").innerHTML = seconds ;

 
}, 1000);
}

/* var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); */