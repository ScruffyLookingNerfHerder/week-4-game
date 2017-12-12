var card1;
var card2;
var card3;
var card4;
var cardimage1;
var cardimage2;
var cardimage3;
var cardimage4;
var cardarray=[];
var wins;
var losses;
var goalnumber=0;
var userscore=0;

function rannumbergenerator (){
  goalnumber= Math.floor((Math.random()*(120-19))+19);
  $(".randomnumberdisplay").text(goalnumber);

}

function cardvaluesgenerator (){
  card1= Math.floor((Math.random()*(12-1))+1);
  card2= Math.floor((Math.random()*(12-1))+1);
  card3= Math.floor((Math.random()*(12-1))+1);
  card4= Math.floor((Math.random()*(12-1))+1);
  cardarray=[card1, card2, card3, card4];


  // for (var i=0; i < cardarray.length; i++){
  //   var imageCrystal=$("<img>");
  //   imageCrystal.addClass("cardimgs");
  //   imageCrystal.attr("src", "./Assets/images/acespades.jpg");
  //   imageCrystal.attr("src", "./Assets/images/acediamonds.jpg");
  //   imageCrystal.attr("src", "./Assets/images/aceclubs.jpg");
  //   imageCrystal.attr("src", "./Assets/images/acehearts.jpg")
  //   imageCrystal.attr("data-cardvalue", cardarray[i]);
  //   $(".crystalsdisplay").append(imageCrystal);
  // }

}

function cardimagegenerator (){
cardimage1=$("<img>");
cardimage1.addClass("cardimgs");
cardimage1.attr("src","./Assets/images/acespades.jpg");
cardimage1.attr("data-cardvalue", cardarray[0]);
$(".crystalsdisplay").append(cardimage1);

cardimage2=$("<img>");
cardimage2.addClass("cardimgs");
cardimage2.attr("src", "./Assets/images/acediamonds.jpg");
cardimage2.attr("data-cardvalue", cardarray[1]);
$(".crystalsdisplay").append(cardimage2);

cardimage3=$("<img>");
cardimage3.addClass("cardimgs");
cardimage3.attr("src", "./Assets/images/aceclubs.jpg");
cardimage3.attr("data-cardvalue", cardarray[2]);
$(".crystalsdisplay").append(cardimage3);

cardimage4=$("<img>");
cardimage4.addClass("cardimgs");
cardimage4.attr("src", "./Assets/images/acehearts.jpg");
cardimage4.attr("data-cardvalue", cardarray[3]);
$(".crystalsdisplay").append(cardimage4);

}




rannumbergenerator();
cardvaluesgenerator();
cardimagegenerator();
game();

function game(){
$(".cardimgs").on("click", function(){
    var cardvalue = ($(this).attr("data-cardvalue"));
    cardvalue = parseInt(cardvalue);
    console.log(cardvalue);
    userscore += cardvalue;
    // alert("New Score " + cardvalue);
    $(".userscoredisplay").text(userscore);


    if (userscore === goalnumber){
      alert("Congratulations! You win! Press ok to start again!");
      wins++;
      $(".crystalsdisplay").empty();
      rannumbergenerator();
      cardvaluesgenerator();
      cardimagegenerator();
      userscore=0;
      $(".userscoredisplay").text(userscore);
      $(".randomnumberdisplay").text(goalnumber);
      game();

    }
    else if (userscore >= goalnumber){
      alert("Oh no, you went over! You lose. Press ok to try again!");
      losses++;
      $(".crystalsdisplay").empty();
      rannumbergenerator();
      cardvaluesgenerator();
      cardimagegenerator();
      userscore=0;
      $(".userscoredisplay").text(userscore);
      $(".randomnumberdisplay").text(goalnumber);
      game();

    }
  });

};






// function start(){
//   if (goalnumber=0){
//     rannumbergenerator();
//     cardvaluesgenerator();
//
//   }
//   else if (goalnumber==userscore){
//     rannumbergenerator();
//     cardvaluesgenerator();
//     wins++;
//   }
//   else if (goalnumber > userscore){
//     game();
//   }
//   else {
//     rannumbergenerator();
//     cardvaluesgenerator();
//     losses--;
//   }
// }
