// alert('Welcome to my website');

// let myHeading = document.querySelector('h1');
// myHeading.textContent = "Hello!";

const myImage = document.querySelector('img');

myImage.onclick = function() {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'hammer.png') {
    myImage.setAttribute('src', '01lian_2-superJumbo.webp');
  } else {
    myImage.setAttribute('src', 'hammer.png');
  }
}

const myButton = document.querySelector('button');
const myHeading = document.querySelector('h2');

function setUsername() {
  let myName = prompt('请输入您的用户名：');
  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome! ' + myName;
  }
}

if (!localStorage.getItem('name')) {
  setUsername();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome! ' + storedName;
}

myButton.onclick = function() {
  setUsername();
}

// you can also use the 'addEventListener' method to do it.
myButton.addEventListener('click', setUsername);
