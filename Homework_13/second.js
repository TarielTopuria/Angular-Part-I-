let bankAccount = {
  ownerName: "Tato",
  balance: 1000,

  deposit: function (amount) {
    this.balance += amount;
    console.log(`New balance: ${this.balance}`);
  },

  withdraw: function (amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }
    this.balance -= amount;
    console.log(`New balance: ${this.balance}`);
  },
};


bankAccount.deposit(100);
bankAccount.withdraw(200);
bankAccount.withdraw(1000);