import { Ingredients } from '../Ingredients/Ingredients.jsx';
import { useCount } from './use-count.js';

export const MenuItem = ({ name, price, ingredients }) => {
    const { counter, increase, decrease } = useCount();

    return (
        <div>
            <div>{name} - ${price}</div>
            <button onClick={decrease}>-</button>
            <span>{counter}</span>
            <button onClick={increase}>+</button>
            {Boolean(ingredients?.length) && <Ingredients ingredients={ingredients}/>}
        </div>
    );
}
