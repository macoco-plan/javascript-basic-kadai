 //　変数num宣言
let num = 15;

// numが３と５の倍数の場合
if (num % 3 === 0 && num % 5 === 0){
    console.log('3と５の倍数です');
}

//　numが３の倍数の場合
else if (num % 3 === 0 ){
    console.log('３の倍数です');
}

// numが5の倍数の場合
else if (num % 5 === 0 ){
    console.log('５の倍数です');
}

//　それ以外なら変数numを出力する
else{
    console.log(num);
}