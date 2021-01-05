const initialState = {
  bankData: [
    {
      name: 'Prince Golyan',
      email: 'prince@gmail.com',
      account: '90009000151',
      state: 'Rajasthan',
      balance: 10000,
    },
    {
      name: 'Lakhan Khan',
      email: 'lakhan@gmail.com',
      account: '90008000152',
      state: 'Punjab',
      balance: 20000,
    },
    {
      name: 'Utkarsh Bhateja',
      email: 'utkarsh@gmail.com',
      account: '90045000154',
      state: 'Karnataka',
      balance: 5000,
    },
    {
      name: 'Nikhil Sharma',
      email: 'nikhil@gmail.com',
      account: '90008000251',
      state: 'Rajasthan',
      balance: 50000,
    },
    {
      name: 'Varun Gupta',
      email: 'varun@gmail.com',
      account: '80008000151',
      state: 'Rajasthan',
      balance: 30000,
    },
    {
      name: 'Kavya Middha',
      email: 'kavya@gmail.com',
      account: '80008000445',
      state: 'Madhya Pradesh',
      balance: 70000,
    },
    {
      name: 'Paras Kamra',
      email: 'paras@gmail.com',
      account: '99008000151',
      state: 'Rajasthan',
      balance: 30000,
    },
    {
      name: 'Armaan Chabra',
      email: 'armaan@gmail.com',
      account: '80008000456',
      state: 'Punjab',
      balance: 60000,
    },
    {
      name: 'Hritik Arora',
      email: 'hritik@gmail.com',
      account: '80008005445',
      state: 'Rajasthan',
      balance: 25000,
    },
    {
      name: 'Bharat Sharma',
      email: 'bharat@gmail.com',
      account: '80008501151',
      state: 'Rajasthan',
      balance: 65000,
    },
  ],
  transactionDetails: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MONEY':
      const bankData = [...state.bankData];
      let reciever = bankData.find(
        (item) => item.email === action.details.recieverEmail
      );
      reciever.balance += action.details.amount;

      let sender = bankData.find(
        (item) => item.email === action.details.senderEmail
      );
      sender.balance -= action.details.amount;

      return {
        ...state,
        transactionDetails: state.transactionDetails.concat(action.details),
        bankData: bankData,
      };
    default:
      return state;
  }
};

export default reducer;
