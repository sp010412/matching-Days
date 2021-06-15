function dates() {

    var arr = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"]

    var date1 = "";
    var date2 = "";

    var aOne;
    var aTwo;

    function setDate(firstD) {
        date1 = new Date(firstD);
        aOne = arr[date1.getDay()];
    }
    function getDate(firstD) {
        return aOne;
    }

    function setDateTwo(secondD) {
        date2 = new Date(secondD);
        aTwo = arr[date2.getDay()];
    }

    function getDateTwo(firstD) {
        return aTwo;
    }

function color() {

}


return {
    find,
    findTwo,
}
}