import React from 'react';
import HeaderView from './../../Views/HeaderView';
import { useDispatch, useSelector } from 'react-redux';

const HeaderContainer = () => {
    const dispatch = useDispatch();
    const checked_list_length = useSelector(state =>  state.CheckoutReducer.items).length;

    const handleMenuSelection = (selIndex) => {
        dispatch({type: 'SELECTED_CATEGORY', payload: {categorySelected: selIndex}});
    }

    return(
        <HeaderView cbMenuSelected={handleMenuSelection} checked_list_length={checked_list_length} />
    )

}
export default HeaderContainer;