var manu_list = [
    {
        "name" : "Apple",
        "categories" : ["Iphone", "Ipad", "MacBook", "Airpods"]
    }, {
        "name" : "SamSung",
        "categories" : ["S1", "S2", "S3", "S4"]
    }
]

var manuafaturerTag = document.getElementById('manu_name')
	for(var key in manu_list) {
		manuafaturerTag.innerHTML += `<option value='${key}'>${key}</option>`
	}
// function manu_list() {

// }
