/*
Testing Framework
Implement the following three functions of a basic JavaScript testing framework:

"describe" - This function defines a test suite of related test cases. It takes in a string testSuiteName and a callback func, which makes one or more calls to it.

"it" - This function defines a single test case in a test suite and is called within a describe's callback func. It takes in a string testCaseName and its own callback func, which makes one or more calls to expect.

"expect" - This function defines a single check in a test case and is called within an it's callback func. It takes in an arbitrary parameter actual and returns an object with the following three functions that are used to compare actual to other values:

- expect(actual).toExist() --This function checks that actual is neither null nor undefined.

- expect(actual).toBe(expected) --This function checks that actual is strictly equal to expected.

- expect(actual).toBeType(type) --This function checks that actual is of the type type, which can be any string returned by the typeof operator.

As a test suite and its test cases are executed, they should print the following strings:

// When a test suite begins:
"beginning test suite {testSuiteName}"

// When a test suite successfully completes:
"successfully completed test suite {testSuiteName}"

// When a test case begins:
"beginning test case {testCaseName}"

// When a test case successfully completes:
"successfully completed test case {testCaseName}"

// When a test suite fails (because a check in one of its test cases fails):
"failed running test suite {testSuiteName} on test case {testCaseName} with error message {errorMessage}"

// When `expect(actual).toExist()` fails, `errorMessage` should be:
"expected value to exist but got {actual}"

// When `expect(actual).toBe(expected)` fails, `errorMessage` should be:
"expected {actual} to be {expected}"

// When `expect(actual).toBeType(type)` fails, `errorMessage` should be:
"expected {actual} to be of type {type} but got {typeOfActual}"
When a check fails, the following things should happen:

The relevant expect function should throw the appropriate errorMessage.
The relevant it function should throw an arbitrary error, and its execution should stop.
The relevant describe function should print the failure string with console.error (all other strings should be printed with console.log), and its execution should stop.
For the sake of simplicity:

All output strings should be in lowercase letters, with no punctuation whatsoever.
No modifications should be made to testSuiteName and testCaseName values (they shouldn't be lowercased).
When actual and expected values are printed within error messages, they should be stringified with JSON.stringify().
Note that this question's tests naturally check that console.log and console.error are correctly called; this means that debugging your solution with console.log will unavoidably make your solution fail some tests.

Sample Usage #1
describe('Passing Test Suite', () => {
  it('Passing Test Case #1', () => {
    expect('foo').toExist();
    expect(1 + 1).toBe(2);
  });
  
  it('Passing Test Case #2', () => {
    expect({}).toBeType('object');
  });
});
Sample Output #1
// Console logs:
beginning test suite Passing Test Suite
beginning test case Passing Test Case #1
successfully completed test case Passing Test Case #1
beginning test case Passing Test Case #2
successfully completed test case Passing Test Case #2
successfully completed test suite Passing Test Suite

Sample Usage #2
describe('Failing Test Suite', () => {
  it('Passing Test Case', () => {
    expect(0).toBe(0);
  });

  it('Failing Test Case', () => {
    expect(true).toBe(true);
    expect(true).toBe(false);
  });

  it('Unreachable Test Case', () => {
    expect('foo').toBe('bar');
  });
});
Sample Output #2
// Console logs:
beginning test suite Failing Test Suite
beginning test case Passing Test Case
successfully completed test case Passing Test Case
beginning test case Failing Test Case
// Console errors:
failed running test suite Failing Test Suite on test case Failing Test Case with error message expected true to be false
*/

// Solution #1
function describe(testSuiteName, func) {
    console.log(`beginning test suite ${testSuiteName}`);
    
    try {
        func();
        console.log(`successfully completed test suite ${testSuiteName}`);
    } catch({ errorMessage, testCaseName }) {
        console.error(`failed running test suite ${testSuiteName} on test case ${testCaseName} with error message ${errorMessage}`);
    }
}
  
function it(testCaseName, func) {
    console.log(`beginning test case ${testCaseName}`);
    
    try {
        func();
        console.log(`successfully completed test case ${testCaseName}`);
    } catch(errorMessage) {
        throw { errorMessage, testCaseName };
    }
}

function expect(actual) {
    const stringifiedActual = JSON.stringify(actual);

    return {
        toExist: function() {
            if(actual == null) {
                throw `expected value to exist but got ${actual}`;
            }
        },
        toBe: function(expected) {
            if(actual !== expected) {
                throw `expected ${stringifiedActual} to be ${JSON.stringify(expected)}`;
            }
        },
        toBeType: function(type) {
            if(typeof actual !== type){
                throw `expected ${stringifiedActual} to be of type ${type} but got ${typeof actual}`;
            }
        }
    }
}

// Solution #2
// create an class within expect() function (instead of returned object)

describe("TEST #1", () => {
    it("suit #1", () => {
        expect(1).toBeType('boolean');
    });

    it("suit #2", () => {
        expect(123).toBeType('object');
    });
});