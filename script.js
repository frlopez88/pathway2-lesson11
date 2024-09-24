let car =  {
    make : "Toyota", 
    model: "RAV 4", 
    year : 2021, 
    start: function(){
        console.log("The Car is starting")
    }, 
    getDetails: function(){
        return `The car make is ${this.make} and the year is ${this.year}`
    }
}

car.start()

console.log(car.getDetails())


let keys= Object.keys(car)
console.log(keys)

let values = Object.values(car)
console.log(values)


