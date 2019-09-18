import { createUser, removeUser, hasErrored } from './index';

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
});