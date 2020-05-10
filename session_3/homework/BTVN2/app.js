// BT Hôm trước trên lớp: Nhập mảng, tìm xem mảng đó có đối xứng hay ko

// let ip = prompt("Nhap mảng").split(",");
// console.log(...ip);
// let between = Math.floor((ip.length - 1)/2);
// let loop = true;
// for(let i=0; i<=between; i++){
//     if(ip[i] != ip[ip.length - 1-i]){
//         loop = false;
//         break;
//     }
// }
// if(loop === true){
//     console.log("mang doi xung");
// }else{
//     console.log("mang khong doi xung");
// }


// Bài 1:

// let ip1 = prompt("input array number").split(",").map(x=>+x);
// console.log(...ip1);

// a:
// let max1 = ip1[0];
// for(let i=0; i<ip1.length; i++){
//     if(ip1[i] > max1){
//         max1 = ip1[i];
//     }
// }
// console.log(max1);
// let max2 = ip1[0];
// for(let i=0; i<ip1.length; i++){
//     if(ip1[i] != max1){
//         max2 = ip1[i];
//         break;
//     }
// }
// for(let i=0; i<ip1.length; i++){
//     if(ip1[i] > max2 && ip1[i] != max1){
//         max2 = ip1[i];
//     }
// }
// console.log(`so lon thu 2 trong day la ${max2}`);

// b:
// let min1 = Math.min(...ip1);
// console.log(min1);
// for(let i=0; i<ip1.length; i++){
//     if(ip1[i] === min1){
//         ip1.splice(i,1);
//     }
// }
// let min2 = Math.min(...ip1);
// console.log(`so be thu 2 trong day la ${min2}`);

// c:
// let uoc = 0;
// let a = [];
// let co = 0;
// for(let i=0; i <ip1.length; i++){
//     if(ip1[i] === 1){
//         a.push(i);
//     }
//     for(let j=1; j<=ip1[i]; j++){
//         if(ip1[i] % j === 0){
//             uoc++;
//         }
//     }
//     if(uoc === 2){
//         a.push(i);
//         co = 1;
//     }
//     uoc = 0;
// }
// if(co === 0){
//     console.log("NOT FOUND");
// }else{
//     console.log(...a);
// }

// d:
// for(let i=0; i<ip1.length; i++){
//     for(let j=0; j<ip1.length; j++){
//         if(ip1[j] > ip1[j+1]){
//             let tem = ip1[j];
//             ip1[j] = ip1[j+1];
//             ip1[j+1] = tem;
//         }
//     }
// }
// console.log(...ip1);
// let tv = ip1.length/2;
// if(ip1.length%2 === 0){
//     console.log(`${(ip1[tv-1]+ip1[tv])/2}`);
// }else{
//     console.log(`${ip1[Math.floor(tv)]}`);
// }

// e:
// let b = [];
// for(let i=0; i<ip1.length; i++){
//     for(let j=0; j<ip1.length; j++){
//         if(ip1[i]+ip1[j] === 5){
//             b.push(ip1[i]);
//             b.push(ip1[j]);
//         }
//     }
// }
// console.log(...b); // Cần hỏi thêm


// Bài 2:
// let ip2 = prompt("nhap chuoi string").split(",");
// let co = 1;
// let b = [];
// for(let i=0; i<ip2.length; i++){
//     ip2[i].split("");
//     console.log(...ip2[i]);
//     for(let j=0; j<(ip2[i].length-1)/2; j++){
//         if(ip2[i][j] != ip2[i][ip2[i].length-1 -j]){
//             co = 0;
//         }
//     }
//     if(co === 1){
//         b.push(i);
//     }
//     co = 1;
// }
// if(co === 1){
//     console.log(...b);
// }else{
//     console.log("NOT FOUND");
// }

// Bài 3:
// let array = [];
// let sohang = Number(prompt("nhap so hang cua ma tran"));
// for(let i=0; i<sohang; i++){
//     array[i] = prompt(`nhap chi so hang thu ${i+1}`).split(",").map(x=>+x);
// }
// for(let i=0; i<array.length; i++){
//     console.log(...array[i]);
// }
// let sum = 0;
// let c = [];
// for(let i=0; i<array.length; i++){
//     for(let j=0; j<array[i].length; j++){
//         sum += array[i][j];
//     }
//     console.log(`tong cua hang thu ${i+1} la: ${sum}`);
//     sum = 0;
// }
// for(let j=0; j<array.length; j++){
//     for(let i=0; i<array[j].length; i++){
//         sum += array[i][j];
//     }
//     console.log(`tong cua cot thu ${j+1} la: ${sum}`);
//     sum = 0;
// }
// if(array[0].length === array[0].length){
//     for(let j=0; j<array.length; j++){
//         for(let i=0; i<array[j].length; i++){
//             if(i === j){
//                 sum +=array[i][j];
//             }
//         }
//     }
//     console.log(`tong cua duong cheo chinh la: ${sum}`);
//     sum = 0
//     for(let j=0; j<array.length; j++){
//         for(let i=0; i<array[j].length; i++){
//             if(j === (array[i].length -1 - i)){
//                 sum +=array[i][j];
//             }
//         }
//     }
//     console.log(`tong cua duong cheo phu la: ${sum}`);
// }
// let max = array[0][0];
// for(let j=0; j<array.length; j++){
//     for(let i=0; i<array[j].length; i++){
//         if(array[i][j] > max){
//             max = array[i][j];
//         }
//     }
// }
// console.log(`max cua ma tran la: ${max}`);
// let min = array[0][0];
// for(let j=0; j<array.length; j++){
//     for(let i=0; i<array[j].length; i++){
//         if(array[i][j] < min){
//             min = array[i][j];
//         }
//     }
// }
// console.log(`max cua ma tran la: ${min}`);
// let am = 0;
// let duong = 0;
// for(let j=0; j<array.length; j++){
//     for(let i=0; i<array[j].length; i++){
//         if(array[i][j] > 0){
//             duong += array[i][j];
//         }else if(array[i][j] < 0){
//             am += array[i][j];
//         }
//     }
// }
// console.log(`tong cac so duong cua ma tran la: ${duong}`);
// console.log(`tong cac so am cua ma tran la: ${am}`);

