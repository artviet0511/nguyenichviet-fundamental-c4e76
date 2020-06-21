let cart = [];
function showData() {
    let mainMenu = document.getElementById("main-menu");
    for (let category of fake_data) {
        let html = `
        <div class="out">
            <h1 id="noibat" class="item">${category.title}</h1>
            <div class="flex">`;

        for (let menuItem of category.data) {
            html += `        
                <div class="menu-item">
                    <img class="image" src="${menuItem.image}">
                    <div>
                        <h1 class="name">${menuItem.name}</h1>
                        <h1 class="price">${menuItem.price}</h1>
                        <input type="number" class="number" min="1" max="${menuItem.number}" value="1">
                        <h1 class="buy-now" onclick="addToCart(event)">MUA NGAY</h1>
                    </div>
                </div>`;
        }

        html += `
                </div>
            </div>
        </div>`;
        mainMenu.innerHTML += html;
    }
}

function addToCart(event) {
    let info = event.target.parentNode;
    let item = {
        name: info.querySelector(".name").innerText,
        price: info.querySelector(".price").innerText,
        number: info.querySelector(".number").value
    };
    cart.push(item);

}
showData();

// add to Localstage
function showLocal() {
    localStorage.setItem("key_data", JSON.stringify(fake_data));
    let jsondata = localStorage.getItem("key_data");
    let data_out = JSON.parse(jsondata);
    console.log(data_out);
}
showLocal();



var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close");

for (i = 0; i < span.length; i++) {
    click = span[i];
    click.onclick = function () {
        modal.style.display = "none";
    };
}


btn.addEventListener("click", function () {
    modal.style.display = "block";
}) 

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showDataCart() {
    console.log(cart)
    let itemCart = document.querySelector(".item-cart");
    let html = " " 
    for (let key of cart) {
        html += `<div class="item">
        <div class="item-name">${key.name}</div>
        <div class="item-number">${key.number}</div>
        <div class="item-price">${key.price}</div>
    </div>`
    }
    let sum = Number(document.getElementById("price-number").innerText);
    console.log(sum);
    
    console.log(html);
    itemCart.innerHTML = html ;
}


