function diceGameSimulation(numSimulations) {
  const arr = [];

  const handleResult = (sum) => {
    if (sum === 7 || sum === 11) {
      return "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      return "lose";
    }

    return "roll again";
  };

  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    const result = handleResult(sum);

    arr.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return arr;
}

module.exports = diceGameSimulation;
