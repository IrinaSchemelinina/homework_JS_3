// Задача №1

// Выведите числа от 1 до 50 и от 35 до 8.

let i = 1;
while (i <= 50){
    console.log(i);
    i++;
}

for (let i = 35; i >= 8; i--){
    console.log(i);
}

// Задача №2 

// Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.

{
    let i = 89;
    while (i >= 11){
        console.log(i);
        i--;
    }
}

// Задача №3

// С помощью цикла найдите сумму чисел от 0 до 100.

let a = 100;
let sum = 0;

for (let i = 0; i <= a; i++){
    sum = 0;
    for (let j = 0; j <= i; j++){
        sum += j;
    }
    console.log('sum' + i + '=' + sum);
}

// Задача №4

// Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
// (1+2+3).

{
    let a = 5;
    let sum = 0;

    for (let i = 1; i <= a; i++){
        sum = 0;
        for (let j = 1; j <= i; j++){
            sum += j;
        }
        console.log('sum' + i + '=' + sum);
    }
}

// Задача №5

// Выведите чётные числа от 8 до 56. Решить задание через while и for.

for (let i = 8; i <= 56; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

// Задача №6

// Необходимо вывести на экран полную таблицу умножения (от 2 до 10)

for (i = 2; i <= 10; i++){
    for (j = 1; j <= 10; j++){
       console.log(`${i} * ${j} = ${i * j}`);
    }  
}

// Задача №7 

// Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.

for (let n = 1000, i = 0; n > 50; n = n / 2, i++){
   console.log(n, i); 
}

// Задача №8

// Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
// может ввести отрицательное значение.

let flag = true, 
    s = 0,
    g = 0;
 
while (flag){
    let num = prompt( "Введите число", 0 );
    if (num != 0 && num != null && num != '' && !isNaN(num)) {
    ++g;
    s += +num;
    }else if (isNaN(num)){
        alert('Ввели не число');
        continue;
    }else{
    flag = !flag;
    }
}
  
alert( "Сумма чисел: " + s );   
alert( "Среднее арифметическое: " + (s / g) );
 
// Задача №9

// Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
// 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.


let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let max = -Infinity;
let min = Infinity;
let buffer = '';  

for (let i = 0; i < str.length; i++){
    if (str[i] !== ''){
        buffer += str[i];
    }else{
        if (+buffer > +max) max = +buffer;
        if (+buffer < +min) min = +buffer;
        buffer = '';
    }
}
console.log(max);
console.log(min);


// Задача №10

// Дано произвольное целое число n. Написать программу, которая:
// a. разбивает число n на цифры и выводит их на экран;
// b. подсчитывает сколько цифр в числе n;
// c. находит сумму цифр числа n;
// d. меняет порядок цифр числа n на обратный.
// Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.

let n = "12345";
let total = 0;
for (i = 0; i < n.length; i++){
  total += parseInt(n[i]);
}    
console.log(total);