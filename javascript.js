function computerPlay() {
  let output = Math.floor(Math.random() * 3);
  if (output == 0) {
    // console.log('output = '+output)
    return output = 'kamien'
  } else if (output == 1) {
    // console.log('output = '+output)
    return output = 'papier'
  } else if (output == 2) {
    // console.log('output = '+output)
    return output = 'nozyce'
  } 
}

function round(computerSelection, playerSelection) {
  if (playerSelection == 'kamien') {
    if (computerSelection == 'kamien') {
      return result = 'Remis';
    } else if (computerSelection == 'papier') {
      return result = 'Wygral computer';
    } else if (computerSelection == 'nozyce') {
      return result = 'Wygral player';
    }
  } else if (playerSelection == 'papier') {
    if (computerSelection == 'papier') {
      return result = 'Remis';
    } else if (computerSelection == 'nozyce') {
      return result = 'Wygral computer';
    } else if (computerSelection == 'kamien') {
      return result = 'Wygral player';
    }
  } else if (playerSelection == 'nozyce') {
    if (computerSelection == 'nozyce') {
      return result = 'Remis';
    } else if (computerSelection == 'kamien') {
      return result = 'Wygral computer';
    } else if (computerSelection == 'papier') {
      return result = 'Wygral player';
    }
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt('Co ciepiesz synu?');
    playerSelection = playerSelection.toLowerCase();
    console.log(round(computerPlay(),playerSelection));
  }
}

console.log(game())
