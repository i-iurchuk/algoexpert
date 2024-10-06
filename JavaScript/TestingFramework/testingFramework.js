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

// Solution #2: create an class within expect() function (instead of returned object)

describe("TEST #1", () => {
    it("suit #1", () => {
        expect(1).toBeType('boolean');
    });

    it("suit #2", () => {
        expect(123).toBeType('object');
    });
});
