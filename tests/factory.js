function dates() {

    var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var theDate1;
    var theDate2;
    var day1;
    var day2;

    function myList(){
        return weekDays
    }

    function getDay(weekDay) {
        theDate1 = new Date(weekDay);
        day1 = weekDays[theDate1.getDay()];
        return day1;
    }

    function getDayTwo(weekDay) {
        theDate2 = new Date(weekDay);
        day2 = weekDays[theDate2.getDay()];
        return day2;
    }

    function colorOne() {

        if (theDate1 != "") {
            return day1.color = "orange";
        }
    }
    function colorTwo() {

        if (theDate2 != "") {
            return day2.color = "blue";
        }
    }

    function sameDay() {

        if (day1 === day2 && theDate1 != "" && theDate2 != "") {

            return day1.color = "green"
        } else{
            return day1.color = "green"
        }
        
    }


    return {
        myList,
        getDay,
        getDayTwo,
        colorOne,
        colorTwo,
        sameDay,  
    }
}