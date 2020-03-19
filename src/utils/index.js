const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const config = require('config')
const logger = require('../logger/index')

const logPrefix = '[Utils]'

const hash = (value) => {

    try {

        logger.info(
            `${logPrefix}[Hash]; Gerando hash; `,
        )

        return crypto.createHash('sha512').update(value).digest('hex')

    } catch (error) {
        throw new Error(`[Util][Hash]:: ${error.message}`)
    }
}

const token = () => {
    return {
        get: async (key, value) => {

            try {

                logger.info(
                    `${logPrefix}[Token]; Gerando token; `,
                )

                return await jwt.sign({ [key]: value }, config.get('token.secret'), {
                    expiresIn: 86400
                });

            } catch (error) {
                throw new Error(`[Util][Token]:: ${error.message}`)
            }

        },
        verify: async (token) => {

            try {

                return await jwt.verify(token, config.get('token.secret'), (err, decoded) => {
            
                    if (err) {
                        return res
                            .status(500)
                            .send({ auth: false, message: 'Failed to authenticate token.' })
                    }

                    return decoded.id

                })

            } catch (error) {
                throw new Error(`[Util][Token]:: ${error.message}`)
            }

        }
    }
}

const validateEmail = (email) => {

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())

}

const validateTag = (tag) => {
    var re = /^([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)$/;
    return re.test(String(tag).toLowerCase());
}

module.exports = {
    hash,
    token: token,
    validateEmail,
    validateTag
}