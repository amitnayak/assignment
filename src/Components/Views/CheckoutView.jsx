import React, {useState, useEffect} from 'react';
import ItemView from './ItemView';

const CheckoutView = (props) => {
    const {checked_List, discount, tax, total, categorySelected, cbHandleRemoveItems} = props;

    return(
        <div className='mainContainer container'>
            <div class='tablecheckoutheader'>
                <div className='listdiv'>ID</div>
                <div className='listdiv'>Name</div>
                <div className='listdiv'>Price</div>
            </div>
            {checked_List && checked_List.map(function(item, index) {
                return (<ItemView item={item} key={index} index={index} />);
            })}

            <div className='hrbar' />

            <div>
                <div className='listdiv'></div>
                <div className='listdiv'><b>Discount</b></div>
                <div className='listdiv'><b>{discount}</b></div>
                <div className='listdiv'></div>
            </div>

            <div>
                <div className='listdiv'></div>
                <div className='listdiv'><b>Tax</b></div>
                <div className='listdiv'><b>{tax}</b></div>
                <div className='listdiv'></div>
            </div>

            <div>
                <div className='listdiv'></div>
                <div className='listdiv'><b>Total</b></div>
                <div className='listdiv'><b>{total}</b></div>
                <div className='listdiv'></div>
            </div>            
            
            <div className='buttonContainer'>
                <button onClick={cbHandleRemoveItems} className='button' >Remove Cart</button>
            </div>
        </div>
    )
}
export default CheckoutView;