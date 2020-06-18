// let sandals = [
//     {
//         name: "Sandals 1",
//         price: 30000,
//         size: 37,
//         publisher: "Thang"
//     },
//     {
//         name: "Sandals 2",
//         price: 50000,
//         size: 40,
//         publisher: "Ha"
//     },
// ];

// // let jsonData = JSON.stringify (mảng/Object); --> Chuyển mảng/Object --> String
// let jsonData = JSON.stringify (sandals);
// console.log(jsonData);
// localStorage.setItem("sandals", jsonData);
// // JSON.parse(Chuỗi JSON); --> Chuyển String --> mảng/Object
// let string = localStorage.getItem("key");
// let arr = JSON.parse(string);
// console.log(arr);


// let sandals = [
//     {
//         name: "sandals 1",
//         price: 30,
//         size: 40,
//         publisher: "p1"
//     },
//     {
//         name: "sandals 2",
//         price: 50,
//         size: 43,
//         publisher: "p2"
//     }
// ];


// localStorage.setItem("sandals", JSON.stringify(sandals));

// READ
function showSandals() {
    // Lấy từ localStorage: String
    let jsonData = localStorage.getItem("sandals");
    // convert String -> mảng
    let sandals = JSON.parse(jsonData);
    console.log(sandals)
    // Hiển thị ra màn hình
    let html = `<ul>`;
    for (let sandal of sandals) {
        if (sandal === null) {
            continue;
        }

        html += `
            <li>
                Name: <b>${sandal.name}</b><br>
                Price: <b>${sandal.price}</b><br>
                Size: <mark>${sandal.size}</mark><br>
                Publisher: <small>${sandal.publisher}</small>
            </li>
        `;
    }
    html += `</ul>`;
    console.log(html);
    document.getElementById("app").innerHTML = html;
}

function addsandals(sandal) {
    // Lấy dữ liệu từ localStorage
    // let jsonData = localStorage.getItem("sandals");
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    
    // thêm dữ liệu vào mảng
    sandals.push(sandal);

    // lưu lại vào trong localStorage
    localStorage.setItem("sandals", JSON.stringify(sandals));
}

function updateSandal(name, data) {
    // lấy từ dữ liệu ra
    let sandals = JSON.parse(localStorage.getItem("sandals"));

    // dựa vào name lấy ra dép cần sửa

    let foundIndex = sandals.findIndex(function (item){
        return item.name === name;
    });

    if (foundIndex >= 0){
        // Nếu tìm thấy --> sửa
        sandals[foundIndex] = data;
    } else {
        console.log("NOT FOUND");
    }

    // lưu lại
    localStorage.setItem("sandals", JSON.stringify(sandals));
}

function deleteSandals(name) {
    // lấy dữ liệu ra
    let sandals = JSON.parse(localStorage.getItem("sandals"));
    let foundIndex = sandals.findIndex(function (item){
        return item.name == name;
    });
    // dựa vào name tìm name cần xóa
    if (foundIndex >= 0) {
        sandals.splice(foundIndex, 1);
    } else {
        console.log("NOT FOUND");
    }
    localStorage.setItem("sandals", JSON.stringify(sandals));
}
