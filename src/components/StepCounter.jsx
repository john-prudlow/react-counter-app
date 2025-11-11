import { useState } from "react";

export default function StepCounter() {
    const [count, setCount] = useState(0); // useState returns [ value, function ]

    return (
        <div>
            <h2>Steps: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}