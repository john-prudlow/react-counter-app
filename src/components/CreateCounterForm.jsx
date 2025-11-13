import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function CreateCounterForm({onSubmit, onCancel}) {
  const [counterName, setCounterName] = useState('');
  const [increment, setIncrement] = useState('1');

  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the page from refreshing!
    onSubmit(counterName, increment);
    setCounterName('');
    setIncrement('1');
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title><h2>Create New Counter</h2></Card.Title>
        <form onSubmit={handleSubmit}>
            <label htmlFor="counter-name">Counter Name:</label>
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
          <ButtonGroup>
            <Button type="submit">Create Counter</Button>
            <Button type="button" onClick={onCancel}>Cancel</Button>
          </ButtonGroup>
        </form>
      </Card.Body>
    </Card>
  )
}