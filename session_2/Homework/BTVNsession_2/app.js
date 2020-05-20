console.log("cau 1:");
console.log("kieu Boolean se tra ve 1 trong 2 gia tri: true hoac false");
console.log("VD:");
let x = false;
y = Boolean(x === false);
console.log(y);
let a = 5, b = 6;
console.log("a=" + a + " b=" + b);
let d = Boolean(a === b);
console.log("voi a=b:" + d);
let user1 = "Hieu";
let user2 = "Trinh";
let user3 = Boolean(user1 !== user2);
console.log("voi user1 la " + user1 + " user2 la " + user2);
console.log("user1 khac voi user 2 la:" + user3);

let high = Number(prompt("chieu cao cua ban la (dv: cm):"));
console.log("chieu cao cua ban la: " + high + "(cm)");
high = high / 100;
let weight = Number(prompt("can nang cua ban la (dv: kg)"));
console.log("can nang cua ban la:" + weight + (" kg"));
let bmi = weight / Math.pow(high, 2);
if (bmi > 0 && bmi < 16) {
    console.log("thieu can nang");
} else if (bmi <= 18.5) {
    console.log("thieu can");
} else if (bmi <= 25) {
    console.log("binh thuong");
} else if (bmi <= 30) {
    console.log("thua can");
} else {
    console.log("beo phi");
}
let giatri = Number(prompt("nhap so ma ban muon tinh giai thua"));
let giaithua = 1;
for (let i = 1; i <= giatri; i++) {
    giaithua = giaithua * i;
}
console.log(giatri + "!=" + giaithua);