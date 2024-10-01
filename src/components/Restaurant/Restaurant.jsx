import { Menu } from '../Menu/Menu.jsx';
import { Review } from '../Review/Review.jsx';

export const Restaurant = ({ name, menu, reviews }) => {

    return (
        <div>
            <h2>{name}</h2>
            {Boolean(menu?.length) && <Menu menu={menu}/>}
            {Boolean(reviews?.length) && <Review reviews={reviews}/>}
        </div>
    )
}
