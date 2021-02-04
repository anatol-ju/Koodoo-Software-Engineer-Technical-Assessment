const accountTypeChecker = (accountBalanceHistory) => {
    /***
    Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
    whether this array is of type A (variable) or type B (fixed).
  
    Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
  
    Type 🅱 is one where the balance amount changes by the same amount each month.
    ***/
  
    // Write your logic here  - No pressure 😁 //
    let result;

    // array has elements, if only 1 or 2 assume B by default
    if(accountBalanceHistory.length <= 2) {
        return "B";
    }

    // sort by monthNumber to guarantee correct order
    accountBalanceHistory.sort(function(a, b){return a.monthNumber-b.monthNumber});

    var prevAccBalDiff = accountBalanceHistory[1].account.balance.amount - accountBalanceHistory[0].account.balance.amount;

    // make sure missing month data is not messing up
    // monthNumber difference should be 1, otherwise dividing by difference to normalize
    prevAccBalDiff = prevAccBalDiff / (accountBalanceHistory[1].monthNumber - accountBalanceHistory[0].monthNumber);

    var isFixedChange = true;
    // loop through all data in array
    for (let ind = 1; ind < accountBalanceHistory.length-1; ind++) {
        const element = accountBalanceHistory[ind];
        
        let currAccBalDiff = accountBalanceHistory[ind+1].account.balance.amount - accountBalanceHistory[ind].account.balance.amount;
        currAccBalDiff = currAccBalDiff / (accountBalanceHistory[ind+1].monthNumber - accountBalanceHistory[ind].monthNumber);

        // only true if all calculated during loop are true
        isFixedChange = isFixedChange && (prevAccBalDiff == currAccBalDiff);

        // no need to continue if one entry is not equal to previous one
        if (isFixedChange == false) {
            break;
        }

        // update previous calculation by using current one
        prevAccBalDiff = currAccBalDiff;
    }

    result = !isFixedChange;
  
    return result ? "A" : "B";
  };