var index = 0;

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
