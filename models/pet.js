class Pet {
    constructor(petName, animalType) {
        this.petName = petName;
        this.animalType = animalType.toLowerCase();
    }

    sound() {
        return this.animalType == "cat" ? "Meow" :
            this.animalType == "dog" ? "Woof" :
                this.animalType == "goldfish" ? "blub" :
                    "Roar";
    }
}

module.exports = Pet;