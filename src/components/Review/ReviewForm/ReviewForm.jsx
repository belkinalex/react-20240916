import { useForm } from './UseForm.jsx';
import { Counter } from '../../Counter/Counter.jsx';

export const ReviewForm = () => {
    const { name, text, rating, setName, setText, onDecreaseRating, onIncreaseRating, actionClear } = useForm();

    return (
        <form>
            <div>
                <span>Name</span>
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <span>Text</span>
                <input
                    type='text'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div>
                <span>Rating</span>
                <Counter value={rating} onIncrease={onIncreaseRating} onDecrease={onDecreaseRating} />
            </div>
            <button type="reset" onClick={() => actionClear()}>Clear</button>
        </form>
    )
}
