import { ReviewItem } from './ReviewItem.jsx';

export const Review = ({ reviews }) => {

    return (
        <div>
            <h3>Reviews:</h3>
            <ul>
                {reviews.map(({ id, user, text, rating }) => (
                    <li key={id}>
                        <ReviewItem rating={rating} text={text} user={user} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
