class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    console.log(name, email);
  }

  viewData() {
    console.log("Website Data");
  }
}

let student1 = new User("Dipak","dipak@gmail.com");
