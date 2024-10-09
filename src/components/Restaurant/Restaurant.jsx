import { Menu } from '../Menu/Menu.jsx';
import { Review } from '../Review/Review.jsx';
import { ReviewForm } from '../Review/ReviewForm/ReviewForm.jsx';

export const Restaurant = ({ name, menu, reviews }) => {

    return (
        <section>
            <h2>{name}</h2>
            {Boolean(menu?.length) && <Menu menu={menu}/>}
            {Boolean(reviews?.length) && <Review reviews={reviews}/>}

            <h3>Review form</h3>
            <ReviewForm />
        </section>
    )
}
