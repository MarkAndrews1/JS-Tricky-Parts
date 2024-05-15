function createAccount(pin, amount) {
    let accountPin = pin;
    let balance = amount || 0;

    return {
        checkBalance: function(pin){
            if(pin !== accountPin) return "Invalid PIN.";
            else return `$${balance}`;
        },
        deposit: function(pin, amount){
            if(pin !== accountPin) return "Invalid PIN.";
            else{
                balance += amount;
                return `Succesfully deposited $${amount}. Current balance: $${balance}.`
            }
        },
        withdraw: function(pin, amount) {
            if(pin !== accountPin) return "Invalid PIN.";
            
            if(amount > balance) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }else{
                balance -= amount;
                return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
            }
        },
        changePin: function(pin, newPin){
            if(pin !== accountPin) return "Invalid PIN.";
            else{
                accountPin = newPin;
                return "PIN successfully changed!"
            }
        }
    }
}

module.exports = { createAccount };
