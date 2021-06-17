var dateOneElem = document.getElementById("dateOne");
var dateTwoElem = document.getElementById("dateTwo");
var list = document.getElementsByTagName("li");

var factoryInsta = dates()

dateOneElem.onchange = () => {

  var n = factoryInsta.getDay(dateOneElem.value)
  var m = factoryInsta.getDayTwo(dateTwoElem.value)


  for (var i = 0; i < list.length; i++) {
    var listIn = list[i];
    listIn.classList.remove('orange');
    listIn.classList.remove('green');
  }
  document.getElementById(n).classList.add("orange")

  if(n === m){
    document.getElementById(n).classList.add("green");
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
  document.getElementById(m).classList.add("blue")

  if(n === m){
    document.getElementById(n).classList.add("green");
  }
}



