const axios = require('axios')
const config = require('config')
const logger = require('../../logger/index')

const URI = config.has('integration.user') ? config.get('integration.user') : ''

const logPrefix = '[Integration User]'

const find = (id) => {

    try {

        logger.info(`${logPrefix}[Find] Id=${id}`)

        return { body } = axios.get(`${URI}/users/${id}`)

    } catch (error) {

        error && logger.error(`${logPrefix}[Error][Find] Fail`)

        throw error

    }

}

module.exports = {
    find
}