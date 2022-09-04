import { DarkMode } from '@chakra-ui/react';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <>
    <DarkMode>
      <Home/>
    </DarkMode>
    </>
  );
}

export default App;