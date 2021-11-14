import React from 'react';
import HeaderContainer from './../Containers/Header/HeaderContainer';
import ItemListContainer from '../Containers/ItemList/ItemListContainer';
import CheckoutContainer from './../Containers/Checkout/CheckoutContainer';


const HomeView = ({categorySelected}) => {
    return(
        <div className='homeCotainer'>
            <div>
                <HeaderContainer />
            </div>
            {(categorySelected === 1 || categorySelected === 2) && <div>
                <ItemListContainer categorySelected={categorySelected} />
            </div>
            }
            {categorySelected === 4 && <div>
                <CheckoutContainer categorySelected={categorySelected} />
            </div>
            }
            <div className='footer'>
                <div>&#169; agnos software</div>
            </div>
        </div>
    )
}
export default HomeView;