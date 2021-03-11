const jwt = require('jsonwebtoken')
const config = require('config')
const logger = require('../logger/index')

const logPrefix = 'UTILS'

const SECRET_KEY = config.has('token.secret') ? config.get('token.secret') : ''

const get = async (key, value) => {

    try {

        logger.info(
            `${logPrefix} :: TOKEN :: Gerando Token`,
        )

        const token = await jwt.sign({ [key]: value }, SECRET_KEY)

        logger.info(
            `${logPrefix} :: TOKEN :: SUCCESS`,
        )

        return token

    } catch (error) {
        logger.error(`${logPrefix} :: TOKEN :: e :: ${error.message}`)
        throw error
    }

}

const verify = async token => {

    try {

        logger.info(
            `${logPrefix} :: TOKEN :: VERIFY :: ${token}`,
        )

        const { id } = await jwt.verify(token, SECRET_KEY)

        logger.info(
            `${logPrefix} :: TOKEN :: VERIFY :: SUCCESS :: ${id}`,
        )

        return id

    } catch (error) {
        logger.error(`${logPrefix} :: TOKEN :: e :: ${error.message}`)
        throw error
    }

}

const token = () => {

    return {
        get,
        verify
    }

}

const validateEmail = (email) => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())

}

const validateTag = (tag) => {
    var re = /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/
    return re.test(String(tag).toLowerCase())
}

module.exports = {
    token: token,
    validateEmail,
    validateTag
}