'use strict';

const user = ['Minh', 'Hoang', 'Cuong'];

function getRandomNumber () {
  return parseInt((Math.random() * 10) % user.length);
}

console.log('Người phải đi mua là', user[getRandomNumber()]);

