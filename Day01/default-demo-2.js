//Tham so dat tai vi tri khai bao ham
function add(num1, num2=1){
    return num1 + num2;
}
console.log('Tổng 2 số là:'+add(5,1));
// su dung tham so mac dinh
console.log('Tong 2 so  khi su dung tham so mac dinh '+add(5));
//vd 2
function showName (name) {
    //tham so mac dinh ben trong ham 
    name = name || "Tên măc định";
    return name;
}
console.log ('ten la: '+ showName("Tran Tien Anh"));
//su dung tham so mac dinh 
console.log('ten la: '+ showName());