import { validateEmail } from './validation';

describe('validation utils', () => {
  describe('validateEmail', () => {
    const cases = [
      ['valid@mail.com', true],
      ['123@mail.com', true],
      ['valid-email@m.co', true],
      ['invalid.@m.co', false],
      ['invalid@m.c', false],
      ['invalid@m', false],
      ['@mail.com', false],
      ['invalid', false],
      ['', false],
      [null, false],
      [undefined, false],
    ];
    test.each(cases)('given %s, should return %s', (email: string, expected: boolean) => {
      expect(validateEmail(email)).toBe(expected);
    });
  });
});
