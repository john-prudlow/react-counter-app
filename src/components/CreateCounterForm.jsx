import { useState } from 'react';
import CustomCounter from './CustomCounter'

export default function CreateCounterForm({onSubmit, counters}) {
  const [counterName, setCounterName] = useState('');
  const [increment, setIncrement] = useState('1');
  // const [showCounter, setShowCounter] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the page from refreshing!
    onSubmit();
  };

  return (
    <div>
        <h2>Create New Counter</h2>
        <label htmlFor="counter-name">Counter Name:</label>
        <form onSubmit={handleSubmit}>
            <input
            id="counter-name"
            type="text"
            value={counterName}
            onChange={(e) => setCounterName(e.target.value)}
            placeholder="Enter counter name"
            required
        />
          <label htmlFor="increment">Increment Amount:</label>
          <input
              id="increment"
              type="number"
              value={increment}
              min="1"
              onChange={(e) => setIncrement(e.target.value)}
              required
          />
          <button type="submit">Create Counter</button>
          {/* <button type="button" onClick={() => setShowCounter(false)}>Cancel</button> */}
        </form>
        {/* {showCounter && (
          <Counters counterName={counterName} increment={increment} />
        )} */}
    </div>
  )
}