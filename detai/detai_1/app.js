// nut gio hang
let itemgiohang = document.getElementById("itemgiohang");
let giohang = document.getElementById("giohang");
itemgiohang.addEventListener("click", function () {
    if (giohang.style.display == "none") {
        giohang.style.display = "block";
    } else {
        giohang.style.display = "none";
    }
});
// let x = document.getElementById("x")
// x.addEventListener('click', function () {
//     giohang.style.display = "none";
// });

// cap nhat gia
function updatebuy() {
    let buy_item = document.getElementsByClassName("main-buy")[0];
    let fick_buys = buy_item.getElementsByClassName("fick-buy");
    let loop = 0;
    for (let i = 0; i < fick_buys.length; i++) {
        fick_buy = fick_buys[i];
        let price_item = parseFloat(fick_buy.getElementsByClassName("gia-buy")[0].innerText);
        let soluong = fick_buy.getElementsByClassName("soluong-buy")[0].value;
        fick_buy.getElementsByClassName("tong-buy")[0].innerText = (price_item * soluong) + "VND"
        loop = loop + (price_item * soluong);
    };
    document.getElementsByClassName('thanh tien')[0].innerText = loop + "VND";
}

// them vao gio
let add_mua = document.getElementsByClassName("datmua");
for (let i = 0; i < add_mua.length; i++) {
    add = add_mua[i];
    add.addEventListener("click", function (event) {
        let button = event.target;
        let product = button.parentElement.parentElement;
        let title = product.getElementsByClassName("name")[0].innerText;
        let price = product.getElementsByClassName("gia")[0].innerText;
        additemtobuy(title, price);
        updatebuy();
    });
};
function additemtobuy(title, price) {
    let itembuy = document.createElement("div");
    itembuy.classList.add('fick-buy');
    let itemmainbuy = document.getElementsByClassName('main-buy')[0];
    let name_buy = document.getElementsByClassName("name-buy")
    for (let i = 0; i < name_buy.length; i++) {
        if (name_buy[i].innerText == title) {
            alert('san pham da them vao gio hang');
            return;
        };
    };
    let itembuycontent = `
    <div class="name-buy">${title}</div>
    <div class="gia-buy">${price}</div>
    <input class="soluong-buy" type="number" value="1">
    <div class="tong-buy">${parseFloat(price)}</div>
    <button class="xoa" type="button">Xóa</button>
    `
    itembuy.innerHTML = itembuycontent;
    itemmainbuy.appendChild(itembuy);

    // xoa 1 muc trong gio hang
    itembuy.getElementsByClassName("xoa")[0].addEventListener('click', function (event) {
        event.target.parentElement.remove();
        updatebuy()
    });

    //thay doi so luong
    itembuy.getElementsByClassName("soluong-buy")[0].addEventListener('change', function () {
        if (isNaN(event.target.value) || event.target.value <= 0) {
            event.target.value = 1;
        };
        updatebuy();
    })
}