import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Nav from './components/Nav/Nav'
import Routing from './routes/Routing'
import {useState} from 'react'
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '');
  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  }
  return (
    <div id='app' data-theme={theme}>
      <Nav toggleTheme={toggleTheme} />
      <Routing />
    </div>
  )
}

export default App
