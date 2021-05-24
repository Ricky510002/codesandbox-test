//mapやfilterを使った配列の処理
//これのおかげでfor文をほとんど使わなくなった

const nameArr = ["Aさん", "Bさん", "Cさん"];

for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);
//mapはある配列の中身を引数として処理して新しい配列を返す。
//１つ目の引数は配列の中身で２つ目はindex番号

//処理だけしたいなら
nameArr.map((name) => console.log(name));

//filter
//filterはある条件に一致したものだけを取得して新しい配列を生成する。

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 0;
});

console.log(newNumArr);

//ifとmapの応用例 Aさん以外にですをつける
nameArr.map((name) => {
  if (name === "Aさん") {
    return console.log(name);
  } else {
    return console.log(`${name}です`);
  }
});
