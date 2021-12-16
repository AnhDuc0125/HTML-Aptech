var manuList = {
    "Apple" : ["Iphone 11", "Ipad M1", "Airpods 2"],
    "SamSung" : ["S1", "S2", "S3"],
    "GG" : ["G1","G2", "G3"],
}

var manuListTag = document.getElementById('manu_name')
console.log(manuListTag)
function manu_change() {
    for(var key of manuList){
        manuListTag.innerHTML += (`<option value="${key}">${key}</option>`)
    }
}

test = document.getElementById('category_name')
console.log(test)