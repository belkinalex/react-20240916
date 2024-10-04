import { useState } from 'react';
import { Restaurant } from './Restaurant.jsx';
import { Tab } from '../Tab/Tab.jsx';

export const RestaurantPage = ({ title, restaurants }) => {
    const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);
    const activeRestaurant = restaurants.find(({ id }) => id === activeRestaurantId);
    const handleSetActiveRestaurant = (id) => {
        if (activeRestaurantId === id) return;

        setActiveRestaurantId(id);
    };

    return (
        <div>
            <h1>{title}</h1>

            {restaurants.map(({ id, name }) => (
                <Tab
                    key={id}
                    title={name}
                    onClick={() => handleSetActiveRestaurant(id)}
                    isActive={activeRestaurantId === id}/>
            ))}

            {activeRestaurant && (
                <Restaurant
                    key={activeRestaurant.id}
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
            {activeRestaurant && (
                <Restaurant
                    name={activeRestaurant.name}
                    menu={activeRestaurant.menu}
                    reviews={activeRestaurant.reviews}
                />
            )}
        </div>
    );
};
