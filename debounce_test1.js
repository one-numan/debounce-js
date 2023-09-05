console.log("Start");

inputField = document.getElementById("inputField");
outputField = document.getElementById("outputField");
lengthOfInput = document.getElementById("lengthOfInput");

// inputField.addEventListener("keyup", () => {
//   outputField.innerText = inputField.value;
//   lengthOfInput.innerText = inputField.value.length;
//   console.log("Updating The Value");
// });

function deboucing(func, delay) {
  let timerId;
  return function () {
    const context = this;
    // console.log(context);
    const args = arguments;
    // console.log(args);
    clearTimeout(timerId);
    // console.log(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
      outputField.innerText = inputField.value;
      lengthOfInput.innerText = inputField.value.length;
    }, delay);
  };
}

const debouceFunc = deboucing(function () {
  console.log("Function is Called After 500ms of in Activity");
  //   console.log("Updating The Value");
}, 500);

inputField.addEventListener("keyup", debouceFunc);
