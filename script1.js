function getRandomNumber() {
  let randomNumber = Math.random() * 100;
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}

const handleClick = () => {
  let userName = document.getElementById("userInput").value;
  let partnerName = document.getElementById("partnerInput").value;
  let number = getRandomNumber();
  alert(`${userName} love percentage with ${partnerName} is ${number}`);
};

document.getElementById("submitBtn").addEventListener("click", handleClick);
