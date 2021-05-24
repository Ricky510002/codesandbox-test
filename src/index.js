//スプレッド構文

const arr1 = [1, 2];
// console.log(arr1);
// 配列の展開(値を１つずつd出してくれる)
// console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 * num2);

sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);
//↑同じ結果になる

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(arr3);

//配列のコピー、結合

const arr4 = [10, 20];
const arr5 = [30, 40];

//arr4をコピー
const arr6 = [...arr4];
//arr4 arr5を結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);
