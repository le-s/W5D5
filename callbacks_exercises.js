class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.seconds = date.getSeconds();
    this.minutes = date.getMinutes();
    this.hours = date.getHours();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
      this.seconds += 1;

    // 2. Call printTime.
      this.printTime();

  }
}
//
// const clock = new Clock();


// addNumbers
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    rl.close();
    return completionCallback(sum);
  }

  rl.question("Please input a number: ", function (answer) {
    let num = parseInt(answer);
    sum += num;
    console.log(sum);
    addNumbers(sum, numsLeft - 1, completionCallback);
  });
}

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// absurdBubbleSort

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  rl.question (`Is ${el1} greater than ${el2}? `, function (answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(5, 3, (answer) => console.log(answer));

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (answer) {
      if (answer === true) {
        let l1 = arr[i];
        let l2 = arr[i + 1];
        arr[i] = l2;
        arr[i + 1] = l1;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }

}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps === false) {
      sortCompletionCallback(arr);
    } else {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
  }
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});




//
