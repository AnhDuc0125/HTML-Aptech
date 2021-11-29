var stdList = [
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    },
    {
    "name" : "Vũ Đức Anh",
    "age" : "18",
    "address" : "Hà Nội",
    "email" : "vuducanh0125@gmail.com"
    }
]
var index = 0
function showStd() {
    for(std of stdList){
        document.write(`
        <tr>
            <td>${++index}</td>
            <td>${std.name}</td>
            <td>${std.age}</td>
            <td>${std.address}</td>
            <td>${std.email}</td>
        </tr>
        `)
    }
}