import Validator from '../myFunction';

test('Checking Olga_-1_test', () => {
    const validator_test = new Validator('Olga_-1_test');
    expect(validator_test.validateUsername()).toBe(true);
});

test('Checking Ольга', () => {
    const validator_test = new Validator('Ольга');
    expect(validator_test.validateUsername()).toBe(false);
});

test('Checking -Olga', () => {
    const validator_test = new Validator('-Olga');
    expect(validator_test.validateUsername()).toBe(false);
});

test('Checking Olga_', () => {
    const validator_test = new Validator('Olga_');
    expect(validator_test.validateUsername()).toBe(false);
});

test('Checking Ol_123_ga', () => {
    const validator_test = new Validator('Ol_123_ga');
    expect(validator_test.validateUsername()).toBe(false);
});