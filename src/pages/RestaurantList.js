import React from 'react';
import EntryList from '../components/entry-list';
import RestaurantContent from '../components/restaurant-content';

const RestaurantListPage = () => (
    <>
        <h1>Restaurant List</h1>
        <EntryList route="restaurant" entries={RestaurantContent} />
    </>    
);

export default RestaurantListPage;