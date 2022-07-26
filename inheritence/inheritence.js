class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.nationality = "Indian";
        this.greete = `Wel Come to India ${name}`
    }

    //! methods of class
    greeteMe() {
        return this.greete
    }

    //! methods of class

    student() {
        return this.greeteMe()
    }

}


class Student extends Person {
    constructor(name, age, sec, year) {
        super(name, age);
        this.sec = sec;
        this.year = year;
    }

    static getStudent() {  //!  static method can be called without instance creation 
                          //! other method can not  without inctence creation
        return "Hello"
    }

    polmerPhism(a= 0,b=0){   //! polimerPhosim single function can be called by different no of arguments
        console.log(a+b)
    }
}



let p = new Student("Dheeraj", 24)
console.log(p)
console.log(p.student())
console.log(Student.getStudent())