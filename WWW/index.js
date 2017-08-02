var $ = function(id) {
  return document.getElementById(id);
};

var game = [
  "Allyrion",
  "Ambrose",
  "Arryn",
  "Ashford",
  "Baratheon",
  "Beesbury",
  "Bolton",
  "Buckwell",
  "Bulwer",
  "Caron",
  "Cerwyn",
  "Codd",
  "Crakehall",
  "Egen",
  "Flint of Widow's Watch",
  "Follard",
  "Footly",
  "Forrester",
  "Fossoway of Cider Hall",
  "Fowler",
  "Graceford",
  "Grandison",
  "Greyjoy",
  "Hastwyck",
  "Hightower",
  "Hornwood",
  "Jordayne",
  "Karstark",
  "Lannister",
  "Lonmouth",
  "Marbrand",
  "Martell",
  "Mormont",
  "Mallister",
  "Merryweather",
  "Mooton",
  "Oakheart",
  "Peckledon",
  "Penrose",
  "Piper",
  "Plumm",
  "Redfort",
  "Royce",
  "Sarsfield",
  "Sarwyck",
  "Serrett",
  "Smallwood",
  "Stark",
  "Stokeworth",
  "Swygert",
  "Swyft",
  "Tallhart",
  "Targaryen",
  "Tarly",
  "Tollett",
  "Toyne",
  "Trant",
  "Tully",
  "Tyrell",
  "Velaryon",
  "Waxley",
  "Wendwater",
  "Wensington",
  "Westerling",
  "Westford",
  "Whitehill",
  "Wode",
  "Wydman",
  "Yronwood"
];

var hint = [
  "'No Foe May Pass'",
  "'Never Resting'",
  "'As High as Honor'",
  "'Our Sun Shines Bright'",
  "'Ours is the Fury'",
  "'Beware Our Sting'",
  "'Our Blades Are Sharp'",
  "'Pride and Purpose'",
  "'Death Before Disgrace'",
  "'No Song So Sweet'",
  "'Honed and Ready'",
  "'Though All Men Do Despise Us'",
  "'None so Fierce'",
  "'By Day or Night'",
  "'Ever Vigilant'",
  "'None so Wise'",
  "'Tread Lightly Here'",
  "'Iron From Ice'",
  "'A Taste of Glory'",
  "'Let Me Soar'",
  "'Work Her Will'",
  "'Rouse Me Not'",
  "'We Do Not Sow'",
  "'None So Dutiful'",
  "'We Light the Way'",
  "'Righteous in Wrath'",
  "'Let It Be Written'",
  "'The Sun of Winter'",
  "'Hear Me Roar'",
  "'The Choice Is Yours'",
  "'Burning Bright'",
  "'Unbowed, Unbent, Unbroken'",
  "'Here We Stand'",
  "'Above the Rest'",
  "'Behold Our Bounty'",
  "'Wisdom and Strength'",
  "'Our Roots Go Deep'",
  "'Unflinching'",
  "'Set Down Our Deeds'",
  "'Brave and Beautiful'",
  "'Come Try Me'",
  "'As Strong as Stone'",
  "'We Remember'",
  "'True to the Mark'",
  "'Family is Hope, Protect it Always'",
  "'I Have No Rival'",
  "'From These Beginnings'",
  "'Winter is Coming'",
  "'Proud to Be Faithful'",
  "'Truth Conquers'",
  "'Awake! Awake!'",
  "'Proud and Free'",
  "'Fire and Blood'",
  "'First in Battle'",
  "'When All is Darkest'",
  "'Fly High, Fly Far'",
  "'So End Our Foes'",
  "'Family, Duty, Honor'",
  "'Growing Strong'",
  "'The Old, the True, the Brave'",
  "'Light in Darkness'",
  "'For All Seasons'",
  "'Sound the Charge'",
  "'Honor, not Honors'",
  "'Death Over Dishonor'",
  "'Ever Higher'",
  "'Touch Me Not'",
  "'Right Conquers Might'",
  "'We Guard the Way'"
];

var choice = Math.floor(Math.random() * game.length);
var answer = game[choice];
var hints = hint[choice];
var myLength = answer.length;
var display = [myLength];
var win = myLength;
var letters = answer.split("");
var attemptsLeft = 7;
var output = "";
var userLetter = "";

var setup = function() {

  document.getElementById("game").innerHTML = output;
  output = "";
  document.getElementById("showhint").innerHTML = "";
  choice = Math.floor(Math.random() * 4);
  answer = game[choice];
  hints = hint[choice];
  myLength = answer.length;
  display = [myLength];
  win = myLength;
  letters = answer.split("");
  attemptsLeft = 7;
  output = "";
  userLetter = "";
  
    for (var i = 0; i < answer.length; i++) {
    display[i] = " _ ";
    output = output + display[i];
  }
};

var submit = function(event) {
  event.preventDefault();
  
  output = "";
  userLetter = $("letter").value;
  var found = false;

  for (var c = 0; c < answer.length; c++) {
    //alert(letters[c]);
    if (userLetter.toUpperCase() === letters[c].toUpperCase()) {
      found = true
      display[c] = userLetter;
      win--;
    }
    console.log(output)
    console.log(display[c])
    output += display[c] + " ";
  }
  console.log(output)
  document.getElementById("game").innerHTML = output;
  output = "";
  if(!found) attemptsLeft--;

  if (win < 1) {
    alert("You win! You live to fight another day!");
  } else if (attemptsLeft < 1) {
    alert("You lose! Your head shall be mine!");
  } else {
    document.getElementById("guesses").innerHTML =
      "You have " + attemptsLeft + " guesses left";
  }
  
};

window.onload = function() {
  setup();

  var form = document.getElementById("form");
  form.onsubmit = submit;

  /*btn = document.getElementById("submit")
  btn.onclick = () => {
    let input = document.querySelector("input")
    input.value = ""
  }*/


  document.getElementById("restart").onclick = setup;
  
   
  document.getElementById("hint").addEventListener("click", function(){
    document.getElementById("showhint").innerHTML = hints
  });
};


