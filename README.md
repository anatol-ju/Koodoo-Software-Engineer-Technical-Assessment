# Koodoo-Software-Engineer-Technical-Assessment
Some JavaScript code

Here is the data structure to test directly.

```
// sorted A
const accountBalanceHistory_1 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]
  
  // unsorted A
  const accountBalanceHistory_2 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 2, // last month
      account: {
        balance: { amount: 200 },
      },
    },
    {
      monthNumber: 1, // two months ago
      account: {
        balance: { amount: 100 },
      },
    }
  ]
  
  // sorted B
  const accountBalanceHistory_3 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 1, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 150 },
      },
    }
  ]
  
  // unsorted B
  const accountBalanceHistory_4 = [
    {
      monthNumber: 0, // current month
      account: {
        balance: { amount: 0 },
      },
    },
    {
      monthNumber: 3, // last month
      account: {
        balance: { amount: 100 },
      },
    },
    {
      monthNumber: 2, // two months ago
      account: {
        balance: { amount: 200 },
      },
    }
  ]
```
