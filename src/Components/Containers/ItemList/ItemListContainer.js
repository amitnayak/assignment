import React, {useState, useEffect} from "react";
import ItemListView from '../../Views/ItemListView';
import { BEVERAGE_LIST, SANDWITCH_LIST, CHECKOUT_INDEX } from "../../../Consts/AppConsts";
import AddItemModal from '../../../Utils/AddItemModal';
import { useDispatch, useSelector } from "react-redux";

const ItemListContainer = ({categorySelected}) => {
    const [open, setOpen] = useState(false);
    const [itemlist, setItemList] = useState([]);
    const [buttonState, setButtonState] = useState(false);
    const checked_list_length = useSelector(state =>  state.CheckoutReducer.items).length;
    const beverage_list = useSelector(
        state => categorySelected === 1 ? state.ItemReducer.items.beverage : state.ItemReducer.items.sandwitch
    )

    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(true);
    }

    const handleCloseModal = () => {
        setOpen(false);
    }

    const handleSubmit = (itemData) => {
        setOpen(false);
        if(!itemData.name) return;

        const id = Math.ceil(Math.random()*100);
        if(categorySelected === 1) {
            dispatch({type: 'ADD_ITEM_BEVERAGE', 
                payload: {id: id, name: itemData.name.value, price: itemData.price.value, discount: itemData.discount.value}});

        }else if(categorySelected === 2) {
            dispatch({type: 'ADD_ITEM_SANDWITCH', 
                payload: {id: id, name: itemData.name.value, price: itemData.price.value, discount: itemData.discount.value}});
        }
    }

    const handleChecked = (isChecked, item) => {
        if(!item) return;
        if(isChecked) {
            dispatch({type: 'CHECKED_ITEM', payload: item});
        } else {
            dispatch({type: 'UNCHECKED_ITEM', payload: item});
        }
    }

    const handleCheckout = () => {
        dispatch({type: 'SELECTED_CATEGORY', payload: {categorySelected : CHECKOUT_INDEX}})
    }

    return(
        <div className='mainContainer'>
            <div className='container'>
                {
                    beverage_list && <ItemListView items={beverage_list} cbHandleChecked={handleChecked} categorySelected={categorySelected} />
                }
                <div className='tableheader'>
                    <button onClick={handleClick} className='button'>Add Item</button>
                    <button onClick={handleCheckout} className='button' disabled={checked_list_length === 0}>Checkout</button>
                </div>
                <AddItemModal open={open} cbHandleModalClose={handleSubmit} />
            </div>
        </div>
    )
}
export default ItemListContainer;