import { Cookies } from '../classes';

describe('test classes', () => {

    it('should create and retrieve a cookie', () => {
        const name = 'cookieName'
        const value = 'Cookie value'

        Cookies.set(name, value, 1)
        expect(Cookies.get(name)).toBe(value)
    })

})