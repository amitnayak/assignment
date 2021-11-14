import React, {useState} from "react";
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';

const MenuList = (props) => {
    const {cbMenuSelected} = props;
    const [anchorEl, setAnchorE1] = useState(null);

    const handleClose = (event) => {
        setAnchorE1(null);
        cbMenuSelected(event.target.value);
    }

    const handleClick = (event) => {
        setAnchorE1(event.currentTarget);
    }

    return(
        <div style={{marginLeft: '40%'}}>
            <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
                <b>MENU</b>
            </Button>
            <Menu keepMounted anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)} >
                <MenuItem onClick={handleClose} value='1'>Beverage</MenuItem>
                <MenuItem onClick={handleClose} value='2'>Sandwitchs</MenuItem>
            </Menu>
        </div>
    )
}
export default MenuList;