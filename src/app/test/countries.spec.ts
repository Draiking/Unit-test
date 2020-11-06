import {country} from './countries'

describe('country', () => {
    it('should contain countries codes', () => {
        const result = country();

        expect(result).toContain('RU');
        expect(result).toContain('UA');
        expect(result).toContain('BY');
    })
})