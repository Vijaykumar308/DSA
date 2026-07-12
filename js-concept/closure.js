// function outer() {
//     let count = 0;

//     function inner() {
//         console.log(count);
//         count++;
//     }
//     return inner;
// }

// const closure = outer();


function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
    setCount(c) {
       count = c; 
    }
  };
}

const counter = createCounter();
