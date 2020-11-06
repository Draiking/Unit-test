import { from } from 'rxjs'
import {test} from './test'

describe('test', () => {
    it('should return 0 if negative input', () => {
        const result = test(-1)
        expect(result).toBe(0)
    })

    it('should increment input if positive ', () => {
        const result = test(1)
        expect(result).toBe(2)
    })

})