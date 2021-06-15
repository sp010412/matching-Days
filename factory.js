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
    function getDate() {
        return aOne;
    }

    function setDateTwo(secondD) {
        date2 = new Date(secondD);
        aTwo = arr[date2.getDay()];
    }

    function getDateTwo() {
        return aTwo;
    }

    function color(date1, date2) {

        if (date1 != "") {
            return aTwo.color = "orange";
        }
        if (date2 != "") {
            return aOne.color = "orange"; "blue";
        }
        if (date1 === date2) {
            return aOne.color = "green";

        } else {
            return aTwo.color = "green"
        }
    }


    return {
        setDate,
        getDate,
        setDateTwo,
        getDateTwo,
        color,
    }
}