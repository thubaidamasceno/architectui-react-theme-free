import superagentPromise from 'superagent-promise'
import _superagent from 'superagent'

const superagent = superagentPromise(_superagent, global.Promise)

const API_ROOT = 'api' // window.location.href.replace(new RegExp('^(https:\/\/)([a-z0-9\.\/\-]+)(\/[a-z0-9\-]+)#(\/.*)','gm'), "$2")
export const SITE =
    process.env.NODE_ENV !== 'production'
        ? window.location.href.replace(new RegExp('^(https?://)([a-z0-9.-]+)(:[0-9]+)?(/.*)', 'gm'), '$1$2')
        : window.location.href.replace(
            new RegExp('^(https?://)([a-z0-9.-]+)(:[0-9]+)?(/.*)', 'gm'),
            '$1$2',
        )
export const PORT = window.location.href.replace(new RegExp('^(https?://)([a-z0-9.-]+)(:[0-9]+)?(/.*)', 'gm'),'$3',).replace(':','')

export const API_PORT = process.env.REACT_APP_API_PORT || PORT


// console.log({SITE})

const encode = encodeURIComponent
const responseBody = (res) => res.body || res.text

const token = { jwt: '' }
const tokenPlugin = (req) => {
    if (token.jwt) {
        req.set('authorization', `Token ${token.jwt}`)
    }
}

// RequestHead
export const rh = (verb, url, body) => {
    url = url.match(/^http/) ? url : `${SITE}${API_PORT?':'+API_PORT:''}/${API_ROOT}${url}`
    console.log(url)
    switch (verb) {
        case 'post':
            return superagent.post(url, body)
        case 'put':
            return superagent.put(url, body)
        case 'patch':
            return superagent.patch(url, body)
        case 'del':
            return superagent.del(url)
        case 'head':
            return superagent.head(url)
        case 'get':
            return superagent.get(url)
        default:
            throw Error(`verbo desconhecido ${verb}`)
    }
}
// RequestTail
export const rt = (r) => {
    return r.then(responseBody)
    // return r.use(tokenPlugin).then(responseBody)
}

export const setToken = (_token) => {
    token.jwt = _token
}

const agent = {
    setToken,
    SITE, 
    PORT,
    superagent,
    API_ROOT,
    API_PORT,
    rh,
    rt,
}
export default agent