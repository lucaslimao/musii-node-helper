const chai = require('chai')
const helpers = require('../src/index')

describe('Utils', () => {

    it('Hash', () => {

        const hash = helpers.utils.hash('teste')
        chai.assert.equal(hash, 'b123e9e19d217169b981a61188920f9d28638709a5132201684d792b9264271b7f09157ed4321b1c097f7a4abecfc0977d40a7ee599c845883bd1074ca23c4af')

    })

    it('Token', async () => {

        const token = await helpers.utils.token().get('_id', 'teste')
        chai.assert.isString(token, 'Undefined Token')

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

describe('Integration', () => {

    it('User', async () => {

        // const { status } = await helpers.integration.user.find(1) 

    })

})