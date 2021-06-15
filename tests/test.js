describe('Matching-Days_Project ', function () {
    it('it should get the day of the date set', function () {
        let tests = dates();
        tests.setDate("16/02/2021");

        assert.deepEqual(tests.getDate(), "");
    });
});