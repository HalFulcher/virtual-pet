const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);    
  });

  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.age).toEqual(1);
});

  it('increases the hunger by 5', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.hunger).toEqual(5);

  });

  it('decreases the hunger by 3', () => {
    const pet = new Pet('Fido');

    pet.growUp();

    expect(pet.fitness).toEqual(7);

  });

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Fido');
  
    pet.age = 31;
  
    expect(() => pet.growUp()).toThrow('Your pet is dead, sorry.');
  });
  });




describe('walk', () => {
  it('increases the fitness by 4, to a max of 10', () => {
    const pet = new Pet('Fido');

    pet.walk();

    expect(pet.fitness).toEqual(10);
});

it('increases the fitness by 4, to a max of 10', () => {
  const pet = new Pet('Fido');

  pet.fitness = 4;
  pet.walk();

  expect(pet.fitness).toEqual(8);
});

it('throws an error if the pet is not alive', () => {
  const pet = new Pet('Fido');

  pet.age = 31;

  expect(() => pet.walk()).toThrow('Your pet is dead, sorry.');
});
});

describe('feed', () => {
  it('decreases the hunger by 3, to a min of 0', () => {
    const pet = new Pet('Fido');

    pet.feed();

    expect(pet.hunger).toEqual(0);
});

it('increases the fitness by 4, to a max of 10', () => {
  const pet = new Pet('Fido');

  pet.hunger = 4;
  pet.feed();

  expect(pet.hunger).toEqual(1);
});


it('throws an error if the pet is not alive', () => {
  const pet = new Pet('Fido');

  pet.age = 31;

  expect(() => pet.feed()).toThrow('Your pet is dead, sorry.');
});
});


describe('checkUp', () => {
  it('checks if hungry and unfit', () => {
    const pet = new Pet('Fido');

    pet.hunger = 6
    pet.fitness = 2

    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
});

it('checks if hungry', () => {
  const pet = new Pet('Fido');

  pet.hunger = 6
 

  expect(pet.checkUp()).toEqual('I am hungry');
});

it('checks if unfit', () => {
  const pet = new Pet('Fido');

  pet.fitness = 2


  expect(pet.checkUp()).toEqual('I need a walk');
});

it('checks if fine', () => {
  const pet = new Pet('Fido');

  pet.hunger = 0
  pet.fitness = 10

  expect(pet.checkUp()).toEqual('I feel great!');
});
});

describe('isAlive', () => {
  it('checks if still alive due to fitness', () => {
    const pet = new Pet('Fido');

    pet.fitness = 0;

    expect(pet.isAlive).toEqual(false);
});

  it('checks if still alive due to hunger', () => {
  const pet = new Pet('Fido');

  pet.hunger = 10

  expect(pet.isAlive).toEqual(false)
});

it('checks if still alive due to age', () => {
  const pet = new Pet('Fido');

  pet.age = 30

  expect(pet.isAlive).toEqual(false)
});

it('checks if still alive', () => {
  const pet = new Pet('Fido');

  pet.fitness = 8
  pet.hunger = 0
  pet.age = 20

  expect(pet.isAlive).toEqual(true)

});
});




 



