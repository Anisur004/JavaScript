# Project  related to Dom


## Project link

[Click hear](https://stackblitz.com/edit/stackblitz-starters-zrngnb?file=01-colorChanger%2Fscript.js,01-colorChanger%2Fstyle.css%3AL8-L8,index.html)

# Solution code


## project 1

``` javaScript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

