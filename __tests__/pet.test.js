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
    it('decreases fitness by 3', () => {
        const pet = new Pet('Cat');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet('Cat');

        pet.fitness = 4;
        pet.walk();

        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('Cat');

        pet.fitness = 8;
        pet.walk();

        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases hunger level by 3 with minimum of 0', () => {
        const pet = new Pet('Cat');
        
        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);

        pet.feed();
        expect(pet.hunger).toEqual(0);
    });

describe('checkUp', () => {
    it('lets you know how the pet is feeling', () => {
        const pet = new Pet ('Cat');

        pet.age = 0;
        pet.hunger = 0;
        pet.fitness = 10;
        expect(pet.checkUp()).toEqual("I feel great!");

        pet.hunger = 5;
        expect(pet.checkUp()).toEqual("I am hungry");

        pet.fitness = 3;
        pet.hunger = 2;
        expect(pet.checkUp()).toEqual("I need a walk");

        pet.hunger = 6;
        pet.fitness = 2;
        expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");

    });
})

});

