// 1) Напишите функцию fillArray, которая создает массив и заполняет ее предоставленным значением.

function fillArray(length, value) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(value);
  }
  return arr;
}

console.log(fillArray(10, "Slavik"));

// 2) Напишите функцию filterArray, которая очищает массив от нежелательных значений (false, undefined, '', 0, null), СПИСОК КОТОРЫХ ПЕРЕДАН ВВИДЕ АРГУМЕНТОВ ФУНКЦИИ.

function filterArray(arr) {
  return arr.filter((el) => {
    if (el > 0 || el !== "") {
      return el;
    }
  });
}

const result = filterArray([0, 1, 2, null, "", undefined, "qwerty", false]);

console.log(result);

// 3) Напишите функцию calcSum, которая вернет сумму всех входящих параметров функции.

function calcSum() {
  res = 0;

  for (argument of arguments) {
    if (typeof argument === 'number'){
      res += argument;
    }
  }
  return res;
}

console.log(calcSum(1,2,2,2,2,));

// 4) Напишите функцию декортор, которая будет выводить все данные из строки добавлять в начале и в конец строку: =====

function createPipe() {
  return function(x) {
    return (`===== ${x} =====`);
  };
}
const pipeFunction = createPipe();
console.log(pipeFunction('some text you like'));

/*5) Создайте функцию, которая принемает 2а аругемнта, текст и функцию для его вывода вызовете ее дважды таким образом, 
чтобы в первый раз вывод строки был в консоль, а второй раз в алерте.*/

function showText(text, funcShow){
  return funcShow(text);
}

showText('Hello', (message) => console.log(message));
showText('Hello', (message) => alert(message));
