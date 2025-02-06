let Data = "Website Data";

class User1 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("Data", Data);
  }
}

class Admin extends User1 {
    constructor(name, email) {
        super(name, email);
    }
  editData() {
    Data="new Data";
    console.log(Data);
  }
}

let admin1 =new Admin("Dipak","dipak@.com");
