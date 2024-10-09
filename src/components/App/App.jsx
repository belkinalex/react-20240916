import { restaurants } from '../../../materials/mock.js';
import { Layout } from '../Layout/Layout.jsx';
import { RestaurantPage } from '../Restaurant/RestaurantPage.jsx';

export const App = () => {

    return (
        <Layout>
            <RestaurantPage title='Restaurants' restaurants={restaurants} />
        </Layout>
    );
}
