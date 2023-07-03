// Build a Car class!
class Car {
    constructor(make, model) {
        this.make = make,
        this.model = model
        this.odometer = 0
    }
    
    drive(miles) {
        this.odometer += miles
    }
    async driveAsync(miles) {
        this.odometer += miles
        return this.odometer
    }
}

module.exports = Car;