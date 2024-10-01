import { restaurants } from '../../../materials/mock.js';
import { Restaurant } from '../Restaurant/Restaurant.jsx';
import { Layout } from '../Layout/Layout.jsx';

export const App = () => {

    return (
        <Layout>
            <ul>
                {restaurants.map(({ id, name, menu, reviews }) => (
                    <li key={id}>
                        <Restaurant name={name} menu={menu} reviews={reviews}/>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}
