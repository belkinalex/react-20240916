import { Ingredients } from '../Ingredients/Ingredients.jsx';
import { DishCounter } from './DishCounter.jsx';

export const MenuItem = ({ name, price, ingredients }) => {

    return (
        <div>
            <div>{name} - ${price}</div>
            <DishCounter/>
            {Boolean(ingredients?.length) && <Ingredients ingredients={ingredients}/>}
        </div>
    );
}
