import { createUser, removeUser, hasErrored, addMessage, clearMessages } from './index';

describe('actions', () => {

  it('should have a type of CREATE_USER', () => {

    let user = {
      id: 1568767497008,
      firstName: "e",
      lastName: "e",
      feeling: "tired",
    }

    let expectedAction = {
      type: 'CREATE_USER',
      user
    }

    expect(createUser(user)).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_USER', () => {

    let expectedAction = {
      type: 'REMOVE_USER'
    }

    expect(removeUser()).toEqual(expectedAction);
  });
  
  it('should have a type of HAS_ERRORED', () => {

    let errorMsg = 'There was an error.';

    let expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg
    }

    expect(hasErrored(errorMsg)).toEqual(expectedAction);
  });

  it('should have a type of ADD_MESSAGE', () => {

    let mockMessage = 'Sleep more.';
    let mockIsUser = false;

    let expectedAction = {
      type: 'ADD_MESSAGE',
      message: mockMessage,
      isUser: mockIsUser
    }

    expect(addMessage(mockMessage, mockIsUser)).toEqual(expectedAction);
  });

  it('should have a type of CLEAR_MESSAGES', () => {

    let expectedAction = {
      type: 'CLEAR_MESSAGES',
    }

    expect(clearMessages()).toEqual(expectedAction);
  });
});