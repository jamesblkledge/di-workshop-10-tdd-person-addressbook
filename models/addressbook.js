const fs = require('fs');

class AddressBook {
    constructor() {
        this.people = [];
    }

    addPerson() {
        for (let i = 0; i < arguments.length; i++) {
            this.people.push([arguments[i]]);
        }
    }

    findByFirstName(name) {
        let peopleFound = [];

        this.people.forEach((e) => {
            if (e[0].firstName == name) { peopleFound.push(e[0]) }
        });

        return peopleFound;
    }

    findByLastName(name) {
        let peopleFound = [];

        this.people.forEach((e) => {
            if (e[0].lastName == name) { peopleFound.push(e[0]) }
        });

        return peopleFound;
    }

    save() {
        this.people.forEach((e) => {
            fs.writeFile('AddressBook.json', JSON.stringify(e), (err) => {
                if (err) throw err;
            });
        });
    }
}

module.exports = AddressBook;