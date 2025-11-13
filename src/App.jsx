import './App.css'
import { useState, useEffect } from "react";
import CreateCounterForm from './components/CreateCounterForm'
import Counters from './components/Counters'

function App() {
  const [addCounter, setAddCounter] = useState(false);
  const [counters, setCounters] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // Load from localStorage on first render
  useEffect(() => {
    const savedCounters = localStorage.getItem("counters");
    const savedNextId = localStorage.getItem("nextId");
    const savedTotalCount = localStorage.getItem("totalCount");

    if (savedCounters) {
      const parsedCounters = JSON.parse(savedCounters);
      setCounters(parsedCounters);
    }
    if (savedNextId) {
      setNextId(parseInt(savedNextId, 10));
    }
    if (savedTotalCount) {
      setTotalCount(parseInt(savedTotalCount, 10));
    }
  }, []);

  // Save to localStorage whenever counters or nextId change
  useEffect(() => {
    localStorage.setItem("counters", JSON.stringify(counters));
    localStorage.setItem("nextId", nextId.toString());
    localStorage.setItem("totalCount", totalCount.toString());
    console.log(localStorage);
  }, [counters, nextId, totalCount]);

  const handleAddCounter = (counterName, increment) => {
    const newCounter = {
      id: nextId,
      name: counterName,
      increment: parseInt(increment, 10),
      count: 0
    }
    setCounters(prev => [...prev, newCounter]);
    setNextId(prev => prev + 1);
    setAddCounter(false);
    console.log(counters);
    console.log(newCounter);
  }

 const handleDeleteCounter = (idToDelete) => {
  const updatedCounters = counters.filter(counter => counter.id !== idToDelete);
  setCounters(updatedCounters);

  const total = updatedCounters.reduce((sum, c) => sum + c.count, 0);
  setTotalCount(total);
};

  const handleTotalCount = (id, newCount) => {
  const updatedCounters = counters.map(counter =>
    counter.id === id ? { ...counter, count: newCount } : counter
  );
  setCounters(updatedCounters);

  const total = updatedCounters.reduce((sum, c) => sum + c.count, 0);
  setTotalCount(total);
};

  return (
    <>
      <header>
        <h1>Daily Life Tracker</h1>
        <p>Track Your Daily Activities With Custom Counters</p>
        <p>Total Count: {totalCount}</p>
      </header>
      {!addCounter ? (
        <button onClick={()=>setAddCounter(true)}>Add New Counter</button>
      ) : (
        <CreateCounterForm onSubmit={handleAddCounter} onCancel={()=>setAddCounter(false)} />
      )}
      {counters.length > 0 && (
        <Counters counters={counters} onDelete={handleDeleteCounter} onCount={handleTotalCount} />
      )}
    </>
  )
}

export default App