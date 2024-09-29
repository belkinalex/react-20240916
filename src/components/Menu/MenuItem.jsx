import { Ingredient } from '../Ingredient/Ingredient.jsx';
import { useCount } from './use-count.js';

export const MenuItem = ({ name, price, ingredients }) => {
    const { counter, increase, decrease } = useCount();

    return (
        <div>
            <div>{name} - ${price}</div>
            <button onClick={decrease}>-</button>
            <span>{counter}</span>
            <button onClick={increase}>+</button>
            {Boolean(ingredients?.length) && <Ingredient ingredients={ingredients}/>}
        </div>
    );
}
