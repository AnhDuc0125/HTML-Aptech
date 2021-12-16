// var index = 0;
function clickToSave(){
    manu_Tag = document.getElementById('manu-name');
    manu_Tag = document.getElementById('pro-name');
    manu_Tag = document.getElementById('cate-name');
    manu_Tag = document.getElementById('price');
    manu_Tag = document.getElementById('quantity');
    manu_Tag = document.getElementById('total-price');
    resultTag = document.getElementById('result');
            resultTag.innerHTML += `<tr>
                        <td>${++index}</td>
                        <td>${manu_Tag.value}</td>
                        <td>${product_Tag.value}</td>
                        <td>${category_Tag.value}</td>
                        <td>${price_Tag.value}</td>
                        <td>${quantity_Tag.value}</td>
                        <td>${totalPrice_Tag.value}</td>
                        <td><button>Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>`
}
