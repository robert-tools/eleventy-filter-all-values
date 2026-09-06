/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-09-06
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import { sample } from './index';

describe('@robert.tools/eleventy-filter-all-values', () => {
    it('should return a eleventy-filter-all-values string', () => {
        expect(sample('hello')).toBe('sample: hello');
    });

    it('should return a eleventy-filter-all-values string with empty input', () => {
        expect(sample('')).toBe('sample: ');
    });
});
