import { useState } from "react";

export default function Counters() {
    const [count, setCount] = useState(0); // useState returns [ value, function ]

    const handleIncrement = () => {
        setCount(count + 1)
    };
    const handleDecrement = () => {
        setCount(count - 1)
    };
    const handleReset = () => {
        setCount(0)
    };
    const handleDelete = (index) => {
        if (confirm(`Are you sure you want to delete ${itemName}?`)) {
            setCounters(counters.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            {/* <h2>{counterName}: {count}</h2> */}
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}