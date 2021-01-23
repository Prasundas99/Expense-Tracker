export default  (state, action) => {
  console.log(action.payload)
  console.log(state.transaction)
    switch(action.type)    {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transaction: state.transaction.filter(transaction => transaction.id !== action.payload)
        }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transaction: [...state.transaction , action.payload]
          
        }
        
      default:
        return state;
    }
    
  }