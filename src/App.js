import NavBar from './components/NavBar';
import InfoPanel from './components/InfoPanel';
import './App.css';
import FootNav from './components/FootNav';
import { useState } from 'react';

function App() {

  const screenConfig = useState(0)

  return (
    <div>
      <NavBar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
