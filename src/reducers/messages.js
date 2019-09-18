export const messages = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE': 
      return [...state, {message: action.message, isUser: action.isUser}];
    case 'ClEAR_MESSAGES':
      return state = [];
    default:
      return state;
  }
}