// Object:
// Thuộc tính (đặc điểm của đối tượng)
// Phương thức (hành động)
// Khai báo Object
// let <tên đối tượng> = {
//     thuộc tính 1: giá trị 1,
//     thuộc tính 2: giá trị 2,
//     phương thức 1: function(){

//     },
// }

// Thao tác : C,R,U,D
// C: thuộc tính/ PT 
// <tên>.<tt/pt> = ...

// let person = {
//     name: 'Mr Viet',
//     age: 27,
//     single: false,
//     favorites: ['film',  'game', 'ngam hot girl'],
//     wife: {
//         name: 'Thao',
//         age: 18,
//     },
//     function sayHello(){
//         console.log("Mr Viet xin chao cac chu");
//     },
// };

// // Creat:
// person.addrest = 'Ha Noi';
// console.log(person);

// // Read:
// console.log(person);

// // Update:
// person.wife.name = 'Huong';
// console.log(person);

// // Delete:
// delete person.wife;


// function sayhello(name){
//     console.log("Xin chao " +name);
// }
// sayhello('Son den muon vai');

// function sum(a, b, c) {
//     return a + b + c;
// }
// let d = sum([1, 2], [3], [4, 5])
// console.log(d);

// Cách khai báo thứ 2 của function
// let <tên> = function(){
//     // code
// }
// let <tên> = () =>{
//     // code
// }

// let sum = function (a, b, c) {
//     return a + b + c;
// }

// let sum = (a, b, c) => a + b + c;
// let d = sum([1, 2], [3], [4, 5])
// console.log(d);

// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };
// for (let key in product) {
//     console.log(`${key}: ${product[key]}`);
// }

// Bai 4:
// let lib = {
//     debug: 'Tim loi tat mat',
//     done: 'Lam xong lau  roi',
//     triplekill: 'Xu dep 3 thang',
//     quadrakill: 'Xu dep 4 thang',
//     pentakill: 'quet sach'
// };
// let userInput = prompt("nhap tu can tim");

// // Cach 1:
// if (lib.hasOwnProperty(userInput)){ // hasOwnProperty (tên thuộc tính): Boolean (true/false)
//     alert(lib[userInput])
// }else {
//     let ip = prompt('nhap dinh nghia moi');
//     lib[userInput] = ip;
// }
// console.log(lib[userInput]);


// // Cach 2:
// // if (lib[userInput]) {
// //     alert(lib[userInput]);
// // } else {
// //     lib.userInput = prompt("nhap thong tin update");
// //     alert('done');
// // }
// // alert(lib.userInput);


// Bai 5:
// let products = [
//     {
//         name: 'Xiaomi portable charger 20000mah',
//         price: 480,
//         color: 'White',
//         brand: 'Xiaomi',
//         category: 'Charger'
//     },
//     {
//         name: 'Samsung Galaxy J2',
//         price: 100,
//         color: 'White',
//         brand: 'Samsung',
//         category: 'Charger'
//     },
//     {
//         name: 'Iphone 7',
//         price: 350,
//         color: 'yellow',
//         brand: 'Iphone',
//         category: 'Charger'
//     },
//     {
//         name: 'Lap Dell',
//         price: 480,
//         color: 'Ag',
//         brand: 'Lap',
//         category: 'Charger'
//     }
// ];
// Cach 1:
// for(let i = 0; i<products.length;i++){
//     console.log(`--------------------------\n#${i+1}. Name: ${products[i].name}\nPrice: ${products[i].price}`);
// }

// Cach 2:
// for(let product of products){
//     console.log(`-----------------------`);
//     console.log(`Name: ${product.name} \nPrice: ${product.price}`);
// }

// Cach 3:
// forEach: method co san
// products.forEach(function (product){
//     console.log(`-----------------------`);
//     console.log(`Name: ${product.name} \nPrice: ${product.price}`);
// });

// let userInput = prompt("nhap tu can tim");
// if (products.hasOwnProperty(userInput)){
//     alert(products[userInput-1])
// }else {
// }
// console.log(products[userInput-1]);




// HTML: Hifpertext Markup Languege: Ko phai ngon ngu lap trinh
// -> tạo ra nội dung cho trang web: văn bản, hình ảnh, bảng, video, audio, promt nhập văn bản
// CSS: Cascading Style Sheets: Định dạng cho nội dung web, tổ chức bố cục (layout), định dạng kiểu chữ (text style), box model, hiệu ứng (Effect)
// HTML: (HTML tutorial)
// - Thành phần cơ bản: Thẻ (tag)
//      + Cấu trúc thẻ: thẻ có mở và đóng: <tên>...</tên>
//                      thẻ chỉ có mở: <img>
//            Tên thẻ, Các thuộc tính, Nội dung thẻ
//      + IsBlock: Block: h1 -> h6, p, div, img, iframe, ...
//                 Inline (cùng dòng): a