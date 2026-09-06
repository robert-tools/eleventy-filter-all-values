import fn from './index';

describe('fn()', () => {
    const FN = fn;
    it('should get all values from an object', () => {
        expect(FN({})).toBe('');
        expect(FN({ a: 'Hello', b: 'World', c: 2 })).toBe('hello world 2');
        expect(FN({ a: 'Hello', b: 'World' }, 'f')).toBe('Hello World');
    });
    it('should get all values from an array', () => {
        expect(FN([])).toBe('');
        expect(FN(['Hello', 'World', 2])).toBe('hello world 2');
        expect(FN(['Hello', 'World'], 'normal')).toBe('Hello World');
        expect(FN(['Hello', 'World'], 'uppercase')).toBe('HELLO WORLD');
    });
});
