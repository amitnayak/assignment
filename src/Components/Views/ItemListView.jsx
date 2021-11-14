import React, {useState, useEffect} from 'react';
import ItemView from './../Views/ItemView';

const ItemListView = (props) => {
    const {items, cbHandleChecked, categorySelected} = props;
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        if(items.length) {
            setItemList(items);
        }
    }, [items])

    return(
        <>
        <div className='tableheader'>
            <div className='listdiv'>Select</div>
            <div className='listdiv'>ID</div>
            <div className='listdiv'>Name</div>
            <div className='listdiv'>Price</div>
        </div>
        {
            itemList && itemList.map(function(item, index) {
                return (<ItemView item={item} key={index} index={index} cbHandleChecked={cbHandleChecked} categorySelected={categorySelected} />)
            })
        }
        </>
    )
}
export default ItemListView;