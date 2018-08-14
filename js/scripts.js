$(document).ready(function() {

  $(".formInput").submit(function(event) {

    var visitorInputs = $("#inputSentence").val();
    event.preventDefault();

    var vowels = ["a", "e", "i", "o", "u"];

    var inputReplace1 = visitorInputs.replace(/a/gi , "_");
    var inputReplace2 = inputReplace1.replace(/e/gi , "_");
    var inputReplace3 = inputReplace2.replace(/i/gi , "_");
    var inputReplace4 = inputReplace3.replace(/o/gi , "_");
    var finalReplace = inputReplace4.replace(/u/gi , "_");
debugger;
    // $("#formInput").submit(function() {
      $("#final").text(finalReplace);

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
