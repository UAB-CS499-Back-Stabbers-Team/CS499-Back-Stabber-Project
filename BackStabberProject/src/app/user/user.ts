export class User {
    firstName: string;
    LastName: string;
    emails: string;
    gender: string;
    age: number;
    country: string;
    race_: string;
    ethnicity: string;

    constructor(firstName: string,
                LastName: string,
                emails: string,
                gender: string,
                age: number,
                country: string,
                race_: string,
                ethnicity: string,) {
      this.firstName = firstName;
      this.LastName = LastName;
      this.emails = emails;
      this.gender = gender;
      this.age = age;
      this.country = country;
      this.race_ = race_;
      this.ethnicity = ethnicity;
    }
}
