import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <ErrorBoundary>
      <Hero heroname='superman' />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroname='batman' />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroname='joker' />
      </ErrorBoundary> */}

      {/* <ClickCounter name='Abhishek' />
      <HoverCounter name='Abhishek' /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo /> */}

      {/* <Counter render={(count,increamentCount)=>(
        <ClickCounterTwo count={count} increamentCount={increamentCount} />
      )} /> */}

      <Counter>
        {(count,increamentCount)=>(
        <ClickCounterTwo count={count} increamentCount={increamentCount} />)}
      </Counter>

      <Counter>
        {(count,increamentCount)=>(
        <HoverCounterTwo count={count} increamentCount={increamentCount} />)}
      </Counter> 

    </div>
  );
}

export default App;
