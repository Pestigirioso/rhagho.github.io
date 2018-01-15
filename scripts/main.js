var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image03.png') {
      myImage.setAttribute ('src','images/image02.jpg');
    } else {
      myImage.setAttribute ('src','images/image03.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Te presento al logo de la trifuerza, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Te presento al logo de la trifuerza, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
