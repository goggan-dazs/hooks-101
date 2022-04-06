import { createContext } from 'react';
import './App.css';
import ClickMe from './components/clickMe';

const moods = {
  happy: '😁',
  sad: '😞',
  setting: {},
  theme: {}
}

export const MoodContext = createContext(moods)

function App() {
  return (
    <MoodContext.Provider value={moods.happy}>
    <div className="App">
     <h1>Hi there Hooks</h1>
     <ClickMe />
    </div>
    </MoodContext.Provider>
  );
}



export default App;
