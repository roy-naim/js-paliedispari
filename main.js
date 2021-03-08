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
  // The split() method is used to split a string into an array of substrings,
 // and returns the new array.
  var newWord = word.split('').reverse().join('');
  // var singleWord = word.split('');
  //
  // //reverse that word u put
  // var reverseWord = word.reverse();
  //
  // // join for creating new word
  // var joinWord = word.join('');
  return newWord;
}
