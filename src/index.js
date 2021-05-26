///三項演算子
//if文をもっと簡潔にしたような感じ

// 条件　？　trueの時の処理 : falseの時の処理

const val1 = 1 > 0 ? "trueです" : "falseです";

console.log(val1);

const num = 1300;
//toLocaleString()は1,300のようにしてくれる
console.log(num.toLocaleString());

const formatNum =
  typeof num === "number" ? num.toLocaleString() : "数を入力してください";
console.log(formatNum);
