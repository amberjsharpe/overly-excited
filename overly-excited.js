// Create an array that contains the words in the sentence
// Might be a way to use .string or .substring to do automatically

let firstSentence = [" The", " walrus", " danced", " through", " the", " trees", " in", " the", " light", " of", " the", " moon"];
let funSentence = [" I", " wanna", " rock", " and", " roll", " all", " night", " and", " party", " every", " day"];

// Default sentence
var inputSentence = firstSentence;

//Put sentence in a function it turns into inputSentence
function sentencetoInput(sentence) {
   inputSentence = sentence;
}

sentencetoInput(funSentence);
sentencetoInput(firstSentence);

var wordArray = []; // Sentence is made into strings and put into an array



let addExcitement = (theWordArray, punctuation) => {
    for (i = 0; i < inputSentence.length; i++) { 
        wordArray += inputSentence[i];
        console.log(wordArray);
        var position = i + 1;
        if (position % 3 === 0) {
            var counter = position/3;
            var excite = punctuation;                  
            wordArray += excite.repeat(counter);
            console.log(wordArray);     
        }         
    } 
}
// Invoke the function and pass in the array

addExcitement(inputSentence, "!");









