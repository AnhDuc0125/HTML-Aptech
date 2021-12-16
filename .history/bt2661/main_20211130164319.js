var stdList = [
    {
        "name" : "Vũ Đức Anh",
        "age" : "18",
        "address" : "Hoàng Mai - Hà Nội"
    },
    {
        "name" : "Vũ Diễm Quỳnh",
        "age" : "16",
        "address" : "Hoàng Mai - Hà Nội"
    },
    {
        "name" : "Nguyễn Thị Tuyết Minh",
        "age" : "42",
        "address" : "Hoàng Mai - Hà Nội"
    },
    {
        "name" : "Vũ Ngọc Sơn",
        "age" : "50",
        "address" : "Hoàng Mai - Hà Nội"
    },
    {
        "name" : "Mai Hiểu Minh",
        "age" : "18",
        "address" : "Hai Bà Trưng - Hà Nội"
    }
]

function showList() {
    var index = 0;
    var listTag = document.getElementById('result');
    for (i=0; i<stdList.length; i++){
        nameTag = stdList[i].name;
        ageTag = stdList[i].age;
        addressTag = stdList[i].address;
        listTag.innerHTML += `<tr>
            <td>${++index}</td>
            <td>${nameTag.value}</td>
            <td>${ageTag.value}</td>
            <td>${addressTag.value}</td>
        </tr>`
    }
}