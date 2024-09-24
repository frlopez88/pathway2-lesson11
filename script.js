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


dataPerson.forEach( (item)=>{

    console.log(item.introduce())

})


// Pascal Case

class BankAccount {

    constructor( pAccountHolder, pBalance, pAccountNumber ){
        this.accountHolder = pAccountHolder
        this.balance = pBalance
        this.accountNumber = pAccountNumber
    } 

    deposit(amount){
       this.balance = this.balance + amount 
    }
    withdraw(amount){
        this.balance = this.balance-amount
    }
    getBalance(){
        return this.balance
    }

}

let account1 = new BankAccount( "Fernando Lopez", 100, "101154")
account1.deposit(50)
account1.deposit(100)
console.log(account1.getBalance())


let account2 = new BankAccount("Julie", 1000, "4565487")
account2.deposit(500)
account2.withdraw(750)
console.log(account2.getBalance())