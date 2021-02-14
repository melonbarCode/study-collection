//코딩 문제중 하나

function printNumbers(n, timeDelayBetween) {
  if (typeof n !== "number") {
    throw new Error("n is not number");
  }

  if (typeof timeDelayBetween !== "number") {
    throw new Error("timeDelayBetween is not number");
  }

  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * timeDelayBetween);
  }
}

printNumbers(3, 1000);

// Promise chaining 이용
function printNumbersWithPromise(n, timeDelayBetween) {
  let count = 0;
  //   console.log(count);

  function doSomething(end) {
    return new Promise(function (resolve, reject) {
      //   if (count === 0) {
      //     console.log(count);
      //     count++;
      //     resolve(doSomething(n));
      //     return;
      //   }

      setTimeout(function () {
        if (count === end) return;
        console.log(count);
        count++;
        resolve(doSomething(n));
      }, timeDelayBetween);
    });
  }

  doSomething(n);
}

printNumbersWithPromise(10, 500);
// printNumbersWithPromise(10, 500);

async function PrintNumbersAsync(n, timeDelayBetween) {
  let count = 0;

  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  for (let i = 0; i < n; i++) {
    console.log(i);
    await sleep(timeDelayBetween);
  }
}

PrintNumbersAsync(3, 2000);
