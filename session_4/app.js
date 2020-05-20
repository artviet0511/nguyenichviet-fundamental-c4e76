// Object
// Khai báo

// const person =  {
//     name: 'Viet',
//     age: 27,
//     single: true,
//     hobbies: [
//         'watch movies',
//         'reading new',
//         'listen to music',
//     ]
// };

// key: value

// // 2. C,R,u,D
// // READ
// console.log(person.name);
// console.log(person['name']);

// console.log(person.age);

// // Update
// person.age = 30;
// console.log(person.age);

// // Create

// person.hair = true;
// console.log(person);

// // Delete
// delete person.hair;
// console.log(person);

// Exercise 1:
// Tạo một đối tượng bất kỳ
// Seach google, in ra toàn bộ thuộc tính có trong đối tượng đó

// Exercise 2:
// Cho người dùng nhập vào Name, Age, Job, Single
// Tạo 1 đối tượng gồm các thuộc tính người dùng
// nhập vào ở trên và console.log ra đối tượng đó

// // 1. for...in
// for(let key in person){
//     console.log(key);
//     console.log(person[key]);
// }

// // 2.
// let name = prompt('Input name');
// let age = prompt('Input age');
// let job = prompt('Input job');
// let single = prompt('Input single');
// let person = {
//     name: name,
//     age: age,
//     job: job,
//     single: single,
// };
// console.log(person);

// let person2 = {};
// person2.name = name;
// person2.age = age;
// person2.job = job;
// person2.single = single;
// console.log(person2);


// Object methods
// Function - Ham

// Khai bao ham Function
// function dosomthing(a, b, c,...){
// return sth
// }

// function Stamgiac(a, h){
//     let s = a*h*0.5;
//     return s;
// }
// // arguments
// console.log(Stamgiac(10, 5));

// Object methods

// let myDog = {
//     name: 'Cat',
//     weight: 5,
//     color: 'white',
//     bark: function(){
//         console.log("gau gau gau");
//     },
//     eat: function(bone){
//         console.log(this);
//         this.weight = this.weight + bone.weight;
//     }
// };
// myDog.bark();
// myDog.eat({weight: 2});
// console.log(myDog);

// function bark(){
//     console.log("meo meo");
// }
// console.log(bark());

// const randomString = "hello world";
// // String literal
// // Number

// const randomString2 = new String("hello 123");
// console.log(randomString2);

// // new - Construcfor function
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person("Ngoc", 24);
// console.log(person1);


// C,R,U,D
// Ứng dụng phone list
const phoneList = [
    {
        name: "Ngoc",
        phone: "0971238570",
    },
    {
        name: "Lam",
        phone: "0985124466"
    }
];

// C: Cho người dùng nhap vào tên và sđt mới
// R: In ra toàn bộ tên và sđt
//    Theo dạng: "Tên - SĐT"
// U: Cho người dùng search theo tên
//    Nếu tìm thấy => cho update tên và sđt
//    Nếu ko tìm thấy => in ra là ko thấy
// D: Cho người dùng search theo tên
//    Nếu tìm thấy => cho delete
//    Nếu ko tìm thấy => in ra là ko thấy
// Sau mỗi lần thực hiện các thao tác này thì
//    đều in ra toàn bộ các sđt theo dạng "R"
// While - Để cho chương trình chạy vô hạn
// E: Thoát khỏi chương trình

let loop = true;
while (loop) {
    function showAll(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(`${arr[i].name} - ${arr[i].phone}`);
        }
    }
    function checkExist(arr, search) {
        let found = false;
        let foundIndex = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].name === search) {
                foundIndex = i;
            }
        }
        return foundIndex;
    }
    let input = prompt("nhap vao C,R,U,D:").toLowerCase();
    if (input === "c") {
        let name = prompt("Input new name:");
        let phone = prompt("Input new phone:")
        let newContact = {
            name: name,
            phone: phone,
        };
        phoneList.push(newContact);
        showAll(phoneList);
    } else if (input === "r") {
        showAll(phoneList);
    } else if (input === "u") {
        let search = prompt("Please input contact name");
        // let found = false;
        // for (let i = 0; i < phoneList.length; i++) {
        //     if (phoneList[i].name === search) {
        //         phoneList[i].name = prompt("New name");
        //         phoneList[i].phone = prompt("New phone");
        //         found = true;
        //     }
        // }
        // showAll(phoneList);
        // if (found === false) {
        //     console.log("Not found");
        // }
        let foundIndex = checkExist(phoneList, search);
        if (foundIndex === -1) {
            console.log("Not found");
        } else {
            phoneList[foundIndex].name = prompt("New name");
            phoneList[foundIndex].phone = prompt("New phone");
            showAll(phoneList);
        }
    } else if (input === "d") {
        let search = prompt("Please input contact name");
        // let found = false;
        // for (let i = 0; i < phoneList.length; i++) {
        //     if (phoneList[i].name === search) {
        //         phoneList.splice(i, 1);
        //         found = true;
        //     }
        // }
        // showAll(phoneList);
        // if (found === false) {
        //     console.log("Not found");
        // }
        let foundIndex = checkExist(phoneList, search);
        phoneList.splice(foundIndex, 1);
        showAll(phoneList);
    }
    else {
        console.log("Invalid comman");
        loop = false;
    }
}