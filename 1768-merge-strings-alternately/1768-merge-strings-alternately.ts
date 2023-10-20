function mergeAlternately (word1: string, word2: string): string {

    let mergedString: string = '';

    for (let i = 0; i < Math.max(word1.length, word2.length); i += 1) {
        if (i < word1.length) mergedString += word1[i];
        if (i < word2.length) mergedString += word2[i];
    }
    return mergedString;
}




// function mergeAlternately(word1: string, word2: string): string {
// // declare a variable that stores a result as an empty string
//     let mergedString: string = "";
    
// // figure which word is longer
//     let longerWord: string;
//     let shorterWord: string;

//     if (word1.length >= word2.length) {
//         longerWord = word1;
//         shorterWord = word2;
//     } else {
//         longerWord = word2;
//         shorterWord = word1;
//     }
    
// // iterate through the longer word
//     for (let i = 0; i < longerWord.length; i += 1) {
//      // if the character corresponding to the index for longerWord exists, append it to result
//         if (word1[i]) {
//             mergedString += word1[i];
//         }
//     // if the character corresponding to the index for shorterWord exists, append it to result
//         if (word2[i]) {
//             mergedString += word2[i];
//         }
//     }
   
    
    
// // return mergedString
//     return mergedString;
// };
