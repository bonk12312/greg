import { useState } from 'react';
import EntryPage from './components/EntryPage';
import GregUniverse from './components/GregUniverse';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered ? (
        <EntryPage onEnter={() => setEntered(true)} />
      ) : (
        <GregUniverse />
      )}
    </>
  );
}

export default App;
