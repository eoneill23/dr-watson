import { user} from './user';

describe('user', () => {

  it('should return the default state', () => {

    let expected = null;

    let result = user(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action\'s user', () => {

    let mockUser = {
      id: 1,
      firstName: 'Eric',
      lastName: 'O\'Neill',
      feeling: 'tired'
    }

    let mockAction = {
      type: 'CREATE_USER',
      user: mockUser
    }

    let expected = {
      id: 1,
      firstName: 'Eric',
      lastName: 'O\'Neill',
      feeling: 'tired'
    }

    let result = user(null, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return null with REMOVE_USER', () => {

    let mockAction = {
      type: 'REMOVE_USER'
    }

    let expected = null;

    let result = user(null, mockAction);

    expect(result).toEqual(expected);
  });
});