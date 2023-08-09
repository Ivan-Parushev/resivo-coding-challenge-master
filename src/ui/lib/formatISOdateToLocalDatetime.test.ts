import formaterFunction from './formatISOdateToLocalDatetime';

describe('Format ISO datestring to local DateTime', () => {
  test('it should throw error if input arg is not valid date', () => {
    const input = '2023-02-203:00:11.853Z';
    try {
      formaterFunction(input);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe('Invalid ISO date');
      }
    }
  });

  test('it should return non empty string if input is valid', () => {
    const input = '2023-02-22T03:00:11.853Z';

    expect(formaterFunction(input)).not.toBe('');
  });
});
