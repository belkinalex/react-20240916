import { useCount } from '../Counter/useCounter.js';
import { Counter } from '../Counter/Counter.jsx';

export const DishCounter = () => {
    const { value, increase, decrease } = useCount();

    return (
        <div>
            <Counter value={value} onIncrease={increase} onDecrease={decrease} />
        </div>
    );
}
