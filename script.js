  const CHOICES = [
    {
      name: "paper",
      beats: "rock",
    },
    {
      name: "scissors",
      beats: "paper",
    },
    {
      name: "rock",
      beats: "scissors",
    },
  ];
  const btnRules = document.querySelector(".rules-btn");
  const btnClose = document.querySelector(".close-btn");
  const modalRules = document.querySelector(".modal");
  const nextbtn = document.querySelector(".next-btn");

  const cont = document.querySelector(".container");
  const cont1 = document.querySelector(".container1");
  const choiceButtons = document.querySelectorAll(".choice-btn");
  const gameDiv = document.querySelector(".game");
  const resultsDiv = document.querySelector(".results");
  const resultDivs = document.querySelectorAll(".results__result");
  
  const resultWinner = document.querySelector(".results__winner");
  const resultText = document.querySelector(".results__text");
  
  const playAgainBtn = document.querySelector(".play-again");
  const playAgainBtn1 = document.querySelector(".play-again1");
  
  const user_scoreNumber = document.querySelector(".user_score__number");
  const pc_scoreNumber = document.querySelector(".pc_score__number");
  let user_score = 0;
  let pc_score = 0;
  
  // Game Logic
  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const choiceName = button.dataset.choice;
      const choice = CHOICES.find((choice) => choice.name === choiceName);
      choose(choice);
    });
  });
  
  function choose(choice) {
    const aichoice = aiChoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
  }
  
  function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
  }
  
  function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
      setTimeout(() => {
        resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="img/${results[idx].name}.svg" alt="${results[idx].name}" />
          </div>
        `;
      }, idx * 1000);
    });
  
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  }
  
  function displayWinner(results) {
    setTimeout(() => {
      const userWins = isWinner(results);
      const aiWins = isWinner(results.reverse());
  
      if (userWins) {
        resultText.innerText = "you win";
        resultDivs[0].classList.toggle("winner");
        keepScore(1);
        nextbtn.style.display = "block";
      } else if (aiWins) {
        resultText.innerText = "you lose";
        resultDivs[1].classList.toggle("winner");
        keepScore1(1);
      } else {
        resultText.innerText = "draw";
      }
      resultWinner.classList.toggle("hidden");
      resultsDiv.classList.toggle("show-winner");
    }, 1000);
  }
  
  function isWinner(results) {
    return results[0].beats === results[1].name;
  }
  
  function keepScore(point) {
    user_score += point;
    user_scoreNumber.innerText = user_score;
  }
  function keepScore1(point) {
    pc_score += point;
    pc_scoreNumber.innerText = pc_score;
  }
  
  // Play Again
  playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
    nextbtn.style.display = "none";
  
    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  });
  
  // Show/Hide Rules
  btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  nextbtn.addEventListener("click",()=>{
    cont.classList.toggle("hidden");
    cont1.classList.toggle("hidden");
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
    nextbtn.style.display = "none";
    btnRules.classList.toggle("hidden");
  })
  playAgainBtn1.addEventListener("click",()=>{
    cont.classList.toggle("hidden");
    cont1.classList.toggle("hidden");
    btnRules.classList.toggle("hidden");

    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
    
  })
