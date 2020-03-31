// console.log("hello world");

// Câu điều kiện rẽ nhánh (if - else)

// if (condition){
//     do something
// } else {
//     do something else
// }

// const randomBoolean = true;

// các phép so sánh 
// ===, >, <, >=, <=, !==
// ===, !== (Kiểu này sẽ so sánh cả giá trị và kiểu dữ liệu)

// const x = 5;
// console.log(x>10);
// console.log(x==='5');

// && (AND), || (OR), ! (OPPOSITE)

// const x = 5;
// const y = 9;

// (y>9) || (x===5);

// // || -chỉ cần 1 trong 2 true => kết quả là true

// x<10 && x===5;
// // cần cả 2 giá trị true => kqua la true

// !(x===y); // true

// const x=3;
// const y=8;

// y==='b'||x>=10;
// !(x=='3'||x===y)&&!(y!=8 && x<=y); //false

// if(){
//     //do something
// }else if(){
//     //do something
// }else {
//     //do something
// }

//cho người dùng nhập vào tuổi
//tuổi <18: you cannot enter the bar
//còn từ tuổi từ 18-21: you can enter but cannot drink
//các trường hợp còn lại => you can drink

// cũng cho người dùng nhập tuổi
// tuổi < 0 => invalid age
// tuổi == 21 => happy birthday
// tuổi là số lẻ => your age is odd
// tuổi là 1 số có thể căn bậc 2 => perfect square

//  const tuoi = Number(prompt("so tuoi cua ban la "));
// // if(tuoi < 18){
// //     console.log("you cannot enter the bar");
// // }else if(tuoi <21){
// //     console.log("you can enter but cannot drink");
// // }else {
// //     console.log("you can drink");
// // }

// if(tuoi <0){
//     console.log("invalid age");
// }else if(tuoi === 21){
//     console.log("happy birthday");
// }else if(tuoi%2 ===1){
//     console.log("your age is odd");
// }else if(Math.sqrt(tuoi) === parseInt(Math.sqrt(tuoi))){
//     console.log("perfect square");
// }else{
//     console.log("haha");
// }

// // while loops

// while(condition){
//     // hành động lặp
// }

// let i=1;
// while(i<5){
//     console.log(i);
//     i++;
// }

// cho người dùng nhập vào 1 số bất kỳ từ 1->10
// số kết quả là 1 số random từ 1->10
// nếu input > result: too high
// nếu input < result: too low
// nếu input === result: correct và kết thúc chương trình


// const resultNumber = Math.ceil(Math.random()*10);
// let loop = true;
// while (loop) {
// const userInput = Number(prompt("nhap so bat ky"));
// console.log(userInput);

// if (userInput < resultNumber){
//     console.log("too low");
// }else if (userInput > resultNumber) {
//     console.log("too high"); 
// }else{
//     console.log("correct");
//     // loop = false;
//     break;
// }
// }

// sử dụng vòng lặp while
// 1. in ra màn hình các số từ 1-10
// 2. in ra các số chia hết cho 4 từ 0-20
// 3. in ra các số lẻ từ 30-40
// 4. in ra các số vừa chia hết cho 3 vừa chia hết cho 5 từ 5-50

// let i=0;
// while (i <= 50){
//     if (i > 0 && i <= 10){
//         console.log(i);        
//     }
//     if (i>=0 && i<20 && i%4===0){
//         console.log(i);
//     }
//     if (i>=30 && i<=40 && i%2===1){
//         console.log(i);        
//     }
//     if (i>=5 && i<=50 && i%15===0){
//         console.log(i);        
//     }
//     i++;
// }

// for loop

// for(condition){
//    // hành động lặp
// }

// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }
// // dùng while trong trường hợp ko biết số lần lặp nhất định

// sử dụng vòng lặp for tính tổng các số từ 1-10
// in ra các số từ 1-20 cách nhau 3 đơn vị

let i=1;
let tong=0;
for (i=1;i<=10;i++){
    tong= tong + i;
}
console.log(tong);

for (i=1;i<=20;i+=3){
    console.log(i);
}