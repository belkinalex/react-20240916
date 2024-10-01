import { MenuItem } from './MenuItem.jsx';

export const Menu = ({ menu }) => {

    return (
        <div>
            <h3>Menu:</h3>
            <ul>
                {menu.map(({ id, name, price, ingredients }) => (
                    <li key={id}>
                        <MenuItem name={name} price={price} ingredients={ingredients}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}
