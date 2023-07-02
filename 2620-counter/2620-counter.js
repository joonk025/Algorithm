/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function(n) {
    let counter = 0;
    
    return function() {
        if (counter === 0) {
            counter += 1;
            return n
        } else {
            return n + counter++;
        }
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */