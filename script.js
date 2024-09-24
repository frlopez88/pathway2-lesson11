class Car {

    constructor(pmake, pmodel, pyear){

        this.make = pmake
        this.model = pmodel
        this.year = pyear

    }

    getDetails(){
        return `The car make is ${this.make} and the year is ${this.year}`
    }

}

let obj1 = new Car("Nissan", "Murano", 2023)
let obj2 = new Car("Toyota", "RAV 4", 2021)

console.log(obj1.getDetails())
console.log(obj2.getDetails())


class Person {

    constructor ( pname , page ) {
        this.name = pname
        this.age = page
    }

    introduce(){
        return `Hi, I´m ${this.name}  and I´m ${this.age} years old`
    }

}


let per1 = new Person("Patrick", 29)
let per2 = new Person("Julie", 24)
let per3 = new Person("PAX", 31)
let per4 = new Person("Fernando", 35)

let dataPerson = []
dataPerson.push(per1)
dataPerson.push(per2)
dataPerson.push(per3)
dataPerson.push(per4)

console.log("For Loop")

for (let i=0; i < dataPerson.length; i++){
   let item  = dataPerson[i]
   console.log(item.introduce)
}


// forEach 

console.log("For Each")

dataPerson.forEach( (item)=>{

    console.log(item.introduce())

})