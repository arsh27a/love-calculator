function getRandomNumber() {
  let randomNumber = Math.random() * 100;
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}

const handleClick = () => {
  let userName = document.getElementById("userInput").value;
  let partnerName = document.getElementById("partnerInput").value;
  if (userName.length === 0 && partnerName.length === 0) {
    alert("Enter your or your partner name");
  } else {
    let number = getRandomNumber();
    alert(`${userName} love percentage with ${partnerName} is ${number}`);
  }
};

document.getElementById("submitBtn").addEventListener("click", handleClick);
