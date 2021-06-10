var dateOneElem = document.getElementById("dateOne");
var dateTwoElem = document.getElementById("dateTwo");

var dayI = document.querySelectorAll(".day")




var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

dateOneElem.onchange = (e) => {
  e.preventDefault()
  var d = new Date(dateOneElem.value);
  var n = weekday[d.getDay()];

  dayI[d.getDay()].classList.remove("blue")


  if(dayI[d.getDay()]){
    dayI[d.getDay()].classList.add("orange")
  }
}

dateTwoElem.onchange = () => {
  var d = new Date(dateTwoElem.value);
  var n = weekday[d.getDay()];

  dayI[d.getDay()].classList.remove("orange")

  if(dayI[d.getDay()]){
    dayI[d.getDay()].classList.add("blue")
  }

}



