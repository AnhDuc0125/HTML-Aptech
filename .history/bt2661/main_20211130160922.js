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
    resultTag = document.getElementById('result').innerHTML{`
        <tr>
            <td>${++index}</td>
            <td>${std.name}</td>
            <td>${std.age}</td>
            <td>${std.address}</td>
        </tr>
    `}
}