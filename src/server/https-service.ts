import { request, RequestOptions } from 'https'
import { API_DOMAIN, API_PREFIX } from '../core/core-api'

const defaultOptions: RequestOptions = {
    hostname: API_DOMAIN
}

export const httpsService = (options: RequestOptions) => {
    const path = `${API_PREFIX}${options.path}`.replace(/\/\//g, '/')
    const requestOptions = Object.assign({}, defaultOptions, { ...options, path })
    console.log(requestOptions)

    const req = request(requestOptions, (res) => {
        console.log(res.statusCode)
        res.on('data', () => console.log(2))
    })

    req.on('error', (e) => console.log(e))
}
