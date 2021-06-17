var dateOneElem = document.getElementById("dateOne");
var dateTwoElem = document.getElementById("dateTwo");
var list = document.getElementsByTagName("li");
var displayElem = document.querySelector(".display")
var tableElem = document.querySelector(".table")

var factoryInsta = dates()


var templateSource = document.querySelector(".userTemplate3").innerHTML;
var userTemplate = Handlebars.compile(templateSource);

displayElem.innerHTML = userTemplate({ userInsta: factoryInsta.myList() })


dateOneElem.onchange = () => {
  var n = factoryInsta.getDay(dateOneElem.value)
  var m = factoryInsta.getDayTwo(dateTwoElem.value)

  for (var i = 0; i < list.length; i++) {
    var listIn = list[i];
    listIn.classList.remove('orange');
    listIn.classList.remove('green');
  }
  if (n) {
    document.getElementById(n).classList.add("orange")
  }
  if (n === m) {
    document.getElementById(n).classList.add("green")
  }
}



dateTwoElem.onchange = () => {
  var m = factoryInsta.getDayTwo(dateTwoElem.value)
  var n = factoryInsta.getDay(dateOneElem.value)

  for (var i = 0; i < list.length; i++) {
    var listIn = list[i];
    listIn.classList.remove('blue');
    listIn.classList.remove('green');
  }
  if (m) {
    document.getElementById(m).classList.add("blue")
  }
  if (n === m) {
    document.getElementById(n).classList.add("green");
  }
}




