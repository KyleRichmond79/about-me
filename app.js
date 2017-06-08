'use strict';
var rightAnswers = 0;
var whereFrom = prompt('Let\'s play a game! Am I originally from Seattle? Yes or No').toLowerCase();
if (whereFrom === 'yes' || whereFrom === 'y') {
  alert('Sorry, I am originally from Fort Wayne, IN.');
  rightAnswers++;
} else if (whereFrom === 'no' || whereFrom === 'n') {
  alert('Correct!');
} else {
  alert('I didn\'t recognize your response.');
}

var likePc = prompt('Do I like to use Pc/Android devices? Yes or No').toLowerCase();
if (likePc === 'yes' || likePc === 'y') {
  alert('Correct!');
  rightAnswers++;
} else if (likePc === 'no' || likePc === 'n') {
  alert('Sorry, I do like Pc/Android devices best.');
} else {
  alert('I didn\'t recognize your response.');
}

var likeMusic = prompt('Do you think I like music? Yes or No').toLowerCase();
if (likeMusic === 'yes' || likeMusic === 'y') {
  alert('Way to go! I do like music.');
  rightAnswers++;
} else if (likeMusic === 'no' || likeMusic === 'n') {
  alert('Ohhhh! So close, but I do like music.');
} else {
  alert('I didn\'t recognize your response.');
}

var eatMeat = prompt('Do you think I like to eat meat? Yes or No').toLowerCase();
if (eatMeat === 'yes' || eatMeat === 'y') {
  alert('Correct! I am an omnivore.');
  rightAnswers++;
} else if (eatMeat === 'no' || eatMeat === 'n') {
  alert('So sorry, I do eat meat.');
} else {
  alert('I didn\'t recognize your response.');
}

var playGames = prompt('Do you think I like to play video games? Yes or No').toLowerCase();
if (playGames === 'yes' || playGames === 'y') {
  alert('Correct! I have 4 gaming consoles at home.');
  rightAnswers++;
} else if (playGames === 'no' || playGames === 'n') {
  alert('Fooled you! Yes I am a big gaming fan.');
} else {
  alert('I didn\'t recognize your response.');
}

//Sam said "Here's a hint for Question 6: "While the total number of guesses is less than 4,
//ask the user to guess your secret number and check whether the user has provided the correct answer;
//if they were wrong, tell them whether they guessed too high or too low.
//And don't forget to charge them with a guess each time!"

var numGuesses = 0;
var favNum = 27;
var isWrong = true;

while (numGuesses < 4 && isWrong === true) {
  var userGuess = parseInt(prompt('What is my favorite number? You get 4 chances'));
  if (userGuess === favNum) {
    alert('RIGHT ON! Nice guess!');
    numGuesses = 4;
    isWrong = false;
    rightAnswers++;
  } else if (userGuess < favNum) {
    alert('Too Low! Try again.');
    numGuesses++;
  } else if (userGuess > favNum) {
    alert('Too High! Try again.');
    numGuesses++;
  } else {
    alert('I didn\'t recognize your response.');
  }

}

if(isWrong === true) {
  alert('Sorry, you didn\'t get guess 27.');
}

//multiple correct answers should be in an array
//if (guess = ans[a] || ans[b] || ans[c] || ans[d]) {alert('WAY TO GO!') }
//var guess;
//var ans = array['a', 'b', 'c', 'd'];

var states = ['IN', 'FL', 'IL', 'MD', 'WA'];
var guessLeft = 6;

while (guessLeft > 0) {
  var ans = prompt('Which States have I lived in? Just use the 2 letter abbreviation, please use upper case. You get 6 tries.');
  for (var i = 0; i < states.length; i++) {
    if (ans === states[i]) {
      alert('Yes, that is one of them. Nice Job!');
      i = states.length;
      guessLeft = -1;
      rightAnswers++;
    }
  }

  if (guessLeft > 0) {
    alert('Nice try but not correct');
    guessLeft--;
    ans;
  }

  if (guessLeft === 0) {
    alert('Sorry you ran out of tries!');
    i = states.length;
  }
}
alert('You got ' + rightAnswers + ' correct! Nice Job!');

console.log('Asked if user wanted to play a game and asked where am I from and have an if/else if/else statement to alert if correct or not');
console.log('Asked my second question do I like Pc and have an if/else if/else statement to alert if correct or not');
console.log('Asked my third question if I liked music and have an if/else if/else statement to alert if correct or not');
console.log('Asked my fourth question do I eat meat and have an if/else if/else statement to alert if correct or not');
console.log('Asked my final question do I play games and have an if/else if/else statement to alert if correct or not');
