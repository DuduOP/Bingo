export default class Room {

  constructor(name, fieldParams, usersLimit, turnTime) {
    this.name = name;
    this.fieldParams = fieldParams;
    this.usersLimit = usersLimit;
    this.turnTime = turnTime;

    this.users = [];
  }

  addUser(user) {
    if (this.users.length > this.usersLimit) {
      return `Cannot add user, max users count in this room set to ${this.usersLimit}`;
    }
    else {
      this.users.push(user);
    }
  }

  prepareField() {

  }
}
