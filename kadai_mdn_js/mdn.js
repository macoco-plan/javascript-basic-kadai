// 最新の日時を取得できる
const date = new Date();

const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();

console.log(year+'年'+month+'月'+day+'日');
