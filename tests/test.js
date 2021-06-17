describe('Matching-Days_Project', function () {
    it('it should get the day of the date set for first date', function () {
        let tests = dates();
        assert.equal(tests.getDay('2010-04-01'), "Thursday");
        assert.equal(tests.getDay('2012-02-12'), "Sunday");
    });
    it('it should get the day of the date set for second date', function () {
        let tests = dates();
        assert.equal(tests.getDayTwo('2021-10-01'), "Friday");
        assert.equal(tests.getDayTwo('2019-01-12'), "Saturday");
    });
    it('it should add correct color for first date', function () {
        let tests = dates();
        tests.getDay('2020-04-01')
        assert.equal(tests.colorOne(), "orange");
    });
    it('it should add correct color for second date', function () {
        let tests = dates();
        tests.getDayTwo("2018-05-02")
        assert.equal(tests.colorTwo(), "blue");
    });

    it('it should add the same color when first and second date are equal', function () {
        let tests = dates();
        tests.getDay('2021-06-09')
        tests.getDayTwo("2018-05-02")
        assert.equal(tests.sameDay(), "green");
    });


});