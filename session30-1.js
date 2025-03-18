let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let menu = `
1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá.
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.
`;

let subMenuPart1 = `
1. Món ăn dân tộc Kinh.
2. Món ăn dân tộc Mông.
3. Tất cả sản phẩm.
`;

let subMenuPart3 = `
1. Tăng dần.
2. Giảm dần.
`;

let checkMenu = true;
let bill = "";
let total = 0;

while (checkMenu) {
    let choice = +prompt(menu);
    let check = -1;
    switch (choice) {
        case 1:
            {
                displayProduct();
                break;
            }

        case 2:
            {
                buyProduct();
                break;
            }

        case 3:
            {
                arrangeProduct();
                break;
            }

        case 4:
            {
                billProduct();
                break;
            }

        case 5:
            {
                checkMenu = false;
                alert("Exit complete.")
                break;
            }

        default:
            {
                alert(`
                    Your choice is not available.
                    Please try again.
                    `)
            }
            break;
    }
}

function displayProduct() {
    let choicePart1 = +prompt(subMenuPart1);
    switch (choicePart1) {
        case 1:
            {
                for (let i in products) {
                    if (products[i].category === "món ăn dân tộc Kinh") {
                        console.table(products[i]);
                    }
                }
                break;
            }

        case 2:
            for (let i in products) {
                if (products[i].category === "món ăn dân tộc Mông") {
                    console.table(products[i]);
                }
            }
            break;

        case 3:
            {
                for (let i in products) {
                    console.table(products[i]);
                }
                break;
            }

        default:
            alert(`
                Your choice is not available.
                Please try again.
                `)
            break;
    };
}

function buyProduct() {
    let inputId = +prompt("Please enter your id of product you want to buy:");
    for (let i in products) {
        if (products[i].id === inputId) {
            check = 1;
        }
    }
    if (check === -1) {
        alert("Product id not found.")
    } else {
        let inputQuantity = +prompt("Please enter the amount of this product you want to buy:")
        if (inputQuantity > products[inputId - 1].quantity) {
            alert("This product is out of stock.")
        } else {
            products[inputId - 1].quantity -= inputQuantity;
            total += products[inputId - 1].price * inputQuantity;
            bill += `Name: ${products[inputId - 1].name}\tPrice: ${products[inputId - 1].price}\tQuantity: ${inputQuantity}\n`
        }
    }
}

function billProduct() {
    total = total.toLocaleString("vi-VN");
    console.log(`
${bill}
Total: ${total}
        `)
}

function arrangeProduct() {
    let choicePart3 = +prompt(subMenuPart3);
    switch (choicePart3) {
        case 1:
            {
                for (let i = 0; i < products.length - 1; i++) {
                    for (let j = i + 1; j < products.length; j++) {
                        if (products[i].price > products[j].price) {
                            let temp = products[i];
                            products[i] = products[j];
                            products[j] = temp;
                        }
                    }
                }
                break;
            }
        case 2:
            {
                for (let i = 0; i < products.length - 1; i++) {
                    for (let j = i + 1; j < products.length; j++) {
                        if (products[i].price < products[j].price) {
                            let temp = products[i];
                            products[i] = products[j];
                            products[j] = temp;
                        }
                    }
                }
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