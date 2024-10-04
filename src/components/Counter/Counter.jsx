
export const Counter = ({ value, onIncrease, onDecrease }) => {
    return (
        <div>
            <button type='button' onClick={onDecrease}>-</button>
            <span>{value}</span>
            <button type='button' onClick={onIncrease}>+</button>
        </div>
    );
}
