import { useState } from "react";

interface Props {
    min: number;
    max: number;
}

export interface useCountProps {
    value: number,
    add: () => void,
    remove: () => void
}

export function useCount({ min, max }: Props):  useCountProps{
    const [value, setValue] = useState<number>(min);

    const add = () => value < max ? setValue(value + 1) : null;
    const remove = () => value > min ? setValue(value - 1) : null;

    return {
        value,
        add,
        remove
    }
}