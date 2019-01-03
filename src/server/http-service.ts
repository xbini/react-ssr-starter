import { request, RequestOptions } from 'http'
import { API_DOMAIN, API_PREFIX } from '../core/core-api'

const defaultOptions: RequestOptions = {
    hostname: API_DOMAIN
}

export const httpService = (options: RequestOptions) => {
    const requestOptions = Object.assign({}, options, {
        ...defaultOptions,
        path: `${API_PREFIX}${defaultOptions.path}`
    })

    return request(requestOptions, (res) => {
        console.log(res.statusCode)
    })
}
