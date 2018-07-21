/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore00, roundScore01, activePlayer, gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click', function(){

if (gamePlaying) {
	//generate random number
	var dice = Math.floor(Math.random()*6) +1;
	//display result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	//update round score IF rolled number was not 1
	if (dice > 1){
		//add current roll to roundScore0 & display
		roundScore0+= dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore0;
	} else { 
		NextPlayer();
	}
}

});

document.querySelector('.btn-hold').addEventListener('click', function(){

if (gamePlaying){
	scores[activePlayer]+= roundScore0; //update global score

	if (scores[activePlayer] >= 100) { //winner!
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-0-panel').classList.remove('active');
			document.querySelector('.player-1-panel').classList.remove('active');
			document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			gamePlaying = false;
	} else { NextPlayer(); }

}

	//check if player won!




})

function NextPlayer() {
 	roundScore0 = 0;
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];//display global score
	document.querySelector('#current-' + activePlayer).textContent = roundScore0; //display 0 as roundscore
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //change activePlayer
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
	document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

	scores = [0,0];
	activePlayer = 0;
	roundScore0 = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 0';
	document.getElementById('name-1').textContent = 'Player 1';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');

}

//challenge 1: lose entire score when roll two 6 in a row
// add an input field for users to specify winning score
//add another dice! a single one loses round score










