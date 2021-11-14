import React from 'react';
import Button from '@material-ui/core/Button';
import MenuList from './../../Utils/MenuList';

const HeaderView = (props) => {
    const {cbMenuSelected, checked_list_length} = props;
    const MenuSelect = (selectedIndex) => {
        cbMenuSelected(selectedIndex);
    }

    return(
        <div className='headerContainer'>
            <div className='header'>
                <MenuList cbMenuSelected={cbMenuSelected} />
            </div>
            <div>
                <Button variant='contained' color='alert' style={{borderRadius: 25, height: 30, width: 180, marginTop:5}} >
                    {checked_list_length} items in cart
                </Button>

            </div>
        </div>
    )
}
export default HeaderView;