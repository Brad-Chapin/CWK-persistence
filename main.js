function persistence(num) {
  let c = 0, sum =1;
  num = num.toString().split("");
  while (num.length != 1){
    for (let i = 0; i < num.length; i++){
      sum *= parseInt(num[i]);
    }
    c++;
    num = sum.toString().split("");
    sum = 1;
  }
  return c;
}


// for anyone looking... can someone explain why the code below logs the
// expected result from line 23, but returns "undefined" on line 24?
// let c = 0;
// function persistence(num) {
//   num = num.toString().split("");
//   let sum = 1;
//   if (num.length == 1) {
//     console.log(c);
//     return (c);
//   }
//   for (let i = 0; i < num.length; i++){
//     sum *= parseInt(num[i]);
//   }
//   c++;
//   persistence(sum);
// }
//
// console.log(persistence(999));
