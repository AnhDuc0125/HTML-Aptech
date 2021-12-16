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
    for(var key in manufactureList) {
        manuafaturerTag.innerHTML += `<option value='${key}'>${key}</option>`
    }
