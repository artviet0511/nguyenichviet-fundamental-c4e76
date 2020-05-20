// Bài 1:
// let input = Number(prompt("vui lòng nhập số bất kỳ"));
// if (input > 0){
//     let giaithua = 1;
//     for(let i=1;i<=input;i++){
//         giaithua = giaithua * i;
//     }
//     let total = `${input}!=${giaithua}`
//     console.log(total);
// }else{
//     console.log("invalid input");
// }

// Bài 2:
// let nameInput = prompt("What is your name?");
// let ageInput = Number(prompt("How old are you?"));
// if(ageInput < 18){
//     console.log(nameInput + " chưa đủ tuổi vào trang web này");
// }else{
//     let answer = prompt(`${nameInput} có muốn đăng nhập vào trang web này không? (yes/no)`);
//     let answer1 = "yes";
//     let answer2 = "no"
//     if(answer === answer1){
//         console.log(`${nameInput} đã vào trang web thành công`);
//     }else if(answer === answer2){
//         console.log(`${nameInput} thoát khỏi trang web`);
//     }
// }

// Bài 3:
// let username2 = "artviet0511";
// let password2 = "05111993";
// let username = prompt("tên đăng nhập");
// let password = prompt("password");
// if(username === username2 && password === password2){
//     console.log("đăng nhập thành công");
// }else if(username === username2 && password !== password2){
//     console.log("password wrong");
// }else{
//     console.log("username wrong");
// }

// Bài 4:
// let dateValue = new Date();
// console.log(dateValue);
// let nameinput3 = prompt("What is your name?")
// let monthInput = Number(prompt(`${nameinput3} sinh vào tháng nào trong năm`));
// switch (monthInput){
//     case 1:
//     case 2:
//     case 3:
//         document.write( `${nameinput3} sinh vào mùa xuân`);
//         break;
//     case 4:
//     case 5:
//     case 6:
//         document.write(`${nameinput3} bạn sinh vào mùa hạ`);
//         break;
//     case 7:
//     case 8:
//     case 9:
//         document.write(`${nameinput3} sinh vào mùa thu`);
//         break;
//     case 10:
//     case 11:
//     case 12:
//         document.write(`${nameinput3} sinh vào mùa đông`);
//         break;
//     default:
//         document.write(`input không hợp lệ`);
//         break;    
// }

// Bài 5:
// let dieukien = true;
// while(dieukien){
//     let a = Number(prompt("Nhập a:"));
//     let b = Number(prompt("Nhập b:"));
//     let c = Number(prompt("Nhập C:"));
//     let delta = Math.pow(b,2)-4*a*c;
//     if(delta < 0){
//         console.log("Phương trình vô nghiệm");
//     }else if(delta === 0){
//         let x = (-b)/(2*a);
//         console.log(`Phương trình có nghiệm duy nhất x=${x}`);
//     }else{
//         let x1= (-b+Math.sqrt(delta))/(2*a);
//         let x2= (-b-Math.sqrt(delta))/(2*a);
//         console.log("Phương trình có 2 nghiệm phân biệt");
//         console.log(`x1=${x1} và x2=${x2}`);
//     }
//     let answer1 = prompt("Người dùng có muốn sử dụng chương trình tiếp không? (yes/no)");
//     if(answer1 === "yes"){
//         dieukien = true;
//     }else if(answer1 === "no"){
//         dieukien = false;
//         break;
//     }else{
//         console.log("câu lệnh không hợp lệ");
//         break;
//     }
// }

// Bài 6:
// const randomString = "Hello World";
// console.log(randomString[0]);
// console.log(randomString[1]);
// console.log(randomString[2]);
// let dieukien2 = true;
// while(dieukien2){
//     let randomString = prompt("Nhập chuỗi ký tự bất kỳ mà bạn muốn");
//     let n = randomString.length;
//     for(let i=n-1;i>=0;i--){
//         console.log(i+" "+randomString[i]);
//         }
//     let answer2 = prompt("Người dùng có muốn sử dụng chương trình tiếp không? (yes/no)");
//     if(answer2 === "yes"){
//         dieukien2 = true;
//     }else if(answer2 === "no"){
//         dieukien2 = false;
//         break;
//     }else{
//         console.log("câu lệnh không hợp lệ");
//         break;
//     }
// }