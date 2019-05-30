import axios from 'axios'

const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

export function requestArticles(){
    const medium = axios
    .get('/api/medium').then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: medium
    }
}

function mediumReducer(state = initialState, action){
    switch(action.type){
        case REQUEST_ARTICLES + '_PENDING':
            return {
                ...state,
                loading: true
            }
        case REQUEST_ARTICLES + '_FULFILLED':
            return {
                loading: false,
                articles: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    loading: false,
    articles: []
}

export default mediumReducer