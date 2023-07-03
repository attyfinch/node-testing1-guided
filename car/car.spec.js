const Car = require('./car')


// Test away!
describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBe(5)
    })
})

describe('Car Class', () => {
    
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })


    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        expect(prius).toHaveProperty('make', 'toyota') // 2nd argument = make value
        expect(prius).toHaveProperty('model')
        expect(prius.make).toBeDefined() // open ended, make is simply defined
        expect(prius.model).toEqual('prius') // equal to the correct value
        expect(prius.model).toBe('prius')
        expect(prius).toMatchObject({ make: 'toyota', model: 'prius' })
    })
    test("new cars start with odometer at 0", () => {
        expect(prius).toHaveProperty('odometer', 0)
    })
    test("cars have a drive method", () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('drive async', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    test("Test async method", async () => {
        let updatedO = await prius.driveAsync(10)
        expect(prius.odometer).toBe(10)
        updatedO = await prius.driveAsync(5)
        expect(prius.odometer).toBe(15)
    })
})