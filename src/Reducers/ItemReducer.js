import {BEVERAGE_LIST, SANDWITCH_LIST} from './../Consts/AppConsts';
const initialState = {
    items : {beverage: BEVERAGE_LIST, sandwitch: SANDWITCH_LIST}
};

const ItemReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM_BEVERAGE':
            return {...state, items:{beverage: [...state.items.beverage, action.payload]}}
        case 'ADD_ITEM_SANDWITCH':
                return {...state, items:{sandwitch: [...state.items.sandwitch, action.payload]}}            
        default:
            return state;
    }
}
export default ItemReducer;