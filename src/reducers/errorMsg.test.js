import { errorMsg } from './errorMsg';

describe('errorMsg', () => {

  it('should return the default state', () => {

    let expected = '';

    let result = errorMsg(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the action\'s errorMsg', () => {

    let mockErrorMsg = 'There was an error'

    let mockAction = {
      type: 'HAS_ERRORED',
      errorMsg: mockErrorMsg
    }

    let expected = 'There was an error'

    let result = errorMsg('', mockAction);

    expect(result).toEqual(expected);
  });
});