import { Global } from '../decorators'

describe('test decorators', () => {

    it('should make a class globally available', () => {
        @Global
        class GlobalClass { }

        expect(globalThis).toHaveProperty(GlobalClass.name)
    })

})