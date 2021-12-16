var manuList = {
    "Apple" : ["Iphone 11", "Ipad M1", "Airpods 2"],
    "SamSung" : ["S1", "S2", "S3"],
    "GG" : ["G1","G2", "G3"],
    "Oppo" : ["O1"]
}

function manu_change() {
    var manuListTag = document.getElementById('manu_name')
    for(var key of manuList){
        manuListTag.innerHTML += (`<option value="${key}">${key}</option>`)
    }
}