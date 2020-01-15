class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        this.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        this.dateOfBirth = dateOfBirth;
        this.emailAddresses = [];
        this.phoneNumbers = [];
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

module.exports = Person;