function dates() {

    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var theDate1;
    var theDate2;

    function getDay(weekDay) {
        theDate1 = new Date(weekDay);
        return weekDays[theDate1.getDay()];
    }

    function getDayTwo(weekDay) {
        theDate2 = new Date(weekDay);
        return weekDays[theDate2.getDay()];
    }

    function colorOne() {

        if (theDate1 != "") {
            return theDate1.color = "orange";
        }
    }
    function colorTwo() {

        if (theDate2 != "") {
            return theDate2.color = "blue";
        }
    }

    // function sameDay() {

    //     if (theDate1 === theDate2 && theDate1 !== undefined && theDate2 !== undefined) {

    //         weekDays[theDate1].color = "green";
    //         return weekDays
    //     }
    // }
    
    return {
        getDay,
        getDayTwo,
        colorOne,
        colorTwo,
        //sameDay,
    }
}