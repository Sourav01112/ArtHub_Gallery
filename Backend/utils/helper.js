

const handleResponse = (res, status, message, data, token) => {
    res.status(status).send({ status, message, data, token })
}


module.exports = {handleResponse}