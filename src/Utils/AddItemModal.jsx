import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddItemModal  = (props) => {
    const {open, cbHandleModalClose, cbHandleModalSubmit} = props;

    const handleSubmit = (event) => {

        event.preventDefault();
        if(event.target.name.value === '' || event.target.price.value === '' || event.target.discount.value === ''){
            alert('please fill the fields');
            return;
        }
        cbHandleModalClose(event.target);
    }

    return(
        <Dialog open={open} aria-labeledby='alert-dialog-title'
            aria-aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>ADD NEW ITEMS INTO LIST</DialogTitle>
        <form onSubmit={handleSubmit}>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>
                    <div>
                        <label>Name: *</label>
                        <input type='text' name='name' />
                    </div>
                </DialogContentText>
                <DialogContentText id='alert-dialog-description'>
                    <div>
                        <label>Price: *</label>
                        <input type='text' name='price' />
                    </div>
                </DialogContentText>
                <DialogContentText id='alert-dialog-description'>
                    <div>
                        <label>Discount: *</label>
                        <input type='text' name='discount' />
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <button type='submit' className='button'>Submit</button>
                <Button onClick={cbHandleModalClose} className='button'>Close</Button>
            </DialogActions>
        </form>

        </Dialog>
    )

}
export default AddItemModal;