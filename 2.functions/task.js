// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
    min = Math.min(...arr);
    max = Math.max(...arr);
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    } else if (min > arr[i]) {
        min = arr[i];
      }
    
    sum += arr[i]
  }
  avg = sum / arr.length
 

  return { min:min, max:max, avg:+avg.toFixed(2) };
}

const worker = function(arr) {
  let maxWorker;
  let sum = 0;
  for (let i =0; i<arr.length; i++) {
    sum += arr[i];
    maxWorker = Math.max(arr[i]);
    if (sum > maxWorker){
      maxWorker = sum;
    }
  }
  return maxWorker; 
}

function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = worker(arrOfArr[i]);
    if (result > max){
      max = result;
    }
  }
 return max;
}

makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker);

// Задание 3

function worker2(arr) {
  let maxWorker2 = -Infinity;
  let minWorker2 = Infinity;
  for (let i = 0; i < arr.length; i++){
    if (maxWorker2 < arr[i]){
      maxWorker2 = arr[i];
    }
    if (arr[i] < minWorker2) {
      minWorker2 = arr[i];
    }
  }
  return Math.abs(maxWorker2 - minWorker2);
}