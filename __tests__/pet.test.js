const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Cat')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Cat');
        expect(pet.name).toEqual('Cat');
    });
    it('has a initial age of 0', () => {
        const pet = new Pet('Cat');
        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Cat');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increases hunger by 5', () => {
        const pet = new Pet('Cat');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('decreses fitness by 3', () => {
        const pet = new Pet('Cat');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

