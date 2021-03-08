// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
var word = prompt('Inserisci una parola:');

var newWord = verify(word);


if (word == newWord) {
  alert("La parola è palindroma");
} else {
  alert("Non e' palindroma");
}

function verify(word) {
  var newWord = word.split('').reverse().join('');
  // The split() method is used to split a string into an array of substrings,
  // and returns the new array.
  //reverse that word u put
  // join for creating new word
  return newWord;
}
