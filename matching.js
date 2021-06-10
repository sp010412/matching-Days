var dateOneElem = document.getElementById("dateOne");
var dateTwoElem = document.getElementById("dateTwo");

// var monElem = document.getElementById("Monday");
// var tueElem = document.getElementById("Tuesday");
// var wedElem = document.getElementById("Wednesday");
// var thurElem = document.getElementById("Thursday");
// var friElem = document.getElementById("Friday");
// var satElem = document.getElementById("Saturday");
// var sunElem = document.getElementById("Sunday");

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
  console.log(n)

  for (var i = 0; i < dayI.length; i++) {
    // console.log(weekday[dayI[i].value ])
  }
  if(dayI[d.getDay()]){
    dayI[d.getDay()].classList.add("orange")
  }

  // console.log(dayI[i]);
}

dateTwoElem.onchange = () => {
  var d = new Date(dateTwoElem.value);
  var n = weekday[d.getDay()];
  console.log(n)
}


