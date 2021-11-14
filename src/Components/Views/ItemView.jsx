const ItemView = (props) => {
    const {index, cbHandleChecked, categorySelected, item:{id, name, price}} = props;

    const handleItemSelected = (event) => {
        cbHandleChecked(event.target.checked, props.item)
    }
    const getClass = () => {
        if(categorySelected === 1 || categorySelected === 2) {
            return index % 2 === 0 ? 'listEven' : 'listOdd';
        } else {
            return index % 2 === 0 ? 'checkoutEven' : 'checkoutOdd';
        }
    }

    return(
        <div className={getClass()}>
            
            {(categorySelected === 1 || categorySelected === 2) && <div className='listdiv'>
                <input type='checkbox' key={'check'+id} name={'check'+id} onChange={handleItemSelected} />
            </div>

            }

            <div className='listdiv'>{id}</div>
            <div className='listdiv'>{name}</div>
            <div className='listdiv'>{price}</div>
        </div>
    )
}
export default ItemView;