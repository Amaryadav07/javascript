
let countValue = 0;
let ans = document.getElementById('counter');


function increment() {
  countValue++;
  ans.innerHTML = countValue;
}

function decrement() {
  if (countValue > 0) {
    countValue--;
    ans.innerHTML = countValue;
  }
}
