var manu_list = {
    "Apple": [
        "IPhone 5", "IPhone 5s", "IPhone 12"
    ],
    "Sam Sung": [
        "Galaxy S5", "Galaxy 10"
    ],
    "LG": [
        "1", "2", "3"
    ]
}

var manuafaturerTag = document.getElementById('manu_name')
	for(var key in manu_list) {
		manuafaturerTag.innerHTML += `<option value='${key}'>${key}</option>`
	}
    function changeManufaturer() {
        key = manuafaturerTag.value
        categoryList = manufactureList[key]
        console.log(categoryList)

        var categoruTag = document.getElementById('category_name')
        categoruTag.innerHTML = ''

        if(categoryList != null) {
            for (var i = 0; i < categoryList.length; i++) {
                categoruTag.innerHTML += `<option value='${categoryList[i]}'>${categoryList[i]}</option>`
            }
        }
    }