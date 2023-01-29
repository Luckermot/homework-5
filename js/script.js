function task1() {
  let elem = document.getElementById("text");
  elem.innerHTML = "Ку-ку! А я <b>жирный</b>!";
}

function task2() {
  let elem = document.getElementById("text2");
  elem.outerHTML = "<h3><b>Абзац превратился в h3!</b></h3>";
}

function task3() {
  let elem = document.getElementById("text3");
  elem.outerHTML = "<h3><b>" + elem.innerHTML + "</b></h3>";
}

function task4() {
  let sum = 0;
  let operand1 = +document.getElementById("input1").value;
  console.log(operand1);
  let operand2 = +document.getElementById("input2").value;
  console.log(operand2);
  sum = operand1 + operand2;
  let answer = document.getElementById("sum");
  answer.innerHTML = sum;
}

function task5() {
  let elems = document.querySelectorAll(".text5");
  for (let i = 0; i < elems.length; i++) {
    elems[i].innerHTML = `${i}`;
  }
}
