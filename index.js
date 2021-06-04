let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
let count = 0;

function getNumber() {
  return randomNumber;
}

function guessNumber() {
  //The "getElementById" method to get the value of the html element with the id "guesser". In this case, it is the input.
//The "createElement" method creates an element, in this case a <p>.
  let guess = document.getElementById("guesser").value;
  //let log = document.createElement("p");
  let log = document.getElementById("sresult");
  log.className = "result";
 
//The "appendChild" adds the p element with the appropriate text based on the input.
  if (guess < randomNumber) {
    log.innerHTML += guess + " is too low. || ";
    document.sresult.appendChild(log);
    count ++;
    return;
  } else if (guess > randomNumber) {
    log.innerHTML += "\n"+guess + " is too high. || ";
    document.sresult.appendChild(log);
    count ++;
    return;
  } else {
    count ++;
    log.innerHTML +="\n"+ guess + " is correct! You guessed the number in " + count + "  tries! ||  ";
    document.sresult.appendChild(log);
    
    return;
  }
}

document.getElementById("guesser").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    guessNumber();
  }
})