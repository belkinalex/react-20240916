import { useState } from 'react';

export const useCount = (initValue = 0) => {
    const [counter, setCounter] = useState(initValue);

    const increase = () => {
        if (counter < 5) setCounter(counter + 1);
    }
    const decrease = () => {
        if (counter) setCounter(counter - 1);
    }

    return {
        counter,
        increase,
        decrease,
    }
}
