import { useState } from 'react';

export const useCount = (initValue = 0) => {
    const [value, setValue] = useState(initValue);

    const increase = () => {
        if (value < 5) setValue(value + 1);
    }
    const decrease = () => {
        if (value) setValue(value - 1);
    }

    return {
        value,
        increase,
        decrease,
    }
}
