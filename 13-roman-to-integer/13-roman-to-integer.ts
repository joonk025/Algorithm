function romanToInt(s: string): number {
    let total = 0;
    
    for (let i = 0; i < s.length; i += 1) {
        const nextLetter: string = s[i+1];
        
        switch (s[i]) {
            case 'I':
                if (nextLetter === 'V') {
                    total += 4;
                    i += 1;
                } else if (nextLetter === 'X') {
                    total += 9;
                    i += 1;
                } else {
                    total += 1;
                }
                break;
            
            case 'V':
                total += 5;
                break;

            case 'X':
                if (nextLetter === 'L') {
                    total += 40;
                    i += 1;
                } else if (nextLetter === 'C') {
                    total += 90;
                    i += 1;
                } else {
                    total += 10;
                }
                break;
      
            case 'L':
                total += 50;
                break;
            
            case 'C':
                if (nextLetter === 'D') {
                    total += 400;
                    i += 1;
                } else if (nextLetter === 'M') {
                    total += 900;
                    i += 1;
                } else {
                    total += 100;
                }
                break;
     
            case 'D':
                total += 500;
                break;
                
            case 'M':
                total += 1000;
                break;
        }
    }
    return total;
    
};