'use strict';

var whereFrom = prompt('Let\'s play a game! Am I originally from Seattle? Yes or No').toLowerCase();
  if (whereFrom === 'yes' || whereFrom === 'y') {
    alert('Sorry, I am originally from Fort Wayne, IN.');
}     else if (whereFrom === 'no' || whereFrom === 'n') {
        alert('Correct!');
}         else {
            alert('I didn\'t recognize your response.');
}

var likePc = prompt('Do I like to use Pc/Android devices? Yes or No').toLowerCase();
  if (likePc === 'yes' || likePc === 'y') {
    alert('Correct!');
}     else if (likePc === 'no' || likePc ==='n') {
        alert('Sorry, I do like Pc/Android devices best.');
}         else {
            alert('I didn\'t recognize your response.');
}

var likeMusic = prompt('Do you think I like music? Yes or No').toLowerCase();
  if (likeMusic === 'yes' || likeMusic === 'y') {
    alert('Way to go! I do like music.');
}     else if (likeMusic === 'no' || likeMusic === 'n') {
        alert('Ohhhh! So close, but I do like music.');
}         else {
            alert('I didn\'t recognize your response.');
}

var eatMeat = prompt('Do you think I like to eat meat? Yes or No').toLowerCase();
  if (eatMeat === 'yes' || eatMeat === 'y') {
    alert('Correct! I am an omnivore.');
}     else if (eatMeat === 'no' || eatMeat === 'n') {
        alert('So sorry, I do eat meat.');
}        else {
          alert('I didn\'t recognize your response.');
}

var playGames = prompt('Do you think I like to play video games? Yes or No').toLowerCase();
  if (playGames === 'yes' || playGames === 'y') {
    alert('Correct! I have 4 gaming consoles at home.');
}     else if (playGames === 'no' || playGames === 'n') {
        alert('Fooled you! Yes I am a big gaming fan.');
}         else {
            alert('I didn\'t recognize your response.');
}

console.log('Asked if user wanted to play a game and asked where am I from and have an if/else if/else statement to alert if correct or not');
console.log('Asked my second question do I like Pc and have an if/else if/else statement to alert if correct or not');
console.log('Asked my third question if I liked music and have an if/else if/else statement to alert if correct or not');
console.log('Asked my fourth question do I eat meat and have an if/else if/else statement to alert if correct or not');
console.log('Asked my final question do I play games and have an if/else if/else statement to alert if correct or not');
