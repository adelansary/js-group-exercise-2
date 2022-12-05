/**Function to clear terminal when called. */
const clear = () => {
  process.stdout.write("\x1Bc");
};

clear();

const sourceJSON = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;

console.log("Good morning !");

let jsObj = JSON.parse(sourceJSON);

function extractObj(obj) {
  return new Promise((resolve, reject) => {
    let extracted = obj.data;
    resolve(extracted);
  });
}

function sortData(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj.sort((a, b) => a - b));
  });
}

function sumData(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj.reduce((a, b) => a + b, 0));
  });
}

function evenOddCheck(obj) {
  return new Promise((resolve, reject) => {
    resolve(obj % 2 === 0);
  });
}

function biggestOfTheBunch(arr1, arr2) {
  return new Promise((resolve, reject) => {
    let sumArr1 = arr1.reduce((a, b) => a + b, 0);
    let sumArr2 = arr2.reduce((a, b) => a + b, 0);
    if (sumArr1 > sumArr2) {
      resolve(sumArr1);
    } else {
      resolve(sumArr2);
    }
  });
}

function extractOdd(arr) {
  return new Promise((resolve, reject) => {
    resolve(arr.filter((elem) => elem % 2 !== 0));
  });
}

function extractEven(arr) {
  return new Promise((resolve, reject) => {
    resolve(arr.filter((elem) => elem % 2 === 0));
  });
}

class Data {
  static async process() {
    let extractedArr = await extractObj(jsObj);

    let sortedArr = await sortData(extractedArr);

    // let sumOfArr = await sumData(sortedArr);

    // let evenOrOdd = await evenOddCheck(sumOfArr);

    return sortedArr;
  }

  static async getOdd(jsObj) {
    let oddExtracted = await extractOdd(await Data.process(jsObj));
    return oddExtracted;
  }
  static async getEven(jsObj) {
    let evenExtracted = await extractEven(await Data.process(jsObj));
    return evenExtracted;
  }
  static async getBiggestSumArray(oddExtracted, evenExtracted) {
    let theWinner = biggestOfTheBunch(oddExtracted, evenExtracted);
    return theWinner;
  }
}

console.log(await Data.getEven(jsObj));
