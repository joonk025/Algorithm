function isValid(s: string): boolean {
    const stack = [];
    
    for (let i = 0; i < s.length; i += 1) {
        console.log(stack, i)
        if ( s[i] === '(' || s[i] === '{' || s[i] === '[') {
             stack.push(s[i]);
        } else {
            switch (s[i]) {
                case ')':
                    if (stack.pop() === '(') {
                        continue;
                    } else {
                        return false;
                    }
                    break;
                case '}':
                    if (stack.pop() === '{') {
                        continue;
                    } else {
                        console.log('i am at } false')
                        return false;
                    }
                    break;
                case ']':
                    if (stack.pop() === '[') {
                        continue;
                    } else {
                        console.log('i am at ] false')
                        return false;
                    }
                    break;
            }
        }
    }
    if (!stack.length) {
        return true
    } else {
        return false;
    }
};