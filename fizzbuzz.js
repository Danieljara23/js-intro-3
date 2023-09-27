for (let i = 0; i < 49; i++) {
  let stringToShow = '';
  if (i % 3 === 0) {
    stringToShow+= "Fizz";
  } 
  if (i % 5 === 0) {
    stringToShow+= "Buzz";
  }
  if(!stringToShow) {
    stringToShow = i;
  }
  console.log(stringToShow)
}
