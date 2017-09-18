export default function courseReducer(state = [], action) {
  switch (action.type) { //looks at the action type created in actions
    case 'CREATE_COURSE':
      return [...state, //spread the existing array; take all the values out and define them here
        Object.assign({}, action.course)
      ];

    default:
      return state; //if nothing happens then simply return our state
  }
}
// Reducer is a function that accepts a state in an action and returns a new state
// it returns a copy of the state with the course created in actions
// instead of switch statement you can use if-statement
