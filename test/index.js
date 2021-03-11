const chai = require('chai')
const helpers = require('../src/index')

describe('Utils', () => {

    it('Token sign', async () => {

        const token = await helpers.utils.token().get('id', '123')
        chai.assert.isString(token, 'Undefined Token')

    })

    it('Token verify', async () => {

        const token = await helpers.utils.token().get('id', '123')

        const id = await helpers.utils.token().verify(token)
        
        chai.assert.isString(id, 'Undefined Token')

    })

    it('E-mail', async () => {

        const email = await helpers.utils.validateEmail('lucas.limao.debia@gmail.com')
        chai.assert.isTrue(email, 'Email invalid')

    })

})

describe('Logger', () => {

    it('Info', () => {
        chai.assert.isFunction(helpers.logger.info, 'Info Not Defined')        
    })

    it('Warn', () => {
        chai.assert.isFunction(helpers.logger.warn, 'Warn Not Defined')        
    })

    it('Error', () => {
        chai.assert.isFunction(helpers.logger.error, 'Error Not Defined')        
    })

})
