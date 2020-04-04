// // Bài 1:
// let inputNumber = Number(prompt("Nhap so N:"));
// let totaleven = 0;
// let totalretail = 0;
// for (let i=1;i<=inputNumber;i++){
//     if(i%2 === 0){
//         totaleven = totaleven + i;
//     }else{
//         totalretail = totalretail +i;
//     }
// }
// console.log(`tong cac so chan trong chuoi cac so tu 1 den ${inputNumber} la: ${totaleven}`);
// console.log(`tong cac so le trong chuoi cac so tu 1 den ${inputNumber} la: ${totalretail}`);

// // Bài 2:
// let inputNumber1 = Number(prompt("Nhap so N:"));
// console.log("N co phai so nguyen to ko?");
// let a = 0;
// for(let i=1;i<=inputNumber1;i++){
//     if(inputNumber1%i ===0){
//         a++;
//     }
// }
// if(a === 2){
//     console.log(true);
// }else{
//     console.log(false);
// }

// Bài 3:
// let inputNumber2 = Number(prompt("Nhap so N:"));
// console.log(`cac so nguyen to nho hon ${inputNumber2} la:`);
// let a = 0;
// for(let i=1;i<=inputNumber2;i++){
//     for(let j=1;j<=i;j++){
//         if(i%j === 0){
//             a++;
//         }
//     }
//     if(i === 1){
//         console.log(i);
//     }else if(a === 2){
//         console.log(i);
//     }
//     a = 0;
// }

// Bài 4:
// let inputNumber3 = Number(prompt("Nhap so fibonacci thu N:"));
// let fibonacciN = [inputNumber3];
// fibonacciN[0] = 0;
// fibonacciN[1] = 1;
// for(let i=0;i<=inputNumber3;i++){
//     if(i !== 0 && i !== 1){
//         fibonacciN[i] = fibonacciN[i-1] + fibonacciN[i-2];
//     }
//     console.log(`phan tu thu ${i}: ${fibonacciN[i]}`);
// }
// let output = fibonacciN[inputNumber3];
// console.log(`So fibonacci thu ${inputNumber3} la: ${output}`);

// Bài 5:
// let loop  = true;
// let sum = 0;
// while(loop){
//     inputNumber4 = Number(prompt("nhap so:"));
//     if(inputNumber4 >= 0){
//         sum = sum + inputNumber4;
//         console.log(inputNumber4);
//     }else{
//         loop = false;
//         break;
//     }
// }
// console.log(`tong cac so vua nhap la: ${sum}`);

// Bài 6:
// let array = prompt("Nhap chuoi bat ky");
// let test = true;
// for(let i=0;i<array.length;i++){
//     for(let j=array.length-1;j>=0;j--){
//         if(array[i] === array[j]){
//             test = true;            
//         }else{
//             test = false;
//         }
//     }
// }
// console.log("chuoi co doi xung hay khong?");
// if(test === true){
//     console.log(true);
//     for(let i=0;i<array.length;i++){
//         console.log(array[i]);
//     }
// }else{
//     console.log(false);
// }

// Bài 7:
// let m = Number(prompt("Nhap so M:"));
// let n = Number(prompt("Nhap so N:"));
// for(let i=1;i<=m;i++){
//     for(let j=1;j<=n;j++){
//         console.log(`*`);    
//     }
//     console.log("\n");
// }

// Bài 7+8
// let a1 = Number(prompt("Nhap a1:"));
// let b1 = Number(prompt("Nhap b1:"));
// let c1 = Number(prompt("Nhap c1:"));
// let a2 = Number(prompt("Nhap a2:"));
// let b2 = Number(prompt("Nhap b2:"));
// let c2 = Number(prompt("Nhap c2:"));
// let x = c1/a1 -(a2*b1*c1-a1*b1*c2)/(a1*a2*b1-a1*a1*b2);
// let y = (a2*c1-a1*c2)/(a2*b1-a1*b2);
// console.log(`nghiem cua he pt la: x=${x} va y=${y}`);
// // Với bài 7 thay
// // a1=1, b1=1, c1=36
// // a2=2, b2=1, c2=50