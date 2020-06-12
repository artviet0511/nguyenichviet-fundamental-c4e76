// let tru = document.getElementById("tru");
// let cong = document.getElementById("cong");
// let temp = document.getElementById("temp");

// tru.addEventListener('click', function () {
//     let number = temp.innerHTML;
//     number--;
//     temp.innerHTML = number;
// });
// cong.addEventListener('click', function () {
//     let number1 = temp.innerHTML;
//     number1++;
//     temp.innerHTML = number1;
// });

// let color = document.getElementById("rgb");
// color.addEventListener('click', function () {
//     let resule = document.getElementById("color");
//     let rgb = resule.style.backgroundColor;
//     if (rgb === "black") {
//         resule.style.backgroundColor = "red";
//     } else {
//         resule.style.backgroundColor = "black";
//     }
// });

// let del = document.getElementById("del");
// let resule1 = document.getElementById("color");
// del.addEventListener('click', function () {
//     //     if (resule1.style.display == "none") {
//     //         resule1.style.display = "block";
//     //     }else {
//     //         resule1.style.display = "none";
//     //     }
//     resule1.classList.toggle('hide');
// });


// let random = document.getElementById("random");
// random.addEventListener('click', function () {
//     let resule2 = document.getElementById("color")
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     let rgb = `rgb(${r},${g},${b})`;
//     resule2.style.backgroundColor = rgb;
// });

// let list = document.getElementsByClassName('list')[0].children;
// console.log(list);

// let value = document.getElementById("X");
// value.addEventListener('click', function () {
//     for (let key of list) {
//         let btn = key.getElementsByTagName('button');
//         if(btn.length == 0){
//             key.innerHTML = key.innerHTML + "<button>&times</button>";
//         }
//     }
// });


// Mouse over

let loop = 0;
let co = document.getElementById("co");
let khong = document.getElementById("khong");
let chon = document.getElementById("chon");
khong.addEventListener('mouseover', function () {
    if (chon.style.flexDirection == "row") {
        chon.style.flexDirection = "row-reverse";
    } else {
        chon.style.flexDirection = "row"
    }
    loop++;
    console.log(loop);
    if (loop >= 5) {
        alert("dong y roi nha");
        chon.style.display = "none";
    }
    doimau();
});

function doimau(){
    let resule = document.getElementById("khong");
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r},${g},${b})`;
    resule.style.backgroundColor = rgb;
};


