import './App.css';
import Dashboard from './pages/Dashboard';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {

  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div>
      <NavBar searchQuery={selectedCompany} setSearchQuery={setSelectedCompany} />
      <Dashboard />
    </div>
  );
}

export default App;
