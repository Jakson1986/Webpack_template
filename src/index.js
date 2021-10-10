import example from './images/services3.png';


class Game {
    name = 'Violin Charades'
};

const myGame = new Game();

const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`

const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

const root = document.querySelector('#root');
root.append(heading, p);