const initialState = {
    categorySelected : 0
};

const CategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SELECTED_CATEGORY':
            return {...state, categorySelected: action.payload.categorySelected}
        default:
            return state;
    }
}
export default CategoryReducer;