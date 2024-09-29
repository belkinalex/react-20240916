import { createRoot } from 'react-dom/client';
import { restaurants } from '../materials/mock.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <ul>
        {restaurants.map(({ id, name, menu, reviews }) => (
            <li key={id}>
                <div>{name}</div>
                <h3>Menu:</h3>
                <ul>
                    {menu.map(({ id, name, price, ingredients }) => (
                        <li key={id}>
                            <div>{name} - ${price}</div>
                            <div>Ingredients: {ingredients.join(', ')}</div>
                        </li>
                    ))}
                </ul>
                <h3>Reviews:</h3>
                <ul>
                    {reviews.map(({ id, user, text, rating }) => (
                        <li key={id}>
                            <div>{user} ({rating}/5)</div>
                            <div>{text}</div>
                        </li>
                    ))}
                </ul>
            </li>
        ))}
    </ul>
);
