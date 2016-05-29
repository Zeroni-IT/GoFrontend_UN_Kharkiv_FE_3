var test = require('../js/build/obj_for_testing.js');

describe("Test case", function () {

    var AMOUNT_QUESTIONS = 3; // Test include three questions
    var CORRECT_ANSWERS = 1; // One correct answer in question
    var result;

    it("Amount questions", function () {
        result = test.length;
        expect(result).toEqual(AMOUNT_QUESTIONS);
    });

    it("Corrected answers", function () {
        for (var i = 0; i < test.length; i++) {
            result = 0;
            for (var j = 0; j < test[i].answers.length; j++) {
                if (test[i].answers[j].correct) {
                    result++;
                }
            }
            expect(result).toEqual(CORRECT_ANSWERS);
        }
    });

});