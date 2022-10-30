function computerPlay() {
  let output = Math.floor(Math.random() * 3);
  if (output == 0) {
    // console.log('output = '+output)
    return output = 'rock'
  } else if (output == 1) {
    // console.log('output = '+output)
    return output = 'paper'
  } else if (output == 2) {
    // console.log('output = '+output)
    return output = 'scissors'
  } 
}

function round(computerSelection, playerSelection) {
  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      return result = null;
    } else if (computerSelection == 'paper') {
      return result = false;
    } else if (computerSelection == 'scissors') {
      return result = true;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'paper') {
      return result = null;
    } else if (computerSelection == 'scissors') {
      return result = false;
    } else if (computerSelection == 'rock') {
      return result = true;
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'scissors') {
      return result = null;
    } else if (computerSelection == 'rock') {
      return result = false;
    } else if (computerSelection == 'paper') {
      return result = true;
    }
  }
}

function checkWinner(playerWin) {
	if (playerWin) {
		score.player += 1
		console.log('Wygrywa gracz')
	} else if (playerWin == false) {
		score.computer += 1
		console.log('Wygrywa komputer')
	} else if (playerWin == null) {
		console.log('Remis')
	}
	console.log(score);
	for (let scores in score) {
		if (score[scores] == 5) {
			return scores
		};
	}
}

function computerFieldDiv(computer) {

	const computerField = document.querySelector('.computerField')

	if(computerField) {
		const img = document.querySelector('#img')
		if (computer == 'rock') {
			img.src = 'images/rock.png';
		} else if (computer == 'paper') {
			img.src = 'images/paper.png';
		} else if (computer == 'scissors') {
			img.src = 'images/scissors.png';
		}
	} else {
		const computerField = document.createElement('div');
		computerField.classList.add('computerField');
		
		const computerFieldText = document.createElement('p');
		computerFieldText.textContent = 'Komputer ciepie:';
		
		const computerBox = document.createElement('div');
		computerBox.classList.add('box');
	
		const img = document.createElement('img');
		img.setAttribute('id', 'img')
	
		if (computer == 'rock') {
			img.src = 'images/rock.png';
		} else if (computer == 'paper') {
			img.src = 'images/paper.png';
		} else if (computer == 'scissors') {
			img.src = 'images/scissors.png';
		}
		
	
		computerField.appendChild(computerFieldText)
		computerField.appendChild(computerBox)
		computerBox.appendChild(img)
		
		document.body.appendChild(computerField);
	}
}

const score = {
	player: 0,
	computer: 0
} 

const buttons = document.querySelectorAll('button');


buttons.forEach(button => button.addEventListener('click',  () => {
	
	let computer = computerPlay();

	let winner = checkWinner(round(computer, button.id));

	let field = computerFieldDiv(computer);
	

	
	if (winner) {
		console.log(`${winner} has 5 wins. Game Over`);
		let result = document.createElement('div');
		result.classList.add('results');
		document.body.appendChild(result);
		let final = document.createElement('p');
    	final.style.fontSize = '75px';
		final.textContent = `Wygrywa: ${winner}`;
		result.appendChild(final);
	}
}))


