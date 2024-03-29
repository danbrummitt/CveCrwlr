import { player } from './script.js';
import { eventEmitter } from './eventEmitter.js';

export function pickTwo() {
    pick(2);
  }

/**
 * Picks a random number 8.
 * Calls the pick() function, passing 8 as the guess.
 */
export function pickEight() {
  pick(8);
}

export function pick(guess) {
    let goldComponent = player.getComponent('gold');
    let healthComponent = player.getComponent('health');
    let numbers = [];
    while (numbers.length < 10) {
      numbers.push(Math.floor(Math.random() * 11));
    }
    text.innerText = "You picked " + guess + ". Here are the random numbers:\n";
    for (let i = 0; i < 10; i++) {
      text.innerText += numbers[i] + "\n";
    }
    if (numbers.indexOf(guess) !== -1) {
      text.innerText += "Correct! You win 20 gold!";
      eventEmitter.emit('addGold', 20);
      goldText.innerText = goldComponent.gold;
    } else {
      text.innerText += "Wrong! You lose 10 health!";
      eventEmitter.emit('playerDamaged', 10);
      healthText.innerText = healthComponent.currentHealth;
    }
  }