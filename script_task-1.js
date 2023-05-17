// Ф-ия считывает значение из inp-1 ищет данный элемент в масииве a1. Выводит в out-1 результат работы.

const section1 = document.querySelector('.task-1');
const outArr1 = section1.querySelector('.arr-1');
const inp1 = section1.querySelector('.inp-1');
const btn1 = section1.querySelector('.btn-1');
const out1 = section1.querySelector('.out-1');

const a1 = [2, 23, 5443, `t12`, 7567, 97, 't34', 't2', 'hh', 'dd'];
outArr1.textContent = '[ ' + a1 + ' ]';

btn1.addEventListener('click', function () {
  f1(a1);
});

function f1(arr) {
  let arrStr = arr.map((el) => String(el));
  let indArr = arrStr.indexOf(inp1.value);
  if (indArr !== -1) {
    out1.value = 'Index element = ' + indArr;
  } else {
    out1.value = 'Element its not defined';
  }

  console.log(indArr);
}
console.log('=============================================');
const section2 = document.querySelector('.task-2');
const outArr2 = section2.querySelector('.arr-2');
const inp2 = section2.querySelector('.inp-2');
const inp2Ind = section2.querySelector('.inp-21');
const btn2 = section2.querySelector('.btn-2');
const out2 = section2.querySelector('.out-2');

const a2 = [4, 't2', 'hh', 'dd', 4, 3, 54, `t12`, 67, 97, 't34'];
let arrStr2 = a2.map((el) => String(el));

outArr2.textContent = '[ ' + a2 + ' ]';

btn2.addEventListener('click', function () {
  f2(arrStr2);
});

function f2(arr) {
  let inpValInd = inp2.value;
  let indValStr = inp2Ind.value;
  let inp = arr.indexOf(inpValInd, indValStr);
  if (inp !== -1) {
    out2.value = 'Index element = ' + inp;
  } else {
    out2.value = 'Element its not defined -1';
  }

  // console.log(inp);
}
console.log('=============================================');
const btn3 = document.querySelector('.btn-3');
const inp3 = document.querySelector('.inp-3');
const out3 = document.querySelector('.out-3');
const outArr3 = document.querySelector('.arr-3');
const a3 = [4, 't2', '33', 'dd', 4, 3, 54, `t12`, 67, 97, 't34'];

let arrStr3 = a3.map((el) => String(el));

outArr3.textContent = '[ ' + a3 + ' ]';

btn3.addEventListener('click', () => {
  f6(arrStr3, inp3.value);
});
function f6(arr, numSearch) {
  out3.textContent = indexOfEmul(arr, numSearch);
}
function indexOfEmul(arr, item, from = 0) {
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
}
console.log('=============================================');
const sec4 = document.querySelector('.task-4');
const btn4 = sec4.querySelector('.btn-4');
const inp4 = sec4.querySelector('.inp-4');
const out4 = sec4.querySelector('.out-4');
const outArr4 = sec4.querySelector('.arr-4');
const a4 = [4, 't2', 't33', 'tdd', 'tg', 4, 3, 54, `t12`, 67, 97, 't34'];

outArr4.textContent = '[ ' + a3 + ' ]';

btn4.addEventListener('click', f6);

function f6() {
  let arr = a4.map((el) => String(el));
  // console.log(arr);
  let inpValInd = inp4.value;
  const quantityArr = [];
  let lastResult;
  while (lastResult !== -1) {
    lastResult = arr.indexOf(inpValInd, lastResult + 1);
    if (lastResult !== -1) {
      console.log(lastResult);
      quantityArr.push(lastResult);
    }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   lastResult = arr.indexOf(inpValInd, lastResult + 1);

  //   if (lastResult !== -1) {
  //     quantityArr.push(lastResult);
  //     // console.log(quantityArr);
  //     out4.textContent = quantityArr;
  //   } else {
  //     return;
  //   }
  // }

  console.log(quantityArr);
  out4.textContent = 'Index element - ' + quantityArr.join(' and ');
}
