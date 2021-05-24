//オブジェクト
const profile = {
  name: "taro",
  age: 20
};
//配列
const number = [0, 1, 3, 3, 4];

const message1 = `名前は${profile.name}で、年は${profile.age}です`;
const num_message1 = `一つ目の数は${number[0]}です。`;
console.log(message1);
console.log(num_message1);

//分割代入を利用する(配列、オブジェクトにできる)
// const {プロパティ名１,プロパティ名２} = どこのオブジェクトか

const { name, age } = profile;
const message2 = `名前は${name}で、年は${age}です`;
console.log(message2);

const [A, B] = number;
const num_message2 = `一つ目の数は${A}です。`;
console.log(num_message2);

//分割代入は配列やオブジェクトの値を取ってきて新しい変数に代入でき、使いやすくする。
