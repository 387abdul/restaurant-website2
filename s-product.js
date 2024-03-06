let subtractElement = document.getElementById("sub");
let addElement = document.getElementById("add");
let numberElement = document.getElementById("number");

let currentNumber = 1;

addElement.addEventListener("click", () => {
  currentNumber += 1;
  numberElement.textContent = currentNumber;
//   console.log(numberElement);
});

subtractElement.addEventListener("click", () => {
  if (currentNumber === 1) {
    numberElement.innerHTML = currentNumber;
  } else {
    currentNumber -= 1;
    numberElement.innerHTML = currentNumber;
  }
});

// according 
const according = document.getElementsByClassName('contentBox');

for(let i = 0; i < according.length; i++) {
  according[i].addEventListener('click',function() {
    this.classList.toggler('active')
  });
}
