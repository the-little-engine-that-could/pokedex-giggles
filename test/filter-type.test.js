
const test = QUnit.test;

QUnit.module('what is in the type WHAT IS IN THE TYYYYPE');

test('converts query string to object', assert => {
    // arrange
    const filter = {
        type: 'fire'
    }; 

    const expected = 'type=fire';

    // act
    const queryProps = filter(filter);

    // assert
    assert.deepEqual(queryProps, expected);
});