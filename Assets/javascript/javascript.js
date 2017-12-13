
//variables
var card1;
var card2;
var card3;
var card4;
var cardimage1;
var cardimage2;
var cardimage3;
var cardimage4;
var cardarray=[];
var wins=0;
var losses=0;
var goalnumber=0;
var scorevar=0;

//generate the random target number for user to try and achieve
function rannumbergenerator (){
  goalnumber= Math.floor((Math.random()*(120-19))+19);
  $(".randomnumberdisplay").text("Your Target Number is " + goalnumber);

}

//generate the values of the cards and put them in an array
function cardvaluesgenerator (){
  card1= Math.floor((Math.random()*(12-1))+1);
  card2= Math.floor((Math.random()*(12-1))+1);
  card3= Math.floor((Math.random()*(12-1))+1);
  card4= Math.floor((Math.random()*(12-1))+1);
  cardarray=[card1, card2, card3, card4];

}

//generate the images for the cards and assign them values pulling from the card array created above
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


//creates a click function for each card based on the classes given to them above. When clicked, adds the value of the card given to it above to the userscore and pushes to the DOM.
function game(){
  var userscore=0;
  console.log('game init')
  //runs the game
  rannumbergenerator();
  cardvaluesgenerator();
  cardimagegenerator();
$(".userscoredisplay").text("Your Current Score is " + userscore);
$("#windisplay").text("Wins: " + wins);
$("#lossesdisplay").text("Losses: " + losses);
$(".cardimgs").on("click", function(){
    var cardvalue = ($(this).attr("data-cardvalue"));
    cardvalue = parseInt(cardvalue);
    //console.log(cardvalue);
    userscore += cardvalue;

    console.log('userscore', userscore);
    // alert("New Score " + cardvalue);
    $(".userscoredisplay").text("Your Current Score is " + userscore);


    //determines conditions needed for win, loss, and reset
    if (userscore === goalnumber){

      alert("Congratulations! You win! Press ok to start again!"  + userscore);

      wins++;
      $(".crystalsdisplay").empty();
      game();

    }
    else if (userscore >= goalnumber){
      console.log('else if')
      alert("Oh no, you went over! You lose. Press ok to try again!" + userscore);

      losses++;
      $(".crystalsdisplay").empty();
      game();

    }
  });

};

game();
