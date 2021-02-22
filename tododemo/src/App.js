import './App.css';
import Header from './components/header';
import ListTask from './components/listtask'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <ListTask/>
        
      </div>
    </div>
  );
}

export default App;
