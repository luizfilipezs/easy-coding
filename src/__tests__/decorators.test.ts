import { Global } from '../decorators'

describe('test decorators', () => {

    it('should make a class available in the global scope', () => {
        @Global
        class GlobalClass { }

        expect(globalThis).toHaveProperty(GlobalClass.name)
    })

})