import 'whatwg-fetch'
import qs from 'qs'

function parseJSON(response) {
    return response.json()
}

function checkStatus(response) {
    if ((response.status >= 200 && response.status < 300)) {
        return response
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
}

export default function request(url, options) {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(function(data) {
            return data
        })
        .catch((data) => {
            
        })
}


export function post(url, data, type) {
    return request(url, {
        method: 'post',
        headers: {
            'Content-Type': type,
        },
        credentials: 'include',
        body: qs.stringify(data)
    })
}


export function get(url, data, type) {
    return request(`${url}?${qs.stringify(data)}`, {
        method: 'GET',
        headers: {
            'Content-Type': type,
        },
        credentials: 'include'
    })
}