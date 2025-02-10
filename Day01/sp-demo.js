//tao mang moi va su dung cac phan tu cua mang cu
var oldArray = [2, 5, 3];
var newArray = [oldArray, 4, 5];

console.log("oldArray:", oldArray);
console.log("newArray:", newArray);

// Gán giá trị mới cho oldArray
// oldArray = {};

// spread
var oldArray = [10,11,12];
var newArray = [...oldArray,22,33]

console.log("oldArray sau khi gán lại:", oldArray);
console.log("newArray sau khi oldArray thay đổi:", newArray);
