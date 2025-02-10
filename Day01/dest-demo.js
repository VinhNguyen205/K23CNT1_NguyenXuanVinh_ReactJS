//array
var arr = [10, 20, 25, 15];

var [a,b]=arr;
console.log("a=",a);
console.log("b=",b);

[a,b,c =arr];
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

//object
 const studen = {
    name: "Tien Anh",
    age:19,
    phone:"0345862097",
    email:"tienanhtran755@gmail.com"
 }

 var {name, phone}= studen;
 //=>name:"Tien Anh",  phone:"0345862097"
 console.log("name:",name);
 console.log("phone",phone);
 