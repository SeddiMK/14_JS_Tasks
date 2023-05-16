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
const btn2 = section2.querySelector('.btn-2');
const out2 = section2.querySelector('.out-2');
