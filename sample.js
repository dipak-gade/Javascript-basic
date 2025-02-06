class Person {
  constructor() {
    this.name = "Dipak";
  }
  eat() {
    console.log("eating");
  }

  sleep() {
    console.log("sleeping");
  }
  work() {
    console.log("do not work");
  }
}

class Doctor extends Person {
  constructor(branch) {
    super();
    this.branch = branch;
  }
  work() {
    console.log("treat a patient");
  }
}

class Engineer extends Person {
  work() {
    console.log("Build Something");
  }
}

const personObj = new Person;
const doctorObj = new Doctor("cardiologist");
const engineerObj = new Engineer;
console.log("Sample data")
console.log("Sample one")
