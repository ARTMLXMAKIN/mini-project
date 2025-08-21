export default class Action {
  constructor(type, description, amount) {
    this.type = type;
    this.description = description;
    this.amount = type == "income" ? amount : -amount;
    this.id = Math.ceil(Math.random() * 1000);
  }
  get(varName) {
    return this[varName];
  }
  set(varName, newValue) {
    this[varName] = newValue;
  }
}
