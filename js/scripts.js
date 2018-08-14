$(document).ready(function() {
  $(".formInput").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("#inputSentence").val();
    var vowels = ["a", "e", "i", "o", "u"];

    var endingSentence = words.join("_");
    var splitValue = vowels[i];

    for (var i = 0; i < inputSentence.length; i++) {

      console.log(splitValue);
      var words = inputSentence.split(splitValue);
      endingSentence.split(splitValue);
      // console.log(words);
      //
      // console.log(endingSentence);


    };



    console.log('FINAL VALUE');
    console.log(endingSentence);
    $("#final").text(endingSentence);





//     var inputReplace1 = inputSentence.replace(/a/gi , "_");
//     var inputReplace2 = inputReplace1.replace(/e/gi , "_");
//     var inputReplace3 = inputReplace2.replace(/i/gi , "_");
//     var inputReplace4 = inputReplace3.replace(/o/gi , "_");
//     var finalReplace = inputReplace4.replace(/u/gi , "_");
// debugger;
//     // $("#formInput").submit(function() {


  });
});




// vowels.forEach(function(vowel) {



//     for (var i = 0; i <= fullSentence.length; i++) {
//       if (i === "a" || i === "e" || i === "u" || i === "i" || i === "o") {
//         var blankSentence = fullSentence.replace("_");
//         $("#final").show();
//         };
//     };
//
//   });
//
//
//
// console.log(fullSentence);
