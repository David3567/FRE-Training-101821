import './App.css';
import Counter, { CounterFn } from './components/Counter/Counter';

function App() {
  return (
    <>
      <Counter title="Counter"></Counter>
      <CounterFn title="CounterFn" />
    </>
  );
}

export default App;
