import './App.css'
import { useState } from "react";
import CreateCounterForm from './components/CreateCounterForm'
import Counters from './components/Counters'

function App() {
  const [addCounter, setAddCounter] = useState(false);
  const [counters, setCounters] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  return (
    <>
      <header>
        <h1>Daily Life Tracker</h1>
        <p>Track Your Daily Activities With Custom Counters</p>
      </header>
      {!addCounter ? (
        <button onClick={()=>setAddCounter(true)}>Add New Counter</button>
      ) : (
        <CreateCounterForm onSubmit={() => setAddCounter(false)} counters={counters} />
      )}
      {counters.length > 0 && (
        <Counters />
      )}
    </>
  )
}

export default App