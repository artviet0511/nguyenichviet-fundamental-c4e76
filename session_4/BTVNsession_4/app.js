// Câu 1:
// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
// };
// for (let x in product) {
//     console.log(x);
// }

// // ​x​ receives from ​product: property

// for(let key in product){
//     console.log(`${key}: ${product[key]}`);
// }

// Câu 2:
// const task = {
//     subject: 'What is your name?',
//     createdBy: 'Nguyen Ich',
//     assignTo: 'Viet',
//     dueDate: '2019-10-08T18:00:24+0000',
//     expectedHours: 0.5,
// };
// let { subject: Yourname, createdBy: firstName, assignTo: lastName } = task;
// console.log(`${Yourname}\n${firstName} ${lastName}`);
// console.log(`${task.dueDate}: ${task.expectedHours}`);

// Câu 3:
// Code dài quá nên trả lời thôi nha ko coppy đâu
// 3.1: Object, Array, Object, Array, Object
// 3.2: String, Number
// 3.3: nameObject.hits[key].benefits (title, locations, salary, benefits, skills and requirements)

// Câu 4: 
// let library = {
//     debug: 'The process of figuring out why your program has a certain error and how to fix it',
//     done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
//     defect: 'The formal word for "error"',
//     pm: 'The short version of Project Manager, the person in charge of the final result of a project',
//     ui: 'UI means User Interface',
//     ux: 'UX mean User Experience, are the process to define how your products looks and feels',
// };

// 4.1:
// alert(`127.0.0.1:5500 says\nHi there, this is dev dictionary`);
// let ip = prompt('27.0.0.1:5500 says\nEnter a keyword');
// function found(nameOb, ip) {
//     let co = -1;
//     for (let key in nameOb) {
//         if (ip === key) {
//             co = 1;
//         }
//     }
//     return co;
// }
// let co = found(library, ip);
// if (co === 1) {
//     alert(`27.0.0.1:5500 says\n${ip}\n${library[ip]}`);
// }else{
//     alert(`27.0.0.1:5500 says\nWe could not find your word: ${ip}`);
// }

// 4.2:
// let co = found(library, ip);
// if (co === 1) {
//     alert(`27.0.0.1:5500 says\n${ip}\n${library[ip]}`);
// } else {
//     let loop = prompt('27.0.0.1:5500 says\n Do you want to update the new infomation? yes/no');
//     if(loop === 'yes'){
//         let newinfo = prompt(`27.0.0.1:5500 says\nWe could not find your word: ${ip}, leave your explanation`);
//     library[ip] = newinfo;
//     alert(`Done`);
//     alert(`27.0.0.1:5500 says\n${ip}\n${library[ip]}`);
//     }else{
//         alert(`Done`);
//     }
// }

// Câu 5:
// let products = [
//     {
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: 428,
//         color: 'White',
//         category: 'charger',
//     },
//     {
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: 5487,
//         color: 'Black',
//         category: 'phone',
//     }, {
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: 21490,
//         color: 'Gray',
//         category: 'phone',
//     }, {
//         name: 'Samsung Galaxy A9 ',
//         brand: 'Samsung',
//         price: 8490,
//         color: 'Blue',
//         category: 'phone',
//     },
// ];
// 5.1:
// for (let product of products) {
//     console.log(`------------------\nName: ${product.name}\nPrice: ${product.price}`);
// }
// function show(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("----------------");
//         for (let key in arr[i]) {
//             console.log(`${key}: ${arr[i][key]}`);
//         }
//     }
// }
// show(products);

// 5.2:
// let ip = Number(prompt("27.0.0.1:5500 says\nEnter product position:"));
// for (let i = 0; i < products.length; i++) {
//     console.log(`${i + 1}. ${products[i].name}\nPrice: ${products[i].price}`);
// }
// for (let i = 0; i < products.length; i++) {
//     for (let key in products[i]) {
//         if (i === (ip - 1)) {
//             console.log(`${key}: ${products[i][key]}`);
//         }
//     }
// }
// // 5.3:
// let ip1 = prompt('27.0.0.1:5500 says\nEnter your category');
// for (let key in products) {
//     if (ip1 === products[key].category) {
//         console.log(`------------------\nName: ${products[key].name}\nPrice: ${products[key].price}`);
//     }
// }

// // 5.4:
// for (let product of products) {
//     alert(`27.0.0.1:5500 says\nProviders of the phone:\n${product.name}`);
//     product.providers = prompt(`27.0.0.1:5500 says\n`);
// }
// for (let product of products) {
//     console.log(`------------------\nName: ${product.name}`);
//     console.log(`Price: ${product.price}`);
//     console.log(`Providers: ${product.providers}`);
// }

// // 5.5:
// let ip2 = prompt(`Enter your providers:`);
// for (let key in products) {
//     if (ip2 === products[key].providers) {
//         console.log(`-----------------`);
//         console.log(`Name: ${products[key].name}`);
//         console.log(`Brand: ${products[key].brand}`);
//         console.log(`Price: ${products[key].price}`);
//         console.log(`Color: ${products[key].color}`);
//         console.log(`Category: ${products[key].category}`);
//         console.log(`Providers: ${products[key].providers}`);
//     }
// }

// Câu 6:

// console.log("Hi there, this is your learning tasks to front-end developer career:");
// let learning = [
//     {
//         front: "HTML",
//         Complete: false,
//     },
//     {
//         front: "CSS",
//         Complete: false,
//     },
//     {
//         front: "Basics of JavaScrip",
//         Complete: false,
//     },
//     {
//         front: "Node Package Manager (NPM)",
//         Complete: false,
//     },
//     {
//         front: "Git",
//         Complete: false
//     }
// ];

// function show(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`${i + 1}. ${arr[i].front}\n   Complete: ${arr[i].Complete}`);
//     }
// }
// show(learning);
// function checkExist(arr, search) {
//     let foundIndex = -1;
//     for (let i = 0; i < arr.length; i++) {
//         if ((i + 1) === search) {
//             foundIndex = i;
//         }
//     }
//     return foundIndex;
// }

// let loop = true;
// while (loop) {
//     let ip3 = prompt(`27.0.0.1:5500 says\nEnter your command (New, Delete, Update, Complete)`);
//     if (ip3 === "New") {
//         let front = prompt(`27.0.0.1:5500 says\nEnter new task`);
//         let Complete = false;
//         let newtask = {
//             front: front,
//             Complete: Complete,
//         }
//         learning.push(newtask);
//         show(learning);
//     } else if (ip3 === "Update") {
//         let ip4 = Number(prompt(`27.0.0.1:5500 says\nEnter position:`));
//         let foundIndex = checkExist(learning, ip4);
//         if (foundIndex === -1) {
//             console.log("Invalue command");
//         } else {
//             learning[foundIndex].front = prompt("27.0.0.1:5500 says\nEnter new title");
//             show(learning);
//         }
//     } else if (ip3 === "Delete") {
//         let ip6 = Number(prompt(`27.0.0.1:5500 says\nEnter position:`));
//         let foundIndex = checkExist(learning, ip6);
//         if (foundIndex === -1) {
//             console.log("Invalue command");
//         } else {
//             learning.splice(foundIndex, 1);
//             show(learning);
//         }
//     } else if (ip3 === "Complete") {
//         let ip5 = Number(prompt(`27.0.0.1:5500 says\nEnter position:`));
//         let foundIndex = checkExist(learning, ip5);
//         if (foundIndex === -1) {
//             console.log("Invalue command");
//         } else {
//             learning[foundIndex].Complete = true;
//             show(learning);
//         }
//     } else {
//         alert("Invalue command");
//         loop = false;
//     }
// }
// console.log(`Make printing`);
// for (let i = 0; i < learning.length; i++) {
//     console.log(`${i + 1}. [ ] ${learning[i].front}`);
// }
// console.log(`Logging better`)

// for (let i = 0; i < learning.length; i++) {
//     if (learning[i].Complete != true) {
//         console.log(`${i + 1}. [ ] ${learning[i].front}`);
//     } else {
//         console.log(`${i + 1}. [x] ${learning[i].front}`);
//     }
// }

// 7 trở đi cần chữa 
