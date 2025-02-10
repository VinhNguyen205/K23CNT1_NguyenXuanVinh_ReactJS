class Person{
    constructor(){
        this.name="Trần Tiến Anh";
        this.age =37;
    }
    getname(){
        return this.name;
    }
    setage(age){
        this.age=age;

    }
    getage(){
        return this.age;

    }
}
var person = new Person();
person.setage(18);
console.log("Ten nguoi: "+person.getname());
console.log("Tuoi: "+person.getage());
