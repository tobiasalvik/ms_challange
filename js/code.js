/*

CODE CHALLANGE
5 oppgaver fra Microsoft Student Hackathon @ HIOF
November 13, 2015

*/


// FIX TOGGLE AV BUTTONS
// HIDE + SHOW

$(document).ready(function() {

// OPPGAVE 1
// Tell antall forekomster av tallet 5 og output resultatet.

$("#btnOppg1").one('click', function(){
  var sum = 0;
  var wat = 5;
  var alletall = [1, 4, 5, 5, 7, 8, 6, 5, 1, 5, 7, 9, 5];
  for (i = 0; i <= alletall.length; i++) {
    if (alletall[i] == wat) {
      var a = alletall[i];
      sum++;
      $("#oppg1").append(a + " ");
    }
    else {
      $("#oppg1").append("");
    }
  }
      $("#oppg1").append("<br><br>Antall: " + sum);
 });

// OPPGAVE 2
// Laste inn bilde fra ekstern nettside

$("#btnOppg2").one('click', function(){

  $("#oppg2").append("Click box to load image:<br /> <img id='img' style='background: #ccc; width: 20%;height:20px'>&nbsp;</div>");

  $("#img").click(function() {
    $( "#img" ).load( "http://gfx.nrk.no/front/2015/12/02/c=134,27,649,396;w=632;h=386;81897.jpg");
  });

});

// OPPGAVE 3
// Skriv ut 5 tilfeldige navn fra lista

// Fix: Duplicate outputs. If 2 er == , velg ny.

var navn = ["Mario", "Luigi", "Bowser", "Toby", "Batman", "Mr X", "Sarumann", "Frodo", "John Emil", "Frank Gunnar"];

$("#btnOppg3").click(function(){
  for (i = 0; i <= 4; i++) {
    var randNavn = Math.floor((Math.random() * 10));
    if (randNavn === navn.indexOf(randNavn)) {
      console.log(randNavn);
      $("#oppg3").append("NÆT");
    } else {
      console.log(navn.indexOf(randNavn));
      $("#oppg3").append("<li>" + navn[randNavn] + "</li>");
  }
}

});

// OPPGAVE 4
// Output 4 kvadrater i hvert hjørne, med 4 forskjellige farger.

// Fix: #divX + random farge. Liste med 4 posisjoner. Kjører gjennom lista og henter inn random variabler. Evt. arrays med variabler.
$("#btnOppg4").click(function(){
  $("#div1").unbind().toggle();
  $("#div2").unbind().toggle();
  $("#div3").unbind().toggle();
  $("#div4").unbind().toggle();
    $( "#div1" ).css({
      "height": "100px",
      "width": "100px",
      "top": "0",
      "left": "0",
      "border": "5px solid #f2f2f2",
      "position": "absolute",
      "background": "yellow"
    });
    $( "#div2" ).css({
      "height": "100px",
      "width": "100px",
      "top": "0",
      "right": "0",
      "border": "5px solid #f2f2f2",
      "position": "absolute",
      "background": "blue"
    });
    $( "#div3" ).css({
      "height": "100px",
      "width": "100px",
      "bottom": "0",
      "left": "0",
      "border": "5px solid #f2f2f2",
      "position": "absolute",
      "background": "green"
    });
    $( "#div4" ).css({
      "height": "100px",
      "width": "100px",
      "bottom": "0",
      "right": "0",
      "border": "5px solid #f2f2f2",
      "position": "absolute",
      "background": "red"
    });
});

// OPPGAVE 5
// Tar 2 personers alder og sjekker om de kan være sammen basert på alder / 2 + 7 regelen.

$("#btnOppg5").one('click', function(){

  $("#oppg5").append("Din alder: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input id='yourAge' type='number' /><br />");
  $("#oppg5").append("Andres alder: &nbsp;&nbsp;<input id='otherAge' type='number' /><br /><br />");
  $("#oppg5").append("<button id='kalkAge'>Kalkulér</button>");

  $("#kalkAge").click(function(){

    var yourAge = parseInt($( "#yourAge" ).val());
    var otherAge = parseInt($( "#otherAge" ).val());
    var rightAge = parseInt(yourAge / 2 + 7);

    if (rightAge <= otherAge) {
      $("#oppg5ans").html("<strong>Grattis! Dere kan være sammen.</strong><br />Minimum alder er: " + rightAge);
    } else if (rightAge > otherAge) {
      $("#oppg5ans").html("<strong>For ung, din gamle gris.</strong><br />Minimum alder er: " + rightAge);
    } else {
      $("#oppg5ans").html("<strong>Skriv inn alder!</strong>");
    }
  });

});

});
