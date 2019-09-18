import { messages } from './messages';

describe('messages', () => {

  it('should return the default state', () => {

    let expected = [];

    let result = messages(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should add new messages to state', () => {

    let defaultState = [
      {
        message: 'Are you getting enough sleep?',
        isUser: false
      },
      {
        message: 'No, I never do at Turing.',
        isUser: true
      }
    ];

    let mockMessage = 'You should sleep more, then.'

    let mockAction = {
      type: 'ADD_MESSAGE',
      message: mockMessage,
      isUser: false
    }

    let expected = [
      {
        message: 'Are you getting enough sleep?',
        isUser: false
      },
      {
        message: 'No, I never do at Turing.',
        isUser: true
      },
      {
        message: 'You should sleep more, then.',
        isUser: false
      }
    ]

    let result = messages(defaultState, mockAction);

    expect(result).toEqual(expected)
  });

  it('should return an empty array if the action.type === CLEAR_MESSAGES', () => {

    let defaultState = [
      {
        message: 'Are you getting enough sleep?',
        isUser: false
      },
      {
        message: 'No, I never do at Turing.',
        isUser: true
      }
    ];

    let mockAction = {
      type: 'CLEAR_MESSAGES'
    }

    let expected = [];

    let result = messages(defaultState, mockAction);

    expect(result).toEqual(expected);
  });
});