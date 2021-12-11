export default function(state={}, action){
    switch(action.type){
        case 'LATEST_NEWS':
            return {...state, latestnews:action.payload}
        case 'ARTICLE_NEWS':
            return {...state, articlenews:action.payload}
        case 'SELECTED_NEWS':
            return {...state, selectednews:action.payload}
        default:
            return state
    }
}