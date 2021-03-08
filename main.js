// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

var word = prompt('Inserisci una parola:');



function verify(){

  // The split() method is used to split a string into an array of substrings,
 // and returns the new array.
  var singleWord = split(word);

  //reverse that word u put
  var reverseWord = reverse(word);

  // join for creating new word
  var joinWord = join(word);

  if (word === joinWord) {
    alert("La parola è palindroma");
  } else
    alert("Non e' palindroma");
    console.log(word);
}
