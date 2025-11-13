import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Counter({ id, name, increment, count, onDelete, onCount }) {

  const handleIncrement = () => { 
    const newCount = count + increment;
    onCount(id, newCount);
  };
  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - increment;
      onCount(id, newCount);
    }
  };
  const handleReset = () => {
    onCount(id, 0);
  };
  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      onDelete(id);
    }
  };

  return (
    <div className="counter">
      <h2>{name}: {count}</h2>
      <ButtonGroup>
        <Button className="incVal" onClick={handleIncrement}>+</Button>
        <Button className="decVal" onClick={handleDecrement}>-</Button>
        <Button className="resetVal" onClick={handleReset}>Reset</Button>
        <Button className="delCount" onClick={handleDelete}>Delete</Button>
      </ButtonGroup>
    </div>
  );
}