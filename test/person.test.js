const chai = require('chai');
const expect = chai.expect;

const Person = require('../models/person.js');

describe('Person', () => {
    //CONSTRUCTOR
    describe('#constructor', () => {
        it('should initialise properly', () => {
            let person = new Person('Jeff', 'Bezos', '11 Jun 2001');
    
            expect(person.firstName).to.equal('Jeff');
            expect(person.lastName).to.equal('Bezos');
            expect(person.dateOfBirth).to.equal('11 Jun 2001');
        });

        it('should capitalise the name correctly', () => {
            let person = new Person('jeff', 'bezos', '11 Jun 2001');

            expect(person.firstName).to.equal('Jeff');
            expect(person.lastName).to.equal('Bezos');
        });
    });


    //FULLNAME
    describe('#fullName()', () => {
        it('should concatenate the name properly', () => {
            let person = new Person('jeff', 'bezos', '11 Jun 2001');

            expect(person.fullName()).to.equal('Jeff Bezos');
        });
    });


    //ADDEMAIL
    describe('#addEmail()', () => {
        it('should add 1 email', () => {
            let person = new Person('jeff', 'bezos', '11 Jun 2001');

            person.addEmail("jeff@amazon.com");

            expect(person.emailAddresses).to.deep.equal(["jeff@amazon.com"]);
        });

        it('should add multiple (variable amount) emails', () => {
            let person = new Person('jeff', 'bezos', '11 Jun 2001');

            person.addEmail("jeff@amazon.com", "mrbezos@gmail.com", "jeff.bezos@outlook.com", "bezosboy67@icloud.com");

            expect(person.emailAddresses).to.deep.equal(["jeff@amazon.com", "mrbezos@gmail.com", "jeff.bezos@outlook.com", "bezosboy67@icloud.com"]);
        });
    });

    
    //ADDPHONENUMBER
    describe('#addPhoneNumber()', () => {
        it('should add 1 phone number', () => {
            let person = new Person('jeff', 'bezos', '11 Jun 2001');

            person.addPhoneNumber("07954678432");

            expect(person.phoneNumbers).to.deep.equal(["07954678432"]);
        });

        it('should add multiple (variable amount) phone numbers', () => {
            let person = new Person('jeff', 'bezos', '11 Jun 2001');

            person.addPhoneNumber("07954678432", "0215423986", "0208456231", "07776214899");

            expect(person.phoneNumbers).to.deep.equal(["07954678432", "0215423986", "0208456231", "07776214899"]);
        });
    });    
});