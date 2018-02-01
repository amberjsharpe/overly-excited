// Create an array that contains the words in the sentence
// Might be a way to use .string or .substring to do automatically
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
var wordArray = "";
function addExcitement (theWordArray) {
    for (i = 0; i < sentence.length; i++) {
        wordArray += sentence[i] + " ";
        console.log(wordArray);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);