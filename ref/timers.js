



// The most important thing to remember
// about JavaScript in the browser.
// Asynchronous code is always executed later.
for (let i = 0; i < 10; i++) {
  console.log(i);

  setTimeout(() => {
    console.log('The number is ' + i);
  }, 1000);
}


function print() {
  console.log('print');
}

// Every second, execute the print function.
const clock1 = setInterval(print, 1000);

// after 5 seconds, stop the clock.
setTimeout(() => {
  clearInterval(clock1);
}, 5000);
