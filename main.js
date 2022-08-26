let products = [];

showProductList(products);

function showProductList(products) {
    let str = "";
    products.forEach(function (item, index) {
        str += "<tr>";
        str += `<td>${index + 1}</td>`;
        str += `<td>${item[0]}</td>`;
        str += `<td>${item[1]}</td>`;
        str += `<td>${item[2]}</td>`;
        str += `<td style="width: 20%; text-align: center"><button onclick="deleteProduct(${index})">Delete</button>
                    <button onclick="showEdit(${index})">Edit</button>
                </td>`
        str += "</tr>";
    })
    document.getElementById("product-list").innerHTML = str;
}

function clear() {
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-quantity").value = "";
}

function check(name) {
    for (let i=0; i<products.length;i++) {
        if (products[i][0] == name) {
            return true
        } else {
            return false;
        }
    }
}

function addProduct() {
    let name = document.getElementById("product-name").value;
    let price = document.getElementById("product-price").value;
    let quantity = document.getElementById('product-quantity').value;

    if (check(name)) {
        alert('Product already exist!')
    } else {
        if (name == "" || price == "" || quantity == "") {
            alert('Please fill all the form!')
        } else {
            let product = [name, price, quantity];
            products.push(product);
            showProductList(products);
            clear();
        }
    }
}

function deleteProduct(index) {
    if (confirm("Delete confirmation: ?")) {
        products.splice(index, 1);
        showProductList(products);
    }
}

function showEdit(index) {
    let productEditted = products[index];
    document.getElementById("product-name").value = productEditted[0];
    document.getElementById("product-price").value = productEditted[1];
    document.getElementById("product-quantity").value = productEditted[2];
    document.getElementById('edit-product-btn').setAttribute("data-id", index);
    document.getElementById('add-product-btn').style.display = 'none';
}

function editProduct() {
    let name = document.getElementById("product-name").value;
    let price = document.getElementById("product-price").value;
    let quantity = document.getElementById("product-quantity").value;
    let index = document.getElementById('edit-product-btn').getAttribute('data-id');
    products[index] = [name, price, quantity];
    document.getElementById('add-product-btn').style.display = 'inline-block';
    showProductList(products);
    clear();
}

function searchProduct() {
    let keyword = document.getElementById('product-search').value;
    let result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i][0] == keyword || products[i][1] == keyword || products[i][2] == keyword) {
            result.push(products[i])
        }
    }
    showProductList(result)
}


