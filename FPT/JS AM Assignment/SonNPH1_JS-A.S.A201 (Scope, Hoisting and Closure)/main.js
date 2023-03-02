//Problem 01
function test() {
console.log(a);
console.log(foo());
var a = 1;
function foo() {
return 2;
 }
}
test();
//Kết quả là undefined 2
//Điều này là do khái niệm hàm test() được thực thi,
//câu lệnh console.log(a) được thực thi, nhưng a chưa được xác định nên kết quả trả về là undefined.
//Mặt khác, câu lệnh console.log(foo()) được thực thi nó sẽ return về 2 nên kết quả là 2

//Problem 02
function someFunction(number) {
function otherFunction(input) {
return a;
}
a = 5;
return otherFunction;
 }

var firstResult = someFunction(9);
var result = firstResult(2);
//kết quả là 5 .
//Khi someFunctionđược gọi với một đối số là 9, nó xác định một biến cục bộ a và đặt giá trị của a thành 5. 
//Sau đó, nó trả về otherFunction chức năng.
//Khi firstResult được gán kết quả gọi someFunction(9), nó được gán một tham chiếu đến hàm otherFunction.
//Khi firstResult được gọi với một đối số là 2, nó sẽ trả về giá trị của a, tức là 5. 
//Điều này là do a nằm trong chuỗi phạm vi của otherFunction và nó đã được gán giá trị 5 vào thời điểm otherFunction được gọi.

//Problem 03
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);
// Kết quả là 1.
// Điều này là do biến bên a trong hàm b được khai báo như một hàm sử dụng khai báo hàm, 
// nghĩa là nó có phạm vi riêng bên trong hàm và không ảnh hưởng đến giá trị của biến bên a ngoài hàm.
// Vì vậy, khi hàm b được gọi, nó sẽ gán giá trị 10 cho biến a bên trong hàm, nhưng biến a bên ngoài hàm không thay đổi 
// và vẫn có giá trị 1.

// Problem 04
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
           console.log('You clicked element #' + i);

     });
}
//Nếu người dùng nhấp vào nút đầu tiên, bảng điều khiển sẽ ghi "You clicked element #4". Nếu người dùng nhấp vào nút thứ tư, bảng điều khiển cũng sẽ ghi "You clicked element #4". 
//Điều này xảy ra bởi vì biến i được khai báo với var và do đó nằm trong phạm vi chức năng, không phải trong phạm vi khối.
//Điều này có nghĩa là khi các trình lắng nghe sự kiện được gọi, tất cả chúng đều sử dụng cùng một giá trị của i, là giá trị mà nó có ở cuối vòng lặp, là 4.
//cách fix
//1 thay var bằng let
var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
           console.log('You clicked element #' + i);

     });
}
// sử dụng closure
var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', (function(i) {
          return function(){
            console.log('You clicked element #' + i);
          } 

     })(i));
}