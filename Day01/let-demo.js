// khi dùng với var
var x = 5;
if(x===5){
    var x = 10;
    console.log('gia tri x trong if la '+x);

}
console.log('giá trị ngoài if là '+x);

// khi dùng với let
let y = 5; // Khai báo biến x hợp lệ
if (y === 5) {
    let y = 10; // Biến cục bộ trong if
    console.log('Giá trị x trong if là ' + y);
}
console.log('Giá trị x ngoài if là ' + y);