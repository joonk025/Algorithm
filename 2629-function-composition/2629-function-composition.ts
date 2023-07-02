type F = (x: number) => number;
// input is an array of functions
// output is a number


function compose(functions: F[]): F {
    functions = functions.reverse();
    let index: number = 0;
    
	return function calculate (x: number): number {
        if (index === functions.length) return x;
        
        const func = functions[index];
        index += 1;
        return calculate(func(x));
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */