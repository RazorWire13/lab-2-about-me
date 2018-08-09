'use strict';

// Lab 2 Get the user's name

var userName = prompt('Heya! What is your name?');
console.log('User was asked their name and responded with ' + userName);

alert('Glad you could join me, ' + userName + '! Let\'s play a little game of five questions to see how well you know me. Please answer with y/n or yes/no responses.');


// Lab 3 User score ticker variable

var totalScore = 0;


// Lab 2 Ask user five y/n questions

// Question 1
function questionOne() {
  var answerOne = prompt('Ok, this one is easy - do I have any siblings?').toLowerCase();
  console.log('User responded to first question with ' + answerOne);

  if (answerOne === 'y' || answerOne === 'yes') {
    alert('Bravo. You got it right. Calm down.');
    totalScore++;
  } else {
    alert('No. If you got this wrong then this may be a painful quiz.');
  }
}

questionOne();

// Question 2
function questionTwo() {
  var answerTwo = prompt('Do I have any technical certifications on computers?').toLowerCase();
  console.log('User responded to second question with ' + answerTwo);

  if (answerTwo === 'n' || answerTwo === 'no') {
    alert('Very good! I do not have any certs just yet');
    totalScore++;
  } else {
    alert('Sorry, no. I do not have any yet.');
  }
}

questionTwo();

// Question 3

function questionThree() {
  var answerThree = prompt('Did I serve in the Air Force?').toLowerCase();
  console.log('User responded to third question with ' + answerThree);

  if (answerThree === 'n' || answerThree === 'no') {
    alert('That\'s right! I served 9 years in the Army, not the "Chair Force"');
    totalScore++;
  } else {
    alert('Ouch - thought you knew me. I was actually a soldier for 9 years.');
  }
}

questionThree();

// Question 4

function questionFour() {
  var answerFour = prompt('Ok, do I have a love for fried pickles?').toLowerCase();
  console.log('User responded to fourth question with ' + answerFour);

  if (answerFour === 'y' || answerFour === 'yes') {
    alert('Got me! I LOVE frickles!!! They are the best!');
    totalScore++;
  } else {
    alert('My apologies, we clearly have not hung out as you would definietly know this about me if we had.');
  }
}

questionFour();


// Question 5

function questionFive() {
  var answerFive = prompt('This one might be tough, but do I have a degree in political science?').toLowerCase();
  console.log('User responded to fifth question with ' + answerFive);

  if (answerFive === 'y' || answerFive === 'yes') {
    alert('Correct, I graduated with a BS in Poly Sci from the University of Maryland.');
    totalScore++;
  } else {
    alert('It\'s true. I actually do have a BS in Poly Sci. Should have done engineering in hindsight, but whatever.');
  }
}

questionFive();

// Lab 3 - Question 6 My favorite number

function questionSix() {
  var faveNumber = '13';
  var i = 0;
  do {
    var userNumber = prompt('Ok, now I would like to see if you can guess my favorite number. Give it a shot!');
    console.log('User responded with ' + userNumber);
    if (userNumber === faveNumber) {
      alert('YES! You guessed it!');
      totalScore++;
      break;
    } else {
      alert('Nope. Please try again.');
      i++;
    }
  } while (i < 5);
}

questionSix();

// Lab 3 - Question 7 Guess where I have lived

function questionSeven() {
  var placesLived = ['florida', 'germany', 'ethiopia', 'afghanistan', 'maryland'];
  var ii = 0;
  do {
    var userPlace = prompt('So let\'s see if you can guess where else I have lived besides Washington. This one may be tough.').toLowerCase();
    if (userPlace === placesLived[0]) {
      alert('Yup - GO CANES!!!');
      totalScore++;
      break;
    } else if (userPlace === placesLived[1]) {
      alert('Deutschland, Deutschland uber alles!');
      totalScore++;
      break;
    } else if (userPlace === placesLived[2]) {
      alert('Ini Habishah!');
      totalScore++;
      break;
    } else if (userPlace === placesLived[3]) {
      alert('Been TWICE!');
      totalScore++;
      break;
    } else if (userPlace === placesLived[4]) {
      alert('....and I\'m good not to go back there.');
      totalScore++;
      break;
    } else {
      alert('Nope. Try Again');
      ii++;
    }
  } while (ii < 6);
}

questionSeven();


// Lab 3 User's total score

alert('You got ' + totalScore + ' out of a possible 7 correct. Thank you for playing, ' + userName + '!');