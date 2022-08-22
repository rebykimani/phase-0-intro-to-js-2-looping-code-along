// Code your solutions in this file
function writeCards(array, name) {
    let messages = [];
    for (let i = 0; i < array.length; i++) {
      messages.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
    }
    // console.log(messages)
    return messages;
  }
  writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
  
  // Second Section
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  countDown(4);