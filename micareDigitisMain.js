var yourPoints = 0;

var yourPointsPerCorrectAnswer = 1;
    	 


var ajaxPoints = 0;

var ajaxPointsPerCorrectAnswer = 1;
    	 
var myFingers = getRndMyThrow(0,5);
var myFingers2 = getRndMyGuess(0,5);

var count = 1;





var pictureArray = ["th-12.jpeg", "th.jpeg", "th-1.jpeg", "th-4.jpeg", "th-7.jpeg", "th-8.jpeg", "th-14.jpeg"];

var romanNumeralArray = ["th-26.jpeg", "th-17.jpeg", "th-16.jpeg", "th-18.jpeg", "th-19.jpeg", "th-20.jpeg", "th-21.jpeg","th-22.jpeg", "th-23.jpeg", "th-24.jpeg", "th-25.jpeg"];


function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

 function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }


function incrementCounter(){
	count++;
	return count;
}

function getRndMyThrow(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndMyGuess(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}





//var playAgainLabel = document.getElementById("playAgain").innerHTML = "Click to Play Again!";
//var playAgainButton = document.getElementById("playAgainButton").style.display;


 
 function yourThrow(){

 	
    var number=document.getElementById('input1').value;
    document.getElementById("caption").innerHTML = "Round " + count + "!"
    document.getElementById("yourFingerThrow").style.visibility ="visible";
    document.getElementById("yourFingerThrow").style.display ="block";
    document.getElementById("questionOne").style.visibility = "hidden";
    document.getElementById("questionTwo").style.display = "block";
    document.getElementById("questionTwo").style.visibility = "visible";
     

    if (number == ""){
    	number = 0;
    	
    }

    if (number == 0){
		document.getElementById("left").src = pictureArray[0];
	} 

	if (number == 1){
		document.getElementById("left").src = pictureArray[1];
	}

	if (number == 2){
		document.getElementById("left").src = pictureArray[2];
	}

	if (number == 3){
		document.getElementById("left").src = pictureArray[3];
	} 

	if (number == 4){
		document.getElementById("left").src = pictureArray[4];
	}

	if (number == 5){
		document.getElementById("left").src = pictureArray[5];
	}

    if (number > 5 || number < 0){
    	alert("Invalid Input! Try again!");
		 
	} else {
    return number;
	}

	var number=document.getElementById('input1').value;
	 
 }




function ajaxThrow(){

	document.getElementById("ajaxFingThrow").style.visibility = "visible";
    

    if (parseInt(myFingers) == 0){
		document.getElementById("ajaxLeft").src = pictureArray[0];
	} 

	if (parseInt(myFingers) == 1){
		document.getElementById("ajaxLeft").src = pictureArray[1];
	}

	if (parseInt(myFingers) == 2){
		document.getElementById("ajaxLeft").src = pictureArray[2];
	}

	if (parseInt(myFingers) == 3){
		document.getElementById("ajaxLeft").src = pictureArray[3];
	} 

	if (parseInt(myFingers) == 4){
		document.getElementById("ajaxLeft").src = pictureArray[4];
	}

	if (parseInt(myFingers) == 5){
		document.getElementById("ajaxLeft").src = pictureArray[5];
	}




 }


 function yourGuess(){

 	var guess=document.getElementById('input2').value;
    
 	document.getElementById("ajaxFingerThrow").style.visibility ="visible";
 	document.getElementById("ajaxFingerThrow").style.display ="block";
 	document.getElementById("resultsButton").style.visibility ="visible";
 	//document.getElementById("resultsDiv").style.visibility = "visible";
 	document.getElementById("resultsButton").style.visibility = "visible";
 	document.getElementById("questionTwo").style.visibility = "hidden";
 	document.getElementById("nextThrow").style.visibility = "hidden";
 	document.getElementById("nextThrowButton").style.visibility = "hidden";

 	
 	//document.getElementById("right").src = pictureArray[6];
if (guess == ""){
    	guess = 0;

    }

if (guess == 0){
		document.getElementById("right").src = romanNumeralArray[0];
	} 

if (guess == 1) {
	document.getElementById("right").src = romanNumeralArray[1];
}

if (guess == 2) {
	document.getElementById("right").src = romanNumeralArray[2];
}

if (guess == 3){
		document.getElementById("right").src = romanNumeralArray[3];
	} 

if (guess == 4) {
	document.getElementById("right").src = romanNumeralArray[4];
}

if (guess == 5) {
	document.getElementById("right").src = romanNumeralArray[5];
}

if (guess == 6) {
	document.getElementById("right").src = romanNumeralArray[6];
}

if (guess == 7) {
	document.getElementById("right").src = romanNumeralArray[7];
}

if (guess == 8){
		document.getElementById("right").src = romanNumeralArray[8];
	} 

if (guess == 9) {
	document.getElementById("right").src = romanNumeralArray[0];
}

if (guess == 10) {
	document.getElementById("right").src = romanNumeralArray[10];
}
	

    if (guess > 10 || guess < 0){
    	alert("Invalid Input! Try again!");
		 
	} else {
    return guess;
	}

	var guess=document.getElementById('input2').value;
 }

 

 function totalFingersThrown(){
 	var x = parseInt(yourThrow());
 	var y = parseInt(myFingers);
 	return x + y;

 }

function ajaxGuessRomanNumerals(){

document.getElementById("ajaxFingGuess").style.visibility ="visible";

var z = getRndMyTotalGuess();

 if (z == 0){
		document.getElementById("ajaxRight").src = romanNumeralArray[0];
	} 

if (z == 1) {
	document.getElementById("ajaxRight").src = romanNumeralArray[1];
}

if (z == 2) {
	document.getElementById("ajaxRight").src = romanNumeralArray[2];
}

if (z == 3){
		document.getElementById("ajaxRight").src = romanNumeralArray[3];
	} 

if (z == 4) {
	document.getElementById("ajaxRight").src = romanNumeralArray[4];
}

if (z == 5) {
	document.getElementById("ajaxRight").src = romanNumeralArray[5];
}

if (z == 6) {
	document.getElementById("ajaxRight").src = romanNumeralArray[6];
}

if (z == 7) {
	document.getElementById("ajaxRight").src = romanNumeralArray[7];
}

if (z == 8){
		document.getElementById("ajqxRight").src = romanNumeralArray[8];
	} 

if (z == 9) {
	document.getElementById("ajaxRight").src = romanNumeralArray[9];
}

if (z == 10) {
	document.getElementById("ajaxRight").src = romanNumeralArray[10];
}


 }


 function nextThrow(){

		incrementCounter();
		document.getElementById("caption").innerHTML = "Round " + count + "!";
		 
		document.getElementById("questionOne").style.visibility = "visible";
		document.getElementById("yourFingerThrow").style.visibility ="hidden";
		document.getElementById("yourFingerThrow").style.display ="none";
		document.getElementById("ajaxFingerThrow").style.visibility ="hidden";
		document.getElementById("ajaxFingerThrow").style.display ="none";
		document.getElementById("nextThrow").style.visibility = "hidden";
		document.getElementById("nextThrowButton").style.visibility = "hidden";
		document.getElementById("questionOne").style.display = "block";
		document.getElementById("questionTwo").style.display = "block";
		document.getElementById("ajaxFingThrow").style.visibility ="hidden";
		document.getElementById("ajaxFingGuess").style.visibility ="hidden";
		document.getElementById("ajaxFingerThrow").style.backgroundColor = "blue";
		document.getElementById("ajaxFingGuess").style.backgroundColor = "red";

		document.getElementById("ajaxFingerThrow").style.width = "90px";
		document.getElementById("ajaxFingerThrow").style.height = "130px";

		document.getElementById("ajaxFingGuess").style.width = "90px";
		document.getElementById("ajaxFingGuess").style.height = "130px";

		 
		document.getElementById("sumOfThrows").innerHTML = "";
		document.getElementById("input1").value = "";
		document.getElementById("input2").value = "";
		

}


 function getRndMyTotalGuess(){
 	var a = parseInt(myFingers);
 	var b = parseInt(myFingers2);
 	return a + b;

 }


 function resetAjaxGuess(){

	getRndMyThrow(0,5);
	getRndMyGuess(0,5);
}

function gameWinnerCalculation(){
	//document.getElementById("playAgain").innerHTML = "Click to Play Again!";
	//document.getElementById("playAgainButton").innerHTML = "Click to challenge Ajax again!!";
	//playAgainButton;
	//playAgainLabel;


	if ((parseInt(yourGuess())  == parseInt(totalFingersThrown())) && (parseInt(getRndMyTotalGuess())) == parseInt(totalFingersThrown())) {
		wrongAnswerAudio();
		return "Sumus pares! Nemo Vincit:(";

	}  else if (parseInt(yourGuess()) == parseInt(totalFingersThrown())) {
		document.getElementById("ajaxFingerThrow").style.backgroundColor = "green";
		document.getElementById("ajaxFingerThrow").style.width = "130px";
		document.getElementById("ajaxFingerThrow").style.height = "170px";
		correctAnswerAudio();

		yourPoints += yourPointsPerCorrectAnswer;
		document.getElementById("yourScore").innerHTML = yourPoints;
		return "Tu Vincis!";



	} else if (parseInt(getRndMyTotalGuess()) == parseInt(totalFingersThrown())) {
		document.getElementById("ajaxFingGuess").style.backgroundColor = "green";
		document.getElementById("ajaxFingGuess").style.width = "130px";
		document.getElementById("ajaxFingGuess").style.height = "170px";
		correctAnswerAudio();

		ajaxPoints += ajaxPointsPerCorrectAnswer;
		document.getElementById("ajaxScore").innerHTML = ajaxPoints;
		return "Ajax Vincit";
		

	} else {
		wrongAnswerAudio();
		return "Nemo Vincit:(";

	}
 
     
}
 

function resultsOfGame(){

	if (ajaxPoints > 1) {
		
		
		
		document.getElementById("caption").innerHTML = "Ajax vincit! Do you have the courage to play again?";
		document.getElementById("playAgain").style.visibility = "visible";
		document.getElementById("playAgainButton").innerHTML = "Click for a rematch!";
		document.getElementById("questionOne").style.visibility = "hidden";
		document.getElementById("questionTwo").style.visibility = "hidden";
		document.getElementById("resultsDiv").style.visibility = "hidden";
		document.getElementById("nextThrowButton").style.visibility ="hidden";
		document.getElementById("resultsButton").style.visibility ="hidden";
		

	} else if (yourPoints >1) {
		
		
		
		document.getElementById("caption").innerHTML = "Tu vincis! Ajax demands a rematch!";
		document.getElementById("playAgain").style.visibility = "visible";
		document.getElementById("playAgainButton").innerHTML = "Click for a rematch!";
		document.getElementById("questionOne").style.visibility = "hidden";
		document.getElementById("questionTwo").style.visibility = "hidden";
		document.getElementById("resultsDiv").style.visibility = "hidden";
		document.getElementById("nextThrowButton").style.visibility ="hidden";
		document.getElementById("resultsButton").style.visibility ="hidden";
		

	}

	
}





function startNewGame(){

		document.getElementById("caption").innerHTML = "Ajax Gets a Rematch!";
		document.getElementById("questionOne").style.display = "block";
		document.getElementById("questionOne").style.visibility = "visible";
		
		document.getElementById("playAgain").style.visibility = "hidden";
		

		document.getElementById("questionTwo").style.display = "block";
		document.getElementById("questionTwo").style.visibility = "hidden";
		document.getElementById("resultsDiv").style.visibility = "hidden";


		document.getElementById("yourFingerThrow").style.display ="none";
		 
		document.getElementById("ajaxFingerThrow").style.display ="none";

		

		document.getElementById("yourFingerThrow").style.visibility ="hidden";
		document.getElementById("ajaxFingerThrow").style.visibility ="hidden";
		document.getElementById("ajaxFingerThrow").style.backgroundColor = "blue";
		document.getElementById("nextThrowButton").style.visibility ="hidden";
		document.getElementById("nextThrow").style.visibility = "hidden";

		document.getElementById("ajaxFingThrow").style.visibility ="hidden";
		document.getElementById("ajaxFingGuess").style.visibility ="hidden";
		document.getElementById("ajaxFingGuess").style.backgroundColor = "red";

		document.getElementById("ajaxFingerThrow").style.width = "90px";
		document.getElementById("ajaxFingerThrow").style.height = "130px";

		document.getElementById("ajaxFingGuess").style.width = "90px";
		document.getElementById("ajaxFingGuess").style.height = "130px";


		

		ajaxPoints = 0;
		yourPoints = 0;
		count = 1;
		document.getElementById("yourScore").innerHTML = "Your Score";
		document.getElementById("ajaxScore").innerHTML = "Ajax's Score";
		document.getElementById("sumOfThrows").innerHTML = "";
		document.getElementById("input1").value = "";
		document.getElementById("input2").value = "";

		gameOverAudio();

}

