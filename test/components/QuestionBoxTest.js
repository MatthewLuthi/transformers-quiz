const assert = require('chai').assert;
const QuestionBox = require('../src/components/QuestionBox');

describe('QuestionBox', function() {
    it('QuestionBox should return', function() {
        assert.equal(QuestionBox(), 'hello');
    });
})