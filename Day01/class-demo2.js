class Person {
    constructor() {
        this.name = "Trần Tiến Anh";
        this.age = 19;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

class Student extends Person {
    constructor() {
        super(); // Gọi constructor của Person (không cần tham số)
        this.StudentID = "SV001";
    }

    getStudentinfo() {
        return "Tên: " + this.getName() + " - Tuổi: " + this.getAge() + " - Mã SV: " + this.StudentID;
    }
}

var student = new Student();
console.log(student.getStudentinfo());
