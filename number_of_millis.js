// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// call above function as shown below
delay(10000).then(() => console.log("has run after 10 seconds"));
