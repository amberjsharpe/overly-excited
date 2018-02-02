// Create an array that contains the words in the sentence
// Might be a way to use .string or .substring to do automatically

let sentence = [" The", " walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/

// At every third string in an array

var wordArray = [];

function addExcitement (theWordArray, punctuation) {
    for (i = 0; i < sentence.length; i++) { 
        wordArray += sentence[i];
        console.log(wordArray);
        var taco = i + 1;
        if (taco % 3 === 0) {
            var counter = taco/3;
            var excite = punctuation;                  
            wordArray += excite.repeat(counter);
            console.log(wordArray);     
        } 
        
    } 
}


// Invoke the function and pass in the array
addExcitement(sentence, "?");

// Add more excitement!





