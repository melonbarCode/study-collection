function solution(numbers) {
  const numberList = numbers.split("");
  const answers = getList(numberList);

  return answers.length;
}

function getList(numberList, prevNumber) {
  const frontPaddingNumber = prevNumber || "";

  return numberList.reduce((primeNumbers, number, index) => {
    if (isPrime(+(frontPaddingNumber + number))) {
      primeNumbers.push(+(frontPaddingNumber + number));
    }

    const nextNumberList = [...numberList];
    nextNumberList.splice(index, 1);

    const result = getList(nextNumberList, frontPaddingNumber + number);
    primeNumbers.push(...result);

    return primeNumbers.filter((v, i) => primeNumbers.indexOf(v) === i);
  }, []);
}

function isPrime(number) {
  const notPrime = [0, 1];
  if (notPrime.includes(number)) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(solution("011"));
