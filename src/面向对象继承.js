// 父类
class People {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  eat() {
    return `${this.name} is eating`
  }

  introduction() {
    return `Hello! My name is ${this.name}, I am ${this.age} years old`
  }
}

  // 面向对象
const p = new People('小明', 50)
console.log(p.eat())
console.log(p.introduction())

//子类 继承
class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }
  
  introduction() {
    return `Hello! My name is ${this.name}, I am ${this.age} years old, my number is ${this.number}`
  }
}

const student1 = new Student('小红', 20, 20)
console.log(student1.introduction())

