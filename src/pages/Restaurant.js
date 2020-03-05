import React from 'react';
import EntryList from '../components/entry-list';
import NotFoundPage from './NotFound';
import RestaurantContent from '../components/restaurant-content';

const RestaurantPage = ({ match }) => {
    const id = match.params.id;
    const restaurant = RestaurantContent.find(restaurant => restaurant.id === id); 

    // if (!restaurant) return <h3>Your restaurant does not exist :(</h3>
    if (!restaurant) return <NotFoundPage />;

    const otherRestaurants = RestaurantContent.filter(restaurant => restaurant.id !== id);

    return(
        <>
            <h1>{restaurant.name}</h1>      
            <h4>{restaurant.date}</h4>  
            {restaurant.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <br />
            <br />
            <h3>Other Restaurants</h3>
            <EntryList route="restaurant" entries={otherRestaurants} />
                
        </>    
    );
};

export default RestaurantPage;