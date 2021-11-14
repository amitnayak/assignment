import React, {useState, useEffect} from 'react';
import CheckoutView from './../../Views/CheckoutView';
import {useDispatch, useSelector} from 'react-redux';
import {Tax_PERCENTAGE} from './../../../Consts/AppConsts';

const CheckoutContainer = ({categorySelected}) => {
    const [checkedList, setCheckedList] = useState([]);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const checked_List = useSelector(state => state.CheckoutReducer.items);
    const dispatch = useDispatch();

    const getDiscountPerc = (selItems) => {
        let disAmount = 0;
        for(let i = 0; i< selItems.length; i++) {
            if(selItems[i].discountWith) {
                for(let j = 0; j < selItems.length; j++) {
                    if(selItems[i].discountWith  === selItems[j].id) {
                        return (Math.round(selItems[j].price * selItems[i].discountPerc)/100).toFixed(2);
                    }
                }
            }
        }
        return 0;
    }

    useEffect( () => {
        if(checked_List.length) {
            setCheckedList(checked_List);

            let total = 0;
            checked_List.map(checked => total += checked.price);

            let calcTax = (Math.round(total * Number(Tax_PERCENTAGE))/100).toFixed(2);
            setTax(calcTax);

            const dis = getDiscountPerc(checked_List);
            let sum = total - dis + Number(calcTax);
            setTotal(sum.toFixed(2));

            setDiscount(dis);

        }
    }, [checked_List])

    const handleRemoveItems = () => {
        dispatch({type: 'REMOVE_ITEMS'});
        dispatch({type: 'SELECTED_CATEGORY', payload: {categorySelected : 0}})
    }

    return(
        <>
        {checkedList.length > 0 && <CheckoutView checked_List={checkedList} discount={discount} tax={tax} total={total} 
        categorySelected={categorySelected} cbHandleRemoveItems={handleRemoveItems} />
        }
        </>
    )
}
export default CheckoutContainer;