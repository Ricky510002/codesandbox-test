// 関数
const abc = function (str) {
  return str;
};

console.log(abc("gbc"));

// アロー関数
// const 名前　= (引数) => {
//   return やりたい処理；
// }

//引数一つなら（）省略可
//returnの中身も１行ならreturn省略可 {}で囲ったらreturn必要

const bbb = (num) => {
  return num * num;
};
console.log(bbb(8));

const ccc = (num) => num + num;
console.log(ccc(4));
