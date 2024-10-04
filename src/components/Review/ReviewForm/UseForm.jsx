import { useReducer } from 'react';

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 0,
};
const ACTION_TYPE = {
    SET_NAME: 'setName',
    SET_TEXT: 'setText',
    SET_RATING: 'setRating',
    ACTION_CLEAR: 'actionClear',
};
export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case ACTION_TYPE.SET_NAME:
            return { ...DEFAULT_FORM_VALUE, name: payload };
        case ACTION_TYPE.SET_TEXT:
            return { ...state, text: payload };
        case ACTION_TYPE.SET_RATING:
            return { ...state, rating: payload };
        case ACTION_TYPE.ACTION_CLEAR:
            return DEFAULT_FORM_VALUE;
        default:
            return state;
    }
};

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
    const { name, text, rating } = form;

    const setName = (value) => dispatch({ type: ACTION_TYPE.SET_NAME, payload: value });
    const setText = (value) => dispatch({ type: ACTION_TYPE.SET_TEXT, payload: value });
    const actionClear = () => dispatch({ type: ACTION_TYPE.ACTION_CLEAR });
    const onIncreaseRating = () => {
        if (rating < 5) dispatch({ type: ACTION_TYPE.SET_RATING, payload: rating + 1 });
    }
    const onDecreaseRating = () => {
        if (rating > 0) dispatch({ type: ACTION_TYPE.SET_RATING, payload: rating - 1 });
    }

    return {
        name,
        text,
        rating,
        setName,
        setText,
        onIncreaseRating,
        onDecreaseRating,
        actionClear,
    };
}
