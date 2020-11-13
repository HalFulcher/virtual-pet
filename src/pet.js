const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {

this.name = name;
this.age = 0;
this.hunger = 0;
this.fitness = MAXIMUM_FITNESS;

};

Pet.prototype = {

    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};


Pet.prototype.growUp = function () {
    if (!this.isAlive) {
        throw new Error('Your pet is dead, sorry.');
    }
this.age += 1;
this.hunger +=5;
this.fitness -=3;
};

Pet.prototype.walk = function () {

    if (!this.isAlive) {
        throw new Error('Your pet is dead, sorry.');
      }

if (this.fitness >= 6 && this.fitness <= 10) {
    return this.fitness = MAXIMUM_FITNESS;
}
else {
    this.fitness +=4;
}
};

Pet.prototype.feed = function () {

    if (!this.isAlive) {
        throw new Error('Your pet is dead, sorry.');
      }
      
   if (this.hunger >= MINIMUM_HUNGER && this.hunger <= 3) {
        return this.hunger = MINIMUM_HUNGER;
    }
    else {
        return this.hunger -=3;
    }
};

Pet.prototype.checkUp = function () {
    if (this.hunger >= 5 && this.fitness <= 3) {
        return 'I am hungry AND I need a walk';
    }
    if (this.hunger >= 5) {
        return 'I am hungry';
    }
    else if (this.fitness <= 3) {
        return 'I need a walk';
    }
    else {
        return 'I feel great!'
    }
};


module.exports = Pet;