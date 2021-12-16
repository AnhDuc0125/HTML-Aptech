manuTag = document.getElementById('manu_name')
manuList = [
    {
        "name" : "Apple",
        "category" : ["Iphone", "Ipad"]
    },
    {
        "name" : "Sumsung",
        "category" : ["S1", "S2"]
    },
    {
        "name" : "GG",
        "category" : ["G1", "G2"]
    }
]
function manu_list() {
    for(var key of manuList){
        manuTag.innerHTML += (`
            <option value="${key.name}">${key.name}</option>>
        `)
    }
}