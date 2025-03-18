let products = [];

let cart = [];

let menu = `
1. Hiển thị danh sách sách theo thể loại.
2. Thêm sách mới vào kho.
3. Tìm kiếm sách theo tên hoặc id.
4. Mua sách.
5. Sắp xếp sách theo giá.
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát chương trình.
`

let subMenuPart1 = `
1. Sách bình luận văn học.
2. Sách chính trị.
3. Sách địa lý.
4. Tiểu thuyết.
5. Sách lịch sử.
6. Sách kinh doanh.
7. Sách thiếu nhi.
8. Tuyển tập truyện ngắn.
`

let subMenuPart5 = `
1. Tăng dần.
2. Giảm dần.
`

let subMenuPart3 = `
1. Theo tên.
2. Theo id.
`

let check = true;
let n = 0
let checkId = 0
let bill = ""
let total = 0
let totalBook = 0

while (check) {
    let count = -1
    let findIndex = 0
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            {
                displayBook();
                break;
            }
        case 2:
            {
                inputBook();
                break;
            }
        case 3:
            {
                searchBook();
                break;
            }
        case 4:
            {
                buyBook();
                break;
            }
        case 5:
            {
                arrangeProduct();
                break;
            }
        case 6:
            {
                billProduct();
                break;
            }
        case 7:
            {
                totalProduct();
                break;
            }
        case 8:
            {
                check = false;
                alert("Exit complete.")
                break;
            }
        default:
            {
                alert(`
                Your choice is not available.
                Please try again.
                    `)
                break;
            }
    }
}

function displayBook() {
    let choicePart1 = +prompt(subMenuPart1)
    switch (choicePart1) {
        case 1:
            {
                for (let i in products) {
                    if (products[i].category === "Sách bình luận văn học") {
                        console.table(products[i])
                    }
                }
                break
            }
        case 2:
            {
                for (let i in products) {
                    if (products[i].category === "Sách chính trị") {
                        console.table(products[i])
                    }
                }
                break
            }
        case 3:
            {
                for (let i in products) {
                    if (products[i].category === "Sách địa lý") {
                        console.table(products[i])
                    }
                }
                break
            }
        case 4:
            {
                for (let i in products) {
                    if (products[i].category === "Tiểu thuyết") {
                        console.table(products[i])
                    }
                }
                break
            }
        case 5:
            {
                for (let i in products) {
                    if (products[i].category === "Sách lịch sử") {
                        console.table(products[i])
                    }
                }
                break
            }
        case 6:
            {
                for (let i in products) {
                    if (products[i].category === "Sách kinh doanh") {
                        console.table(products[i])
                    }
                }
                break
            }
        case 7:
            {
                for (let i in products) {
                    if (products[i].category === "Sách thiếu nhi") {
                        console.table(products[i])
                    }
                }
                break
            }
        case 8:
            {
                for (let i in products) {
                    if (products[i].category === "Tuyển tập truyện ngắn") {
                        console.table(products[i])
                    }
                }
                break
            }
        default:
            {
                alert(`
                    Your choice is not available.
                    Please try again.
                    `)
                break
            }
    }
}

function inputBook() {
    let choicePart1 = +prompt(subMenuPart1)
    switch (choicePart1) {
        case 1:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Sách bình luận văn học",
                }
                products.push(inputBook)
                break
            }
        case 2:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Sách chính trị",
                }
                products.push(inputBook)
                break
            }
        case 3:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Sách địa lý",
                }
                products.push(inputBook)
                break
            }
        case 4:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Tiểu thuyết",
                }
                products.push(inputBook)
                break
            }
        case 5:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Sách lịch sử",
                }
                products.push(inputBook)
                break
            }
        case 6:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Sách kinh doanh",
                }
                products.push(inputBook)
                break
            }
        case 7:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Sách thiếu nhi",
                }
                products.push(inputBook)
                break
            }
        case 8:
            {
                n++
                let inputName = prompt("Enter the book's name:")
                let inputPrice = +prompt("Enter the book's price:")
                let inputQuantity = +prompt("Enter the book's quantity:")
                let inputBook = {
                    id: n,
                    name: inputName,
                    price: inputPrice,
                    quantity: inputQuantity,
                    category: "Tuyển tập truyện ngắn",
                }
                products.push(inputBook)
                break
            }
        default:
            {
                alert(`
                    Your choice is not available.
                    Please try again.
                    `)
                break
            }
    }
}

function searchBook() {
    let checkSearch = +prompt(subMenuPart3)
    if (checkSearch === 1) {
        let checkName = prompt("Nhap ten sach can tim")
        for (let i in products) {
            if (products[i].name === checkName) {
                count = 1
                findIndex = i
                break
            }
        }
        if (count === -1) {
            alert("Không có sách cần tìm.")
        } else {
            console.table(products[findIndex])
        }
    } else if (checkSearch === 2) {
        checkId = +prompt("Nhap id sach can tim")
        for (let i in products) {
            if (products[i].id === checkId) {
                count = 1
                findIndex = i
                break
            }
        }
        if (count === -1) {
            alert("Không có sách cần tìm.")
        } else {
            console.table(products[findIndex])
        }
    }
}

function buyBook() {
    checkId = +prompt("Nhap id sach muon mua")
    for (let i in products) {
        if (products[i].id === checkId) {
            count = 1
            findIndex = i
            break
        }
    }
    if (count === -1) {
        alert("Khong co id ban can tim")
    } else {
        let inputQuantity = +prompt("Nhap so luong sach ban muon mua")
        if (products[findIndex].quantity < inputQuantity) {
            alert("Khong du so sach trong kho")
        } else {
            products[findIndex].quantity -= inputQuantity
            total += products[findIndex].price * inputQuantity;
            bill += `Name: ${products[findIndex].name}\tPrice: ${products[findIndex].price}\tQuantity: ${inputQuantity}\n`
        }
    }
}

function arrangeProduct() {
    let choicePart5 = +prompt(subMenuPart5)
    if (choicePart5 === 1) {
        for (let i = 0; i < products.length - 1; i++) {
            for (let j = i + 1; j < products.length; j++) {
                if (products[i].price > products[j].price) {
                    let temp = products[i];
                    products[i] = products[j];
                    products[j] = temp;
                }
            }
        }
    } else if (choicePart5 === 2) {
        for (let i = 0; i < products.length - 1; i++) {
            for (let j = i + 1; j < products.length; j++) {
                if (products[i].price < products[j].price) {
                    let temp = products[i];
                    products[i] = products[j];
                    products[j] = temp;
                }
            }
        }
    } else {
        alert("Lua chon khong hop le")
    }
    console.table(products)
}

function billProduct() {
    total = total.toLocaleString("vi-VN");
    console.log(`
${bill}
Total: ${total}
        `)
}

function billProduct() {
    total = total.toLocaleString("vi-VN");
    console.log(`
${bill}
Total: ${total}
        `)
}

function totalProduct() {
    for (let i in products){
        totalBook += products[i].quantity
    }
    console.log(`Tổng số lượng sách trong kho là: ${totalBook}`)
}