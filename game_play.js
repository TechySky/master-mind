let scoreResult = "";
let isGameFinished = false;
const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "white",
  "orange",
  "brown",
];
const pickSquence = [];
const currentSequence = [];
let step = 1;
const scoreCoverEl = document.querySelector(".solution-mastermind-cover");

const scoreResultEl = document.querySelector(".score-result");
const sequenceContainer = document.querySelectorAll(
  ".solution-mastermind .peg-container .peg-hole .peg"
);
const pegs = document.querySelectorAll(
  ".mastermind-pegs .peg-container .peg-hole .peg"
);
// Peg Row One
const pegRowOne = document.querySelectorAll(".peg-row-1 .peg-container .peg");
const pegRowOneResults = document.querySelectorAll(
  ".peg-row-1 .peg-result .peg"
);

// Peg Row Two
const pegRowTwo = document.querySelectorAll(".peg-row-2 .peg-container .peg");
const pegRowTwoResults = document.querySelectorAll(
  ".peg-row-2 .peg-result .peg"
);

// Peg Row Three
const pegRowThree = document.querySelectorAll(".peg-row-3 .peg-container .peg");
const pegRowThreeResults = document.querySelectorAll(
  ".peg-row-3 .peg-result .peg"
);

// Peg Row Four
const pegRowFour = document.querySelectorAll(".peg-row-4 .peg-container .peg");
const pegRowFourResults = document.querySelectorAll(
  ".peg-row-4 .peg-result .peg"
);

// Peg Row Five
const pegRowFive = document.querySelectorAll(".peg-row-5 .peg-container .peg");
const pegRowFiveResults = document.querySelectorAll(
  ".peg-row-5 .peg-result .peg"
);

// Peg Row Six
const pegRowSix = document.querySelectorAll(".peg-row-6 .peg-container .peg");
const pegRowSixResults = document.querySelectorAll(
  ".peg-row-6 .peg-result .peg"
);

// Peg Row Seven
const pegRowSeven = document.querySelectorAll(".peg-row-7 .peg-container .peg");
const pegRowSevenResults = document.querySelectorAll(
  ".peg-row-7 .peg-result .peg"
);

// Peg Row Six
const pegRowEight = document.querySelectorAll(".peg-row-8 .peg-container .peg");
const pegRowEightResults = document.querySelectorAll(
  ".peg-row-8 .peg-result .peg"
);
const pegBtnOk = document.querySelector(".peg-btn-ok");
const pegBtnRemove = document.querySelector(".peg-btn-remove");
const playAreaSelectedPegs = [];

const selectedColor = "";

const pickRandomSequences = () => {
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * 8);
    const isInclude = pickSquence.includes(colors[randomIndex]);
    if (!isInclude) {
      pickSquence.push(colors[randomIndex]);
    } else {
      i--;
    }
  }
  console.log(pickSquence);
  const keys = Object.keys(sequenceContainer);
  keys.map((key) => {
    sequenceContainer[key].classList.add(pickSquence[key]);
  });
};

pegBtnOk.addEventListener("click", function (event) {
  btnOkHandler();
});

pegBtnRemove.addEventListener("click", function (event) {
  btnRemoveHandler();
});

// Peg Row One
const playGame = () => {
  for (let i = 0; i < pegs.length; i++) {
    pegs[i].addEventListener("click", function () {
      const colorClass = pegs[i].classList[1];
      if (isGameFinished === false) {
        fillPegs(colorClass);
      }
    });
  }
};

const fillPegs = (colorClass) => {
  if (step === 1) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowOne.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowOne[i].classList[1] === undefined) {
            pegRowOne[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  } else if (step === 2) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowTwo.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowTwo[i].classList[1] === undefined) {
            pegRowTwo[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  } else if (step === 3) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowThree.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowThree[i].classList[1] === undefined) {
            pegRowThree[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  } else if (step === 4) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowFour.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowFour[i].classList[1] === undefined) {
            pegRowFour[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  } else if (step === 5) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowFive.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowFive[i].classList[1] === undefined) {
            pegRowFive[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  } else if (step === 6) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowSix.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowSix[i].classList[1] === undefined) {
            pegRowSix[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  } else if (step === 7) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowSeven.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowSeven[i].classList[1] === undefined) {
            pegRowSeven[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  } else if (step === 8) {
    if (colors.includes(colorClass)) {
      for (let i = pegRowEight.length - 1; i >= 0; i--) {
        if (!currentSequence.includes(colorClass)) {
          if (pegRowEight[i].classList[1] === undefined) {
            pegRowEight[i].classList.add(colorClass);
            currentSequence.push(colorClass);
            return;
          }
        }
      }
    }
  }
};

const btnOkHandler = () => {
  const result = [];
  if (currentSequence.length == 4) {
    for (let i = 0; i < 4; i++) {
      const index = pickSquence.indexOf(currentSequence[i]);
      if (index === -1) {
        result.push("");
      } else if (index === i) {
        result.push("black");
      } else {
        result.push("white");
      }
    }

    if (step === 1) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowOneResults[i].classList.add(result_class);
        }
      }
    } else if (step === 2) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowTwoResults[i].classList.add(result_class);
        }
      }
    } else if (step === 3) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowThreeResults[i].classList.add(result_class);
        }
      }
    } else if (step === 4) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowFourResults[i].classList.add(result_class);
        }
      }
    } else if (step === 5) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowFiveResults[i].classList.add(result_class);
        }
      }
    } else if (step === 6) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowSixResults[i].classList.add(result_class);
        }
      }
    } else if (step === 7) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowSevenResults[i].classList.add(result_class);
        }
      }
    } else if (step === 8) {
      for (let i = 0; i < 4; i++) {
        const result_class = result[i];
        if (result_class.trim().length != 0) {
          pegRowEightResults[i].classList.add(result_class);
        }
      }
    }
    isGameFinished = isGameFinishedHandler(result);
    if (isGameFinished == false) {
      if (step <= 8) {
        step++;
        currentSequence.splice(0, 4);
      }
    }
    showResult();
  }
};

const isGameFinishedHandler = (results) => {
  for (let i = 0; i < results.length; i++) {
    if (results[i] !== "black") {
      return false;
    }
  }
  return true;
};
const btnRemoveHandler = () => {
  if (isGameFinished === false) {
    const lastIndex = currentSequence.length - 1;
    const tempClass = currentSequence[lastIndex];
    const tempIndex = 3 - lastIndex;

    if (currentSequence.length !== 0) {
      if (step === 1) {
        pegRowOne[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      } else if (step === 2) {
        pegRowTwo[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      } else if (step === 3) {
        pegRowThree[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      } else if (step === 4) {
        pegRowFour[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      } else if (step === 5) {
        pegRowFive[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      } else if (step === 6) {
        pegRowSix[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      } else if (step === 7) {
        pegRowSeven[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      } else if (step === 8) {
        pegRowEight[tempIndex].classList.remove(tempClass);
        currentSequence.splice(lastIndex, 1);
      }
    }
  }
};

const showResult = () => {
  if (step <= 8) {
    if (isGameFinished) {
      scoreResultEl.innerHTML = "You Won !";
      scoreCoverEl.classList.remove("cover-active");
    } else {
      scoreResultEl.innerHTML = "";
    }
  } else if (step === 9) {
    if (isGameFinished) {
      scoreResultEl.innerHTML = "You Won !";
      scoreCoverEl.classList.remove("cover-active");
    } else {
      scoreResultEl.innerHTML = "Game Over !";
      scoreCoverEl.classList.remove("cover-active");
    }
  }
};
pickRandomSequences();
playGame();
