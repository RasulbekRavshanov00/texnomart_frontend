const initialState = {
    comments: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return{
                comments: [...state.comments, action.data]
            }
        case "REMOVE_PRODUCT":
            state.comments.splice(action.id, 1);
            let qolgani = state.comments;
            return{
                comments: qolgani
            }    
        default:
            return state
    }
}

export default reducer