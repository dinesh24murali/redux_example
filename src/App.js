// import logo from './logo.svg';
// import './App.css';
import IncrementerContainer from './containers/IncrementerContainer';
import AppProvider from './store/store';

function AppWrapper() {
  return (
    <div className="App">
      <IncrementerContainer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  );
}

export default App;
