// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation
const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.style.color = 'red';
redParagraph.textContent = "Hey I'm red!";

const blueH2 =  document.createElement('h2');
blueH2.setAttribute('style','color: blue;');
blueH2.textContent = "I'm a blue h3!";

const newdiv = document.createElement('div');
newdiv.setAttribute('style','background-color: pink; border: solid black')

const nestedH1 = document.createElement('h1');
nestedH1.textContent = "I'm in a div.";
const nestedP = document.createElement('p');
nestedP.textContent = "ME TOO!";

newdiv.appendChild(nestedH1);
newdiv.appendChild(nestedP);


container.appendChild(redParagraph);
container.appendChild(blueH2);
container.appendChild(newdiv);


// Events section

// method 2: set "on_event" property on DOM
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
btn.onclick =  alert("Hello World");

// method 3: event listeners
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert(btn2.id);
});
