function Account(accountNumber,balance){
    this._accountNo = accountNumber
    this._balance = balance
}

Account.prototype.deposit = function(amount){
    if(amount>0){
        this._balance+=amount
    }
    else{
        console.log("Positive amounts only")
    }
}

Account.prototype.widthdraw = function(amount) {
    if(this._balance - amount > 0){
        this.balance =  this._balance - amount
    }
    else{
        console.log("Insuficient funds")
    }
}

function SavingsAccount(accountNumber,balance){
    Account.call(this,accountNumber,balance)
}

SavingsAccount.prototype = Object.create(Account.prototype)
SavingsAccount.prototype.constructor = SavingsAccount

SavingsAccount.prototype.addInterest = function(interest){
  this._balance += (this._balance * (interest/100))
}

function checkingAccount(accountNumber,balance){
    Account.call(this,accountNumber,balance)
}

checkingAccount.prototype = Object.create(Account.prototype)
checkingAccount.prototype.constructor = checkingAccount

checkingAccount.prototype.withdrawUsingCheck = function(amount){
    if(this._balance - amount > 0 ){
        this._balance -= amount
    }else{
        console.log("Insuficient funds")
    }
}

//instance
const account = new Account(12345, 2000)
console.log(account)
account.deposit(200)
console.log(account)
account.widthdraw(1000)
console.log(account)


//instance
const savings = new SavingsAccount(12345, 2000)
console.log(savings)
savings.addInterest(1)
console.log(savings)

//instace
const checking = new checkingAccount(12345, 2000)
console.log(checking)
checking.withdrawUsingCheck(1000)
console.log(checking)