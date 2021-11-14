const initialState = {
    items : []
};

const CheckoutReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHECKED_ITEM':
            return {...state, items: [...state.items, action.payload]}
            case 'UNCHECKED_ITEM':
                return {...state, items: state.items.filter(item => item.id !== action.payload.id)};
            case 'REMOVE_ITEMS':
                return {...state, items: []};         
        default:
            return state;
    }
}
export default CheckoutReducer;