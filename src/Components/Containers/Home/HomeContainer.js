import React from 'react';
import HomeView from './../../Views/HomeView';
import {useSelector} from 'react-redux';

const HomeContainer = () => {
    const categorySelected = useSelector(state => state.CategoryReducer.categorySelected);
    return(
        <HomeView categorySelected={categorySelected} />
    )
}
export default HomeContainer;