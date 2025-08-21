export default class ActionsManager {
  constructor() {
    this.actions = [];
    this.balance = 0;
  }

  addAction(action) {
    this.actions.push(action);
    this.calcBalance();
  }

  deleteAction(id) {
    let indexToDelete = this.actions.findIndex((action) => action.id == id);
    this.actions.splice(indexToDelete, 1);
    this.calcBalance();
  }

  updateAction(id, newAmount) {
    let indexToUpdate = this.actions.findIndex((action) => action.id == id);
    this.actions[indexToUpdate].amount = newAmount;
    if (newAmount < 0) this.actions[indexToUpdate].type = "expense";
    else this.actions[indexToUpdate].type = "income";
    this.calcBalance();
  }

  calcBalance() {
    this.balance = this.actions.reduce(
      (total, action) => total + action.amount,
      0
    );
  }
}
