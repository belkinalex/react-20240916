
export const ReviewItem = ({ user, rating, text }) => {

    return (
        <div>
            <div>{user} ({rating}/5)</div>
            <div>{text}</div>
        </div>
    )
}
