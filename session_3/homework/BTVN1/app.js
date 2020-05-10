// Bài 1:
// Để đổi vị trí của 2 phần tử a,b với nhau:
//                    Cách 1: 
// Tạo một biến trung gian "mediate" sau đó:
// mediate = a;
// a = b;
// b = mediate;

//                    Cách 2: 
// Sử dụng hàm so sánh: array.sort(function(a,b){ return a-b;})
// khi hàm sort() so sánh hai giá trị, nó sẽ gửi giá trị tới
// hàm so sánh và sắp xếp theo giá trị kết quả trả về
// (âm, zero, dương)

// VD 1:
// let a = 5;
// let b = 6;
// console.log(a,b);
// let mediate = a;
// a = b;
// b = mediate;
// console.log(a,b);

// VD 2:
// let bar = [40, 100, 1, 5, 25, 10];
// console.log(bar);
// bar.sort(function(a,b){return a-b});
// console.log(bar);

// Câu 2:
// const s = 'hello beauty there'
// a = s.split(" ");
// console.log(a);

// Câu 3:
// const a = [4, 5, 7, -8];
// console.log(...a);

// Câu 4:
// let shop = ['Jeans','T-Shirt','Socks'];
// let loop = true;
// while(loop){
//     let bien = prompt("127.0.0.1:5000 says\nHi there, welcome to shop admin panel, what do you want (C,R,U,D)").toLowerCase();
//     if(bien === "e"){
//         alert("127.0.0.1:5000 says\nThis command is not supported");
//     }else if(bien === "r"){
//         for(let i=0;i<shop.length;i++){
//             console.log(`${i+1}. ${shop[i]}`);
//         }
//     }else if(bien === "c"){
//         let newClo = shop.push(prompt("127.0.0.1:5000 says\nEnter the name of the new item"));
//         alert("127.0.0.1:5000 says\nDone");
//     }else if(bien === "u"){
//         let n = Number(prompt("127.0.0.1:5000 says\nEnter the position you want to update"));
//         shop[n-1] = prompt("127.0.0.1:5000 says\nEnter the new name");
//         alert("127.0.0.1:5000 says\nDone");
//     }else if(bien === "d"){
//         let n = Number(prompt("127.0.0.1:5000 says\nEnter the position you want to delete"));
//         shop.splice(n-1,1);
//         alert("127.0.0.1:5000 says\nDone");
//     }
//     else{
//         alert("127.0.0.1:5000 says\nSystem will come out");
//         loop = false;
//     }
// }

// Câu 5+6+7:
// let input = prompt("127.0.0.1:5000 says\nEnter a squence of numbers, separated','");
// console.log(input);
// let a = input.split(",");
// let sum = 0;
// console.log(...a);
// for (let i = 0; i < a.length; i++) {
//     sum = sum + Number(a[i]);
// }
// alert(`127.0.0.1:5000 says\nThe sum of them is ${sum}`);

// let min = Number(a[0]);
// for (let i = 0; i < a.length; i++) {
//     if (Number(a[i]) <= min) {
//         min = Number(a[i]);
//     }
// }
// alert(`127.0.0.1:5000 says\nThe smallest number is ${min}`);

// let random = Number(prompt("127.0.0.1:5000 says\nEnter a number"));
// let co = 0;
// let b = [];
// if (a.length >= 5) {
//     for (let i = 0; i < a.length; i++) {
//         if (Number(a[i]) === random) {
//             co = 1;
//             b.push(i);
//         }
//     }
// }
// if(co === 1){
//     alert(`127.0.0.1:5000 says\n${random} is FOUND in my array at index `+b);
// }else{
//     alert(`127.0.0.1:5000 says\n${random} is NOT found in my array`);
// }

// Câu 8:
// let input = prompt("Hello, my name is Ich Viet and here is my sheep sizes:");
// let arrayIn = input.split(" ");
// let array = [];
// for(let i=0; i<arrayIn.length; i++){
//     array.push(Number(arrayIn[i]));
// }
// let sum = 0;
// let thuhoach = Number(prompt("nhap so lan thu hoach"));
// for(let i=1; i<=thuhoach; i++){
//     let maxA = Math.max(...array);
//     console.log(...array);
//     console.log(`MONTH ${i}\nNow my biggest sheep has size ${maxA}, let's shave it`);
//     for(let j=0; j<array.length; j++){
//         if(array[j] === maxA){
//             sum = sum + maxA -8;
//             array[j]=8;
//         }
//     }
//     console.log(...array);
//     console.log(`One month has, passed, my sheep have grown, here are their sizes`);
//     for(let j=0; j<array.length; j++){
//         array[j] = array[j] + 50;
//     }
//     console.log(...array);
// }
// sum = 0;
// for(let i=0; i<array.length; i++){
//     sum = sum + array[i];
// }
// console.log(`My flock has size in total: ${sum}\nI would get ${sum}*2$ = ${sum*2}`);

// Câu 9:
// clear();
// setshape("rocket-large")
// x=50;
// y=1;
// const colors = ["red", "gray'", "blue", "purple", "cyan"];
// for(i=1;i<=4;i++){
// color(colors[y]);
//   for(j=1;j<=4;j++){
//     fd(x);
//     rt(90);
//   }
// y+=1;
// x+=50;
// }

// Câu 10:
// let info = prompt(`127.0.0.1:5000 says\nEnter a sequence of names`);
// let output = info.split(",");
// let output1 = [];
// for(let i=0; i<output.length; i++){
//     output1.push(`<${output[i]}>`);
// }
// alert(`127.0.0.1:5000 says\n${output} => ${output1}`);

// Câu 11:
// let input = prompt(`127.0.0.1:5000 says\nEnter a sequence number`);
// let input2 = input.split(",");
// let output2 = [];
// for(let i=0; i<input2.length; i++){
//     if(Number(input2[i])%2 === 1){
//         output2.push(Number(input2[i]));
//     }
// }
// alert(`127.0.0.1:5000 says\n${input2} => ${output2}`);


// let ip = prompt("nhap chuoi so").split(",").map(x=>+x);
// console.log(...ip);
// console.log(typeof ip[0]);
// let maxA = Math.max(...ip);
// console.log(maxA);
// let minA = Math.min(...ip);

// Tìm phần tử "a" trong mảng

// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
