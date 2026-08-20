'use strict';

console.log('1. 関数宣言');

console.log('関数巻き上げの効果で、上の方で利用しても使える : ' + double1(10));
function double1(num) {
  console.log('this : ' + this); // この関数を保持するクラスを指す。今はクラスを持たないのでundefinedになる。
  return num * 2;
}
console.log('通常よく使う関数宣言 : ' + double1(11));

console.log('2. 関数式。');

try {
  double2(20);
} catch (err) {
  console.log('関数巻き上げ不可。' + err);
}
const double2 = function (num) {
  console.log('this : ' + this); // この関数を保持するクラスを指す。今はクラスを持たないのでundefinedになる。
  return num * 2;
}
let aaa = double2;
console.log('関数式。関数を変数や定数に持たせるやり方。' + aaa(21));

const delegate = function (param, func) {
  return func(param);
}
console.log('関数式にすることで、関数自体を引数にセットできる。' + delegate(22, double2));

console.log('3. アロー型関数');
try {
  double_arrow(30);
} catch (err) {
  console.log('関数巻き上げ不可。' + err);
}
const double_arrow = (num) => {
  console.log('this : ' + this); // アロー型関数の場合は、この関数を保持するクラスではなく、グローバルオブジェクト(Window)を指す。thisの扱いの違いに注意！
  return num * 2;
}
console.log('アロー型関数。' + double_arrow(31));
const double_arrow_simple = (num) => num * 2;
console.log('アロー型関数はシンプルに書ける。' + double_arrow_simple(32));