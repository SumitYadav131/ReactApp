import logo from './logo.svg';
import './App.css';
import NameList from './components/NameList';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      <ErrorBoundary>
      <Hero heroname='superman' />
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroname='batman' />
      </ErrorBoundary>
      
      <ErrorBoundary>
      <Hero heroname='joker' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
