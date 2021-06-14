var dateOneElem = document.getElementById("dateOne");
var dateTwoElem = document.getElementById("dateTwo");

var dayI = document.querySelectorAll(".day")


var list = document.getElementsByTagName("li")

dateOneElem.onchange = () => {
  var d = new Date(dateOneElem.value);
  var n = dayI[d.getDay()];

  for(var i=0; i<list.length;i++){
    var listIn = list[i];
    listIn.classList.remove('orange')
  }

  if (n) {
    n.classList.add("orange");
  }

}

dateTwoElem.onchange = () => {
  var c = new Date(dateTwoElem.value);

  var m = dayI[c.getDay()];

  if (m) {
    m.classList.add("blue")
  }
}



