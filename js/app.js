'use strict';

// Get the user's name
var userName = prompt('Heya! What is your name?');
console.log('User was asked their name and responded with ' + userName);

alert('Glad you could join me, ' + userName + '! Let\'s play a little game of five yes/no questions to see how well you know Dave. Please answer with y/n or yes/no responses.');

// Ask them five y/n questions

var answerOne = prompt('Ok, this one is easy - do I have any siblings?').toLowerCase();
console.log('User responded to first question with ' + answerOne);

if (answerOne === 'y' || answerOne === 'yes') {
  alert('Bravo. You got it right. Calm down.');
} else {
  alert('No. If you got this wrong then this may be a painful quiz.');
}

var answerTwo = prompt('Do I have any technical certifications?').toLowerCase();
console.log('User responded to second question with ' + answerTwo);

if (answerTwo === 'n' || answerTwo === 'no') {
  alert('Very good! I do not have any certs just yet');
} else {
  alert('Sorry, no. I do not have any yet.');
}

var answerThree = prompt('Did I serve in the Air Force?').toLowerCase();
console.log('User responded to thrid question with ' + answerThree);

if (answerThree === 'n' || answerThree === 'no') {
  alert('That\'s right! I served 9 years in the Army, not the "Chair Force"');
} else {
  alert('Ouch - thought you knew me. I was a soldier for 9 years!');
}

var answerFour = prompt('Ok, do I have a love for fried pickles?').toLowerCase();
console.log('User responded to fourth question with ' + answerFour);

if (answerFour === 'y' || answerFour === 'yes') {
  alert('Got me! I LOVE frickles!!! They are the best!');
} else {
  alert('My apologies, we clearly have not hung out as you would definietly know this about me if we had.');
}

var answerFive = prompt('This one might be tough, but do I have a degree in political science?').toLowerCase();
console.log('User responded to fifth question with ' + answerFive);

if (answerFive === 'y' || answerFive === 'yes') {
  alert('Correct, I graduated with a BS in Poly Sci from the University of Maryland.');
} else {
  alert('It\'s true. I actually do have a BS in Poly Sci. Should have done engineering in hindsight, but whatever.');
}

// Lab 3 - Question 6 My favorite number
// var faveNumber = '13';
// var i = 0;
// do {
//   var userNumber = prompt('Ok, now I would like to see if you can guess my favorite number. Give it a shot!');
//   console.log('User responded with ' + userNumber);
//   if (userNumber === faveNumber) {
//     alert('YES! You guessed it!');
//     i = 5;
//   } else {
//     alert('Nope. Please try again.');
//     i++;
//   }
// } while (i < 5);

