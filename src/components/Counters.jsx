import Counter from './Counter';

export default function Counters({ counters, onDelete, onCount }) {
  return (
    <div class="counters">
      {counters.map(counter => (
        <Counter
          key={counter.id}
          id={counter.id}
          name={counter.name}
          increment={counter.increment}
          count={counter.count}
          onDelete={onDelete}
          onCount={onCount}
        />
      ))}
    </div>
  );
}