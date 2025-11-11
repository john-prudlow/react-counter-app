import { useState } from "react";

export default function CustomCounter({ counterName, increment }) {
    const [count, setCount] = useState(0); // useState returns [ value, function ]

    const handleIncrement = () => {
        count + Number(increment)
    };
    const handleDecrement = () => {
        count - Number(increment)
    };

    return (
        <div>
            <h2>{counterName}: {count}</h2>
            <button onClick={() => setCount()}>+</button>
            <button onClick={() => setCount(count - Number(increment))}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}