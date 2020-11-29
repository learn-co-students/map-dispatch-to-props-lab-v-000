


const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
}




// action creators

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
}


const createPolicy = (name) => {
  return {
    type: "create policy",
    payload: {
      name: name,
      amount: 20
    }
  }
}


const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
}

const createPolicy = (name) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name
        }
  }
}


// Departments (reducers)

const claimsHistory = (oldListOfClaims, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload]
  }
  return oldListOfClaims;
}
