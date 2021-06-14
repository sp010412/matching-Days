function dates() {

    var arr = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];

    var day = new Array(7);
    day[0] = "Sunday";
    day[1] = "Monday";
    day[2] = "Tuesday";
    day[3] = "Wednesday";
    day[4] = "Thursday";
    day[5] = "Friday";
    day[6] = "Saturday";



    function find(firstD) {
        var date1 = new Date(firstD);
    return aOne = day[date1.getDay()];   
    }

    function findTwo(secondD) {
    var date2 = new Date(secondD);
    return aTwo = day[date2.getDay()];
    }



    return {
        find,
        findTwo,
    }
}