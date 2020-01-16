const Pet = require('../models/pet.js');
const AddressBook = require('../models/addressbook.js');

let addressBook = new AddressBook();

class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        this.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        this.dateOfBirth = dateOfBirth;
        this.emailAddresses = [];
        this.phoneNumbers = [];
        this.pets = [];
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    addEmail() {
        for (let i = 0; i < arguments.length; i++) {
            this.emailAddresses.push(arguments[i]);
        }

        return false;
    }

    addPhoneNumber() {
        for (let i = 0; i < arguments.length; i++) {
            this.phoneNumbers.push(arguments[i]);
        }

        return false;
    }

    addPet(pet) {
        this.pets.push({ "Pet Name: ": pet.petName, "Pet Type: ": pet.animalType });
    }

    returnFormattedDetails() {
        let dottedLine = "";

        for (let i = 0; i < this.fullName().length; i++) {
            dottedLine += "-";
        }

        let email = "";
        this.emailAddresses.forEach((e) => {
            email += "- " + e + "\n";
        });

        let phone = "";
        this.phoneNumbers.forEach((e) => {
            phone += "- " + e + "\n";
        });

        let lines = [
            this.fullName(),
            dottedLine,
            "DOB: " + this.dateOfBirth + "\n\n",
            "Email Addresse(s):\n" + email + "\n",
            "Phone Number(s):\n" + phone
        ];

        return lines.join("\n");
    }
}

addressBook.addPerson(
    new Person('jeff', 'bezos', '15 Aug 1965'),
    new Person('arjun', 'blackledge', '24 Apr 2001'),
    new Person('lisa', 'walsh', '07 Oct 1985'),
    new Person('james', 'dittmar', '11 Jun 2001'),
    new Person('emily', 'anand', '23 Jan 1998'),
    new Person('jeff', 'richardson', '02 Sep 2008')
);

console.log(addressBook.findByFirstName('Jeff'));

module.exports = Person;