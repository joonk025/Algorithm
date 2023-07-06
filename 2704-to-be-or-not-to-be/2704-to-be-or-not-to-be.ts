type ToBeOrNotToBe = {
    toBe: (val: any) => string | boolean;
    notToBe: (val: any) => string | boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const judge = {
        toBe: function (val2) {
            if (val2 === val) {
                return true;
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function (val2) {
            if (val2 !== val) {
                return true;
            } else {
                throw new Error("Equal")
            }
        }
    }
    return judge;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */