function dates() {

    var arr = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"]

    var date1 = "";
    var date2 = "";

    function find(firstD) {
        if (date1 = new Date(firstD)) {
            return aOne = arr[date1.getDay()];
        }
    }
    function findTwo(secondD) {
        if (date2 = new Date(secondD)) {
            return aTwo = arr[date2.getDay()];
        }
    }

    // function color() {

    // }


    return {
        find,
        findTwo,
    }
}