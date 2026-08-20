'use strict';


console.log('1. 分割代入で、データの展開や入れ替えを簡単に行える。');
{
  // 配列での分割代入
  const array1 = [1, 2, 3];
  const [first, second] = array1;
  console.log('first: ' + first);
  console.log('second: ' + second);

  // オブジェクトでの分割代入
  const data = { key1: 'value1', key2: 123, key3: true };
  const { key1, key3 } = data;
  console.log('key1: ' + key1);
  console.log('key3: ' + key3);

  // 配列での入れ替え
  let a = 100;
  let b = 200;
  [a, b] = [b, a];
  console.log(`a:${a}, b:${b}`); // a:200, b:100
}

console.log('2. レスト構文で、残りのデータ群を簡単に代入できる。');
{
  const array1 = [1, 2, 3, 4, 5];

  // これだと、othersNG変数は[3]になる。
  let [first, second, othersNG] = array1;
  console.log('othersNG: ' + othersNG); // 3

  let othersOK;
  // レスト構文で、残りを全てothers変数に代入する。othersOK変数は、[3, 4, 5, 6]になる。
  [first, second, ...othersOK] = array1;
  console.log('othersOK: ' + othersOK); // [3, 4, 5]
}

console.log('3. スプレッド構文で、データの追加を簡単に行える。');
{
  const additionalArray = [4, 5, 6];

  // これだと、[1, 2, 3, [4, 5, 6]]になってしまう。
  const arrayNG = [1, 2, 3, additionalArray];
  console.log('arrayNG: ' + arrayNG);
  console.log('arrayNG.length: ' + arrayNG.length);
  console.log('arrayNG[3]: ' + arrayNG[3]);

  // スプレッド構文により、配列の末尾に、additionalArrayを「分解して」、arrayOKに代入する。
  // [1, 2, 3, 4, 5, 6]になる。
  const arrayOK = [1, 2, 3, ...additionalArray];
  console.log('arrayOK: ' + arrayOK);
  console.log('arrayOK.length: ' + arrayOK.length);
  console.log('arrayOK[3]: ' + arrayOK[3]);
}
