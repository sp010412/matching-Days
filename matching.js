var dateOneElem = document.getElementById("dateOne");
var dateTwoElem = document.getElementById("dateTwo");
var list = document.getElementsByTagName("li");
var displayElem = document.querySelector(".display")
var tableElem = document.querySelector(".table")



var templateSource = document.querySelector(".userTemplate3").innerHTML;
var userTemplate = Handlebars.compile(templateSource);


var factoryInsta = date();
displayElem.innerHTML = userTemplate({ userInsta: factoryInsta.myList() })


dateOneElem.onchange = () => {
  var n = factoryInsta.getDay(dateOneElem.value)
  var m = factoryInsta.getDayTwo(dateTwoElem.value)

  for (var i = 0; i < list.length; i++) {
    var listIn = list[i];
    listIn.classList.remove(factoryInsta.colorOne());
    listIn.classList.remove(factoryInsta.sameDay());
  }
  if (n) {
    document.getElementById(n).classList.add(factoryInsta.colorOne())
  }
  if (n === m) {
    document.getElementById(n).classList.add(factoryInsta.sameDay())
  }
}



dateTwoElem.onchange = () => {
  var m = factoryInsta.getDayTwo(dateTwoElem.value)
  var n = factoryInsta.getDay(dateOneElem.value)

  for (var i = 0; i < list.length; i++) {
    var listIn = list[i];
    listIn.classList.remove(factoryInsta.colorTwo());
    listIn.classList.remove(factoryInsta.sameDayTwo());
  }
  if (m) {
    document.getElementById(m).classList.add(factoryInsta.colorTwo())
  }
  if (n === m) {
    document.getElementById(n).classList.add(factoryInsta.sameDay());
  }
}




