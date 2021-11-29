var a = prompt('Nhập giá trị cho a');
var b = prompt('Nhập giá trị cho b');
var check = prompt('Nhập phép tính muốn tính');
function plus(a, b) {
    var sum = a + b;
    alert(`a + b = ${sum}`);
}
function diff(a, b) {
    var diff = a + b;
    alert(`a - b = ${diff}`);
}
function time(a, b) {
    var pro = a + b;
    alert(`a * b = ${pro}`);
}
function quotient(a, b) {
    var quo = a + b;
    alert(`a + b = ${quo}`);
}

if(check == '+'){
    plus(a, b);
} else if (check == '-'){
    diff(a, b);
} else if (check == '*'){
    time(a, b);
} else if (check == '/'){
    quotient(a, b);
}

