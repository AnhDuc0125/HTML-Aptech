var index = 0;
function clickToSave(){
    manu_Tag = document.getElementById('manu-name');
    product_Tag = document.getElementById('pro-name');
    category_Tag = document.getElementById('cate-name');
    price_Tag = document.getElementById('price');
    quantity_Tag = document.getElementById('quantity');
    totalPrice_Tag = document.getElementById('total-price');
    resultTag = document.getElementById('result');
            resultTag.innerHTML += `<tr>
                        <td>${++index}</td>
                        <td>${manu_Tag.value}</td>
                        <td>${product_Tag.value}</td>
                        <td>${category_Tag.value}</td>
                        <td>${price_Tag.value}</td>
                        <td>${quantity_Tag.value}</td>
                        <td>${totalPrice_Tag.value}</td>
                        <td><button.style.backgroundColor = "red">Edit</button.style.backgroundColor></td>
                        <td><button>Delete</button></td>
                    </tr>`
}
