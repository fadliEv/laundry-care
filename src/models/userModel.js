export default class User {
    constructor(id, name, phoneNumber, email, address, password) {
      this.id = id;
      this.name = name;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.address = address;
      this.password = password;
    }
  
    static fromJson(data) {
      return new User(data.id, data.name, data.phoneNumber, data.email, data.address, data.password);
    }
  }
  