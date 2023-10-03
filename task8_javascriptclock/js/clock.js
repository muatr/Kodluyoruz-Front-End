
let yourname = prompt("Adınız:")
let myName = document.querySelector("#myName")
myName.innerHTML = yourname

function showTime() {
    var d = new Date();
    var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var dayName = days[d.getDay()];
    document.getElementById("myClock").innerHTML = d.toLocaleTimeString() + " " + dayName;
  }
  setInterval(showTime, 1000);
